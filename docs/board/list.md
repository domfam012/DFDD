---
sidebar_position: 1
---

# 게시판 목록

## 개요

게시판은 데이터 구조와 관계없이 화면에 나타나는 UI가 Table 형태인 경우를 말한다.

게시판 구조는 목록, 등록/수정, 상세 페이지이다.

## 파일 경로

```text
src > components > table > TableContent.jsx
```

## 게시판 컴포넌트

### 로직 변경

기존 게시판 컴포넌트는 page에서 boardType을 prop으로 넘겨 컴포넌트에서 공통으로 처리했다.

이런 방식은 확장성이 떨어지고, 기능 추가 시 컴포넌트 복잡도가 높아진다.

이에 따라 핵심 로직은 동일하게 사용하고, 대신 비즈니스 로직을 page에서 처리하고 컴포넌트에 데이터만 넘겨주는 것으로 변경하였다.

### 게시판 목록 예제 코드

다음은 게시판을 사용하는 공지사항 페이지의 예제 코드이다.

```js
const Notice = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  // 테이블 헤더 (테이블 내 형식 및 이벤트 관리)
  const tableHeader = [
    { label: '선택', key: 'checkbox', width: '64px' },
    { label: '번호', key: 'index', width: '64px' },
    { label: '제목', key: 'title', width: '200px', left: true, code: 'postNo', className: 'title' },
    { label: '첨부', key: 'isFile', width: '80px' },
    { label: '조회수', key: 'viewCount', width: '80px' },
    { label: '등록일', key: 'createDate', width: '200px' }
  ];

  // 게시물 목록 조회 api
  const fetchPost = useCallback(async () => {
    const params = {
      boardType: 'notice', // 게시판 타입
      region: searchParams.get('region') || null, // 지역
      searchType: SEARCH_TYPE_MAP[searchParams.get('searchType')] || '', // 검색 카테고리
      search: searchParams.get('search') || '', // 검색어
      dateType: searchParams.get('dateType') || null,
      startDate: searchParams.get('startDate') || null,
      endDate: searchParams.get('endDate') || null,
      isFixed: searchParams.get('isFixed') || null,
      orderBy: SEARCH_TYPE_MAP[searchParams.get('orderBy')] || 'createDate', // 정렬 기준 (최신순 | 조회순)
      inOrder: searchParams.get('inOrder') || 'desc', // 정렬 순서 (오름차순 | 내림차순)
      pageNo: Number(searchParams.get('page')) || 1, // 페이지 번호
      pageSize: 10 // 페이지 별 노출 개수
    };
    const res = await getPostList(params);

    const mappedPost = res.data.data.posts.map(post => ({
      ...post,
      viewCount: formatCommas(post.viewCount)
    }));

    return {
      data: {
        data: {
          ...res.data.data,
          posts: mappedPost
        }
      }
    };
  }, [searchParams]);

  const { tableData, loading, error, selectedPost, setSelectedPost, handleFetchData } =
    useTableFetch({
      fetchData: fetchPost,
      dataKey: 'posts'
    });

  // 게시물 삭제 핸들러
  const handleDelete = useCallback(async () => {
    if (!selectedPost) return;
    try {
      const response = await deletePost(selectedPost);
      if (response.data.status === 201) {
        handleFetchData();
        dispatch(
          openToastDialog({
            title: '게시물 삭제 완료',
            description: '게시물을 삭제했습니다.'
          })
        );
      }
    } catch (error) {
      dispatch(
        openToastDialog({ title: '게시물 삭제 실패', description: '게시물을 삭제하지 못했습니다.' })
      );
    }
  }, [dispatch, handleFetchData, selectedPost]);

  return (
    <Section>
      <BreadCrumbsBox />
      <TableContent
        caption={'공지 게시판 목록'}
        tableHeader={tableHeader}
        tableData={tableData}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        loading={loading}
        boardType={'notice'}
      />
      <TableActions
        tableData={tableData}
        selectedPost={selectedPost}
        deletePost={handleDelete}
        boardType={'notice'}
      />
    </Section>
  );
};

export default Notice;
```

페이지 진입 시 **useTableFetch** hook을 통해 테이블 데이터를 가져온다.

다른 페이지와 다르게 게시판 목록에만 custom hook을 적용하여 fetch하는 이유는 다음과 같다.

1. 게시판 형태의 페이지가 다양하다. (공지사항, 계정관리 등)
2. 필수로 사용되는 상태 들이 동일하다. (loading, selectedPost 등)

Table Header를 구성하는 key들은 TableBody에 정의되어있다.

1. index - 번호.
2. checkbox - 체크박스 아이콘.
3. preview - 미리보기 아이콘(눈)
4. isFile - 파일 아이콘
5. isUsed, status - 버튼 이벤트(클릭 이벤트가 가능한 버튼)
6. period - 시작 ~ 종료일
7. viewCount - 조회수(formatting)
8. 그 외 - 단순 값 노출

위 key값으로 분기처리가 불가능 할 경우 TableBody 컴포넌트 안에서 추가적인 분기처리가 필요하다.

:::tip

- Table 필터는 모두 searchParams를 업데이트하여 적용한다.
- searchParams 업데이트를 통해 handleFetchData를 다시 실행하여 새로운 데이터를 받아온다. (useTableFetch > useEffect)

  :::
