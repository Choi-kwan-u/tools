/* =========================================================
   글쓰기 도구함 — 공용 스크립트
   - 헤더/푸터 삽입 (모든 페이지 공통 내비게이션)
   - 클립보드 복사
   - 한국어 글자수/원고지 매수 계산 유틸 (Tools.count)
   - 칩(pill) 버튼 묶음, 탭, 파일 다운로드 등 공용 헬퍼
   모든 처리는 브라우저 안에서만 이루어지며 서버로 전송되지 않습니다.
   ========================================================= */
(function () {
  'use strict';

  var SITE_NAME = '글쓰기 도구함';

  /* 사이트 루트 URL: 이 스크립트의 src( .../js/common.js )에서 계산.
     하위 폴더(/tools/speech-time/)에서도 올바른 절대 경로로 링크됨. */
  var scriptEl = document.currentScript;
  var ROOT = './';
  if (scriptEl && scriptEl.src) {
    ROOT = scriptEl.src.replace(/js\/common\.js(\?.*)?$/, '');
  }

  /* ---------- 헤더 / 푸터 ---------- */
  function renderHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;
    el.innerHTML =
      '<header class="site-header">' +
        '<a class="logo" href="' + ROOT + '" aria-label="' + SITE_NAME + ' 홈으로">' + SITE_NAME + '</a>' +
      '</header>';
  }

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML =
      '<footer class="site-footer">' +
        '<p>글 쓰는 사람을 위한 계산기를 제공합니다.</p>' +
        '<p>계산 결과는 참고용이며 중요한 내용은 직접 확인하세요.</p>' +
        '<p><a href="' + ROOT + 'about.html">소개</a> · ' +
           '<a href="' + ROOT + 'privacy.html">개인정보처리방침</a> · ' +
           '<a href="' + ROOT + 'contact.html">문의</a></p>' +
        '<p>© 2026 ' + SITE_NAME + '</p>' +
      '</footer>';
  }

  /* ---------- 문자열/숫자 유틸 ---------- */
  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatNumber(n) {
    if (typeof n !== 'number' || !isFinite(n)) return '0';
    return n.toLocaleString('ko-KR');
  }

  /* 초 → "N분 N초" (1시간 이상이면 "N시간 N분 N초") */
  function formatDuration(totalSeconds) {
    var s = Math.max(0, Math.round(Number(totalSeconds) || 0));
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var sec = s % 60;
    if (h > 0) return h + '시간 ' + m + '분 ' + sec + '초';
    return m + '분 ' + sec + '초';
  }

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      var ctx = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait || 120);
    };
  }

  /* 유니코드 코드포인트 단위 글자수 (이모지 등 서러게이트 쌍 안전) */
  function codePointLength(str) {
    if (!str) return 0;
    return Array.from(str).length;
  }

  /* ---------- 한국어 글자수 / 원고지 계산 ----------
     반환값:
       withSpaces        공백 포함 글자수 (줄바꿈 문자는 제외)
       withoutSpaces     공백 제외 글자수 (모든 공백·줄바꿈 제외)
       bytesUtf8         UTF-8 바이트 수
       bytesKr           한글 2바이트 기준 바이트 수 (ASCII 1, 그 외 2)
       lines             줄 수 (줄바꿈 기준, 빈 입력은 0)
       nonEmptyLines     내용이 있는 줄 수
       paragraphs        문단 수 (= 내용이 있는 줄 수)
       sentences         문장 수 (. ! ? 。 ！ ？ 및 줄바꿈 기준)
       words             어절 수 (공백으로 구분된 덩어리)
       manuscriptLines   200자 원고지 기준 줄 수 (한 줄 20자, 문단마다 ceil(글자수/20) 합)
       manuscriptSheets  원고지 매수 = ceil(줄 수 / 10)
       manuscriptSheetsExact 원고지 매수 소수 첫째 자리 (줄 수 / 10)
       a4Pages           A4 매수(1,800자 기준, 공백 포함) 소수 첫째 자리
       a4PagesCeil       A4 매수 올림
  ------------------------------------------------------- */
  function count(text) {
    text = String(text == null ? '' : text);
    var normalized = text.replace(/\r\n?/g, '\n');
    var isEmpty = normalized.trim().length === 0;

    var withSpaces = codePointLength(normalized.replace(/\n/g, ''));
    var withoutSpaces = codePointLength(normalized.replace(/\s/g, ''));

    var bytesUtf8 = 0, bytesKr = 0;
    if (!isEmpty) {
      if (typeof TextEncoder !== 'undefined') {
        bytesUtf8 = new TextEncoder().encode(normalized).length;
      } else {
        bytesUtf8 = unescape(encodeURIComponent(normalized)).length;
      }
      var cps = Array.from(normalized);
      for (var i = 0; i < cps.length; i++) {
        bytesKr += cps[i].charCodeAt(0) < 128 ? 1 : 2;
      }
    }

    var lineArr = isEmpty ? [] : normalized.split('\n');
    var nonEmpty = lineArr.filter(function (l) { return l.trim().length > 0; });

    var sentences = 0;
    if (!isEmpty) {
      sentences = normalized
        .split(/[.!?。！？]+["'”’)\]]*\s*|\n+/)
        .filter(function (s) { return s.trim().length > 0; }).length;
      if (sentences === 0) sentences = 1;
    }

    var words = isEmpty ? 0 : normalized.trim().split(/\s+/).length;

    /* 원고지: 한 줄 20자, 문단(줄)마다 새 줄, 들여쓰기(앞뒤 공백) 무시 */
    var manuscriptLines = 0;
    for (var j = 0; j < nonEmpty.length; j++) {
      manuscriptLines += Math.ceil(codePointLength(nonEmpty[j].trim()) / 20);
    }
    var manuscriptSheets = Math.ceil(manuscriptLines / 10);
    var manuscriptSheetsExact = Math.round(manuscriptLines) / 10;

    var a4Exact = withSpaces / 1800;

    return {
      isEmpty: isEmpty,
      withSpaces: withSpaces,
      withoutSpaces: withoutSpaces,
      bytesUtf8: bytesUtf8,
      bytesKr: bytesKr,
      lines: lineArr.length,
      nonEmptyLines: nonEmpty.length,
      paragraphs: nonEmpty.length,
      sentences: sentences,
      words: words,
      manuscriptLines: manuscriptLines,
      manuscriptSheets: manuscriptSheets,
      manuscriptSheetsExact: Math.round(manuscriptSheetsExact * 10) / 10,
      a4Pages: Math.round(a4Exact * 10) / 10,
      a4PagesCeil: Math.ceil(a4Exact)
    };
  }

  /* ---------- 클립보드 복사 ----------
     copyText(text, buttonEl?) → Promise<boolean>
     buttonEl을 주면 1.5초 동안 "복사됨" 표시 후 원래 글자로 복원 */
  function copyText(text, buttonEl) {
    text = String(text == null ? '' : text);
    var done = function (ok) {
      if (buttonEl) {
        var orig = buttonEl.getAttribute('data-orig-label') || buttonEl.textContent;
        buttonEl.setAttribute('data-orig-label', orig);
        buttonEl.textContent = ok ? '복사됨 ✓' : '복사 실패';
        clearTimeout(buttonEl._copyTimer);
        buttonEl._copyTimer = setTimeout(function () { buttonEl.textContent = orig; }, 1500);
      }
      return ok;
    };
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return done(true); },
        function () { return done(fallbackCopy(text)); });
    }
    return Promise.resolve(done(fallbackCopy(text)));
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  /* ---------- 파일 다운로드 (Blob + a[download]) ---------- */
  function downloadText(filename, text, mime) {
    var blob = new Blob([text], { type: (mime || 'text/plain') + ';charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /* ---------- 칩(pill) 버튼 묶음 ----------
     HTML:
       <div class="chip-group">
         <p class="chip-group-title">속도</p>
         <div class="chips" data-name="speed">
           <button type="button" class="chip" data-value="300">보통</button>
         </div>
       </div>
     JS:
       var speed = Tools.initChips(document.querySelector('[data-name="speed"]'), function (value) {...});
       speed.value  → 현재 값,  speed.set('350') → 선택 변경(콜백 호출)
     첫 번째 칩이 기본 선택(또는 .is-active 가 붙은 칩). */
  function initChips(container, onChange) {
    if (!container) return { value: null, set: function () {} };
    var chips = Array.prototype.slice.call(container.querySelectorAll('.chip'));
    var state = { value: null };
    function select(value, silent) {
      state.value = value;
      chips.forEach(function (c) {
        var on = c.getAttribute('data-value') === String(value);
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      if (!silent && typeof onChange === 'function') onChange(value);
    }
    chips.forEach(function (c) {
      c.setAttribute('type', 'button');
      c.addEventListener('click', function () { select(c.getAttribute('data-value')); });
    });
    var initial = container.querySelector('.chip.is-active') || chips[0];
    if (initial) select(initial.getAttribute('data-value'), true);
    return {
      get value() { return state.value; },
      set: function (v) { select(v); },
      chips: chips
    };
  }

  /* ---------- 탭 ----------
     <div class="tabs" data-tabs>
       <button class="tab" data-tab="shift">시간 밀기</button> ...
     </div>
     <section class="tab-panel" data-panel="shift">...</section> */
  function initTabs(tabsEl, onChange) {
    if (!tabsEl) return { value: null, set: function () {} };
    var tabs = Array.prototype.slice.call(tabsEl.querySelectorAll('.tab'));
    var panels = Array.prototype.slice.call(document.querySelectorAll('.tab-panel[data-panel]'));
    var state = { value: null };
    function select(name, silent) {
      state.value = name;
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-tab') === name;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach(function (p) {
        p.hidden = p.getAttribute('data-panel') !== name;
      });
      if (!silent && typeof onChange === 'function') onChange(name);
    }
    tabs.forEach(function (t) {
      t.setAttribute('type', 'button');
      t.setAttribute('role', 'tab');
      t.addEventListener('click', function () { select(t.getAttribute('data-tab')); });
    });
    var initial = tabsEl.querySelector('.tab.is-active') || tabs[0];
    if (initial) select(initial.getAttribute('data-tab'), true);
    return { get value() { return state.value; }, set: function (v) { select(v); } };
  }

  /* ---------- 숫자 입력 안전 파싱 ---------- */
  function toNumber(value, fallback) {
    var n = parseFloat(String(value == null ? '' : value).replace(/,/g, '').trim());
    return isFinite(n) ? n : fallback;
  }

  /* ---------- 공개 API ---------- */
  window.Tools = {
    SITE_NAME: SITE_NAME,
    ROOT: ROOT,
    escapeHtml: escapeHtml,
    formatNumber: formatNumber,
    formatDuration: formatDuration,
    clamp: clamp,
    debounce: debounce,
    codePointLength: codePointLength,
    count: count,
    copyText: copyText,
    downloadText: downloadText,
    initChips: initChips,
    initTabs: initTabs,
    toNumber: toNumber
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { renderHeader(); renderFooter(); });
  } else {
    renderHeader();
    renderFooter();
  }
})();
