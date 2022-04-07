[결과물](https://kaehehehe.github.io/wanted-codestates-project-2-10/)

## 사용스택
<div>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/redux--toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
</div>


## 구현한 기능 및 구현 방법

### 1. 창 크기에 따라 UI가 바뀌도록 구현했습니다
<p>창 크기에 따라 UI가 변경되기 때문에 resize 이벤트를 활용했고, debounce를 적용해서 과도하게 이벤트가 발생하지 않도록 구현했습니다.</p>

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/77221488/161921575-e917bb07-948c-47a4-a923-d0f87ac3b8d3.gif)

### 2. 검색어가 없을 시에는 “검색어 없음”이라는 메시지가 나옵니다.
![ezgif com-gif-maker (1)のコピー2](https://user-images.githubusercontent.com/77221488/161921667-abc791c3-0850-4215-b169-4ddd20a841ad.gif)

### 3. 키보드만으로도 추천 검색어들로 이동이 가능합니다.
<p>keyUp 이벤트를 활용해서 구현했습니다.</br> 키보드를 누를 때마다 API 통신을 하면 성능적으로 안좋다고 생각해 이 부분에도 debaunce를 적용했습니다.</p>
<img src="https://user-images.githubusercontent.com/77221488/161921652-b911ef36-9b76-48c1-87c1-ebe8e35286bf.gif" />


## 회고
<p>기존에는 Redux를 잘 몰랐고 실제 사용해본 경험이 없었습니다. 이번 프로젝트는 기술을 익히고 실제로 활용해보면서 할 수 있었기 때문에 개발자로서 성장하는데 유익했다고 생각합니다. 정해진 시간 내에 기술을 학습하고 적용하는 것이 쉽지만은 않았지만 즐거운 시간이었고, 기한에 쫒겨서 아쉬웠던 점은 리팩토링을 통해 일부 개선하였습니다. 작은 규모여서 큰 문제는 아니지만 실제 현업에서는 효율이 낮을 수 있다고 생각해서 리팩토링 과정에서 불필요하게 사용된 라이브러리를 배제했습니다. 그리고 습관적으로 사용하던 react icons 라이브러리 대신 아이콘을 직접 찾고 적용했습니다. 서비스의 규모가 커지면 디버깅이나 기타 유지보수에 라이브러리를 과도하게 사용하면 의존성 문제도 생길 수 있기 때문에 꼭 라이브러리가 필요하지 않은 부분은 최대한 코드를 직접 짜는 방향으로 수정을 했습니다.</p>
