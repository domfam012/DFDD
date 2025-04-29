---
sidebar_position: 2
---

# Table Describe

* 테이블 컬럼 설명

## const\_group\_code

* 상수 값을 코드화한 데이터의 그룹화

| Column Name  | Data Type    | Not Null | Default | Comment |
|--------------|--------------|----------|---------|---------|
| group\_code  | varchar(50)  | ✅        | -       | PK      |
| code         | varchar(50)  | ✅        | -       | 고유 코드 값 |
| name         | varchar(255) | ✅        | -       | 코드 명칭   |
| is\_used     | bool         | -        | true    | 사용 여부   |
| is\_deleted  | bool         | -        | false   | 삭제 여부   |
| create\_date | timestamp    | -        | now()   | 생성일     |
| update\_date | timestamp    | -        | -       | 수정일     |
| delete\_date | timestamp    | -        | -       | 삭제일     |

## const\_code

* 상수 값을 코드화

| Column Name  | Data Type    | Not Null | Default | Comment                                     |
|--------------|--------------|----------|---------|---------------------------------------------|
| const\_code  | varchar(50)  | ✅        | -       | PK                                          |
| group\_code  | varchar(50)  | ✅        | -       | 코드 그룹 (FK) > const\_group\_code.group\_code |
| code         | varchar(50)  | ✅        | -       | 고유 코드 값                                     |
| name         | varchar(255) | ✅        | -       | 코드 명칭                                       |
| is\_used     | bool         | -        | true    | 사용 여부                                       |
| is\_deleted  | bool         | -        | false   | 삭제 여부                                       |
| create\_date | timestamp    | -        | now()   | 생성일                                         |
| update\_date | timestamp    | -        | -       | 수정일                                         |
| delete\_date | timestamp    | -        | -       | 삭제일                                         |

## account

* 계정 정보

| Column Name           | Data Type    | Not Null | Default        | Comment                                                |
|-----------------------|--------------|----------|----------------|--------------------------------------------------------|
| account\_code         | varchar(50)  | ✅        | -              | PK                                                     |
| account\_no           | serial4      | ✅        | auto increment | 고유 번호                                                  |
| id                    | varchar(100) | ✅        | -              | 아이디                                                    |
| pw                    | text         | ✅        | -              | 비밀번호 (암호화)                                             |
| status                | varchar(20)  | -        | pending        | 계정 상태 \(pending \|\| approve \|\| reject \|\| unused\) |
| create\_account\_code | varchar(50)  | -        | -              | 계정 생성자                                                 |
| is\_auth              | bool         | -        | false          | 인증 여부                                                  |
| is\_deleted           | bool         | -        | false          | 삭제 여부                                                  |
| last\_date            | timestamp    | -        | -              | 마지막 로그인 일자                                             |
| create\_date          | timestamp    | -        | now()          | 생성일                                                    |
| update\_date          | timestamp    | -        | -              | 수정일                                                    |
| delete\_date          | timestamp    | -        | -              | 삭제일                                                    |

## user\_info

* 사용자 정보

| Column Name   | Data Type    | Not Null | Default | Comment                                |
|---------------|--------------|----------|---------|----------------------------------------|
| account\_code | varchar(50)  | ✅        | -       | PK \& FK                               |
| role          | varchar(50)  | ✅        | -       | 사용자 권한 \(master \|\| admin \|\| user\) |
| region        | varchar(100) | -        | -       | 지역                                     |
| email         | varchar(255) | -        | -       | 이메일                                    |
| phone         | varchar(50)  | -        | -       | 핸드폰 번호                                 |
| reason        | text         | -        | -       | 미사용 or 반려 사유                           |
| update\_date  | timestamp    | -        | now()   | 수정일                                    |

## user\_terms\_agree

* 선택 약관 동의 여부

| Column Name     | Data Type   | Not Null | Default        | Comment                    |
|-----------------|-------------|----------|----------------|----------------------------|
| agree\_no       | serial4     | ✅        | auto increment | PK                         |
| account\_code   | varchar(50) | ✅        | -              | FK > account.account\_code |
| terms\_no       | int4        | ✅        | -              | FK > terms.terms\_no       |
| is\_agreed      | bool        | ✅        | false          | 동의 여부                      |
| agree\_date     | timestamp   | -        | -              | 동의 일자                      |
| withdrawn\_date | timestamp   | -        | -              | 철회 일자                      |

## terms

* 약관 관리

