---
sidebar_position: 3
---

# 아이디/비밀번호 찾기

## 개요

가입한 이메일을 통해 아이디/비밀번호를 찾는 페이지다.

## 파일 경로

```text
src > pages > auth > findAccount > index.jsx
```

## 아이디/비밀번호 찾기 로직

아이디/비밀번호 찾기 로직은 페이지에서 처리한다.

아이디/비밀번호 찾기는 같은 페이지를 쓰기 때문에 location.pathname을 통해 아이디 찾기 인지 비밀번호 찾기인지 구분하여 api를 호출한다.

```js
// URL path에 따라 비밀번호 찾기 또는 아이디 찾기 구분
const location = useLocation();
const type = location.pathname === '/auth/find-password' ? 'pw' : 'id';
```

아이디/비밀번호 찾기 로직의 핵심은 다음과 같다.

- 사용자로부터 email 을 입력 받아서 /user/find/id, /user/find/pw를 호출한다.
- 이메일로 아이디 혹은 임시 비밀번호를 전송한다.

## formik

위 api에서 email을 api body로 전달하였다.

email을 전달하기 전에 클라이언트에서도 유효성 검사를 진행하는데, formik을 사용한다.

email은 필수 값여부, 이메일 형식 검사를 스키마로 체크한다.

email 변경 시 현재는 validateOnChange: true 옵션을 통해 모든 formik을 매번 재 검증을 한다.

따라서 변경 시 마다 리렌더링이 일어나고 있으니, 기획에 따라 해당 부분을 조절하여 최적화가 가능하다.
