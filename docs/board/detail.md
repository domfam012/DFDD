---
sidebar_position: 3
---

# 게시판 상세

## 개요

게시판 상세를 보는 페이지다.
게시판 상세 페이지 구성은 등록/수정 페이지와 동일하다.

## 파일 경로

src > components > post > detail > PostDetail.jsx

## 게시판 상세 예제 코드

```js
// pages/notice/Detail.jsx
const NoticeDetail = () => {
  const boardType = 'notice';
  return (
    <Section>
      <PageTitle title="공지사항 관리" />
      <BoardDetail boardType={boardType} />
    </Section>
  );
};
```

등록/수정과 마찬가지로 BoardDetail 컴포넌트에 prop으로 boardType만 넘겨주면 page에서는 할 일이 없다.

다음은 BoardDetail 컴포넌트를 간략하게 나타낸 것이다.

```js
// components/board/BoardDetail.jsx
const BoardDetail =({ boardType }) => {
    ...
    const { id } = useParams();
    ...
    // 게시물 상세 조회 API
    const fetchPostDetail = useCallback(async ()=>{ ... }, [id]);
    // 게시물 삭제 API
    const deletePost = useCallback(async ()=>{ ... }, [id, navigate]);

    useEffect(()=>{
        if(id) {
            setIsEditMode(true);
            fetchPostDetail();
        }
    }, [id, fetchPostDetail])
}
```

BoardDetail 컴포넌트는 mount 시 id값에 해당하는 상세 데이터를 불러온다.

boardType별 혹은 데이터 포함 여부(ex: postDetail.post.videoLink가 있으면 동영상 링크 노출)에 따라 노출할 상세 데이터를 분기하여 화면에 노출한다.