| Column Name  | Data Type   | Not Null | Default        | Comment  |
|--------------|-------------|----------|----------------|----------|
| terms\_no    | serial4     | ✅        | auto increment | PK       |
| category     | varchar(50) | ✅        | -              | 약관 구분    |
| version      | varchar(50) | ✅        | -              | 버전       |
| title        | varchar(50) | ✅        | -              | 제목       |
| content      | text        | -        | -              | 본문       |
| is\_required | bool        | ✅        | false          | 필수 동의 여부 |
| is\_deleted  | bool        | -        | false          | 삭제 여부    |
| create\_date | timestamp   | -        | now\(\) \| 생성일 |          |
| update\_date | timestamp   | -        | -              | 수정일      |
| delete\_date | timestamp   | -        | -              | 삭제일      |

## account\_verification

* 이메일 or 핸드폰 인증 여부

| Column Name      | Data Type    | Not Null | Default        | Comment             |
|------------------|--------------|----------|----------------|---------------------|
| verification\_no | serial4      | ✅        | auto increment | PK                  |
| type             | varchar(50)  | ✅        | -              | email \|\| phone    |
| target           | varchar(255) | ✅        | -              | 인증 받을 이메일 또는 핸드폰 번호 |
| code             | varchar(50)  | ✅        | -              | 인증 코드               |
| is\_verified     | bool         | -        | false          | 인증 번호 및 인증 여부 유효시간  |
| is\_expired      | bool         | -        | false          | 만료 여부               |
| create\_date     | timestamp    | -        | now()          | 생성일                 |
| expire\_date     | timestamp    | -        | -              | 만료일                 |

## email\_history

* 이메일 전송 기록

| Column Name  | Data Type    | Not Null | Default        | Comment                                     |
|--------------|--------------|----------|----------------|---------------------------------------------|
| history\_no  | serial4      | ✅        | auto increment | PK                                          |
| category     | varchar(50)  | ✅        | -              | 분류                                          |
| sender       | varchar(255) | ✅        | -              | 발신자                                         |
| receiver     | varchar(255) | ✅        | -              | 수신자                                         |
| template     | varchar(255) | -        | -              | 사용된 S3 템플릿                                  |
| title        | text         | -        | -              | 제목                                          |
| content      | text         | -        | -              | 본문                                          |
| result       | text         | -        | -              | 발송 결과                                       |
| message      | text         | -        | -              | 발송 결과<ul><li>에러 메시지</li><li>성공 코드</li></ul> |
| is\_success  | bool         | -        | false          | 발송 성공 여부                                    |
| create\_date | timestamp    | -        | now()          | 생성일                                         |

## login\_history

* 로그인 기록

| Column Name   | Data Type    | Not Null | Default        | Comment                    |
|---------------|--------------|----------|----------------|----------------------------|
| history\_no   | serial4      | ✅        | auto increment | PK                         |
| account\_code | varchar(50)  | ✅        | -              | FK > account.account\_code |
| id            | varchar(100) | ✅        | -              | 아이디                        |
| email         | varchar(255) | ✅        | -              | 이메일                        |
| ip\_address   | varchar(50)  | ✅        | -              | 접속 IP                      |
| user\_agent   | text         | -        | -              | 접속 환경                      |
| device\_id    | varchar(100) | -        | -              | 디바이스 고유 ID                 |
| login\_date   | timestamp    | -        | now()          | 로그인 일자                     |

## token

* 로그인 토큰 정보

| Column Name           | Data Type   | Not Null | Default        | Comment                   |
|-----------------------|-------------|----------|----------------|---------------------------|
| token\_no             | serial4     | ✅        | auto increment | PK                        |
| account\_code         | varchar(50) | ✅        | -              | FK > accoun.account\_code |
| access\_token         | trext       | ✅        | -              | 접근 토큰                     |
| refresh\_token        | text        | ✅        | -              | 갱신 토큰                     |
| is\_expired           | bool        | -        | false          | 만료 여부                     |
| access\_expire\_date  | timestamp   | -        | -              | 접근 토큰 만료일                 |
| refresh\_expire\_date | timestamp   | -        | -              | 갱신 토큰 만료일                 |
| create\_date          | timestamp   | -        | now()          | 생성일                       |
| update\_date          | timestamp   | -        | -              | 수정일                       |
| expire\_date          | timestamp   | -        | -              | 만료 처리 일자                  |

## post

* 게시글

