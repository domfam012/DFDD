---
sidebar_position: 1
---

# 로그인

## 개요

아이디/비밀번호 입력을 통해 로그인하는 페이지다.

## 파일 경로

src > pages > auth > signin > index.jsx

## 로그인 로직

로그인 로직은 스토어에서 처리한다. (src > store > slices > user.js)

```js
export const loginUser = createAsyncThunk('users/login/post', async ({ id, password }, { rejectWithValue }) => {
    try {
        const response = await instance.post('/auth/login', {
            id,
            pw: password
        });
        return response.data;
    }
    catch (error) {
        console.debug('error : ', error);
        return rejectWithValue(error.response.data);
    }
}
```

로그인 로직을 스토어에서 처리하는 이유는 로그인과 관련된 상태 관리를 전역상태 관리로 처리하고 있고 pending, fulfilled, rejected에 대한 상태 업데이트를 한번에 처리하는 것이 가능하기 때문이다.

로그인 로직의 핵심은 다음과 같다.

- 사용자로부터 id, password를 입력 받아서 /auth/login api를 호출한다.
- api는 promise 객체, 즉 pending, fulfilled, rejected 중 하나의 결과를 반환한다.
- 이 세 가지가 발생할 때 처리할 로직을 addCase에서 처리한다.

로그인을 성공하면 사용자 정보를 전역에 저장하고, 실패하면 사용자 정보를 초기화 하거나 실패한 이유 등을 저장한다.

```js
extraReducers: builder => {
  builder
    // 로그인 진행 중
    .addCase(loginUser.pending, state => {
      state.error = null;
    })
    // 로그인 실패
    .addCase(loginUser.fulfilled, (state, action) => {
      const { status, data } = action.payload;
      // 미승인 시
      if (status === 400) {
        state.isLogin = false;
        if (data.status === '반려' || data.status === '미사용' || data.status === '사용불가') {
          state.error = 'accountSuspended';
          state.stopUserReason = data.message;
        }
        state.userDetails = {
          region: null,
          userId: null,
          type: null
        };
      }
      // 로그인 성공
      if (status === 200) {
        const { id, type, region } = action.payload.data;
        state.isLogin = true;
        state.userDetails.userId = id;
        state.userDetails.region = region;
        state.userDetails.type = type;
        state.error = null;
      }
    })
    // 로그인 실패
    .addCase(loginUser.rejected, (state, action) => {
      state.error = 'invalidCredentials'; // 로그인 실패
    });
};
```

## formik

위 api에서 id와 password를 api body로 전달하였다.

id와 password를 전달하기 전에 클라이언트에서도 유효성 검사를 진행하는데, formik을 사용한다.

현재 id와 password는 필수값 여부만 스키마로 체크하고 있으며, 프로젝트에 따라 해당 스키마를 좀 더 세밀하게 설정할 필요가 있다.

id, password 변경 시 현재는 validateOnChange: true 옵션을 통해 모든 formik을 매번 재 검증을 한다.

따라서 변경 시 마다 리렌더링이 일어나고 있으니, 기획에 따라 해당 부분을 조절하여 최적화가 가능하다.
