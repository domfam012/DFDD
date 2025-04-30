---
sidebar_position: 5
---

# 파일

* 파일 API

### 에디터 파일 업로드 ( /api/file/upload/editor )

#### Request

* 단일 파일 업로드
* 데이터 형식
    * form-data
* 키 값
    * file

#### Response

```json
{
  "status": 201,
  "message": "생성 및 업데이트",
  "data": "https://domfam-core.s3.ap-northeast-2.amazonaws.com/dev/2025/editor/2025-03-18/3d1e0b963e5c40c.jpeg"
}
```