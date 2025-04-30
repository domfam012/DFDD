---
sidebar_position: 3
---

# 관리자

* 관리자 API

### 계정 생성 ( /api/admin/account/create )

#### Request

* 필수 값
    * id
    * role
    * email

```json
{
  "id": "사용할 아이디",
  "role": "master || admin || user || ...TBD",
  "region": "GW || GG || GN || GB || DG || IC || JN || JB || JJ || CN || CB || US || GJ",
  "email": "이메일 (ex.test@gmail.com)",
  "phone": "핸드폰 번호 (ex. 01098765432)"
}
```

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": {
    "id": "id001",
    "pw": "6605df08fb254c0"
  }
}
```

#### Response - 실패

- [아이디 중복](../statusCode.md#id-중복)
- [이메일 중복](../statusCode.md#e-mail-중복)

### 계정 목록 ( /api/admin/account/list )

* 반려된 계정 (reject)은 목록에 표출되지 않음

#### Request

```json
{
  "searchType": "검색어 적용 컬럼 (ex. id || ...TBD)",
  "search": "검색어",
  "orderBy": "정렬 기준 ( id || ...TBD)",
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
    "accounts": [
      {
        "accountNo": 5,
        "accountCode": "ACC.j4n2ox6r8a",
        "id": "yua_admin",
        "status": "pending || approve || unused",
        "isAuth": true,
        "role": "master || admin || user",
        "createUser": "해당 계정을 생성한 계정의 아이디",
        "lastDate": "마지막 로그인 일시 (ex. 2025-03-14 16:38:28)",
        "createDate": "생성일 (ex. 2025-03-14 15:41:16)",
        "updateDate": "수정일 (ex. 2025-03-14 15:41:16)"
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

### 계정 관리 ( /api/admin/account/manage )

* status 에 허용되는 값
    * pending
    * approve
    * reject
    * unused

#### Request

* 필수 값
    * accountCode

```json
{
  "accountCode": "계정 code (PK)",
  "role": "master || admin || user || ...TBD",
  "status": "pending || approve || reject || unused",
  "isDeleted": false,
  "reason": "미사용/반려 사유"
}
```

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": {
    "accountNo": 7,
    "accountCode": "ACC.buvfzaz8fz",
    "id": "아이디",
    "pw": null,
    "status": "pending || approve || reject || unused",
    "isAuth": false,
    "role": "master || admin || user",
    "region": "GW || ...",
    "email": "이메일",
    "phone": "핸드폰 번호",
    "reason": "미사용/반려 사유",
    "createUser": "해당 계정 생성한 계정의 아이디",
    "lastDate": "마지막 로그인",
    "createDate": "생성일 (ex. 2025-03-18 16:25:24)",
    "updateDate": "수정일 (ex. 2025-03-18 16:25:24)"
  }
}
```

### 댓글/답변 상태 변경 ( /api/admin/post/comment/postNo?status= )

#### Request

* 필수 값
    * postNo
        * path로 전달
    * status
        * 쿼리스트링
            * pending
            * processing
            * completed

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