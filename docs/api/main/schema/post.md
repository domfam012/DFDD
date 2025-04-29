---
sidebar_position: 6
---

# 게시판

* 게시판, 댓글 API

### 게시글 목록 ( /api/post/list )

* 고정 게시글이 있는 경우
    1. 조건에 맞는 고정 게시글 먼저 정렬 후,
    2. 조건에 맞는 일반 게시글 정렬해서 응답
* 고정 게시글이 없는 경우
    1. 조건에 맞는 게시글 정렬해서 응답

#### Request

* 필수 값
    * boardType

```json
{
  "boardType": "notice || question || event || education || ...TBD",
  "region": "GW || GG || GN || GB || DG || IC || JN || JB || JJ || CN || CB || US || GJ",
  "searchType": "검색어 적용 컬럼 (title || content || ...TBD)",
  "search": "검색어",
  "dateType": "날짜 검색 적용 컬럼 (createDate || ...TBD)",
  "startDate": "날짜 검색 시작일 (ex. 2025-01-01)",
  "endDate": "날짜 검색 종료일 (ex. 2025-12-31)",
  "isFixed": true,
  "orderBy": "정렬 기준 (createDate (기본값) || postNo || viewCount || title || ...TBD)",
  "inOrder": "DESC || desc || ASC || asc",
  "pageNo": 1,
  "pageSize": 10
}
```

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": {
    "posts": [
      {
        "postNo": 1,
        "postCode": "PT.okm37ag816",
        "boardType": "notice || question || event || education || ...TBD",
        "title": "제목",
        "isFixed": true,
        "commentStatus": null,
        "viewCount": 2,
        "region": "GW || GG || GN || GB || DG || IC || JN || JB || JJ || CN || CB || US || GJ",
        "isFile": true,
        "isComment": true,
        "thumbnail": {
          "fileCode": "code (PK)",
          "fileNo": 1,
          "fileType": "thumbnail",
          "originalName": "원본 파일명",
          "displayName": "파일 표시명",
          "extension": "파일 확장자",
          "fileSize": 0,
          "url": "파일 접근 URL",
          "altText": "파일 대체 텍스트",
          "description": "파일 설명"
        },
        "createUser": "작성자 아이디",
        "createDate": "생성일 (ex. 2025-03-19 08:40:00)"
      }
    ],
    "pagination": {
      "totalCount": 1,
      "totalPage": 1,
      "pageNo": 1,
      "pageSize": 10
    }
  }
}
```

### 게시글 상세 ( /api/post/postNo )

#### Request

* **게시글 목록 조회 시, 사용했던 요청 값 동일하게 사용**
* 필수 값
    * postNo
        * path로 전달

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": {
    "post": {
      "postNo": 1,
      "postCode": "PT.okm37ag816",
      "boardType": "notice || question || event || education || ...TBD",
      "createUser": "작성자 아이디",
      "title": "제목",
      "content": "본문",
      "subContent": "요약문",
      "commentStatus": "pending || processing || completed",
      "viewCount": 0,
      "isFixed": true,
      "region": "GW || GG || GN || GB || DG || IC || JN || JB || JJ || CN || CB || US || GJ",
      "link": "관련 URL",
      "videoLink": "관련 영상 URL",
      "department": "부서",
      "subject": "주제",
      "source": "출처",
      "progress": "pending || processing || completed",
      "icons": "아이콘(TBD)",
      "startDate": "시작일 (ex. 2025-03-19 08:40:00)",
      "endDate": "종료일 (ex. 2025-03-19 08:40:00)",
      "createDate": "생성일 (ex. 2025-03-19 08:40:00)",
      "updateDate": "수정일 (ex. 2025-03-19 08:40:00)"
    },
    "files": [
      {
        "fileCode": "code (PK)",
        "fileNo": 1,
        "fileType": "attachment",
        "originalName": "원본 파일명",
        "displayName": "파일 표시명",
        "extension": "파일 확장자",
        "fileSize": 0,
        "url": "파일 접근 URL",
        "altText": "파일 대체 텍스트",
        "description": "파일 설명"
      }
    ],
    "thumbnails": [
      {
        "fileCode": "code (PK)",
        "fileNo": 1,
        "fileType": "thumbnail",
        "originalName": "원본 파일명",
        "displayName": "파일 표시명",
        "extension": "파일 확장자",
        "fileSize": 0,
        "url": "파일 접근 URL",
        "altText": "파일 대체 텍스트",
        "description": "파일 설명"
      }
    ],
    "comments": [
      {
        "commentNo": 1,
        "commentType": "comment || answer",
        "title": "제목",
        "content": "본문",
        "createUser": "작성자 아이디",
        "createDate": "생성일 (ex. 2025-03-19 09:40:00)",
        "updateDate": "수정일 (ex. 2025-03-19 09:40:00)"
      }
    ],
    "prevPost": null,
    "nextPost": {
      "postNo": 2,
      "postCode": "PT.test02",
      "title": "2번 게시글 제목"
    }
  }
}
```

