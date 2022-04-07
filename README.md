[결과물](https://kaehehehe.github.io/wanted-codestates-project-2-10/)

## 사용스택
<div>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/redux--toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
</div>


## 구현한 기능 및 구현 방법

### 1. 창 크기에 따라 UI가 바뀌도록 구현했습니다
<p>media query로 구현</p>

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/77221488/161921575-e917bb07-948c-47a4-a923-d0f87ac3b8d3.gif)

### 2. 검색어가 없을 시에는 “검색어 없음”이라는 메시지가 나옵니다.
![ezgif com-gif-maker (1)のコピー2](https://user-images.githubusercontent.com/77221488/161921667-abc791c3-0850-4215-b169-4ddd20a841ad.gif)

### 3. 키보드만으로도 추천 검색어들로 이동이 가능합니다.
<p>keyUp 이벤트를 활용해서 구현했습니다.</p>
<img src="https://user-images.githubusercontent.com/77221488/161921652-b911ef36-9b76-48c1-87c1-ebe8e35286bf.gif" />

<pre>
  <code>
    const [targetIndex, setTargetIndex] = useState(-1);
    
      const handleKeyUp = (e) => {
    setInputValue(e.target.value);
    const maxIndex = searchResult?.length - 1;

    switch (e.key) {
      case 'ArrowUp':
        if (targetIndex === 0) {
          return;
        } else {
          const index = targetIndex - 1;
          setTargetIndex(index);
          setInputValue(searchResult[index].name);
        }
        break;
      case 'ArrowDown':
        if (targetIndex === maxIndex) {
          return;
        } else {
          const index = targetIndex + 1;
          setTargetIndex(index);
          setInputValue(searchResult[index].name);
        }
      default:
        return;
    }
  };
  </code>
</pre>
