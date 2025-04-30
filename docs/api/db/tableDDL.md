---
sidebar_position: 3
---

# Table DDL

* 테이블 생성 SQL

## const\_group\_code

* 상수 값을 코드화한 데이터의 그룹화

```sql
-- public.const_group_code definition

-- Drop table

-- DROP TABLE public.const_group_code;

CREATE TABLE public.const_group_code
(
    group_code  varchar(50)  NOT NULL,
    code        varchar(50)  NOT NULL,
    "name"      varchar(255) NOT NULL,
    is_used     bool      DEFAULT true NULL,
    is_deleted  bool      DEFAULT false NULL,
    create_date timestamp DEFAULT now() NULL,
    update_date timestamp NULL,
    delete_date timestamp NULL,
    CONSTRAINT const_group_code_pkey PRIMARY KEY (group_code)
);

COMMENT
ON TABLE const_group_code IS '상수 그룹 관리 테이블';
COMMENT
ON COLUMN const_group_code.group_code IS 'PK';
COMMENT
ON COLUMN const_group_code.code IS '고유 코드 값';
COMMENT
ON COLUMN const_group_code.name IS '코드 명칭';
COMMENT
ON COLUMN const_group_code.is_used IS '사용 여부';
COMMENT
ON COLUMN const_group_code.is_deleted IS '삭제 여부';
COMMENT
ON COLUMN const_group_code.create_date IS '생성일';
COMMENT
ON COLUMN const_group_code.update_date IS '수정일';
COMMENT
ON COLUMN const_group_code.delete_date IS '삭제일';
```

## const\_code

* 상수 값을 코드화

```sql
-- public.const_code definition

-- Drop table

-- DROP TABLE public.const_code;

CREATE TABLE public.const_code
(
    const_code  varchar(50)  NOT NULL,
    group_code  varchar(50)  NOT NULL,
    code        varchar(50)  NOT NULL,
    "name"      varchar(255) NOT NULL,
    is_used     bool      DEFAULT true NULL,
    is_deleted  bool      DEFAULT false NULL,
    create_date timestamp DEFAULT now() NULL,
    update_date timestamp NULL,
    delete_date timestamp NULL,
    CONSTRAINT const_code_pkey PRIMARY KEY (const_code),
    CONSTRAINT const_code_const_group_code_fk FOREIGN KEY (group_code) REFERENCES public.const_group_code (group_code) ON DELETE CASCADE
);

COMMENT
ON TABLE const_code IS '상수 관리 테이블';
COMMENT
ON COLUMN const_code.const_code IS 'PK';
COMMENT
ON COLUMN const_code.group_code IS '코드 그룹';
COMMENT
ON COLUMN const_code.code IS '고유 코드 값';
COMMENT
ON COLUMN const_code.name IS '코드 명칭';
COMMENT
ON COLUMN const_code.is_used IS '사용 여부';
COMMENT
ON COLUMN const_code.is_deleted IS '삭제 여부';
COMMENT
ON COLUMN const_code.create_date IS '생성일';
COMMENT
ON COLUMN const_code.update_date IS '수정일';
COMMENT
ON COLUMN const_code.delete_date IS '삭제일';
```

## account

* 계정 정보

