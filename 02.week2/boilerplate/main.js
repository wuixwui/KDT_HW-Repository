// 상품 데이터
const data = [
  { name: "초콜렛", price: 2000 },
  { name: "아이스크림", price: 1000 },
  { name: "컵라면", price: 1600 },
  { name: "볼펜", price: 2500 },
  { name: "아메리카노", price: 4000 },
  { name: "과자", price: 3000 },
  { name: "탄산수", price: 1200 },
  { name: "떡볶이", price: 3500 },
  { name: "노트", price: 1500 },
  { name: "껌", price: 500 },
];

// 사용자 입력 받기
const line = prompt("최대 금액을 입력해주세요.");
//str을 number로 형변환
const amount = parseInt(line);
const viewText = document.querySelector("h1");

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);
// 화면에 구매할 물건 나타내보기
function viewItem() {
  viewText.innerText = `🤗 ${item.name} 사볼까?`;
}

// 삼항 연산자
// item이 true면
const msg = item
  ? `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.`
  : "살 수 있는 상품이 없습니다.";

// 결과 출력
alert(msg);
viewItem();

function getItemByAmount(data, amount) {
  // 숫자가 맞다면 다음을 수행합니다.
  if (typeof amount === "number") {
    // data.price가 사용자가 입력한 값보다 작으면 userCart에 담는다.
    const userCart = data.filter((item) => item.price < amount);
    // 가격이 높은 순부터 정렬한다.
    const userGetItem = userCart.sort(
      (item, compareItem) => compareItem.price - item.price
    );
    //제일 앞에 있는 data를 return한다.
    return userGetItem[0];
  }
  // 숫자가 아니라면 null을 retrun한다.
  return null;
}
