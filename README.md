# 변명제조기 v1

## 플로우 차트

![Untitled](https://user-images.githubusercontent.com/25482071/162736780-6079acaa-026d-45c3-b24e-ca0bcb7c8c8b.png)

## 기능 명세서

### 홈 화면

- 시작하기 버튼을 누를 수 있다.
    - 클릭 시, 카테고리 화면으로 이동한다.
- 어플리케이션의 이름이 표시된다 (”변명제조기”)

### 카테고리 화면

- 변명 카테고리를 선택할 수 있다.
    - 클릭 시 해당 카테고리에 속하는 변명 상세 화면으로 이동한다.
    - 카테고리 종류
      - 시간 약속
      - 일정 약속

### 변명 상세 화면

- 카테고리에 해당 하는 변명을 1개 출력한다.
- 다시 선택 버튼을 클릭할 수 있다.
    - 클릭 시, 새로운 변명을 출력한다.
- 변명 확정 버튼을 클릭할 수 있다.
    - 클릭 시, 해당 변명이 클립보드에 복사된다.
    - 홈 화면으로 이동한다.

### 변명 리스트 확인 화면

- 변명 전체 리스트를 확인할 수 있다.
- 시간, 일정 따로 출력
- 변명 추가하기 버튼 클릭 시 변명 추가 모달 발생

### 변명 추가 모달

- 변명을 추가할 수 있다.
- 입력 값
    - 카테고리
        - select box
        - 시간, 일정
    - 변명 본문
        - input
- 본문이 5글자 이상 이여야 제출 버튼이 활성화 된다.
- 제출 클릭 시, 변명이 추가된다.
- 리스트 확인 화면도 업데이트 된다.

## 사용 기술

- react
- react router dom v6
- antd
    - [https://ant.design/docs/react/introduce](https://ant.design/docs/react/introduce)
 
[중앙상태 관리]
- context API ()
  - https://ko.reactjs.org/docs/context.html 
- redux ()
  - https://ko.redux.js.org/introduction/getting-started/ 
- recoil ()
  - https://recoiljs.org/ko/





    

## 일정

3주 (가능한 2주안에)

1주 한번 씩 지금 개발 현황이나, 궁금증, 리뷰를 해드릴께요!

기능 단위 PR 을 생성

## 데이터셋 (5개씩)

- 시간 약속
    - 1
    - 2
    - 3
    - 4
    - 5

- 일정 약속
    - 1
    - 2
    - 3
    - 4
    - 5
