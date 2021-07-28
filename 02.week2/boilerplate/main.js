// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.





// <과제 상세 설명>
// 상품 데이터와 사용자가 입력한 금액을 넘겨 받아 해당 금액으로 살 수 있는 가장 비싼 상품을 리턴하는 함수를 만들어야 합니다.

// 함수명 : getItemByAmount
// 인자 : 상품 데이터, 사용자가 입력한 금액
// 리턴 : 로직에 의해 선택된 상품 (없다면 null)

// <점검 및 합격 기준>
// 주어진 boilerplate의 지정된 장소에 함수를 만듭니다.
// 요구사항에 맞춰 로직을 작성합니다.
// 사용자의 입력이 유효한 숫자가 아니라면 null을 리턴합니다.
// 코드의 이해가 쉽도록 주석을 적절히 추가합니다.
