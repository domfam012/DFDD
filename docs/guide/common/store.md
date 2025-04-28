---
sidebar_position: 5
---

# 전역상태관리 (store)

## 개요

Redux Toolkit을 사용하여 전역으로 상태를 관리한다.

무분별한 prop drilling을 방지하기 위해 여러 컴포넌트에서 사용하는 상태는 스토어 사용을 고려한다.

## 파일 경로

```text
src > store > slices > *.js
```

## store 폴더 구조

```json
🗂️ store
    🗂️ slices
        - common.js // common store
        - dialog.js // dialog store
        - index.js // store export
        - users.js // auth store
    - index.js
    - reducers.js
```

:::tip
스토어를 무분별하게 사용할 경우 오히려 유지보수가 힘들고 컴포넌트 재사용성 및 확장성이 떨어진다.

따라서 일반적인 경우에 상태관리는 컴포넌트에서 useState를 사용하여 컴포넌트에 종속 시키는 것이 바람직하다.
:::

## Dialog Store

전역으로 관리하는 Dialog에 대한 상태와 열고닫는 method를 관리한다.

전역으로 사용하는 Dialog는 2개이다.

- **ConfirmDialog**

  확인, 취소 버튼이 있는 일반적인 Dialog 이다. Title과 Description으로 나타낼 수 있는 공통 모달 형태이다.

  이 형태가 아닌 경우에는 별도의 다른 Dialog 컴포넌트를 생성하여 관리한다.

  ![확인/취소 다이얼로그](/images/common/delete-post-dialog.png)

- **ToastDialog**

  일정 시간이 지나면 자동으로 닫히는 Toast Dialog이다.

  ConfirmDialog와 마찬가지로 상태를 전역으로 관리하지만 다른 점은 ToastDialog는 App.jsx에서 공통으로 처리하고 있다.

  ConfirmDialog의 경우는 필요한 곳마다 컴포넌트를 불러와야 한다.

  ![토스트 다이얼로그](/images/common/toast-dialog.png)

## Users Store

사용자와 관련된 정보를 저장하는 스토어이다.

auth와 관련된 기능은 대부분의 페이지에서 사용하기 때문에 전역으로 상태 관리하는 것이 좋다.

로그인, 로그아웃 시 사용자 정보가 업데이트 되기 때문에 로그인, 로그아웃 API의 경우도 스토어에서 같이 관리하며 createAsyncThunk 함수로 사용자 상태를 비동기로 업데이트 한다.

## Common Store

특정 기능과 관련되지 않고 전반적으로 관련된 정보를 저장하는 스토어이다.

현재는 모바일 기기의 여부를 확인하는 device만 저장하고 있으나, 이와 유사한 성격의 상태를 관리하고 싶을 때 Common Store를 사용한다.
