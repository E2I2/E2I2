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

## ⚙️DB Schema
![MBTingI DB](https://user-images.githubusercontent.com/99079176/201662713-ffd4295f-da61-49a7-bdaf-8607ea610ddc.jpg)

## 구현 기능

> ### 모든 페이지
**Front**
-   4개의 break point를 두어 반응형 페이지 구현

**Back**
-   로그인 후, 이용자 개인 정보를 담은 session 생성 - 페이지 전역 적용
-   session 미 생성 시 이용 불가
-   RESTful API 설계
> ### 메인 페이지
<img src="https://user-images.githubusercontent.com/99079176/201662827-e49f6078-fce2-4617-be67-afb6d8e9e1dd.gif" width="500" height="300"/>
<img src="https://user-images.githubusercontent.com/99079176/201663500-04127938-946f-43b8-9c30-f58641eaedfc.gif" width="500" height="300"/>

**Front**
-   ejs문법을 이용해 로그인/로그아웃 시 UI에 변화
-   slick slide 사용
-   서버에서 받아온 유저 데이터를 carousel에 렌더링
-   AOS(Animate On Scroll Library) 사용

**Back**
-   session 생성 시 isLogin: true 값과 로그인 유저 정보를 메인 페이지에 전송
-   DB에 있는 유저 사진 정보 전송
> ### 회원가입 페이지
<img src="https://user-images.githubusercontent.com/99079176/201663558-361731eb-bf46-4767-ae2e-69c0ef1fa412.gif" width="500" height="300"/>

**Front**
-   validation(유효성 검사) 적용

**Back**
-   클라이언트에서 받아온 데이터를 POST 방식으로 DB에 저장
> ### 로그인 페이지
<img src="https://user-images.githubusercontent.com/99079176/201663608-e8e67db8-62f6-48d9-8d83-224bdb3f588c.gif" width="500" height="300"/>

**Front**
-   validation(유효성 검사) 적용

**Back**
-   로그인 성공 시 로그인한 회원의 정보를 담은 session 생성
> ### 매칭 페이지
<img src="https://user-images.githubusercontent.com/99079176/201663639-6827253b-8987-4aef-8ae3-96111072b087.gif" width="500" height="300"/>

**Front**
-   서버에서 받은 유저 데이터 렌더링
-   서버에서 받은 궁합 데이터에 따라 다른 색상 적용

**Back**
-   서버에서 로그인 session과 반대되는 성별의 모든 유저 데이터를 filtering
-   로그인 유저의 MBTI와 MBTI 궁합 데이터를 filtering
-   filtering한 궁합 데이터들을 전개 연산자를 사용해 한 배열로 병합
-   math.floor/math.random을 이용해 유저 데이터와 MBTI 데이터를 무작위로 전송
> ### 채팅 페이지
<img src="https://user-images.githubusercontent.com/99079176/201663739-cf776f5c-6dd6-4ea4-a88a-992c811b9b8e.gif" width="500" height="300"/>

**Front**
-   session 존재 시 메인 페이지에서 보일 수 있도록 aside로 배치

**Back**
-   socket room을 사용해 1대1 채팅 구현
> ### 마이 페이지
<img src="https://user-images.githubusercontent.com/99079176/201663784-8b8b3d34-1c88-4e4c-9526-c527ffbd8e52.gif" width="500" height="300"/>

**Front**
-   validation(유효성 검사) 적용

**Back**
-   클라이언트에서 받아온 요청을 받아 유저 정보 변경
