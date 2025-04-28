---
sidebar_position: 6
---

# Ag Grid

## 개요

Ag-Grid는 JavaScript 기반 데이터 그리드 라이브러리로써,

대량 데이터 처리, 가상 스크롤, 필터링, 정렬 등 고성능 기능을 제공함

React, Angular, Vue, JavaScript에서 사용 가능

## 파일 경로

```text
src > components > dataTable
```

## 설치

```js
// 기본 설치
npm install ag-grid-react

// 엔터프라이즈 설치
npm install ag-grid-enterprise

// 차트 관련 기능 설치
npm install ag-charts-enterprise
```

## 모듈 등록(전체 등록)

```js
// 커뮤니티 모듈
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// 커뮤니티 전체 기능 등록
ModuleRegistry.registerModules([AllCommunityModule]);

// 엔터프라이즈 모듈
import { ModuleRegistry } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';

// 엔터프라이즈 전체 기능 등록
ModuleRegistry.registerModules([AllEnterpriseModule]);

// 차트 모듈
import { AgChartsEnterpriseModule } from 'ag-charts-enterprise';

// 엔터프라이즈 모듈 등록 및 차트 모듈 추가
ModuleRegistry.registerModules([AllEnterpriseModule.with(AgChartsEnterpriseModule)]);
```

## 모듈 등록(개별 등록)

```js
// 커뮤니티 모듈 중 클라이언트 사이드 행 모델 모듈 등록 - 예시
import { ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule]);
```

## 엔터프라이즈 라이센스 등록(시험판 키 발급)

시험판 키 발급 요청 페이지 : [https://www.ag-grid.com/react-data-grid/community-vs-enterprise/#request-an-enterprise-bundle-trial-licence](https://www.ag-grid.com/react-data-grid/community-vs-enterprise/#request-an-enterprise-bundle-trial-licence)

![license.png](/images/aggrid/license.png)

![license2.png](/images/aggrid/license2.png)

![license3.png](/images/aggrid/license3.png)

메일로 전달해준 시험판 키를 그리드 컴포넌트에 삽입

```js
import { ModuleRegistry } from 'ag-grid-community';
import { AllEnterpriseModule, LicenseManager } from 'ag-grid-enterprise';
import { AgChartsEnterpriseModule } from 'ag-charts-enterprise';

ModuleRegistry.registerModules([AllEnterpriseModule.with(AgChartsEnterpriseModule)]);
LicenseManager.setLicenseKey(
  '[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-076336}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{31 March 2025}____[v3]_[0102]_MTc0MzM3NTYwMDAwMA==c6567fdb808acaba121aed5798506e61'
);
```

키가 올바르지 않거나 없을 경우 콘솔 에러가 나면서 그리드가 렌더링 되지 않음

## 참고

공식 사이트 : [https://www.ag-grid.com/react-data-grid](https://www.ag-grid.com/react-data-grid)

기능과 관련해서는 공식 사이트를 참고
