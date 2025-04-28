---
sidebar_position: 3
---

# 에러 처리

## 개요

에러처리는 [Axios Instance](/docs/guide/common/api)를 통하여 공통으로 처리하는 방식과 화면 별로 직접 처리하는 방식이 있다.

API 요청 시 받는 에러 코드에 맞는 메시지를 ToastDialog로 노출한다.

## 파일 경로

```text
src > api > axios.instance.js
```

## try/catch

일관성있고 효율적인 에러처리를 위해 무분별한 try/catch문 사용을 자제한다.

현재는 api 폴더에서는 try catch 문 사용을 하지 않고 api를 호출하는 곳에서 try catch문을 사용하여 에러를 처리한다.

## 공통 에러 처리 코드

```js
export const setupInterceptors = store => {
  instance.interceptors.request.use(
    config => {
      console.log('config : ', config);
      console.debug(`request => ${config.url}`, config);
      return config;
    },
    err => {
      console.debug(`err => ${err}`);
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    response => {
      console.debug(`response => ${response.config.url}`, response);
      return response;
    },
    err => {
      switch (err.status) {
        // 서버 에러
        case 500:
          store.dispatch(
            openToastDialog({ description: '요청에 실패했습니다. 다시 시도해주세요.' })
          );
          break;
        // 클라이언트 요청 값 에러
        case 400:
          store.dispatch(openToastDialog({ description: err.response.data.message }));
          break;
        // 인증 실패 에러
        case 401:
          store.dispatch(openToastDialog({ description: err.response.data.message }));
          break;
        // 인증 실패 에러
        case 404:
          store.dispatch(openToastDialog({ description: err.response.data.message }));
          break;
        // 그 외 에러는 각 페이지에서 처리
        default:
          console.debug(`err => ${err}`);
          return Promise.reject(err);
      }
    }
  );
};
```
