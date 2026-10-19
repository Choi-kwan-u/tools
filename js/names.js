/* =========================================================
   글쓰기 도구함 — 소설 인물 이름 생성기 데이터
   window.NAME_DATA 하나만 정의합니다. (ES5, 외부 로드 없음)
   - surnames : 성씨 50개 + 가중치(실제 빈도가 높은 순서, 단위는 상대값)
   - eras     : 출생 시대 4구간 × 성별(m/f) × 앞글자(first)·뒷글자(last)
                각 글자는 { c: '글자', tags: ['분위기', ...] } 형태
                plain=평범·흔한, classic=단정·고전적, soft=부드러운, strong=강한·차가운
   - singles  : 외자 이름 풀(성별별). eras 는 그 글자가 어울리는 시대 키 목록
   모든 값은 작품 창작을 돕기 위한 참고용 조합 자료입니다.
   ========================================================= */
window.NAME_DATA = {
  version: 1,

  eraLabels: {
    era1: '1950~60년대',
    era2: '1970~80년대',
    era3: '1990~2000년대',
    era4: '2010년대 이후'
  },

  moodLabels: {
    plain: '평범·흔한',
    classic: '단정·고전적',
    soft: '부드러운',
    strong: '강한·차가운'
  },

  surnames: [
    { s: '김', w: 21.5 }, { s: '이', w: 14.7 }, { s: '박', w: 8.4 }, { s: '최', w: 4.7 }, { s: '정', w: 4.3 },
    { s: '강', w: 2.4 }, { s: '조', w: 2.1 }, { s: '윤', w: 2.1 }, { s: '장', w: 2.0 }, { s: '임', w: 1.7 },
    { s: '한', w: 1.5 }, { s: '오', w: 1.5 }, { s: '서', w: 1.5 }, { s: '신', w: 1.4 }, { s: '권', w: 1.4 },
    { s: '황', w: 1.3 }, { s: '안', w: 1.3 }, { s: '송', w: 1.3 }, { s: '류', w: 1.2 }, { s: '전', w: 1.1 },
    { s: '홍', w: 1.1 }, { s: '고', w: 1.0 }, { s: '문', w: 1.0 }, { s: '양', w: 1.0 }, { s: '손', w: 0.9 },
    { s: '배', w: 0.8 }, { s: '백', w: 0.8 }, { s: '허', w: 0.7 }, { s: '유', w: 0.6 }, { s: '남', w: 0.5 },
    { s: '심', w: 0.5 }, { s: '노', w: 0.5 }, { s: '하', w: 0.5 }, { s: '곽', w: 0.4 }, { s: '성', w: 0.4 },
    { s: '차', w: 0.4 }, { s: '주', w: 0.4 }, { s: '우', w: 0.4 }, { s: '구', w: 0.4 }, { s: '나', w: 0.3 },
    { s: '민', w: 0.3 }, { s: '진', w: 0.3 }, { s: '지', w: 0.3 }, { s: '엄', w: 0.3 }, { s: '채', w: 0.2 },
    { s: '원', w: 0.2 }, { s: '천', w: 0.2 }, { s: '방', w: 0.2 }, { s: '공', w: 0.2 }, { s: '현', w: 0.2 }
  ],

  eras: {
    /* ---------- 1950~60년대 ---------- */
    era1: {
      f: {
        first: [
          { c: '영', tags: ['plain'] }, { c: '정', tags: ['plain', 'classic'] }, { c: '순', tags: ['plain'] },
          { c: '명', tags: ['classic'] }, { c: '경', tags: ['classic'] }, { c: '옥', tags: ['plain', 'classic'] },
          { c: '춘', tags: ['plain'] }, { c: '미', tags: ['soft'] }, { c: '금', tags: ['strong'] },
          { c: '복', tags: ['plain'] }, { c: '말', tags: ['plain'] }, { c: '점', tags: ['plain'] },
          { c: '분', tags: ['plain'] }, { c: '선', tags: ['classic', 'soft'] }, { c: '숙', tags: ['plain'] },
          { c: '인', tags: ['classic'] }, { c: '성', tags: ['classic'] }, { c: '은', tags: ['soft'] },
          { c: '혜', tags: ['soft', 'classic'] }, { c: '애', tags: ['soft'] }, { c: '화', tags: ['soft'] },
          { c: '길', tags: ['strong'] }, { c: '봉', tags: ['plain'] }, { c: '덕', tags: ['classic'] },
          { c: '귀', tags: ['plain'] }, { c: '상', tags: ['strong'] }, { c: '종', tags: ['classic', 'strong'] },
          { c: '수', tags: ['plain'] }, { c: '연', tags: ['soft'] }, { c: '현', tags: ['classic'] },
          { c: '월', tags: ['soft', 'classic'] }, { c: '재', tags: ['classic'] }, { c: '광', tags: ['strong'] },
          { c: '행', tags: ['plain'] }, { c: '윤', tags: ['classic'] }, { c: '희', tags: ['soft'] }
        ],
        last: [
          { c: '자', tags: ['plain'] }, { c: '순', tags: ['plain'] }, { c: '숙', tags: ['plain'] },
          { c: '희', tags: ['plain', 'soft'] }, { c: '옥', tags: ['classic'] }, { c: '례', tags: ['classic'] },
          { c: '분', tags: ['plain'] }, { c: '란', tags: ['soft'] }, { c: '심', tags: ['classic'] },
          { c: '애', tags: ['soft'] }, { c: '임', tags: ['classic'] }, { c: '녀', tags: ['plain'] },
          { c: '남', tags: ['strong'] }, { c: '월', tags: ['soft', 'classic'] }, { c: '화', tags: ['soft'] },
          { c: '선', tags: ['classic', 'soft'] }, { c: '경', tags: ['classic', 'strong'] }, { c: '주', tags: ['classic'] },
          { c: '영', tags: ['plain'] }, { c: '미', tags: ['soft'] }, { c: '연', tags: ['soft'] },
          { c: '래', tags: ['plain'] }, { c: '덕', tags: ['classic'] }, { c: '금', tags: ['strong'] },
          { c: '봉', tags: ['plain'] }, { c: '혜', tags: ['soft'] }, { c: '원', tags: ['classic'] },
          { c: '정', tags: ['classic'] }, { c: '실', tags: ['plain', 'strong'] }, { c: '매', tags: ['soft'] },
          { c: '이', tags: ['plain', 'soft'] }, { c: '환', tags: ['strong'] }, { c: '득', tags: ['plain'] },
          { c: '향', tags: ['soft'] }, { c: '진', tags: ['strong'] }
        ]
      },
      m: {
        first: [
          { c: '영', tags: ['plain'] }, { c: '정', tags: ['classic'] }, { c: '종', tags: ['classic'] },
          { c: '병', tags: ['plain'] }, { c: '상', tags: ['strong'] }, { c: '재', tags: ['classic'] },
          { c: '성', tags: ['classic'] }, { c: '광', tags: ['strong'] }, { c: '기', tags: ['plain'] },
          { c: '명', tags: ['classic'] }, { c: '동', tags: ['plain'] }, { c: '창', tags: ['strong'] },
          { c: '순', tags: ['plain'] }, { c: '태', tags: ['strong'] }, { c: '용', tags: ['strong'] },
          { c: '승', tags: ['classic'] }, { c: '인', tags: ['classic'] }, { c: '길', tags: ['strong'] },
          { c: '경', tags: ['classic'] }, { c: '봉', tags: ['plain'] }, { c: '춘', tags: ['plain'] },
          { c: '덕', tags: ['classic'] }, { c: '원', tags: ['classic'] }, { c: '윤', tags: ['classic', 'soft'] },
          { c: '석', tags: ['strong'] }, { c: '한', tags: ['classic'] }, { c: '복', tags: ['plain'] },
          { c: '만', tags: ['strong'] }, { c: '대', tags: ['strong'] }, { c: '현', tags: ['classic'] },
          { c: '철', tags: ['strong'] }, { c: '진', tags: ['strong'] }, { c: '학', tags: ['classic'] },
          { c: '흥', tags: ['strong'] }, { c: '갑', tags: ['strong'] }, { c: '두', tags: ['plain'] },
          { c: '완', tags: ['classic'] }, { c: '규', tags: ['classic'] }, { c: '형', tags: ['classic'] },
          { c: '호', tags: ['plain'] }
        ],
        last: [
          { c: '수', tags: ['plain'] }, { c: '호', tags: ['plain'] }, { c: '식', tags: ['plain'] },
          { c: '철', tags: ['strong'] }, { c: '영', tags: ['plain'] }, { c: '근', tags: ['strong'] },
          { c: '남', tags: ['strong'] }, { c: '만', tags: ['strong'] }, { c: '환', tags: ['strong'] },
          { c: '섭', tags: ['strong'] }, { c: '열', tags: ['strong'] }, { c: '석', tags: ['strong'] },
          { c: '규', tags: ['classic'] }, { c: '배', tags: ['plain'] }, { c: '택', tags: ['classic'] },
          { c: '복', tags: ['plain'] }, { c: '기', tags: ['plain'] }, { c: '범', tags: ['strong'] },
          { c: '구', tags: ['plain'] }, { c: '봉', tags: ['plain'] }, { c: '일', tags: ['classic'] },
          { c: '재', tags: ['classic'] }, { c: '출', tags: ['plain'] }, { c: '춘', tags: ['plain'] },
          { c: '길', tags: ['strong'] }, { c: '득', tags: ['plain'] }, { c: '용', tags: ['strong'] },
          { c: '교', tags: ['classic'] }, { c: '원', tags: ['classic'] }, { c: '순', tags: ['plain'] },
          { c: '희', tags: ['soft'] }, { c: '태', tags: ['strong'] }, { c: '중', tags: ['classic'] },
          { c: '건', tags: ['strong'] }, { c: '성', tags: ['classic'] }, { c: '모', tags: ['classic'] },
          { c: '진', tags: ['strong'] }, { c: '민', tags: ['soft'] }, { c: '우', tags: ['soft'] }
        ]
      }
    },

    /* ---------- 1970~80년대 ---------- */
    era2: {
      f: {
        first: [
          { c: '은', tags: ['plain', 'soft'] }, { c: '미', tags: ['plain', 'soft'] }, { c: '지', tags: ['plain'] },
          { c: '현', tags: ['plain', 'classic'] }, { c: '정', tags: ['plain', 'classic'] }, { c: '영', tags: ['plain'] },
          { c: '선', tags: ['classic', 'soft'] }, { c: '수', tags: ['plain'] }, { c: '혜', tags: ['soft', 'classic'] },
          { c: '경', tags: ['classic'] }, { c: '민', tags: ['plain'] }, { c: '소', tags: ['soft'] },
          { c: '유', tags: ['soft'] }, { c: '진', tags: ['strong'] }, { c: '윤', tags: ['classic'] },
          { c: '주', tags: ['classic'] }, { c: '아', tags: ['soft'] }, { c: '보', tags: ['soft'] },
          { c: '세', tags: ['classic'] }, { c: '희', tags: ['soft'] }, { c: '연', tags: ['soft'] },
          { c: '나', tags: ['soft'] }, { c: '다', tags: ['soft'] }, { c: '성', tags: ['classic'] },
          { c: '명', tags: ['classic'] }, { c: '상', tags: ['strong'] }, { c: '인', tags: ['classic'] },
          { c: '예', tags: ['soft'] }, { c: '효', tags: ['classic'] }, { c: '재', tags: ['classic'] },
          { c: '승', tags: ['strong'] }, { c: '하', tags: ['soft'] }, { c: '가', tags: ['soft'] },
          { c: '서', tags: ['soft'] }, { c: '한', tags: ['strong'] }, { c: '종', tags: ['classic'] }
        ],
        last: [
          { c: '은', tags: ['plain', 'soft'] }, { c: '미', tags: ['plain', 'soft'] }, { c: '지', tags: ['plain'] },
          { c: '현', tags: ['plain'] }, { c: '정', tags: ['plain', 'classic'] }, { c: '영', tags: ['plain'] },
          { c: '선', tags: ['classic', 'soft'] }, { c: '진', tags: ['strong'] }, { c: '희', tags: ['plain', 'soft'] },
          { c: '주', tags: ['classic'] }, { c: '혜', tags: ['soft'] }, { c: '경', tags: ['classic', 'strong'] },
          { c: '아', tags: ['soft'] }, { c: '라', tags: ['soft'] }, { c: '연', tags: ['soft'] },
          { c: '름', tags: ['soft'] }, { c: '나', tags: ['soft'] }, { c: '원', tags: ['classic', 'strong'] },
          { c: '화', tags: ['soft'] }, { c: '림', tags: ['soft'] }, { c: '란', tags: ['soft'] },
          { c: '민', tags: ['plain'] }, { c: '실', tags: ['classic', 'strong'] }, { c: '애', tags: ['soft'] },
          { c: '윤', tags: ['classic'] }, { c: '성', tags: ['classic'] }, { c: '숙', tags: ['plain'] },
          { c: '옥', tags: ['classic'] }, { c: '리', tags: ['soft'] }, { c: '슬', tags: ['soft'] },
          { c: '별', tags: ['soft'] }, { c: '이', tags: ['soft'] }, { c: '유', tags: ['soft'] },
          { c: '향', tags: ['soft'] }, { c: '령', tags: ['classic', 'strong'] }, { c: '자', tags: ['plain'] },
          { c: '수', tags: ['plain'] }
        ]
      },
      m: {
        first: [
          { c: '성', tags: ['plain', 'classic'] }, { c: '훈', tags: ['strong'] }, { c: '석', tags: ['strong'] },
          { c: '민', tags: ['plain'] }, { c: '우', tags: ['soft'] }, { c: '진', tags: ['strong'] },
          { c: '정', tags: ['classic'] }, { c: '상', tags: ['strong'] }, { c: '재', tags: ['classic'] },
          { c: '영', tags: ['plain'] }, { c: '동', tags: ['plain'] }, { c: '승', tags: ['strong'] },
          { c: '준', tags: ['plain'] }, { c: '현', tags: ['plain', 'classic'] }, { c: '태', tags: ['strong'] },
          { c: '종', tags: ['classic'] }, { c: '경', tags: ['classic'] }, { c: '병', tags: ['plain'] },
          { c: '기', tags: ['plain'] }, { c: '용', tags: ['strong'] }, { c: '지', tags: ['plain'] },
          { c: '대', tags: ['strong'] }, { c: '창', tags: ['strong'] }, { c: '광', tags: ['strong'] },
          { c: '원', tags: ['classic'] }, { c: '인', tags: ['classic'] }, { c: '호', tags: ['plain'] },
          { c: '형', tags: ['classic'] }, { c: '명', tags: ['classic'] }, { c: '규', tags: ['classic'] },
          { c: '세', tags: ['classic'] }, { c: '한', tags: ['strong'] }, { c: '주', tags: ['classic'] },
          { c: '윤', tags: ['classic', 'soft'] }, { c: '철', tags: ['strong'] }, { c: '희', tags: ['soft'] },
          { c: '찬', tags: ['strong'] }, { c: '범', tags: ['strong'] }, { c: '선', tags: ['soft', 'classic'] },
          { c: '중', tags: ['classic'] }
        ],
        last: [
          { c: '훈', tags: ['strong'] }, { c: '석', tags: ['strong'] }, { c: '민', tags: ['plain', 'soft'] },
          { c: '우', tags: ['soft'] }, { c: '진', tags: ['strong'] }, { c: '호', tags: ['plain'] },
          { c: '수', tags: ['plain'] }, { c: '현', tags: ['plain', 'classic'] }, { c: '준', tags: ['plain'] },
          { c: '영', tags: ['plain'] }, { c: '철', tags: ['strong'] }, { c: '규', tags: ['classic'] },
          { c: '환', tags: ['strong'] }, { c: '혁', tags: ['strong'] }, { c: '희', tags: ['soft'] },
          { c: '섭', tags: ['strong'] }, { c: '열', tags: ['strong'] }, { c: '욱', tags: ['strong'] },
          { c: '태', tags: ['strong'] }, { c: '범', tags: ['strong'] }, { c: '원', tags: ['classic'] },
          { c: '근', tags: ['strong'] }, { c: '용', tags: ['strong'] }, { c: '재', tags: ['classic'] },
          { c: '기', tags: ['plain'] }, { c: '일', tags: ['classic'] }, { c: '주', tags: ['classic'] },
          { c: '형', tags: ['classic'] }, { c: '찬', tags: ['strong'] }, { c: '성', tags: ['classic'] },
          { c: '구', tags: ['plain'] }, { c: '건', tags: ['strong'] }, { c: '식', tags: ['plain'] },
          { c: '엽', tags: ['strong'] }, { c: '택', tags: ['classic'] }, { c: '완', tags: ['classic'] },
          { c: '하', tags: ['soft'] }, { c: '중', tags: ['classic'] }, { c: '배', tags: ['plain'] }
        ]
      }
    },

    /* ---------- 1990~2000년대 ---------- */
    era3: {
      f: {
        first: [
          { c: '서', tags: ['soft', 'plain'] }, { c: '연', tags: ['soft'] }, { c: '민', tags: ['plain'] },
          { c: '지', tags: ['plain'] }, { c: '은', tags: ['soft', 'plain'] }, { c: '하', tags: ['soft'] },
          { c: '예', tags: ['soft'] }, { c: '수', tags: ['plain'] }, { c: '유', tags: ['soft'] },
          { c: '채', tags: ['soft'] }, { c: '소', tags: ['soft'] }, { c: '다', tags: ['soft'] },
          { c: '혜', tags: ['soft', 'classic'] }, { c: '세', tags: ['classic'] }, { c: '현', tags: ['classic', 'plain'] },
          { c: '가', tags: ['soft'] }, { c: '나', tags: ['soft'] }, { c: '주', tags: ['classic'] },
          { c: '윤', tags: ['classic'] }, { c: '보', tags: ['soft'] }, { c: '아', tags: ['soft'] },
          { c: '시', tags: ['soft'] }, { c: '승', tags: ['strong'] }, { c: '정', tags: ['classic'] },
          { c: '해', tags: ['soft'] }, { c: '미', tags: ['plain'] }, { c: '재', tags: ['classic'] },
          { c: '진', tags: ['strong'] }, { c: '효', tags: ['classic'] }, { c: '선', tags: ['classic'] },
          { c: '슬', tags: ['soft'] }, { c: '성', tags: ['classic'] }, { c: '영', tags: ['plain'] },
          { c: '인', tags: ['classic'] }, { c: '규', tags: ['strong'] }, { c: '태', tags: ['strong'] },
          { c: '희', tags: ['soft'] }, { c: '한', tags: ['strong'] }
        ],
        last: [
          { c: '연', tags: ['soft'] }, { c: '현', tags: ['plain', 'classic'] }, { c: '지', tags: ['plain'] },
          { c: '민', tags: ['plain'] }, { c: '은', tags: ['soft', 'plain'] }, { c: '진', tags: ['strong'] },
          { c: '빈', tags: ['strong'] }, { c: '원', tags: ['classic'] }, { c: '희', tags: ['soft', 'plain'] },
          { c: '영', tags: ['plain'] }, { c: '주', tags: ['classic'] }, { c: '서', tags: ['soft'] },
          { c: '인', tags: ['classic'] }, { c: '린', tags: ['soft'] }, { c: '아', tags: ['soft'] },
          { c: '우', tags: ['soft'] }, { c: '혜', tags: ['soft'] }, { c: '정', tags: ['classic'] },
          { c: '수', tags: ['plain'] }, { c: '율', tags: ['soft'] }, { c: '리', tags: ['soft'] },
          { c: '비', tags: ['soft'] }, { c: '나', tags: ['soft'] }, { c: '하', tags: ['soft'] },
          { c: '솔', tags: ['soft'] }, { c: '별', tags: ['soft'] }, { c: '름', tags: ['soft'] },
          { c: '라', tags: ['soft'] }, { c: '윤', tags: ['classic'] }, { c: '슬', tags: ['soft'] },
          { c: '성', tags: ['classic'] }, { c: '유', tags: ['soft'] }, { c: '안', tags: ['soft'] },
          { c: '늘', tags: ['soft'] }, { c: '결', tags: ['strong'] }, { c: '기', tags: ['strong'] },
          { c: '경', tags: ['classic', 'strong'] }, { c: '미', tags: ['plain'] }, { c: '이', tags: ['soft'] }
        ]
      },
      m: {
        first: [
          { c: '준', tags: ['plain'] }, { c: '현', tags: ['plain', 'classic'] }, { c: '민', tags: ['plain'] },
          { c: '우', tags: ['soft'] }, { c: '호', tags: ['plain'] }, { c: '재', tags: ['classic'] },
          { c: '지', tags: ['plain'] }, { c: '동', tags: ['plain'] }, { c: '성', tags: ['classic'] },
          { c: '승', tags: ['strong'] }, { c: '태', tags: ['strong'] }, { c: '정', tags: ['classic'] },
          { c: '영', tags: ['plain'] }, { c: '상', tags: ['strong'] }, { c: '진', tags: ['strong'] },
          { c: '건', tags: ['strong'] }, { c: '도', tags: ['soft'] }, { c: '시', tags: ['soft'] },
          { c: '서', tags: ['soft'] }, { c: '유', tags: ['soft'] }, { c: '찬', tags: ['strong'] },
          { c: '인', tags: ['classic'] }, { c: '규', tags: ['classic', 'strong'] }, { c: '세', tags: ['classic'] },
          { c: '대', tags: ['strong'] }, { c: '경', tags: ['classic'] }, { c: '원', tags: ['classic'] },
          { c: '주', tags: ['classic'] }, { c: '형', tags: ['classic'] }, { c: '선', tags: ['soft', 'classic'] },
          { c: '한', tags: ['strong'] }, { c: '윤', tags: ['classic', 'soft'] }, { c: '석', tags: ['strong'] },
          { c: '기', tags: ['plain'] }, { c: '명', tags: ['classic'] }, { c: '용', tags: ['strong'] },
          { c: '종', tags: ['classic'] }, { c: '범', tags: ['strong'] }, { c: '희', tags: ['soft'] },
          { c: '창', tags: ['strong'] }
        ],
        last: [
          { c: '준', tags: ['plain'] }, { c: '현', tags: ['plain', 'classic'] }, { c: '민', tags: ['plain'] },
          { c: '우', tags: ['soft'] }, { c: '호', tags: ['plain'] }, { c: '재', tags: ['classic'] },
          { c: '훈', tags: ['strong'] }, { c: '석', tags: ['strong'] }, { c: '영', tags: ['plain'] },
          { c: '수', tags: ['plain'] }, { c: '진', tags: ['strong'] }, { c: '성', tags: ['classic'] },
          { c: '혁', tags: ['strong'] }, { c: '빈', tags: ['strong'] }, { c: '욱', tags: ['strong'] },
          { c: '원', tags: ['classic'] }, { c: '환', tags: ['strong'] }, { c: '찬', tags: ['strong'] },
          { c: '윤', tags: ['classic', 'soft'] }, { c: '서', tags: ['soft'] }, { c: '규', tags: ['classic'] },
          { c: '희', tags: ['soft'] }, { c: '결', tags: ['strong'] }, { c: '율', tags: ['soft'] },
          { c: '한', tags: ['strong'] }, { c: '범', tags: ['strong'] }, { c: '태', tags: ['strong'] },
          { c: '기', tags: ['plain'] }, { c: '형', tags: ['classic'] }, { c: '용', tags: ['strong'] },
          { c: '운', tags: ['classic'] }, { c: '열', tags: ['strong'] }, { c: '섭', tags: ['strong'] },
          { c: '겸', tags: ['classic'] }, { c: '하', tags: ['soft'] }, { c: '승', tags: ['strong'] },
          { c: '완', tags: ['classic'] }, { c: '도', tags: ['soft'] }, { c: '건', tags: ['strong'] },
          { c: '일', tags: ['classic'] }
        ]
      }
    },

    /* ---------- 2010년대 이후 ---------- */
    era4: {
      f: {
        first: [
          { c: '서', tags: ['soft', 'plain'] }, { c: '하', tags: ['soft', 'plain'] }, { c: '윤', tags: ['classic', 'plain'] },
          { c: '지', tags: ['plain'] }, { c: '아', tags: ['soft'] }, { c: '시', tags: ['soft'] },
          { c: '수', tags: ['plain'] }, { c: '채', tags: ['soft'] }, { c: '예', tags: ['soft'] },
          { c: '소', tags: ['soft'] }, { c: '다', tags: ['soft'] }, { c: '유', tags: ['soft'] },
          { c: '민', tags: ['plain'] }, { c: '은', tags: ['soft'] }, { c: '나', tags: ['soft'] },
          { c: '세', tags: ['classic'] }, { c: '연', tags: ['soft'] }, { c: '주', tags: ['classic'] },
          { c: '이', tags: ['soft'] }, { c: '리', tags: ['soft'] }, { c: '가', tags: ['soft'] },
          { c: '태', tags: ['strong'] }, { c: '보', tags: ['soft'] }, { c: '승', tags: ['strong'] },
          { c: '현', tags: ['classic'] }, { c: '라', tags: ['soft'] }, { c: '도', tags: ['soft'] },
          { c: '혜', tags: ['classic'] }, { c: '정', tags: ['classic'] }, { c: '재', tags: ['classic'] },
          { c: '사', tags: ['soft'] }, { c: '설', tags: ['soft'] }, { c: '해', tags: ['soft'] },
          { c: '율', tags: ['soft'] }, { c: '선', tags: ['classic'] }, { c: '효', tags: ['classic'] },
          { c: '여', tags: ['soft'] }, { c: '희', tags: ['soft'] }, { c: '한', tags: ['strong'] },
          { c: '규', tags: ['strong'] }
        ],
        last: [
          { c: '윤', tags: ['classic', 'plain'] }, { c: '아', tags: ['soft', 'plain'] }, { c: '연', tags: ['soft'] },
          { c: '은', tags: ['soft'] }, { c: '린', tags: ['soft'] }, { c: '율', tags: ['soft'] },
          { c: '우', tags: ['soft'] }, { c: '서', tags: ['soft'] }, { c: '원', tags: ['classic'] },
          { c: '인', tags: ['classic'] }, { c: '안', tags: ['soft'] }, { c: '현', tags: ['classic'] },
          { c: '빈', tags: ['strong'] }, { c: '나', tags: ['soft'] }, { c: '유', tags: ['soft'] },
          { c: '진', tags: ['strong'] }, { c: '민', tags: ['plain'] }, { c: '희', tags: ['soft'] },
          { c: '온', tags: ['soft'] }, { c: '하', tags: ['soft'] }, { c: '랑', tags: ['soft'] },
          { c: '이', tags: ['soft'] }, { c: '담', tags: ['soft'] }, { c: '솔', tags: ['soft'] },
          { c: '별', tags: ['soft'] }, { c: '봄', tags: ['soft'] }, { c: '빛', tags: ['strong'] },
          { c: '결', tags: ['strong'] }, { c: '음', tags: ['soft'] }, { c: '주', tags: ['classic'] },
          { c: '지', tags: ['plain'] }, { c: '리', tags: ['soft'] }, { c: '채', tags: ['soft'] },
          { c: '혜', tags: ['classic'] }, { c: '수', tags: ['plain'] }, { c: '예', tags: ['soft'] },
          { c: '라', tags: ['soft'] }, { c: '영', tags: ['plain'] }, { c: '정', tags: ['classic'] },
          { c: '경', tags: ['classic', 'strong'] }, { c: '름', tags: ['soft'] }
        ]
      },
      m: {
        first: [
          { c: '서', tags: ['soft', 'plain'] }, { c: '하', tags: ['soft', 'plain'] }, { c: '도', tags: ['soft', 'plain'] },
          { c: '시', tags: ['soft'] }, { c: '준', tags: ['plain'] }, { c: '지', tags: ['plain'] },
          { c: '이', tags: ['soft'] }, { c: '민', tags: ['plain'] }, { c: '유', tags: ['soft'] },
          { c: '주', tags: ['classic'] }, { c: '예', tags: ['soft'] }, { c: '은', tags: ['soft'] },
          { c: '현', tags: ['classic'] }, { c: '건', tags: ['strong'] }, { c: '우', tags: ['soft'] },
          { c: '승', tags: ['strong'] }, { c: '재', tags: ['classic'] }, { c: '선', tags: ['soft', 'classic'] },
          { c: '태', tags: ['strong'] }, { c: '연', tags: ['soft'] }, { c: '수', tags: ['plain'] },
          { c: '로', tags: ['soft'] }, { c: '동', tags: ['plain'] }, { c: '정', tags: ['classic'] },
          { c: '윤', tags: ['classic'] }, { c: '율', tags: ['soft'] }, { c: '한', tags: ['strong'] },
          { c: '채', tags: ['soft'] }, { c: '성', tags: ['classic'] }, { c: '진', tags: ['strong'] },
          { c: '강', tags: ['strong'] }, { c: '라', tags: ['soft'] }, { c: '리', tags: ['soft'] },
          { c: '세', tags: ['classic'] }, { c: '다', tags: ['soft'] }, { c: '호', tags: ['plain'] },
          { c: '찬', tags: ['strong'] }, { c: '온', tags: ['soft'] }, { c: '규', tags: ['strong'] },
          { c: '범', tags: ['strong'] }
        ],
        last: [
          { c: '준', tags: ['plain'] }, { c: '윤', tags: ['classic', 'plain'] }, { c: '우', tags: ['soft', 'plain'] },
          { c: '호', tags: ['plain'] }, { c: '율', tags: ['soft'] }, { c: '안', tags: ['soft'] },
          { c: '찬', tags: ['strong'] }, { c: '후', tags: ['soft'] }, { c: '한', tags: ['strong'] },
          { c: '혁', tags: ['strong'] }, { c: '원', tags: ['classic'] }, { c: '서', tags: ['soft'] },
          { c: '현', tags: ['classic'] }, { c: '재', tags: ['classic'] }, { c: '진', tags: ['strong'] },
          { c: '성', tags: ['classic'] }, { c: '민', tags: ['plain'] }, { c: '이', tags: ['soft'] },
          { c: '온', tags: ['soft'] }, { c: '훈', tags: ['strong'] }, { c: '결', tags: ['strong'] },
          { c: '빈', tags: ['strong'] }, { c: '운', tags: ['classic'] }, { c: '겸', tags: ['classic'] },
          { c: '하', tags: ['soft'] }, { c: '람', tags: ['soft'] }, { c: '솔', tags: ['soft'] },
          { c: '건', tags: ['strong'] }, { c: '유', tags: ['soft'] }, { c: '승', tags: ['strong'] },
          { c: '도', tags: ['soft'] }, { c: '주', tags: ['classic'] }, { c: '희', tags: ['soft'] },
          { c: '범', tags: ['strong'] }, { c: '환', tags: ['strong'] }, { c: '규', tags: ['classic', 'strong'] },
          { c: '완', tags: ['classic'] }, { c: '담', tags: ['soft'] }, { c: '영', tags: ['plain'] },
          { c: '석', tags: ['strong'] }
        ]
      }
    }
  },

  /* ---------- 외자 이름 풀 ---------- */
  singles: {
    m: [
      { c: '철', tags: ['strong'], eras: ['era1', 'era2'] },
      { c: '수', tags: ['plain'], eras: ['era1', 'era2'] },
      { c: '석', tags: ['strong'], eras: ['era1', 'era2'] },
      { c: '환', tags: ['strong'], eras: ['era1', 'era2'] },
      { c: '호', tags: ['plain'], eras: ['era1', 'era2', 'era3'] },
      { c: '훈', tags: ['strong'], eras: ['era2', 'era3'] },
      { c: '준', tags: ['plain'], eras: ['era2', 'era3', 'era4'] },
      { c: '현', tags: ['classic'], eras: ['era2', 'era3', 'era4'] },
      { c: '민', tags: ['plain'], eras: ['era2', 'era3', 'era4'] },
      { c: '진', tags: ['strong'], eras: ['era2', 'era3'] },
      { c: '혁', tags: ['strong'], eras: ['era3', 'era4'] },
      { c: '건', tags: ['strong'], eras: ['era3', 'era4'] },
      { c: '율', tags: ['soft'], eras: ['era3', 'era4'] },
      { c: '찬', tags: ['strong'], eras: ['era3', 'era4'] },
      { c: '한', tags: ['strong'], eras: ['era3', 'era4'] },
      { c: '빈', tags: ['strong'], eras: ['era3', 'era4'] },
      { c: '온', tags: ['soft'], eras: ['era4'] },
      { c: '결', tags: ['strong'], eras: ['era4'] },
      { c: '솔', tags: ['soft'], eras: ['era4'] },
      { c: '산', tags: ['strong'], eras: ['era4'] }
    ],
    f: [
      { c: '숙', tags: ['plain'], eras: ['era1'] },
      { c: '옥', tags: ['classic'], eras: ['era1'] },
      { c: '순', tags: ['plain'], eras: ['era1'] },
      { c: '영', tags: ['plain'], eras: ['era1', 'era2'] },
      { c: '희', tags: ['soft'], eras: ['era1', 'era2'] },
      { c: '란', tags: ['soft'], eras: ['era1', 'era2'] },
      { c: '선', tags: ['classic'], eras: ['era2'] },
      { c: '진', tags: ['strong'], eras: ['era2', 'era3'] },
      { c: '연', tags: ['soft'], eras: ['era2', 'era3', 'era4'] },
      { c: '현', tags: ['classic'], eras: ['era2', 'era3'] },
      { c: '윤', tags: ['classic'], eras: ['era3', 'era4'] },
      { c: '빈', tags: ['strong'], eras: ['era3', 'era4'] },
      { c: '솔', tags: ['soft'], eras: ['era3', 'era4'] },
      { c: '별', tags: ['soft'], eras: ['era3', 'era4'] },
      { c: '슬', tags: ['soft'], eras: ['era3'] },
      { c: '린', tags: ['soft'], eras: ['era4'] },
      { c: '율', tags: ['soft'], eras: ['era4'] },
      { c: '아', tags: ['soft'], eras: ['era4'] },
      { c: '봄', tags: ['soft'], eras: ['era4'] },
      { c: '결', tags: ['strong'], eras: ['era4'] }
    ]
  }
};
