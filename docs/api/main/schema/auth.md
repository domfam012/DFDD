---
sidebar_position: 2
---

# 인증

* 인증 API

### 로그인 ( /api/auth/login )

#### Request

* 필수 값
    * id
    * pw

```json
{
  "id": "아이디",
  "pw": "비밀번호"
}
```

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": {
    "id": "yua_master",
    "role": "master",
    "token": {
      "grantType": "bearer",
      "accessToken": "접근 토큰 값",
      "refreshToken": "갱신 토큰 값",
      "accessExpireDate": "접근 토큰 만료일 (ex. 2025-03-18 17:09:24)",
      "refreshExpireDate": "갱신 토큰 만료일 (ex. 2025-03-25 16:09:24)"
    },
    "status": "pending || approve || reject || unused",
    "message": "미사용/반려 사유"
  }
}
```

#### Response - 실패

- [없는 계정 요청](../statusCode.md#없는-계정-요청)
- [계정 정보 불일치](../statusCode.md#계정-정보-불일치)
- [로그인 불가 계정](../statusCode.md#로그인-불가-계정)

* 로그인 불가 계정 > 응답 우선순위
    1. reject
    2. unused
    3. pending
    4. approve

### 로그아웃 ( /api/auth/logout )

#### Request

* 요청 값 없음 - 서버에서 자동적으로 헤더 쿠키 확인

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": ""
}
```

### 메일 인증 - 메일 전송 ( /api/auth/mail/send?site=siteName\&email= )

#### Request

* 필수 값
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

- [이메일 중복](../statusCode.md#e-mail-중복)

### 메일 인증 - 인증번호 확인 ( /api/auth/mail/verify )

#### Request

```json
{
  "email": "이메일",
  "code": "인증 코드(번호)"
}
```

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": ""
}
```

#### Response - 실패

- [인증번호 불일치](../statusCode.md#인증번호-불일치)
- [인증 만료](../statusCode.md#인증-만료)
- [이미 인증 완료 상태](../statusCode.md#이미-인증-완료-상태)
