---
sidebar_position: 1
---

# 게시판 목록

## 개요

게시판은 크게 목록, 등록/수정, 상세로 나뉜다.

## 파일 경로

src > components > table > TableContent.jsx

## 게시판 목록 예제 코드

```js
// pages/notice/index.jsx
const Notice = () => {
  const boardType = 'notice';

  // 테이블 헤더 (테이블 내 형식 및 이벤트 관리)
  const tableHeader = [
    { label: '선택', key: 'checkbox', width: '64px' },
    { label: '번호', key: 'index', width: '64px' },
    {
      label: '제목',
      key: 'title',
      width: 'auto',
      left: true,
      className: 'has-detail',
      code: 'postNo'
    },
    { label: '첨부파일', key: 'isFile', width: '108px' },
    { label: '조회수', key: 'viewCount', width: '120px' },
    { label: '등록일', key: 'createDate', width: '220px' }
  ];

  return (
    <Section>
      <PageTitle title="공지사항 관리" />
      <BoardList tableHeader={tableHeader} boardType={boardType} />
    </Section>
  );
};
```

페이지에서는 해당 게시판의 boardType과 게시판 목록 테이블에서 사용할 테이블 헤더를 결정하여 BoardList 컴포넌트에 prop으로 넘겨준다.

다음은 BoardList 컴포넌트를 간략하게 나타낸 것이다.

```js
// components/board/BoardList.jsx
const BoardList = ({ tableHeader, boardType }) => {
    ...
    // 페이지 이동 method
    const handleChangePage = pageNo => { ... };
    // 게시물 목록 조회 api
    const handleFetchList = useCallback(async() => { ... }, [searchParams, boardType]);
    // 게시물 삭제 api
    const handleDeletePost = async () => { ... };

    useEffect(() => {
        handleFetchList();
    }, [handleFetchList, searchParams]);

    return (
        ...
    )
}
```

## BoardList 핵심 로직

1. mount 시 prop으로 전달 받은 boardType으로 handleFetchList 함수를 실행한다.
2. searchParams로 handleFetchList에 보내는 body값을 관리한다.

   - useEffect의 의존성을 이용하여 **searchParams가 변할 경우 handleFetchList를 실행한다.**
   - searchParams와 boardType이 변할 때마다 handleFetchList가 실행되기 때문에 **useCallback**을 통해 handleFetchList 함수를 최적화한다.

3. handleFetchData api로 부터 응답받은 값을 fetchData라는 state로 관리한다.

이때 fetchData에 있는 값으로 **게시판 목록(TableBody)**에 데이터를 할당한다.

TableBody에 들어가는 데이터는 page에서 정의한 **tableHeader의 key값**에 따라 분기가 되어 할당된다.

현재 key의 종류는 다음과 같다.

1. index - 번호.
2. checkbox - 체크박스 아이콘.
3. preview - 미리보기 아이콘(눈)
4. isFile - 파일 아이콘
5. isUsed, status - 버튼 이벤트(클릭 이벤트가 가능한 버튼)
6. period - 시작 ~ 종료일
7. viewCount - 조회수(formatting)
8. 그 외 - 단순 값 노출

위 key값으로 분기처리가 불가능 할 경우 TableBody 컴포넌트 안에서 추가적인 분기처리가 필요하다.

이외 Pagination.jsx, TableSearchBox.jsx에서는 searchParams를 업데이트는 하는 로직으로 구성되어있다.

따라서 위에서 언급했듯이 searchParams 업데이트를 통해 handleFetchData를 다시 실행하여 새로운 데이터를 받아온다.