| Column Name     | Data Type | Not Null | Default        | Comment                    |
|-----------------|-----------|----------|----------------|----------------------------|
| post\_code      |           | ✅        | -              | PK                         |
| post\_no        |           | ✅        | auto increment | 고유 번호                      |
| board\_code     |           | ✅        | -              | 게시판 구분                     |
| account\_code   |           | ✅        | -              | FK > account.account\_code |
| title           |           | ✅        | -              | 제목                         |
| content         |           | ✅        | -              | 본문                         |
| sub\_content    |           | -        | -              | 요약문                        |
| comment\_status |           | -        | -              | (문의) 답변 상태                 |
| view\_count     |           | -        | 0              | 조회수                        |
| is\_fixed       | bool      | -        | false          | 상단 고정 여부                   |
| is\_deleted     | bool      | -        | false          | 삭제 여부                      |
| create\_date    | timestamp | -        | now()          | 생성일                        |
| update\_date    | timestamp | -        |                | 수정일                        |
| delete\_date    | timestamp | -        |                | 삭제일                        |

## post\_optional

* 게시글 확장 정보

| Column Name  | Data Type    | Not Null | Default | Comment                |
|--------------|--------------|----------|---------|------------------------|
| post\_code   | varchar(50)  | ✅        | -       | PKFK > post.post\_code |
| region       | varchar(255) | -        | -       | 지역                     |
| link         | varchar(255) | -        | -       | 관련 링크                  |
| video\_link  | varchar(255) | -        | -       | 관련 동영상 링크              |
| department   | varchar(255) | -        | -       | 부서                     |
| subject      | varchar(255) | -        | -       | 주제                     |
| source       | varchar(255) | -        | -       | 출처                     |
| progress     | varchar(255) | -        | -       | 진행상황                   |
| icons        | text         | -        | -       | 아이콘                    |
| start\_date  | timestamp    | -        | -       | 시작일                    |
| end\_date    | timestamp    | -        | -       | 종료일                    |
| update\_date | timestamp    | -        | now()   | 수정일                    |

## comment

* 댓글 or 문의 답변

| Column Name   | Data Type    | Not Null | Default        | Comment                                     |
|---------------|--------------|----------|----------------|---------------------------------------------|
| comment\_code | varchar(50)  | ✅        | -              | PK                                          |
| comment\_no   | serial4      | ✅        | auto increment | 고유 번호                                       |
| post\_code    | varchar(50)  | ✅        | -              | FK > post.post\_code                        |
| account\_code | varchar(50)  | ✅        | -              | FK > account.account\_code                  |
| parent\_code  | varchar(50)  | -        | -              | FK > comment.comment\_code대댓글일 경우, 부모 댓글 참조 |
| category      | varchar(50)  | -        | -              | 댓글 \|\| 답변 분류                               |
| title         | varchar(255) | -        | -              | 제목                                          |
| content       | text         | ✅        | -              | 본문                                          |
| is\_deleted   | bool         | -        | false          | 삭제 여부                                       |
| create\_date  | timestamp    | -        | now()          | 생성일                                         |
| update\_date  | timestamp    | -        | -              | 수정일                                         |
| delete\_date  | timestamp    | -        | -              | 삭제일                                         |

## file

* 파일 데이터 관리

| Column Name    | Data Type    | Not Null | Default        | Comment                                           |
|----------------|--------------|----------|----------------|---------------------------------------------------|
| file\_code     | varchar(50)  | ✅        | -              | PK                                                |
| file\_no       | serial4      | ✅        | auto increment | 고유 번호                                             |
| ref\_table     | varchar(50)  | ✅        | -              | 연관 테이블 \(post \|\| comment \|\| \.\.\.\)          |
| ref\_code      | varchar(50)  | ✅        | -              | FK > ref\_talble.PK                               |
| file\_type     | varchar(50)  | ✅        | -              | 파일 종류 \( attachment \|\| thumbnail \|\| editor \) |
| store\_type    | varchar(50)  | ✅        | -              | 저장 방식 분류 \( S3 \|\| Disk \)                       |
| original\_name | varchar(255) | ✅        | -              | 원본 파일명                                            |
| saved\_name    | varchar(255) | ✅        | -              | 저장 파일명                                            |
| display\_name  | varchar(255) | -        | -              | 화면 표시명                                            |
| extension      | varchar(20)  | -        | -              | 확장자                                               |
| size           | int8         | -        | 1              | 파일 크기 (byte)                                      |
| storage\_path  | text         | -        | -              | 파일 저장 경로                                          |
| url            | text         | -        | -              | 파일 접근 URL                                         |
| alt\_text      | text         | -        | -              | 대체 텍스트                                            |
| description    | text         | -        | -              | 파일 설명                                             |
| is\_deleted    | bool         | -        | false          | 삭제 여부                                             |
| create\_date   | timestamp    | -        | now()          | 생성일                                               |
| update\_date   | timestamp    | -        | -              | 수정일                                               |
| delete\_date   | timestamp    | -        | -              | 삭제일                                               |

