---
sidebar_position: 2
---

# 게시판 등록/수정

게시판 등록과 수정 페이지는 같은 컴포넌트를 사용한다.

다음은 게시판 등록/수정 예제이다.

```js
// pages/notice/Write.jsx
const NoticeWrite = () => {
  const boardType = 'notice';
  return (
    <Section>
      <PageTitle title="공지사항 관리" />
      <BoardWrite boardType={boardType} />
    </Section>
  );
};
```

게시판 목록 페이지보다 간단하다. BoardWrite 컴포넌트에 prop으로 boardType만 넘겨주면 page에서는 할 일이 없다.

다음은 BoardWrite 컴포넌트를 간략하게 나타낸 것이다.

```js
// components/board/BoardWrite.jsx
const BoardWrite =({ boardType }) => {
    ...
    const { id } = useParams();
    const [isEditMode, setIsEditMode] = useState(false); // 수정 모드
    ...
    // 게시물 상세 조회 API
    const fetchPostDetail = useCallback(async ()=>{ ... }, [formik, id]);
    // 게시물 등록/수정 API
    const fetchPostCreateOrEdit = async () => { ... };

    useEffect(()=>{
        if(id) {
            setIsEditMode(true);
            fetchPostDetail();
        }
    }, [id, fetchPostDetail])
}
```

BoardWrite 컴포넌트는 등록/수정 공통으로 사용하기 때문에 등록/수정 여부를 동적 라우팅을 통해 판단한다.

id 값이 들어있을 경우 (ex: /notice/write/32) 수정으로 판단하여 isEditMode를 true로 바꾸고 id값에 해당하는 상세 데이터를 불러온다.

이 외 파일 첨부, 파일 삭제, 파일 FormData 변환, formik 등 form 업데이트와 저장과 관련된 로직 등을 관리한다.
