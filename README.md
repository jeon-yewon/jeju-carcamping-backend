# 제주도 차박 장소 안내 서비스
- 프로젝트 기간 : 2022.08.27~09.02 (7일)

## 1.목표와 기능
### 1.1 목표
- 제주도에서 차박 가능한 장소를 확인하는 웹서비스
### 1.2 기능
- 카카오 맵 API 를 활용하여 위치 확인 및 로드뷰 기능 제공
- Admin 페이지에서 장소 추가/삭제 가능

## 2. 개발 환경 및 배포 URL
### 2.1 개발 환경
- Web Framework
  - Django 3.2
- 서비스 배포 환경
  - Goorm IDE

### 2.2 배포 URL
- https://jeju-carcamping-back-hjgmk.run.goorm.io/

## 3. 프로젝트 구조
```
 └─ website
      │  manage.py
      │  db.sqlite3
      │  
      ├─dgangoproj
      │  ├─ settings.py
      │  └─ urls.py
      │
      ├─main
      │  ├─ admin.py
      │  ├─ models.py
      │  ├─ views.py
      │  └─ templates/main
      │     ├─ details.html
      │     └─ index.html
      │
      ├─media/place
      │  └─ image
      │      
      └─ static
         ├─ css
         ├─ img
         ├─ js
         └─ video
```

## 4. 역할분담
- FE(리더) : 김수로
- FE : 문서빈
- BE(리더) : 전예원
- BE : 김태홍

## 5. UI
### 5.1 전체 UI 구조
<img width="500" alt="image" src="https://user-images.githubusercontent.com/52244210/188145817-b95d2a79-e5f3-4edb-b8f8-da17d4f6628b.png">

### 5.2 상세 UI : index.html
- 메인화면 좌측 상단에 'CARCAMPING' 로고 배치
- 중앙 '자세히 알아보기' 버튼 선택 시 아래화면 위치로 자동 스크롤 발생
<img width="550" alt="image" src="https://user-images.githubusercontent.com/52244210/188146842-ede2996d-f46b-4713-9e67-bb72d515d1aa.png">

- 메인 화면 스크롤 or '자세히 알아보기' 버튼 선택 시 해당 위치로 이동
- 각 영역 이미지(‘OCEAN VIEW’, ‘SAVE MONEY’, ‘MAKE MEMORIES’) 마우스 오버 시 이미지가 커지는 효과 제공
<img width="550" alt="image" src="https://user-images.githubusercontent.com/52244210/188148101-95268dd8-759f-4eae-83f4-d91a2ae1cb64.png">

- 제주도 내에서 차박이 가능한 장소 목록 제공(카카오 지도 API 사용)
- 선택 시 해당 장소의 상세 화면으로 이동
<img width="550" alt="image" src="https://user-images.githubusercontent.com/52244210/188148657-c7294778-476b-4945-a5dd-e4ea411d15db.png">


### 5.3 상세 UI : details.html
- 각 장소의 상세 정보 제공
- 백그라운드 Video를 사용
- '로드맵 보기' 버튼을 이용해 로드뷰 바로 확인 가능(토글버튼)
<img width="550" alt="image" src="https://user-images.githubusercontent.com/52244210/188149081-f6a7075e-c61b-4f4f-9b85-81e481351315.png">


## 6. 데이터베이스 모델링(ERD)
<img width="500" alt="image" src="https://user-images.githubusercontent.com/52244210/188141441-c2c3a4cc-1ed6-4db7-a2fd-e304860cd913.png"> (*sqldbm.com 사용*)

## 7. 메인 기능
### Front-End 
- 각 장소의 위치를 지도에서 확인(카카오맵 API 활용)
- 로드맵을 플랫폼 내에서 확인 가능(카카오맵 API 활용)
- 이미지 개수에 따라 반응하는 이미지 슬라이드 구현

### Back-End
- Admin에서 등록된 장소 관리(생성/수정/삭제)
- 다중 이미지 등록(1:N)
