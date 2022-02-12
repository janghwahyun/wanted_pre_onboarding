### 제가 구현한 기능은 총 5가지 입니다.

<details>
  <summary>ClickToEdit</summary>
  
  <img src="https://user-images.githubusercontent.com/74212632/153619774-1afb9098-ce41-4620-9d5f-a2ac84d73433.gif">

 * 이름과 나이를 input박스에 적으면 정리된 문장으로 Return됩니다. usestate에 저장된 `e.target.value`를 보여줍니다. 
 
</details>


<details>
  <summary>Modal</summary>
  
  <img src="https://user-images.githubusercontent.com/74212632/153616658-5d56f2af-125c-4fc0-9bc2-0f14ba18528e.gif">
 
 * 오픈버튼 클릭 시, 모달창이 띄어주는 순서로 작동됩니다. 이슈로는 모달창 삭제버튼이 아닌 모달창 클릭 시, 모달창이 꺼지는 현상이 발생했습니다. 이유는 해당 태그만이 클릭 이벤트를 감지하는 것이 아니라 태그를 감싸고 있는 부모 태그들도 클릭 이벤트를 인식하고 반응하는 버블업 현상이 때문이라고 판단되었습니다. 해결책으로는 `event.stopPropagation()`을 사용하여 상위요소로 해당 이벤트를 전달하지 않고 자신만 이벤트를 감지하도록 적용하여 모달창을 눌렀을 때 이벤트가 발생하는 문제를 해결했습니다. 모달창 회색 배경을 클릭할 경우도 모달창이 꺼지는 상태를 추후 개선해야할 문제라고 생각합니다.

</details>


<details>
  <summary>Tab</summary>
  
  <img src="https://user-images.githubusercontent.com/74212632/153618773-e3d57f7e-bc6e-40dc-96c5-624a077abbc8.gif">

* Tab 이름과 관련 문구를 배열로 정의하고 map 메서드를 적용했습니다. 이벤트 발생시 핸들러로 전달된 index번호와 map메서드로 탐색한 index번호의 동일함을 판단해 해당 value값을 나타냈습니다. 이슈로는 3개의 Tab위치가 고정되지 않아 각가의 Tab을 클릭 할 경우, 위치가 고정되지 않고 움직이는 현상이 발생했습니다. 이를 해결하기위해 flex-grow를 사용해서 균일한 공간을 배정할 수 있었습니다.
</details>



<details>
  <summary>Tag</summary>
  
  <img src="https://user-images.githubusercontent.com/74212632/153699294-978d45fb-725a-4e1f-ab39-6107ee635c1c.gif">

  *  map함수의 index를 받아 클릭된 인덱스 정보를 활용해서 태그를 추가, 삭제를 시킬 수 있게 구현했습니다. input box에 map으로 같은 단어는 넣을 수 없게 alert기능을 추가했습니다.  

</details>



<details>
  <summary>Toggle</summary>
  
  <img src="https://user-images.githubusercontent.com/74212632/153618799-ca98fd10-b7ee-4e28-a3c5-4633cfd9281b.gif">
  
  *라이브러리 없는 구현은 처음 이었습니다. usestate상태 변화를 통해서 태그 className을 삼항연산자를 사용해 변경해주면서 토글 스위치 움직임을 구현했습니다. CSS의 `transition`과 `linear-gradien`를 사용하여 자연스럽게 색이 채워지는 모습을 구현했습니다.
</details>