#### Response - 실패

- [없는 데이터 요청](../statusCode.md#없는-데이터-요청)

### 게시글 생성 ( /api/post/create )

* 고정 게시글은 최대 3개까지 가능
* 3개가 넘은 경우
    * 기존 고정 게시글 중, 가장 오래된 고정글을 고정 해제
    * 현재 등록하려는 게시글을 고정글로 지정

#### Request

* 데이터 형식
    * form-data
* 키 값
    * 첨부파일
        * files
    * 썸네일
        * thumbnails
    * 로우 데이터
        * body
* 필수 값
    * body
        * boardType
        * title
        * content

```json
{
  "boardType": "notice || question || event || education || ...TBD",
  "title": "제목",
  "content": "본문",
  "subContent": "요약문",
  "isFixed": true,
  "region": "GW || GG || GN || GB || DG || IC || JN || JB || JJ || CN || CB || US || GJ",
  "link": "관련 URL",
  "videoLink": "관련 영상 URL",
  "department": "부서",
  "subject": "주제",
  "source": "출처",
  "progress": "pending || processing || completed",
  "icons": "TBD",
  "startDate": "시작일 (ex. 2025-01-01)",
  "endDate": "종료일 (ex. 2025-12-31)"
}
```

#### Response

```json
{
  "status": 201,
  "message": "생성 및 업데이트",
  "data": ""
}
```

### 게시글 수정 ( /api/post/edit )

* 고정 게시글은 최대 3개까지 가능
* 3개가 넘은 경우
    * 기존 고정 게시글 중, 가장 오래된 고정글을 고정 해제
    * 현재 수정하려는 게시글을 고정글로 지정

#### Request

* 데이터 형식
    * form-data
* 키 값
    * 첨부파일
        * files
    * 썸네일
        * thumbnails
    * 로우 데이터
        * body
            * fileNoListToDelete
                * 삭제할 파일의 "fileNo" 배열
            * 필수 값
                * postNo

```json
{
  "postNo": 1,
  "title": "제목",
  "content": "본문",
  "subContent": "요약문",
  "isFixed": true,
  "region": "GW || GG || GN || GB || DG || IC || JN || JB || JJ || CN || CB || US || GJ",
  "link": "관련 URL",
  "videoLink": "관련 영상 URL",
  "department": "부서",
  "subject": "주제",
  "source": "출처",
  "progress": "pending || processing || completed",
  "icons": "TBD",
  "startDate": "시작일 (ex. 2025-01-01)",
  "endDate": "종료일 (ex. 2025-12-31)",
  "fileNoListToDelete": [
    1,
    2,
    3
  ]
}
```

#### Response

```json
{
  "status": 201,
  "message": "생성 및 업데이트",
  "data": ""
}
```

#### Response - 실패

- [없는 데이터 요청](../statusCode.md#없는-데이터-요청)
- [계정 권한](../statusCode.md#계정-권한)

### 게시글 삭제 ( /api/post/postNo )

#### Request

* 필수 값
    * postNo
        * path로 전달

#### Response

```json
{
  "status": 201,
  "message": "생성 및 업데이트",
  "data": ""
}
```

#### Response - 실패

- [없는 데이터 요청](../statusCode.md#없는-데이터-요청)
- [계정 권한](../statusCode.md#계정-권한)

### 댓글/답변 생성 ( /api/post/comment/create )

#### Request

* 필수 값
    * postNo
    * commentType

```json
{
  "postNo": 1,
  "parentCode": "대댓글인 경우, 부모 댓글 code(PK)",
  "commentType": "answer || comment",
  "content": "댓글 또는 답변 내용"
}
```

#### Response

```json
{
  "status": 201,
  "message": "생성 및 업데이트",
  "data": ""
}
```

### 댓글/답변 수정/삭제 ( /api/post/comment/edit )

#### Request

* 필수 값
    * commentNo

```json
{
  "commentNo": 1,
  "content": "댓글 또는 답변 내용",
  "isDeleted": false
}
```

#### Response

```json
{
  "status": 201,
  "message": "생성 및 업데이트",
  "data": ""
}
```

#### Response - 실패

- [없는 데이터 요청](../statusCode.md#없는-데이터-요청)
- [계정 권한](../statusCode.md#계정-권한)
