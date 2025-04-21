---
sidebar_position: 1
---

# API

## 개요

api 요청의 경우 axios 라이브러리를 사용한다.

## 파일 경로

src > api > editor > axios.instance.jsx

## axios

axios instance 생성을 통해 default option을 설정한다. (baseURL, headers, timeout, withCredentials 설정 등)

axios 요청 전이나 응답 전 처리할 로직이 있다면 instance.interceptors를 사용하여 중간에 요청 및 응답을 가로챌 수 있다.

```js
// API 요청 전 공통 로직
instance.interceptors.request.use(
  config => {
    // 처리할 로직을 여기에 넣어주세요.
    return config;
  },
  err => {
    // 처리할 로직을 여기에 넣어주세요.
    return Promise.reject(err);
  }
);

// API 응답 전 공통 로직
instance.interceptors.response.use(
  response => {
    // 처리할 로직을 여기에 넣어주세요.
    return response;
  },
  err => {
    // 처리할 로직을 여기에 넣어주세요.
    return Promise.reject(err);
  }
);
```

기존 프로젝트에서는 Auth 관련 토큰을 클라이언트에서 관리하며 요청 시 마다 직접 headers에 보냈으나, http only로 쿠키를 주고 받을 경우에는 이 작업을 별도로 해줄 필요없다.

## axios interceptors

axios는 api 요청과 응답에 대한 결과를 가로채서 공통적인 로직을 처리할 수 있는 인터셉터를 제공한다.

middleware와 비슷한 개념으로 api를 요청할 때 header에 토큰을 넣는다거나 api를 응답 받기 전에 로그를 쌓고 공통적인 에러를 처리할 때 유용하다.

현재 정의된 에러 코드는 400, 401, 403, 409 등이 있다.

모든 에러 코드를 인터셉터에서 정의할 경우 특수한 경우의 에러코드를 처리할 수 없으므로 공통적으로 처리할 에러코드만 인터셉터에서 관리하는 것이 좋다.
