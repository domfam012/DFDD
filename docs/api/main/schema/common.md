---
sidebar_position: 1
---

# 참고사항

* API 참고사항

* 모든 요청에 대해 객체 형식 유지 필요 (모든 키 값이 존재해야 함)
* 필수 값이 아닌 string 형식의 데이터만 null 또는 "" 가능
* ~~boolean의 경우 true \|\| false로 지정하여 요청 필요~~
    * boolean 형식의 데이터를 null 로 요청할 경우, 서버에서 기본 값 처리 (2025.03.26)

      | 데이터 | 기본 값 |
            | --- | ---- |
      | isUsed | true |
      | isAuth | true |
      | isDeleted | false |
      | isFixed | false |
* 고정 게시글 (시나리오에 따라 수정)
    * 최대 개수 3개로 지정
    * 생성/수정 API
        * 3개가 초과하면 기존 고정 게시글 중 오래된 게시글 고정 해제 ( `isFixed = false` )
    * 목록 API
        * 고정 게시글에도 검색 조건 적용됨