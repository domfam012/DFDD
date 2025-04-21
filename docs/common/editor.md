---
sidebar_position: 4
---

# 텍스트 에디터

## 개요

텍스트 편집 시 사용하는 텍스트 에디터 파일이다.

## 파일 경로

src > components > editor > index.jsx

## Ck Editor

현재 게시판 등록/수정/상세 모두 ckeditor를 사용하여 노출하고있다.

ckeditor설정은 editorConfig.js에서 관리하며 이미지를 올렸을 때 cdn을 태우는 로직은 util > uploadAdaptor.js 를 참고한다.

현재는 boardType을 같이 넘겨서 cdnUpload를 이용하고 있다.

## 라이선스

ckeditor5는 오픈 소스 라이선스(GPL)과 상용 라이선스 두 가지 버전이 있습니다.

### 오픈 소스 라이선스

1. 비상업적 프로젝트, 오픈소스 프로젝트 (소스 코드 전체 공개) 등에서 사용 가능
2. 커스텀하여 로고를 지우는 행위는 가능하지만 라이선스 위반 사항
3. 2023년 이후 로고를 반드시 포함하는 정책 도입

### 상용 라이선스

1. 로고 제거 가능
2. 상업적 사용 가능