```sql
-- public.account definition

-- Drop table

-- DROP TABLE public.account;

CREATE TABLE public.account
(
    account_code        varchar(50)  NOT NULL,
    account_no          serial4      NOT NULL,
    id                  varchar(100) NOT NULL,
    pw                  text         NOT NULL,
    status              varchar(20) DEFAULT 'pending'::character varying NULL,
    create_account_code varchar(50) NULL,
    is_auth             bool        DEFAULT false NULL,
    is_deleted          bool        DEFAULT false NULL,
    last_date           timestamp NULL,
    update_date         timestamp NULL,
    delete_date         timestamp NULL,
    create_account_code varchar(50) NULL,
    CONSTRAINT account_account_no_key UNIQUE (account_no),
    CONSTRAINT account_id_key UNIQUE (id),
    CONSTRAINT account_pkey PRIMARY KEY (account_code)
);

COMMENT
ON TABLE account IS '계정 정보 테이블';
COMMENT
ON COLUMN account.account_code is 'PK';
COMMENT
ON COLUMN account.account_no is '고유 번호';
COMMENT
ON COLUMN account.id is '아이디';
COMMENT
ON COLUMN account.pw is '비밀번호';
COMMENT
ON COLUMN account.status is '계정 승인 상태';
COMMENT
ON COLUMN account.create_account_code is '생성자';
COMMENT
ON COLUMN account.is_auth is '인증 여부';
COMMENT
ON COLUMN account.is_deleted IS '삭제 여부';
COMMENT
ON COLUMN account.last_date IS '마지막 로그인';
COMMENT
ON COLUMN account.create_date IS '생성일';
COMMENT
ON COLUMN account.update_date IS '수정일';
COMMENT
ON COLUMN account.delete_date IS '삭제일';
```

## user\_info

* 사용자 정보

```sql
-- public.user_info definition

-- Drop table

-- DROP TABLE public.user_info;

CREATE TABLE public.user_info
(
    account_code varchar(50) NOT NULL,
    "role"       varchar(50) NOT NULL,
    region       varchar(100) NULL,
    email        varchar(255) NULL,
    phone        varchar(50) NULL,
    reason       text NULL,
    update_date  timestamp DEFAULT now() NULL,
    CONSTRAINT user_info_pkey PRIMARY KEY (account_code),
    CONSTRAINT user_info_account_code_fkey FOREIGN KEY (account_code) REFERENCES public.account (account_code) ON DELETE CASCADE,
    CONSTRAINT user_info_const_code_fk FOREIGN KEY ("role") REFERENCES public.const_code (const_code),
    CONSTRAINT user_info_const_code_fk_1 FOREIGN KEY (region) REFERENCES public.const_code (const_code)
);

COMMENT
ON TABLE user_info IS '사용자 정보 테이블';
COMMENT
ON COLUMN user_info.account_code is 'PK & FK';
COMMENT
ON COLUMN user_info.category is '사용자 권한';
COMMENT
ON COLUMN user_info.region is '지역';
COMMENT
ON COLUMN user_info.email is '이메일';
COMMENT
ON COLUMN user_info.phone is '핸드폰';
COMMENT
ON COLUMN user_info.reason is '미사용/반려 처리 사유';
COMMENT
ON COLUMN user_info.update_date is '수정일';
```

## user\_terms\_agree

* 선택 약관 동의 여부

```sql
-- public.user_terms_agree definition

-- Drop table

-- DROP TABLE public.user_terms_agree;

CREATE TABLE public.user_terms_agree
(
    agree_no       serial4            NOT NULL,
    account_code   varchar(50)        NOT NULL,
    terms_no       int4               NOT NULL,
    is_agreed      bool DEFAULT false NOT NULL,
    agree_date     timestamp NULL,
    withdrawn_date timestamp NULL,
    CONSTRAINT user_terms_agree_pkey PRIMARY KEY (agree_no),
    CONSTRAINT user_terms_agree_account_fk FOREIGN KEY (account_code) REFERENCES public.account (account_code) ON DELETE CASCADE,
    CONSTRAINT user_terms_agree_terms_fk FOREIGN KEY (terms_no) REFERENCES public.terms (terms_no)
);

COMMENT
ON TABLE user_terms_agree IS '약관 동의 내역 관리 테이블';
COMMENT
ON COLUMN user_terms_agree.agree_no is 'PK';
COMMENT
ON COLUMN user_terms_agree.account_code is 'FK - 사용자';
COMMENT
ON COLUMN user_terms_agree.terms_no is 'FK - 약관';
COMMENT
ON COLUMN user_terms_agree.is_agreed is '동의 여부';
COMMENT
ON COLUMN user_terms_agree.agreed_date is '동의 일자';
COMMENT
ON COLUMN user_terms_agree.withdrawn_date is '철회 일자';
```

