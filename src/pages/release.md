# Release Note

## 일정

- 패치 주기 : 2주마다 한 번
- 요일 : 금요일
- 시간: 오후 4시

## 구분

| **구분**                                                                               | **설명**                                                                              |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| ![신규](https://img.shields.io/badge/%EC%8B%A0%EA%B7%9C-3CB4FF)                        | 새로운 서비스가 출시되거나, 기존 서비스와 독립적으로 동작하는 주요 기능이 추가된 경우 |
| ![기능 추가](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EC%B6%94%EA%B0%80-4CA975) | 기존 서비스 내에서 새로운 기능이 추가된 경우                                          |
| ![기능 변경](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EB%B3%80%EA%B2%BD-FFA01E) | 기존 기능이 수정되거나 동작 방식이 변경된 경우                                        |
| ![버그 개선](https://img.shields.io/badge/%EB%B2%84%EA%B7%B8%EA%B0%9C%EC%84%A0-FF6464) | 기존 기능의 오류 및 버그가 수정된 경우                                                |
| ![최적화](https://img.shields.io/badge/%EC%B5%9C%EC%A0%81%ED%99%94-8662d6)             | 기능 변경 없이 성능 개선이나 코드 최적화가 이루어진 경우                              |
| ![제거](https://img.shields.io/badge/%EC%A0%9C%EA%B1%B0-6c757d)                        | 기존 서비스의 일부 기능이 삭제되거나 지원이 중단된 경우                               |

## 버전

| **구분**    | **버전 표기** | **설명**                                                                          | **업데이트 기준**                                                                                                                                         |
| ----------- | ------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 메이저 버전 | v**X**.0.0    | 기존 버전과 호환되지 않는 변경이 포함된 주요 업데이트                             | 새로운 서비스가 출시된 경우, 기존 서비스의 핵심 기능이 완전히 변경되거나 제거된 경우, 기존 API 또는 데이터 구조가 변경되어 이전 버전과 호환되지 않는 경우 |
| 마이너 버전 | v1.**X**.0    | 기존 버전과 호환 가능한 상태에서 기능이 추가되거나 변경된 업데이트                | 새로운 기능이 추가된 경우, 기존 기능의 일부가 변경되거나 개선된 경우                                                                                      |
| 패치 버전   | v1.0.**X**    | 기존 기능을 유지한 채 사소한 수정, 버그 개선 또는 성능 최적화가 이루어진 업데이트 | 버그가 수정된 경우, 성능 개선 및 코드 최적화가 적용된 경우                                                                                                |

| **구분**                          | **변경 내용**                                                                 | **버전 표기** | **설명**                                                  |
| --------------------------------- | ----------------------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| 기능 변경                         | 기존 기능이 수정되었지만 호환성 유지                                          | 마이너        | 기능 동작 방식이 변경되었지만, 기존 방식도 유지 가능      |
| 기능 변경                         | 기존 기능이 수정되어 이전 버전과 호환되지 않음                                | 메이저        | 기존 방식이 동작하지 않음                                 |
| 기능 추가                         | 새로운 기능이 추가되었지만 기존 기능과 충돌 없음                              | 마이너        | 사용자가 기존 방식 그대로 이용 가능                       |
| 기능 추가                         | 대규모 기능 추가로 서비스 구조가 변경됨                                       | 메이저        | 전체적인 서비스 흐름이 바뀜 (예: 전체 UI 개편)            |
| 기능 추가 + 기존 기능 일부 변경   | 새로운 기능이 추가되었지만, 기존 기능의 일부 동작 방식이 변경됨               | 마이너        | 사용성이 크게 달라지지 않는다면 마이너 적용               |
| 기능 추가 + 기존 기능 필수 요구됨 | 새로운 기능이 추가되었지만, 사용자가 업데이트 후 반드시 이 기능을 사용해야 함 | 메이저        | 예: API 인증 방식 추가로 인해 기존 방식만으로는 사용 불가 |
| 버그 개선                         | 사소한 버그 수정                                                              | 패치          | 기능 변경 없이 오류만 수정됨                              |
| 버그 개선                         | 버그 수정으로 인해 일부 동작 방식이 변경됨                                    | 마이너        | 일부 기능의 동작이 바뀌어 사용자 경험에 영향              |
| 최적화                            | 성능 개선, 코드 최적화                                                        | 패치          | 기능 추가 없이 최적화만 진행                              |
| 제거                              | 일부 기능이 삭제되었지만 전체 서비스에는 영향 없음                            | 마이너        | 마이페이지 내 특정 기능 삭제 등                           |
| 제거                              | 기존 기능이 제거되어 사용자 경험에 큰 영향이 있음                             | 메이저        | 로그인 방식 변경, 핵심 기능 제거 등                       |

### [v2.2.0] 2025.04.25

![기능 추가](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EC%B6%94%EA%B0%80-4CA975)

- [useDevice hook](https://domfam.dooray.com/project/tasks/4043575254424727447)
  - 사용중인 device 정보를 가져오는 custom hook 추가
- [게시판 모바일/PC 페이지네이션 분기처리](https://domfam.dooray.com/project/tasks/4046647072163099600)
  - 모바일은 5page 까지, pc는 10개 페이지 까지 노출
- [전체 메뉴](https://domfam.dooray.com/project/tasks/4047190483186692382)
  - 1depth, 2depth 별 메뉴 로직 추가
- 반응형 작업
  - [responsive-layout](https://domfam.dooray.com/project/tasks/4042844342778885749)
  - [responsive-component](https://domfam.dooray.com/project/tasks/4046483319783140574)
  - [responsive-board](https://domfam.dooray.com/project/tasks/4046492420367334411)
  - [responsive-auth](https://domfam.dooray.com/project/tasks/4046656751290170410)

![버그 개선](https://img.shields.io/badge/%EB%B2%84%EA%B7%B8%EA%B0%9C%EC%84%A0-FF6464)

- [인증번호 발송 api 에러](https://domfam.dooray.com/project/tasks/4048170767135767938)
  - 서버 500 error 수정

![최적화](https://img.shields.io/badge/%EC%B5%9C%EC%A0%81%ED%99%94-8662d6)

- [route list & menu list 통합 처리](https://domfam.dooray.com/project/tasks/4052439265637734817)
  - router, header&sidebar menu list 동일한 상태값으로 관리
- [lint 수정 및 코드 리팩토링](https://domfam.dooray.com/project/tasks/4050921899810414537)
  - no-unused-vars 정리
  - console warning 수정 (map key)
  - README.md 수정

### [v2.1.0] 2025.04.11

![기능 추가](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EC%B6%94%EA%B0%80-4CA975)

- [Ck Editor 테이블 옵션 레이어 추가](https://domfam.dooray.com/project/tasks/4025549532554800070)
  - [웹접근성 &gt; 에디터 테이블 옵션 레이어 사용](https://domfam.dooray.com/task/view/tasks/4025549532554800070)
  - 웹 접근성 대응을 위한 editorConfig.js 옵션 추가
- 게시판 정렬 기능 추가 작업
  - [API &gt; 게시글 목록 &gt; 정렬 기준 추가](https://domfam.dooray.com/task/view/tasks/4040706148173567703)
    - 정렬(최신순/조회순) 기능 추가
    - boardType 분기 처리

![기능 변경](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EB%B3%80%EA%B2%BD-FFA01E)

- Ag Grid 댠일 행/셀 등록/수정/삭제
  - [Ag-Grid &gt; 단일 행/셀 (Single Row / Cell)](https://domfam.dooray.com/task/view/tasks/4011835836955427889)
  - 기존 트랜잭션 로직 제거, 단일 행/셀 이벤트 처리
- 계정관리 권한 변경 및 상태 변경 시나리오 개선
  - [회원 &gt; 계정관리 &gt; 회원관리 등급 설정](https://domfam.dooray.com/task/view/tasks/4023515921822718206)
- 로그인 인가 오류 상태값 추가 작업
  - [회원 &gt; 로그인 &gt; status 값에 따른 에러 문구 분기처리](https://domfam.dooray.com/task/view/tasks/4040694799122291921)

![버그 개선](https://img.shields.io/badge/%EB%B2%84%EA%B7%B8%EA%B0%9C%EC%84%A0-FF6464)

- 네비게이션 Breadcrumbs 화살표 이슈
  - [네비게이션 &gt; Breadcrumb &gt; &and;&or; 이슈 수정](https://domfam.dooray.com/task/view/tasks/4040770575644181387)
  - 메뉴 상태 변경 시 다른 메뉴 닫기 처리
- GNB 포커스 벗어났을 때 서브 레이어 안 닫힘 이슈
  - [웹접근성 &gt; GNB 포커스 벗어나면 레이어 꺼져야함](https://domfam.dooray.com/task/view/tasks/4031464816697490222)
    - 로그아웃 버튼 포커스 상태일 때 서브 레이어 닫힘 처리
    - 사이트맵 동작에 따라 알맞은 텍스트 제공 처리
- 게시판 caption 적절하지 않은 텍스트 제공 이슈
  - [웹접근성 &gt; 게시판 caption 추가](https://domfam.dooray.com/task/view/tasks/4031423577835746394)
  - [웹접근성 &gt; 게시판 &gt; caption 상세정보 추가](https://domfam.dooray.com/task/view/tasks/4037138275591965226)
    - 셀렉트 및 검색어 서식 용도 설명 개선
    - 게시판 컬럼명이 포함된 caption 텍스트 제공 처리

![최적화](https://img.shields.io/badge/%EC%B5%9C%EC%A0%81%ED%99%94-8662d6)

- 게시판 로직 분리
  - [게시판 &gt; 로직 분리](https://domfam.dooray.com/task/view/tasks/4035571154077140146)
  - 페이지 로직 처리, 컴포넌트 UI 처리
- Ag Grid 로직 분리
  - [Ag-Grid &gt; 로직 분리](https://domfam.dooray.com/task/view/tasks/4040747313050573901)
  - 페이지 로직 처리, 컴포넌트 UI 처리
- feature 브랜치 분기
  - [feature 브랜치 분기 작업](https://domfam.dooray.com/task/view/tasks/4037741796837039686)
  - core, auth, account, post, grid 모듈 단위 브랜치 구성

### [v2.0.0] 2025.03.28

![기능 추가](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EC%B6%94%EA%B0%80-4CA975)

- Ag Grid 피봇 기능 추가 : [Ag Grid](/docs/aggrid.md)
- 서버 이전 및 API 정합 : [API 요청 및 응답](https://domfam.dooray.com/wiki/3996596561546924076/4026136238183912502)
  - [코어 &gt; 서버 이전 및 API 정합](https://domfam.dooray.com/task/view/tasks/4023510133250834475)
- 라우팅별 레이아웃 지정 기능 추가
  - [코어 &gt; 레이아웃 옵션 제공](https://domfam.dooray.com/task/view/tasks/4025478212312453199)
- 회원가입 약관관리 시나리오 추가
  - [약관관리 화면 추가](https://domfam.dooray.com/task/view/tasks/4023503811453006253)

![기능 변경](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EB%B3%80%EA%B2%BD-FFA01E)

- TextInput / Password 컴포넌트 통합
  - [로그인 &gt; TextInput , Password 컴포넌트 통합](https://domfam.dooray.com/task/view/tasks/4026983797871003892)
- 페이지네이션 내 선택된 항목 시각적 표시 추가
  - [웹접근성 &gt; 페이지네이션 선택됨 표시 추가](https://domfam.dooray.com/task/view/tasks/4031414502716478793)
- 게시판 테이블 클릭 이벤트 사용 요소 변경
  - [웹접근성 &gt; 클릭 이벤트 사용 요소는 a , button 을 사용](https://domfam.dooray.com/task/view/tasks/4025472169712355446)
  - \<div> → \<Link>

![최적화](https://img.shields.io/badge/%EC%B5%9C%EC%A0%81%ED%99%94-8662d6)

- 로고 이미지 alt 텍스트 수정
  - [웹접근성 &gt; 이미지 컴포넌트 적절한 대체 텍스트 제공](https://domfam.dooray.com/task/view/tasks/4011152889068801541)
  - NipaDreams → Domfam 로고

### [v1.3.0] 2025.03.14

![기능 추가](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EC%B6%94%EA%B0%80-4CA975)

- 데이터 테이블 기능 추가 : [Ag Grid](/docs/aggrid.md)
  - Ag-Grid 컴포넌트 생성
  - 행 관련 기능 추가(선택, 접근, 정렬, 페이지네이션, 병합)
  - 열 관련 기능 추가(헤더, 고정, 그룹, 드래그, 사이즈)
  - 셀 관련 기능 추가(셀 접근, 참조 데이터, 툴팁, 텍스트 드래그)
  - 필터 관련 기능 추가(열 피터, 커스텀 필터, 플로팅 필터, 외부 필터)
  - 편집 관련 기능 추가(셀 편집, 편집취소/다시실행)
  - 내보내기 관련 기능 추가(기본 엑셀 내보내기)
  - 트랜잭션 기능 임시 적용

### [v1.2.0] 2025.02.28

![기능 추가](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EC%B6%94%EA%B0%80-4CA975)

- 페이지별 BreadCrumbs 적용 : [BreadCrumbs](/docs/navigation/breadCrumbs.md)
- 사이트맵 기능 추가 : [Sitemap](/docs/navigation/sitemap.md)
  - Router 기반 동적 메타데이터 적용 (React Helmet)

![최적화](https://img.shields.io/badge/%EC%B5%9C%EC%A0%81%ED%99%94-8662d6)

- React 빌드 도구 변경
  - React Script(CRA) => Vite
  - 라이브러리 호환성 체크
- 불필요한 코드 삭제 및 설명 주석 추가

### [v1.1.0] 2025.02.14

![기능 추가](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EC%B6%94%EA%B0%80-4CA975)

- 비밀번호 변경 기능 추가 : [비밀번호 변경](/docs/mypage/changePassword.md)
- 게시판 댓글 컴포넌트 추가 : [상세](/docs/board/detail.md)

![기능 변경](https://img.shields.io/badge/%EA%B8%B0%EB%8A%A5%EB%B3%80%EA%B2%BD-FFA01E)

- 기존 Route path 형식 변경
  - route path 폴더 구조와 동기화 처리

### [v1.0.0] 2025.02.03

![신규](https://img.shields.io/badge/%EC%8B%A0%EA%B7%9C-3CB4FF)

- React 프로젝트 초기 세팅
  - axios instance 모듈화
  - router 모듈화
  - store 모듈화
  - prettier \& eslint 설정
- 회원 기능
  - 로그인 : [로그인](/docs/account/signin.md)
  - 회원가입 : [회원가입](/docs/account/signup.md)
  - 아이디/비밀번호 찾기 : [아이디/비밀번호 찾기](/docs/account/find.md)
- 게시판 관리 기능
  - 게시판 컴포넌트 모듈화 : [목록](/docs/board/list.md) \| [등록/수정](/docs/board/edit.md) \| [상세](/docs/board/detail.md)
    - boardType별 api 호출 처리
    - Table 필터 searchParams로 관리
    - CKEditor 연동 : [CKEditor](/docs/common/editor.md)
- 공통 에러 핸들링 : [에러 처리](/docs/common/error.md)
  - axios instance interceptors 사용
- 공통 다이얼로그 : [Dialog](/docs/common/store.md)
  - 스토어에서 상태값 관리
