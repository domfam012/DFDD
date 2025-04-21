---
sidebar_position: 2
---

# Router

## 개요

pages 폴더명을 기반으로 라우팅 설정을 담당하는 파일이다.

## 파일 경로

src > app > router.jsx

## routeList. jsx

pages 폴더명과 파일명이 route path와 일치하게 개발을 진행한다.

ex) pages > board > Detail.jsx => localhost:3000/board/detail

라우팅은 userType 별로 접근 권한이 다를 수 있기 때문에 roles로 분기 처리한다.

```js
// route 권한을 roles로 변경함 roles 배열에 들어있는 userType만 접근 가능함
const RouteList = [
  { path: '/auth/signin', element: <Login />, roles: [] }, // 로그인
  { path: '/auth/signup', element: <Membership />, roles: [] }, // 회원가입
  { path: '/auth/signup-complete', element: <MembershipComplete />, roles: [] }, // 회원가입 완료
  { path: '/auth/find-id', element: <FindAccount />, roles: [] }, // 아이디 찾기
  { path: '/auth/find-password', element: <FindAccount />, roles: [] }, // 비밀번호 찾기

  // 게시판 관리 > 공지사항 관리
  { path: '/board/notice', element: <Notice />, roles: ['user', 'admin', 'master'] },
  {
    path: '/board/notice/write/:id?',
    element: <NoticeWrite />,
    roles: ['user', 'admin', 'master']
  },
  {
    path: '/board/notice/detail/:id?',
    element: <NoticeDetail />,
    roles: ['user', 'admin', 'master']
  },

  //  데이터 테이블 > AgGrid
  { path: '/data-table/ag-grid', element: <AgGrid />, roles: ['user', 'admin', 'master'] },

  // 마이 페이지
  { path: '/mypage', element: <MyPage />, roles: ['user', 'admin', 'master'] },
  {
    path: '/mypage/change-password',
    element: <ChangePassword />,
    roles: ['user', 'admin', 'master']
  },

  // 테스트
  { path: '/test/dialog', element: <Dialog />, roles: ['user', 'admin', 'master'] }
];
```

컴포넌트명은 파스칼 케이스를 사용하지만 url path는 -를 사용하여 케밥 케이스를 사용하는 것이 가독성, SEO 최적화, 웹 접근성, 사용성에 더 적합한 방법이라고 한다.

- 검색엔진에게 단어를 명확히 전달해 SEO에 좋고,
- 스크린 리더에게도 자연스럽게 전달돼 접근성이 좋으며,
- 사용자와의 상호작용에서도 가독성과 사용성을 높인다.