## terms

* 약관 관리

```sql
-- public.terms definition

-- Drop table

-- DROP TABLE public.terms;

CREATE TABLE public.terms
(
    terms_no    serial4                 NOT NULL,
    category    varchar(50)             NOT NULL,
    "version"   varchar(50)             NOT NULL,
    title       varchar(50)             NOT NULL,
    "content"   text NULL,
    is_required bool      DEFAULT false NOT NULL,
    is_deleted  bool      DEFAULT false NULL,
    create_date timestamp DEFAULT now() NULL,
    update_date timestamp NULL,
    delete_date timestamp NULL,
    CONSTRAINT terms_pkey PRIMARY KEY (terms_no),
    CONSTRAINT terms_const_code_fk FOREIGN KEY (category) REFERENCES public.const_code (const_code)
);

COMMENT
ON TABLE terms IS '약관 관리 테이블';
COMMENT
ON COLUMN terms.terms_no is 'PK';
COMMENT
ON COLUMN terms.category is '약관 구분';
COMMENT
ON COLUMN terms.version is '버전';
COMMENT
ON COLUMN terms.title is '제목';
COMMENT
ON COLUMN terms.content is '본문';
COMMENT
ON COLUMN terms.is_required is '필수 여부';
COMMENT
ON COLUMN terms.is_deleted is '삭제 여부';
COMMENT
ON COLUMN terms.create_date is '생성일';
COMMENT
ON COLUMN terms.update_date is '수정일';
COMMENT
ON COLUMN terms.delete_date is '삭제일';
```

## account\_verification

* 이메일 or 핸드폰 인증 여부

```sql
-- public.account_verification definition

-- Drop table

-- DROP TABLE public.account_verification;

CREATE TABLE public.account_verification
(
    verification_no serial4      NOT NULL,
    "type"          varchar(50)  NOT NULL,
    target          varchar(255) NOT NULL,
    code            varchar(50)  NOT NULL,
    is_expired      bool      DEFAULT false NULL,
    create_date     timestamp DEFAULT now() NULL,
    expire_date     timestamp NULL,
    is_verified     bool      DEFAULT false NULL,
    CONSTRAINT account_verification_pkey PRIMARY KEY (verification_no)
);

COMMENT
ON TABLE account_verification IS '인증 내역 관리 테이블';
COMMENT
ON COLUMN account_verification.verification_no is 'PK';
COMMENT
ON COLUMN account_verification.type is 'email || phone';
COMMENT
ON COLUMN account_verification.target is '인증 받을 이메일 또는 핸드폰';
COMMENT
ON COLUMN account_verification.code is '인증 코드';
COMMENT
ON COLUMN account_verification.is_verified is '인증 여부';
COMMENT
ON COLUMN account_verification.is_expired is '인증 번호 및 인증된 이메일 만료 여부';
COMMENT
ON COLUMN account_verification.create_date is '생성일';
COMMENT
ON COLUMN account_verification.expire_date is '만료일 (유효일자)';
```

## email\_history

* 이메일 전송 기록

