---
sidebar_position: 2
---

# 게시판 등록/수정

## 개요

게시판 등록 또는 수정하는 페이지다.

게시판 등록과 수정 페이지는 같은 컴포넌트를 사용한다.

## 파일 경로

```text
src > components > post > write > PostWrite.jsx
```

## 게시판 컴포넌트

### 로직 변경

게시판 목록과 마찬가지로 기존 컴포넌트에서 처리하던 로직을 페이지에서 처리하는 것으로 변경했다.

### 게시판 등록/수정 예제 코드

다음은 게시판 등록/수정에서 페이지의 예제 코드이다.

```js
// pages/notice/Write.jsx
const NoticeWrite = () => {
  ...
  return (
    <Section>
      <BreadCrumbsBox />
      <form onSubmit={formik.handleSubmit}>
        <PostWrite boardType={boardType} formik={formik} setSelectedContent={setSelectedContent} />
        <PostWriteAction
          boardType={boardType}
          formik={formik}
          isEditMode={isEditMode}
          selectedContent={selectedContent}
          setDeleteFileIds={setDeleteFileIds}
          fetchPostCreateOrEdit={fetchPostCreateOrEdit}
        />
      </form>
    </Section>
  );
};
```

PostWrite, PostWriteAction 컴포넌트에서는 prop으로 전달받은 데이터를 단순 노출하거나, 작성된 상태를 변경하는 정도의 로직만 처리한다.

나머지 API 호출, 유효성 검사 등의 로직은 화면에서 직접 관리한다.
