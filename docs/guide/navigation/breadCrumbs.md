---
sidebar_position: 1
---

# BreadCrumbs

## 개요

Header에서 사용 중인 menuList를 기반으로 1depth, 2depth를 가지는 BreadCrumbsBox 컴포넌트이다.

1depth는 header 메뉴와 동일하며, 1depth에 따라 2depth 드롭다운 선택지가 달라진다.

선택된 드롭다운 value는 router 기반으로 현재 location pathname에 따라 자동으로 분기 처리가 되어있어 사용할 페이지에서 컴포넌트만 호출하면 된다. (별도로 넘겨줄 prop 없음)

## 파일 경로

```text
src > components > layout > BreadCrumbsBox.jsx
```

## BreadCrumbs 컴포넌트

페이지에서 공통으로 사용하며, 컴포넌트 내부에서 pathname을 부르기 때문에 단순 컴포넌트 호출만 해주면 된다.

### BreadCrumbs 예제 코드

```js
// 게시판 관리 > 게시판 목록
const Notice = () => {
    ...
    return (
        <Section>
            <BreadcrumbsBox />
            <BoardList tableHeader={tableHeader} boardType={boardType} />
        </Section>
    );
};
```

![breadCrumbs.png](/images/navigation/breadCrumbs.png)
