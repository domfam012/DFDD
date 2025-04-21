---
sidebar_position: 5
---

# 에러 처리

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
