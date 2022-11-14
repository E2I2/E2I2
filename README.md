![image](<https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69aee781-97e4-4144-8f46-aa72635c0e7a%2FMBTingI_logo(nobg).png?table=block&id=8012164e-eaf7-4375-a72e-19b120687faf&spaceId=6e9ffcdf-452b-494c-a455-03f79451456b&width=1640&userId=b30b4534-c8a0-4959-9f96-2c49d1a62326&cache=v2>)

# MBTingI - E2I2

-   [KDT - 2차 프로젝트](https://joodeng.notion.site/4-MBTingI-4e3903fc8fc547589f6db40e0286d39b)
-   20220919 ~ 20221003
-   Use: HTML, CSS, JavaScript, Git, Node.js, Express, jQuery, Axios, Multer, MySQL, Sequelize, Socket.io

## 프로젝트 소개

![love-mattching](https://user-images.githubusercontent.com/99079176/200313309-2d19bef0-c03c-4e2b-97cb-cc38efabff3a.png)

# 나랑 딱 맞는 MBTI 끼리끼리 💜

### 본인과 잘 맞는 상대방을 만나고 싶지 않으신가요? 🥰

### **MBTingI**에서 최고의 인연을 만나 좋은 인연을 만들어 가세요. 👫

-   기존의 식상한 매칭 만남이 아닌 MBTI 궁합을 먼저 확인하고 연락해보세요.
-   맘에 드는 상대가 나타날 때 까지 찾을 수 있어요.
-   256가지의 MBTI 데이터를 이용해서 선별한 이성을 만나 1:1 채팅을 해봐요.
-   본인의 MBTI와 궁합이 좋은 상대와 대화를 통해 좋은 인연을 만들어 가세요.

## 구현 기능

> ### 모든 페이지
**Front**
-   4개의 break point를 두어 반응형 페이지 구현
**Back**
-   로그인 후, 이용자 개인 정보를 담은 session 생성 - 페이지 전역 적용
-   session 미 생성 시 이용 불가
-   RESTful API 설계
> ### 메인 페이지
![mainpage.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f03fefa-8cbd-4aca-a2ba-612abb3b4369/mainpage.gif) > ![qksdmd.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0306c9e-ac0c-4409-b362-bee8d4840477/qksdmd.gif) > **Front**
-   ejs문법을 이용해 로그인/로그아웃 시 UI에 변화
-   slick slide 사용
-   서버에서 받아온 유저 데이터를 carousel에 렌더링
-   AOS(Animate On Scroll Library) 사용
**Back**
-   session 생성 시 isLogin: true 값과 로그인 유저 정보를 메인 페이지에 전송
-   DB에 있는 유저 사진 정보 전송
> ### 회원가입 페이지
![join.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8b7b85b-5fbd-4e22-a04e-ed715bafa92b/join.gif) > **Front**
-   validation(유효성 검사) 적용
**Back**
-   클라이언트에서 받아온 데이터를 POST 방식으로 DB에 저장
> ### 로그인 페이지
![login.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aae8644e-c545-4c5e-af72-e4a9a7726948/login.gif) **Front**
-   validation(유효성 검사) 적용
**Back**
-   로그인 성공 시 로그인한 회원의 정보를 담은 session 생성
> ### 매칭 페이지
![matching.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/376ed229-38e7-4fea-9701-24f631eac57a/matching.gif)
**Front**
-   서버에서 받은 유저 데이터 렌더링
-   서버에서 받은 궁합 데이터에 따라 다른 색상 적용
**Back**
-   서버에서 로그인 session과 반대되는 성별의 모든 유저 데이터를 filtering
-   로그인 유저의 MBTI와 MBTI 궁합 데이터를 filtering
-   filtering한 궁합 데이터들을 전개 연산자를 사용해 한 배열로 병합
-   math.floor/math.random을 이용해 유저 데이터와 MBTI 데이터를 무작위로 전송
> ### 채팅 페이지
![chatting.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69b4226b-f33c-44f1-a522-76db27233e4d/chatting.gif) > **Front**
-   session 존재 시 메인 페이지에서 보일 수 있도록 aside로 배치
**Back**
-   socket room을 사용해 1대1 채팅 구현
> ### 마이 페이지
![bandicam_2022-10-04_15-24-14-904_AdobeExpress.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/287944aa-99a4-42d3-a8cf-049c6b46bbea/bandicam_2022-10-04_15-24-14-904_AdobeExpress.gif)
**Front**
-   validation(유효성 검사) 적용
**Back**
-   클라이언트에서 받아온 요청을 받아 유저 정보 변경
