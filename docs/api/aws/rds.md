---
sidebar_position: 4
---

# RDS

* AWS RDS

|              |                                        **개발**                                        |                                        **상용**                                         |
|--------------|:------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|
| **RDS 식별자**  |                                    dev-nipa-core                                     |                                    prod-nipa-core                                     |
| **DBMS**     |                                      PostgreSQL                                      |                                      PostgreSQL                                       |
| **Username** |                                       postgres                                       |                                       postgres                                        |
| **Password** |                                   DMkZ2G5RJP8MMgU                                    |                                    DMkZ2G5RJP8MMgU                                    |
| **Post**     |                                         5432                                         |                                         5432                                          |
| **Database** |                                         core                                         |                                           -                                           |
| **Endpoint** |             dev-nipa-core.chi08wm86irx.ap-northeast-2.rds.amazonaws.com              |             prod-nipa-core.chi08wm86irx.ap-northeast-2.rds.amazonaws.com              |
| **Command**  | `psql -h dev-nipa-core.chi08wm86irx.ap-northeast-2.rds.amazonaws.com -U postgres -W` | `psql -h prod-nipa-core.chi08wm86irx.ap-northeast-2.rds.amazonaws.com -U postgres -W` |