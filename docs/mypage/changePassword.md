---
sidebar_position: 1
---

# 비밀번호 변경

## 파일 경로

src > pages > myPage > changePassword > index.jsx

## 비밀번호 변경 로직

비밀번호 변경 로직은 페이지에서 처리한다.
비밀번호 변경 로직의 핵심은 다음과 같다.

- 현재 사용 중인 비밀번호를 입력하여 검증한다.
- 검증 후 새로운 비밀번호를 입력한다.

```js
const handleBlur = async () => {
  try {
    const { data } = await checkAccountPw(formik.values.prevPassword);
    console.log(data);
    if (data.data) {
      setErrorInfo({ error: false, message: '' });
    } else {
      setErrorInfo({ error: true, message: '기존 비밀번호를 확인해주세요' });
    }
  } catch (e) {
    console.error(e);
  }
};

const editPassword = async () => {
  try {
    const response = await editAccountPw({
      currentPassword: formik.values.prevPassword,
      newPassword: formik.values.newPassword
    });
    if (response.status === 200) {
      dispatch(
        openToastDialog({
          title: '비밀번호 변경 완료',
          description: '비밀번호가 변경되었습니다.'
        })
      );
      dispatch({ type: 'users/logout/fulfilled' });
    }
  } catch (e) {
    dispatch(
      openToastDialog({
        title: '비밀번호 변경 실패',
        description: '비밀번호 변경에 실패했습니다. 다시 시도해주세요.'
      })
    );
  }
};
```