```sql
-- public.email_history definition

-- Drop table

-- DROP TABLE public.email_history;

CREATE TABLE public.email_history
(
    history_no  serial4      NOT NULL,
    category    varchar(50)  NOT NULL,
    sender      varchar(255) NOT NULL,
    receiver    varchar(255) NOT NULL,
    "template"  varchar(255) NULL,
    title       text NULL,
    "content"   text NULL,
    "result"    text NULL,
    message     text NULL,
    is_success  bool      DEFAULT false NULL,
    create_date timestamp DEFAULT now() NULL,
    CONSTRAINT email_history_pkey PRIMARY KEY (history_no)
);

COMMENT
ON TABLE email_history IS '이메일 발송 이력';
COMMENT
ON COLUMN email_history.history_no is '고유 번호';
COMMENT
ON COLUMN email_history.category is '분류';
COMMENT
ON COLUMN email_history.sender is '수신 메일';
COMMENT
ON COLUMN email_history.receiver is '발신 메일';
COMMENT
ON COLUMN email_history.template is 'AWS SES 템플릿';
COMMENT
ON COLUMN email_history.title is '제목';
COMMENT
ON COLUMN email_history.content is '본문';
COMMENT
ON COLUMN email_history.result is '발송 결과';
COMMENT
ON COLUMN email_history.message is '발송 결과 (에러 메시지)';
COMMENT
ON COLUMN email_history.is_success is '성공 여부';
COMMENT
ON COLUMN email_history.create_date IS '생성일';
```

## login\_history

* 로그인 기록

```sql
-- public.login_history definition

-- Drop table

-- DROP TABLE public.login_history;

CREATE TABLE public.login_history
(
    history_no   serial4      NOT NULL,
    account_code varchar(50)  NOT NULL,
    id           varchar(100) NOT NULL,
    email        varchar(255) NOT NULL,
    ip_address   varchar(50)  NOT NULL,
    user_agent   text NULL,
    device_id    varchar(100) NULL,
    login_date   timestamp DEFAULT now() NULL,
    CONSTRAINT login_history_pkey PRIMARY KEY (history_no)
);

COMMENT
ON TABLE login_history IS '로그인 로그 테이블';
COMMENT
ON COLUMN login_history.history_no is 'PK';
COMMENT
ON COLUMN login_history.account_code is 'FK - 계정';
COMMENT
ON COLUMN login_history.id is '계정 아이디';
COMMENT
ON COLUMN login_history.email is '계정 이메일';
COMMENT
ON COLUMN login_history.ip_address is '접속 IP';
COMMENT
ON COLUMN login_history.user_agent is '접속 환경';
COMMENT
ON COLUMN login_history.device_id is '디바이스 고유 ID';
COMMENT
ON COLUMN login_history.login_date is '로그인 일자';
```

## token

* 로그인 토큰 정보

```sql
-- public."token" definition

-- Drop table

-- DROP TABLE public."token";

CREATE TABLE public."token"
(
    token_no            serial4     NOT NULL,
    account_code        varchar(50) NOT NULL,
    access_token        text        NOT NULL,
    refresh_token       text        NOT NULL,
    is_expired          bool      DEFAULT false NULL,
    access_expire_date  timestamp NULL,
    refresh_expire_date timestamp NULL,
    create_date         timestamp DEFAULT now() NULL,
    update_date         timestamp NULL,
    expire_date         timestamp NULL,
    CONSTRAINT token_pkey PRIMARY KEY (token_no),
    CONSTRAINT token_account_fk FOREIGN KEY (account_code) REFERENCES public.account (account_code) ON DELETE CASCADE
);

COMMENT
ON TABLE token IS 'JWT 관리 테이블';
COMMENT
ON COLUMN token.token_no IS 'PK';
COMMENT
ON COLUMN token.account_code IS 'FK (계정 코드)';
COMMENT
ON COLUMN token.access_token IS '접근 토큰';
COMMENT
ON COLUMN token.refresh_token IS '갱신 토큰';
COMMENT
ON COLUMN token.is_expired IS '만료 여부';
COMMENT
ON COLUMN token.access_expire_date IS '접근 토큰 만료일';
COMMENT
ON COLUMN token.refresh_expire_date IS '갱신 토큰 만료일';
COMMENT
ON COLUMN token.create_date IS '생성일';
COMMENT
ON COLUMN token.update_date IS '수정일';
COMMENT
ON COLUMN token.expire_date IS '만료일';
```

## post

* 게시글

