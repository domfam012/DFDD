---
sidebar_position: 7
---

# Nginx

* Nginx 설정

| Key            | Value                          | 
|----------------|--------------------------------|
| **Dir**        | `/etc/nginx`                   |
| **공통 설정 파일**   | `/etc/nginx/nginx.conf`        |
| **도메인 별 설정파일** | `/etc/nginx/conf.d/*.conf`     |
| **Log**        | `/var/log/nginx`               |
| 중단 없이 재실행      | `sudo systemctl reload nginx`  |
| 재시작            | `sudo systemctl restart nginx` |
| 시작             | `sudo systemctl start nginx`   |
| 종료             | `sudo systemctl stop nginx`    |
| 상태 확인          | `sudo systemctl status nginx`  |
| 설정 파일 문법 오류 확인 | `sudo nginx -t`                |