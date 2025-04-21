---
sidebar_position: 2
---

# 사이트맵

Sitemap은 Header 컴포넌트 내부에서 같이 처리된다.

앞서 언급된 menuList가 여기서 정의되며, 각 메뉴에 맞는 2depth menu(sub menu) 들을 노출하는 로직과 메뉴를 토글하는 ui 로직이 있다.

menuList는 현재 위의 BreadCrumbs와 연계되어 있기 때문에 메뉴가 추가되거나 분기가 필요할 경우 메뉴를 노출하는 부분의 분기처리가 필요하다.

![sitemap.png](/images/navigation/sitemap.png)