```sql
-- public.post definition

-- Drop table

-- DROP TABLE public.post;

CREATE TABLE public.post
(
    post_code      varchar(50)  NOT NULL,
    post_no        serial4      NOT NULL,
    board_code     varchar(50)  NOT NULL,
    account_code   varchar(50)  NOT NULL,
    title          varchar(255) NOT NULL,
    "content"      text         NOT NULL,
    sub_content    text NULL,
    comment_status varchar(20) NULL,
    view_count     int4      DEFAULT 0 NULL,
    is_fixed       bool      DEFAULT false NULL,
    is_deleted     bool      DEFAULT false NULL,
    create_date    timestamp DEFAULT now() NULL,
    update_date    timestamp NULL,
    delete_date    timestamp NULL,
    CONSTRAINT post_pkey PRIMARY KEY (post_code),
    CONSTRAINT post_post_no_key UNIQUE (post_no),
    CONSTRAINT post_account_fk FOREIGN KEY (account_code) REFERENCES public.account (account_code),
    CONSTRAINT post_const_code_fk FOREIGN KEY (board_code) REFERENCES public.const_code (const_code)
);

COMMENT
ON TABLE post IS '게시글 테이블';
COMMENT
ON COLUMN post.post_code IS 'PK';
COMMENT
ON COLUMN post.post_no IS '고유 번호';
COMMENT
ON COLUMN post.board_code IS '게시판 구분';
COMMENT
ON COLUMN post.account_code IS '사용자 FK';
COMMENT
ON COLUMN post.title IS '제목';
COMMENT
ON COLUMN post.content IS '본문';
COMMENT
ON COLUMN post.sub_content IS '요약문';
COMMENT
ON COLUMN post.comment_status IS '댓글 || 답변 상태';
COMMENT
ON COLUMN post.view_count IS '조회수';
COMMENT
ON COLUMN post.is_fixed IS '상단 고정 여부';
COMMENT
ON COLUMN post.is_deleted IS '삭제 여부';
COMMENT
ON COLUMN post.create_date IS '생성일';
COMMENT
ON COLUMN post.update_date IS '수정일';
COMMENT
ON COLUMN post.delete_date IS '삭제일';
```

## post\_optional

* 게시글 확장 정보

```sql
-- public.post_optional definition

-- Drop table

-- DROP TABLE public.post_optional;

CREATE TABLE public.post_optional
(
    post_code   varchar(50) NOT NULL,
    region      varchar(255) NULL,
    link        varchar(255) NULL,
    video_link  varchar(255) NULL,
    department  varchar(255) NULL,
    subject     varchar(255) NULL,
    "source"    varchar(255) NULL,
    progress    varchar(255) NULL,
    icons       text NULL,
    start_date  timestamp NULL,
    end_date    timestamp NULL,
    update_date timestamp DEFAULT now() NULL,
    CONSTRAINT post_optional_pkey PRIMARY KEY (post_code),
    CONSTRAINT post_optional_post_fk FOREIGN KEY (post_code) REFERENCES public.post (post_code) ON DELETE CASCADE
);

COMMENT
ON TABLE post_optional IS '게시글의 선택적 정보 저장';
COMMENT
ON COLUMN post_optional.post_code IS 'PK & FK';
COMMENT
ON COLUMN post_optional.region IS '지역';
COMMENT
ON COLUMN post_optional.link IS '관련 링크';
COMMENT
ON COLUMN post_optional.video_link IS '관련 영상 링크';
COMMENT
ON COLUMN post_optional.department IS '부서명';
COMMENT
ON COLUMN post_optional.subject IS '주제어';
COMMENT
ON COLUMN post_optional.source IS '출처';
COMMENT
ON COLUMN post_optional.progress IS '진행상황';
COMMENT
ON COLUMN post_optional.icons IS '아이콘';
COMMENT
ON COLUMN post_optional.start_date IS '시작일';
COMMENT
ON COLUMN post_optional.end_date IS '종료일';
COMMENT
ON COLUMN post_optional.update_date IS '수정일';
```

## comment

* 댓글 or 문의 답변

