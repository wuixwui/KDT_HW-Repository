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

const viewText = document.querySelector('h1')

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

// 화면에 구매할 물건 나타내보기
function viewItem () {
    viewText.innerText= `🤗 ${item.name} 사볼까?`
}

// 삼항 연산자
// item이 true면 
const msg = item ? 
`${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
'살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);
viewItem()

// 아래에 getItemByAmount 함수를 작성하세요.

function getItemByAmount(data, amount) {
    // 사용자에게 입력받은 값을 int로 타입을 바꿔줍니다.
    const userPrice = parseInt(amount);
    // 비어있는 객체를 생성합니다.
    let cart = null;
    // 만약 price가 숫자가 아니라면 null값을 리턴합니다.
    if (isNaN(userPrice)) {
        return null;
    }else { // 숫자가 맞다면 다음을 수행합니다.
        for (let i = 0; i < data.length; i++) {
            // 사용자가 가진 금액이 0원이거나 0보다 작다면 null을 리턴합니다.
            if (data[i].price === 0 || data[i].price < 0) {
                return null;
            // 사용자가 가진 금액보다 물건이 비싸면 넘어갑니다. 
            } else if (data[i].price > userPrice) {
                continue;
            // 사용자가 가진 금액보다 작은 물건 중 가장 큰 값을 찾는 조건문을 실행합니다.
            } else { 
                // 객체가 비어있다면 첫번째 물건을 넣어줍니다.
                if (cart === null) {
                    cart = data[i];
                // 객체가 비어있지 않다면 다음을 진행합니다.
                } else {
                    // 객체의 값보다 큰 값의 물건이 나오면 객체안의 물건을 큰 물건으로 바꿔줍니다.
                    if (data[i].price > cart.price) {
                        cart = data[i];
                    }
                }
            }
        }
        // 가장 비싼 물건이 담긴 객체를 반환합니다.
        return cart
    }

};




