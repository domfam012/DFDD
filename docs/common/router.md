---
sidebar_position: 4
---

# Router

## 개요

react-router-dom 라이브러리를 통해 페이지 라우팅을 한다.

크게 로그인 여부와 사용자의 권한 별로 라우팅을 처리한다.

## 파일 경로

```text
src > app > router.jsx
src > app > routerList.jsx
```

## routeList.jsx

pages 폴더명과 파일명이 route path와 일치하게 개발을 진행한다.

ex) pages > board > Detail.jsx => localhost:3000/board/detail

라우팅은 userType 별로 접근 권한이 다를 수 있기 때문에 roles로 분기 처리한다.

```js
/**
 * router와 menu를 동시에 처리하는 배열
 * ogData, path, element, roles는 라우터, 메뉴 모두 필요한 속성이고 menu는 menu가 필요한 곳에만 추가
 * 1depth의 roles는 router 접근 자체를 막는 role이고, menu > subMenus > roles는 메뉴에 노출 여부를 결정
 */
export const ROUTE_LIST = [
  {
    ogData: { url: '', description: '', title: '로그인' },
    path: '/auth/signin',
    element: <Signin />,
    roles: []
  },
  {
    ogData: { url: '', description: '', title: '작성 | 공지사항 | 게시판 관리' },
    path: '/post/notice/write/:id?',
    element: <NoticeWrite />,
    roles: ['user', 'admin', 'master']
  },
  {
    ogData: { url: '', description: '', title: '상세 | 공지사항 | 게시판 관리' },
    path: '/post/notice/detail/:id?',
    element: <NoticeDetail />,
    roles: ['user', 'admin', 'master']
  },
  {
    ogData: { url: '', description: '', title: '공지사항 | 게시판 관리' },
    path: '/post/notice',
    element: <Notice />,
    roles: ['user', 'admin', 'master'],
    menu: {
      menu: '게시판 관리',
      subMenus: [{ menu: '공지사항', path: '/post/notice', roles: ['user', 'admin', 'master'] }]
    }
  }
];

/**
 * ROUTE_LIST에서 현재 로그인한 사용자의 역할에 맞는 메뉴 리스트를 반환 (수정 금지)
 * @param {*} role
 * @returns menuList
 */
export const getMenuList = role => {
  const menuMap = new Map();

  for (const route of ROUTE_LIST) {
    const { menu: menuGroup, roles: routeRoles } = route;

    if (!menuGroup || !routeRoles.includes(role)) continue;

    const { menu: groupName, subMenus } = menuGroup;

    if (!menuMap.has(groupName)) {
      menuMap.set(groupName, {
        menu: groupName,
        subMenus: []
      });
    }

    for (const subMenu of subMenus) {
      if (!subMenu.roles.includes(role)) continue;

      menuMap.get(groupName).subMenus.push({
        menu: subMenu.menu,
        path: subMenu.path.replace(/:.*\?$/, '')
      });
    }
  }

  return [...menuMap.values()];
};
```

:::tip
컴포넌트명은 파스칼 케이스를 사용하지만 url path는 -를 사용하여 케밥 케이스를 사용하는 것이 가독성, SEO 최적화, 웹 접근성, 사용성에 더 적합한 방법이다.
:::
