---
sidebar_position: 4
---

# 계정

* 계정 API

### 회원가입 ( /api/account/register )

#### Request

* 필수 값
    * id
    * pw
    * email

```json
{
  "id": "사용할 아이디",
  "pw": "사용할 비밀번호",
  "region": "GW || GG || GN || GB || DG || IC || JN || JB || JJ || CN || CB || US || GJ",
  "email": "이메일 (ex.test@gmail.com)",
  "phone": "핸드폰 번호 (ex. 01098765432)"
}
```

#### Response

```json
{
  "status": 201,
  "message": "생성 및 업데이트",
  "data": "입력한 아이디"
}
```

#### Response - 실패

- [아이디 중복](../statusCode.md#id-중복)
- [이메일 중복](../statusCode.md#e-mail-중복)

### 사용자 정보 ( /api/account/info )

#### Request

* 없음

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
    "status": "pending || approve || reject",
    "isAuth": false,
    "isUsed": true,
    "role": "master || admin || user",
    "region": "GW || ...",
    "email": "이메일",
    "phone": "핸드폰 번호",
    "unusedReason": "미사용 사유",
    "rejectReason": "반려 사유",
    "createUser": "해당 계정 생성한 계정의 아이디",
    "lastDate": "마지막 로그인",
    "createDate": "생성일 (ex. 2025-03-18 16:25:24)",
    "updateDate": "수정일 (ex. 2025-03-18 16:25:24)"
  }
}
```

#### Response - 실패

- [없는 계정 요청](../statusCode.md#없는-계정-요청)

### 비밀번호 확인 ( /api/account/pw/check )

#### Request

* 필수 값
    * currentPassword

```json
{
  "currentPassword": "현재 비밀번호"
}
```

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": true
}
```

```json
{
  "status": 200,
  "message": "성공",
  "data": false
}
```

### 비밀번호 변경 ( /api/account/pw/edit )

#### Request

* 필수 값
    * currentPassword
    * newPassword

```json
{
  "currentPassword": "현재 비밀번호",
  "newPassword": "변경할 비밀번호"
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

- [계정 정보 불일치](../statusCode.md#계정-정보-불일치)

### 계정 찾기 - 아이디/비밀번호 ( /api/account/find/type?site=siteName\&email= )

#### Request

* 필수 값
    * type
        * id 또는 pw
    * site
        * 쿼리스트링
        * ex. domfam
    * email
        * 쿼리스트링

#### Response

* 메일 전송

```json
{
  "status": 200,
  "message": "성공",
  "data": ""
}
```

#### Response - 실패

- [없는 계정 요청](../statusCode.md#없는-계정-요청)