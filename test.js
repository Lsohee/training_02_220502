// console.log("test");

// 1;
// 활용도가 없을뿐 값이 존재함 (에러가 안남)
// 변수를 왜 쓰느냐
//  데이터 숫자 타입 1이라는 저 값을 쓸 방법이 없음 -> 변수를 사용하지 않으면


// let one ; // 변수 선언은 했고 값이 무엇인지는 가르키지 않는 상태 




// console.log(one);
// 식별을 위해 값과변수를 '대입'하는 과정을 통한다 =(이퀄표시)
// let test = 1; // 변수 선언과 동시에 값을 가르킴
//선언하고 값을 연결 시킴
//? 숫자 1이라는 것이 값이 할당이 되면 RAM이라는 메모리에 담김 "식별하는 방법" ===변수의 큰의미


// undefined는 에러가 아님 변수는 존재하지만 무엇을 가르키로 있지 않는 상태



// const two = 1;  // 제대로 된 초기화가 필요함 --> 변수 선언과 동시에 값도 같이 가르키게 만든다
// console.log(two);
// 값이 선언이 안됐어
// 에러가 나니까 -> 해결만 하면 결점이 없어짐 --> 안정성이 good

// console.log(1==="1");
// 숫자 데이터와 문자열 데이터를 구분을 못함



// let a= 1;
// let b= "2";
// // console.log(a===b);
// // console.log(typeof a=== typeof b); // 값이 아닌 값의 데이터 타입을 비교함 typeof 를 많이 쓸것
// let change = String(a);
// console.log(typeof change);


// console.log(a+change);
// 숫자 1을 문자열 1로 바꿈 


// let chea = null;
// // todo: null 존재는 하지만 비어있는 값 , 프로그래밍만 있는 개념 "빈공간"
// console.log(typeof chea);


// let arr = ["피카츄", "라이츄", "파이리", "꼬부기", "야도란"];
// console.log(typeof arr);
// console.log(Array.isArray(arr)); // 배열을 확인하고 싶으면 이거



let text = "나는 잘생긴 공욱재다";
console.log(text[7],text[8],text[9]);
console.log(text.length);