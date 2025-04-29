---
sidebar_position: 6
---

# Linux

* Linux Server 설정

| -                 |                                              **개발**                                              |                                               **상용**                                               |
|-------------------|:------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------:|
| **Root Password** |                                        domfamcor3p4ssword                                        |                                         domfamcor3p4ssword                                         |
| **Src Dir**       |                           `/services/domfam-core/git-repo/dev-server`                            |                            `/services/domfam-core/git-repo/prod-server`                            |
| **Build Command** | `sh /services/domfam-core/dev-build.sh ${원하는_버전}`ex) sh /services/domfam-core/dev-build.sh 1.0.0 | `sh /services/domfam-core/prod-build.sh ${원하는_버전}`ex) sh /services/domfam-core/prod-build.sh 1.0.0 |
| **Server Port**   |                                               8080                                               |                                                8888                                                |