```sql
-- public."comment" definition

-- Drop table

-- DROP TABLE public."comment";

CREATE TABLE public."comment"
(
    comment_code varchar(50) NOT NULL,
    comment_no   serial4     NOT NULL,
    post_code    varchar(50) NOT NULL,
    account_code varchar(50) NOT NULL,
    parent_code  varchar(50) NULL,
    category     varchar(50) NULL,
    title        varchar(255) NULL,
    "content"    text        NOT NULL,
    is_deleted   bool      DEFAULT false NULL,
    create_date  timestamp DEFAULT now() NULL,
    update_date  timestamp NULL,
    delete_date  timestamp NULL,
    CONSTRAINT comment_pkey PRIMARY KEY (comment_code),
    CONSTRAINT comment_account_fk FOREIGN KEY (account_code) REFERENCES public.account (account_code),
    CONSTRAINT comment_const_code_fk FOREIGN KEY (category) REFERENCES public.const_code (const_code),
    CONSTRAINT comment_post_fk FOREIGN KEY (post_code) REFERENCES public.post (post_code) ON DELETE CASCADE
);
```

## file

* 파일 데이터 관리

```sql
-- public.file definition

-- Drop table

-- DROP TABLE public.file;

CREATE TABLE public.file
(
    file_code     varchar(50)         NOT NULL,
    file_no       serial4             NOT NULL,
    ref_table     varchar(50)         NOT NULL,
    ref_code      varchar(50)         NOT NULL,
    file_type     varchar(50)         NOT NULL,
    store_type    varchar(50)         NOT NULL,
    original_name varchar(255)        NOT NULL,
    saved_name    varchar(255)        NOT NULL,
    display_name  varchar(255) NULL,
    "extension"   varchar(20) NULL,
    "size"        int8      DEFAULT 1 NOT NULL,
    storage_path  text                NOT NULL,
    url           text NULL,
    alt_text      text NULL,
    description   text NULL,
    is_deleted    bool      DEFAULT false NULL,
    create_date   timestamp DEFAULT now() NULL,
    update_date   timestamp NULL,
    delete_date   timestamp NULL,
    CONSTRAINT file_pkey PRIMARY KEY (file_code),
    CONSTRAINT file_const_code_fk FOREIGN KEY (file_type) REFERENCES public.const_code (const_code),
    CONSTRAINT file_const_code_fk_1 FOREIGN KEY (store_type) REFERENCES public.const_code (const_code)
);

COMMENT
ON TABLE file IS '첨부파일 관리 테이블';
COMMENT
ON COLUMN file.file_code IS 'PK';
COMMENT
ON COLUMN file.file_no IS '고유 번호';
COMMENT
ON COLUMN file.ref_table IS '연관 테이블';
COMMENT
ON COLUMN file.ref_code IS 'FK';
COMMENT
ON COLUMN file.file_type IS 'attachment || thumbnail';
COMMENT
ON COLUMN file.store_type IS '저장 방식 분류 (S3 || local)';
COMMENT
ON COLUMN file.original_name IS '원본명';
COMMENT
ON COLUMN file.saved_name IS '저장명';
COMMENT
ON COLUMN file.display_name IS '표시명';
COMMENT
ON COLUMN file.extension IS '확장자';
COMMENT
ON COLUMN file.size IS '파일 크키 (byte)';
COMMENT
ON COLUMN file.storage_path IS '파일의 저장 경로 (S3 Key 또는 로컬 디렉토리)';
COMMENT
ON COLUMN file.url IS '파일 접근을 위한 URL';
COMMENT
ON COLUMN file.alt_text IS '대체 텍스트';
COMMENT
ON COLUMN file.description IS '파일 설명';
COMMENT
ON COLUMN file.is_deleted IS '삭제 여부';
COMMENT
ON COLUMN file.create_date IS '생성일';
COMMENT
ON COLUMN file.update_date IS '수정일';
COMMENT
ON COLUMN file.delete_date IS '삭제일';
```