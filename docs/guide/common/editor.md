---
sidebar_position: 2
---

# 텍스트 에디터

## 개요

게시글 등록/수정 등 단순 텍스트가 아닌 경우에는 텍스트 에디터를 사용한다.
현재는 CkEditor 라이브러리를 사용 중이다.

## 파일 경로

```text
src > components > editor > index.jsx
```

## Ck Editor

- 현재 게시판 등록/수정/상세 모두 ckeditor를 사용하여 노출하고있다.
- 이미지 업로드 시 CDN url을 사용하기 위해 별도의 플러그인을 추가한다. (util > uploadAdaptor.js)

## Ck Editor 라이선스

- ckeditor5는 오픈 소스 라이선스(GPL)과 상용 라이선스 두 가지 버전이 있다.
- **현재 사용 중인 버전은 오픈 소스 라이선스이며, GPL 라이선스를 상용에서 사용 시 모든 소스코드를 오픈해야하기 때문에 상용 라이선스 구매가 필요하다.** [CkEditor Licensing](https://ckeditor.com/legal/ckeditor-licensing-options/)

### 오픈 소스 라이선스

- 비상업적 프로젝트, 오픈소스 프로젝트 (소스 코드 전체 공개) 등에서 사용 가능
- 커스텀하여 로고를 지우는 행위는 가능하지만 라이선스 위반 사항
- 2023년 이후 로고를 반드시 포함하는 정책 도입

### 상용 라이선스

- 로고 제거 가능
- 상업적 사용 가능
