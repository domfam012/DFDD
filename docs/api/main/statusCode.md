---
sidebar_position: 1
---

# Response Status

* 응답 코드 및 메시지

## HTTP 상태 코드

| code | desc        |
|------|-------------|
| 2xx  | 응답 성공       |
| 4xx  | 클라이언트 요청 오류 |
| 5xx  | 서버 오류       |

## 성공

### 조회 성공

```json
{
  "status": 200,
  "message": "성공",
  "data": ""
}
```

### 생성/수정/삭제 성공

```json
{
  "status": 201,
  "message": "생성 및 업데이트",
  "data": ""
}
```

## 오류

### 유효성 검사

```json
{
  "status": 400,
  "message": "요청 값이 잘못되었습니다.",
  "url": "/api/..."
}
```

### 인증번호 불일치

```json
{
  "status": 400,
  "message": "인증번호가 일치하지 않습니다.",
  "url": "/api/..."
}
```

### 미인증

```json
{
  "status": 401,
  "message": "인증되지 않은 이메일입니다.",
  "url": "/api/..."
}
```

### 계정 정보 불일치

```json
{
  "status": 401,
  "message": "입력한 계정 정보가 올바르지 않습니다.",
  "url": "/api/..."
}
```

### 로그인 필요

```json
{
  "status": 401,
  "message": "인증이 필요합니다.",
  "url": "/api/..."
}
```

### 로그인 불가 계정

```json
{
  "status": 403,
  "message": "사용할 수 없는 계정입니다.",
  "data": {
    "id": "아이디",
    "role": "master || admin || user",
    "token": null,
    "status": "unused || pending || reject",
    "message": "미사용 처리 사유 또는 반려 사유"
  }
}
```

### 계정 권한

```json
{
  "status": 403,
  "message": "인가가 필요합니다.",
  "url": "/api/..."
}
```

### 수정 권한

```json
{
  "status": 403,
  "message": "수정 할 수 없습니다.",
  "url": "/api/..."
}
```

### ID 중복

```json
{
  "status": 409,
  "message": "중복된 ID 입니다.",
  "url": "/api/..."
}
```

### E-Mail 중복

```json
{
  "status": 409,
  "message": "중복된 Email 입니다.",
  "url": "/api/..."
}
```

### 없는 계정 요청

```json
{
  "status": 409,
  "message": "없는 계정입니다.",
  "url": "/api/..."
}
```

### 없는 데이터 요청

```json
{
  "status": 409,
  "message": "데이터가 없습니다.",
  "url": "/api/..."
}
```

### 이미 인증 완료 상태

```json
{
  "status": 409,
  "message": "이미 인증이 완료되었습니다.",
  "url": "/api/..."
}
```

### 인증 만료

```json
{
  "status": 410,
  "message": "인증번호가 만료되었습니다.",
  "url": "/api/..."
}
```

### 서버 오류

```json
{
  "status": 500,
  "message": "서버에 문제가 생겼습니다.",
  "url": "/api/..."
}
```


