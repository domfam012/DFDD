---
sidebar_position: 4
---

# 텍스트 에디터

## Ck Editor

현재 게시판 등록/수정/상세 모두 ckeditor를 사용하여 노출하고있다.

ckeditor설정은 editorConfig.js에서 관리하며 이미지를 올렸을 때 cdn을 태우는 로직은 util > uploadAdaptor.js 를 참고한다.

현재는 boardType을 같이 넘겨서 cdnUpload를 이용하고 있다.

**# ckeditor의 경우 package.json에 명시된 세 가지 dependencies를 그대로 사용해야 하며, 버전이 서로 다르거나 업데이트 할 경우 유료버전으로 넘어가며 에러가 발생할 수 있음에 주의한다.**

**#** **추가적으로 현재 상세보기에서 ckeditor의 readOnly 모드로 노출 중이라서 에디터 기능을 쓰지않아도 ckeditor 컴포넌트를 써야함. 고도화 시 해당부분 리팩토링 가능한지 검토 필요.**
