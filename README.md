![image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69aee781-97e4-4144-8f46-aa72635c0e7a%2FMBTingI_logo(nobg).png?table=block&id=8012164e-eaf7-4375-a72e-19b120687faf&spaceId=6e9ffcdf-452b-494c-a455-03f79451456b&width=1640&userId=b30b4534-c8a0-4959-9f96-2c49d1a62326&cache=v2)
# MBTingI - E2I2
- [KDT - 2차 프로젝트](https://joodeng.notion.site/4-MBTingI-4e3903fc8fc547589f6db40e0286d39b)
- 20220919 ~ 20221003
- Use: HTML, CSS, JavaScript, Git, Node.js, Express, jQuery, Axios, Multer, MySQL, Sequelize, Socket.io

## ✍🏻About MBTingI

---

![love-mattching.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03f076da-0d9e-4dac-9fe7-e0dbf3a45870/love-mattching.png)

## 프로젝트 소개

# 나랑 딱 맞는 MBTI 끼리끼리 💜

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c00915a3-6ac8-4432-9ba8-3b6fca2791ab/Untitled.png)

### 본인과 잘 맞는 상대방을 만나고 싶지 않으신가요? 🥰

### **MBTingI**에서 최고의 인연을 만나 좋은 인연을 만들어 가세요. 👫

- 기존의 식상한 매칭 만남이 아닌 MBTI 궁합을 먼저 확인하고 연락해보세요.
- 맘에 드는 상대가 나타날 때 까지 찾을 수 있어요.
- 256가지의 MBTI 데이터를 이용해서 선별한 이성을 만나 1:1 채팅을 해봐요.
- 본인의 MBTI와 궁합이 좋은 상대와 대화를 통해 좋은 인연을 만들어 가세요.

## 구현 기능
> ### 메인 페이지
- 로그인 여부(세션 이용)에 따라 메인 페이지의 Navbar와 Button UI에 변화를 줌
> ### 회원가입 페이지
- 회원가입 정보를 받아 db에 user 정보 저장
> ### 로그인 & 로그아웃 페이지
- 로그인 시 세션에 로그인한 유저 정보 저장
- 로그인 상태 유지 체크 유무에 따라 세션의 유지 시간 조절
- 세션 삭제 후, 메인 페이지로 이동
> ### 아이디 / 비밀번호 찾기 페이지
- DB에서 일치하는 정보를 찾아, 아이디와 비밀번호를 찾아올 수 있도록 설계
> ### 매칭 페이지
- 세션 정보에 있는 MBTI와 MBTI 궁합 테이블을 비교해 궁합이 Best, Good, Soso인 MBTI 결과를 추출
- userinfo 테이블에서 로그인 유저와 이성 관계인 사람 중 필터링한 MBTI를 가지고 있는 유저의 정보를 추출
- math.random을 이용해 가져온 유저의 정보를 랜덤 정렬
> ### 마이 페이지
- 유저가 본인의 정보를 수정할 수 있도록 함
