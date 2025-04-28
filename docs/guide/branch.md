---
sidebar_position: 8
---

# Branch 관리

## 개요

브랜치를 기능별로 관리하기 위하여 브랜치 관리 전략이 필요하다.

## 브랜치 구조

현재 브랜치 구조는 다음과 같다.

기존 dev에서 모든 기능을 합쳐서 개발을 진행했으나 기능별로 나누게 되면서 현재는 사용하지 않는다.

- feature-core : 핵심적인 공통 기능
  - feature-auth : 회원가입, 아이디/비밀번호 찾기 등 auth 관련 기능
  - feature-board : 게시판 기능
  - feature-aggrid : Ag Grid 데이터 테이블 기능

```text
- main
  - dev(사용 안함)
    - feature-core
      - feature-auth
      - feature-board
      - feature-aggrid
```

:::tip pull, merge 예제

- feature-core > feature-board 가능
- feature-core > feature-auth 가능
- feature-board > feature-core 불가능
- feature-auth > feature-core 불가능

:::

## 수정 사항

수정 사항이 생길 경우 feature 브랜치에서 분기하여 새로운 브랜치를 만들고 해당 브랜치에 merge 한다.

ex) feature-board에서 딴 feature/1234 작업 후 feature/1234를 feature-board에 merge

ex) feature-core에서 딴 feature/5678 작업 후 feature/5678을 feature-core에 merge

:::tip

- 반드시 수정사항은 해당 브랜치에서 작업해야 한다.
- 게시판 기능은 무조건 feature-board에서 수정, 공통 기능은 무조건 feature-core에서 수정

:::

## 새 프로젝트 생성

새 프로젝트가 auth, board 기능을 사용하는 프로젝트일 때

1. feature-core에서 새프로젝트 branch를 생성한다.
2. 새 프로젝트 branch에 feature-auth, feature-board 브랜치를 merge 혹은 소스를 직접 이동하여 병합한다.
3. 충돌이 일어나는 특정 파일들을 주의하여 병합한다.(routerList.jsx, constants.js 등 공통 파일)
