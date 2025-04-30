---
sidebar_position: 7
---

# 약관

* 약관 API

### 약관 목록 ( /api/terms/list )

#### Request

* 없음

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": [
    {
      "termsNo": 1,
      "category": "collection",
      "version": "1.0.0",
      "title": "개인정보 수집 및 이용"
    },
    {
      "termsNo": 2,
      "category": "delegation",
      "version": "1.0.0",
      "title": "개인정보 취급 위탁 동의"
    }
  ]
}
```

### 약관 상세 ( /api/terms/detail?category= )

#### Request

* 필수 값
    * category
        * 쿼리 스트링
            * collection
                * 개인정보 수집 및 이용
            * delegation
                * 개인정보 취급 위탁 동의
            * TBD...

#### Response

```json
{
  "status": 200,
  "message": "성공",
  "data": {
    "termsNo": 1,
    "category": "collection",
    "version": "1.0.0",
    "title": "개인정보 수집 및 이용",
    "content": "<p>회사는 다음과 같은 목적으로 개인정보를 수집 및 이용합니다.</p><ul><li><strong>수집 항목:</strong> 이름, 이메일 주소, 휴대전화 번호</li><li><strong>수집 목적:</strong> 회원 가입, 서비스 제공, 고객 상담 및 불만 처리</li><li><strong>보유 및 이용 기간:</strong> 회원 탈퇴 시까지 또는 관련 법령에 따른 보관 기간까지</li></ul><p><em>※ 위 개인정보 수집 및 이용에 동의하지 않으실 경우, 서비스 이용에 제한이 있을 수 있습니다.</em></p>",
    "createDate": "2025-03-26 16:04:19",
    "updateDate": null
  }
}
```