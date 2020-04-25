// // - создать массив с 20 числами.

// let arr = [20,52,36,45,88,1,2,66,444,125,69998,887,12,3,211,111,355,456,52,0,36,21,48,98,45];
// // -- при помощи метода sort и колбека  отсортировать массив.
//
// let sortArr = arr.sort((a, b)=> {
//     return a-b
// });
// console.log(sortArr);
//

// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sortArr = arr.sort((a, b)=> {
//     return b-a
// });
// console.log(sortArr);

// -- при помощи filter получить числа кратные 3

// let filterArr = arr.filter((value)=>{
//     if (value %3 ===0) {
//         return true
//     }
// });
// console.log(filterArr);

// -- при помощи filter получить числа кратные 10

// let filterArr = arr.filter((value)=> {
//     if ( value%10 ===0) {
//         return true
//     }
// });
// console.log(filterArr);

// -- перебрать (проитерировать) массив при помощи foreach()

// let forEachArr = arr.forEach((value, index, array) =>{
//     console.log(array);
// });
// console.log(forEachArr);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let mapArr = arr.map((value => {
//     return value *3
// }))
// console.log(mapArr);

// - создать массив со словами на 15-20 элементов.

// let stringArr = ['Serghei','Yana','Cztery','Poland','JavaScript','Family','Jora','Annanas','Givi','Uma'];
// -- отсортировать его по алфавиту в восходящем порядке.

// let newArr = stringArr.sort();
// console.log(newArr);

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let sortArr = stringArr.sort(((a, b) => {
//     if (a>b) {
//         return -1
//     } else {
//         return 1
//     }
// }));
// console.log(sortArr);

// -- отфильтровать слова длиной менее 4х символов

// let arr = stringArr.filter((value => {
//     if (value.length <= 4 ){
//         return true
//     }
// }));
//
// console.log(arr);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let newString = stringArr.map(((value, index, array) => {
//     return value + '!'
// }));
// console.log(newString);
//

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

//     let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let sortUsers = users.sort((a, b)=> a.age - b.age);
// console.log(sortUsers);
//
// let sortUser1 = users.sort (((a, b) => b.age - a.age));
// console.log(sortUser1);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sortArr = users.sort(((a, b) => a.name.length - b.name.length));
// console.log(sortArr);
// let sortArr = users.sort(((a, b) => b.name.length - a.name.length));
// console.log(sortArr);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let newArr = users.map(((value, index) => {
//     value.id = index + 1;
//     return value
// }));
// console.log(newArr);
// // - відсортувати його за індентифікатором
// let sortId = newArr.sort(((a, b) => b.id - a.id));
// console.log(sortId);
//
// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculator (a,b,cb) {
// return cb (a,b);
// }
// let sumator = calculator(10,48,(a,b)=>{
//     return a + b;
// });
// console.log(sumator);

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calculator(a,b,c,cb) {
//     return cb (a,b,c);
// }
// let sumVaL = calculator(100,32,87,(a,b,c)=>{
//     return a+b+c;
// });
// console.log(sumVaL);
//

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [
// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year:2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let engineArr = cars.filter((value => {
//     if (value.volume > 3) {
//         return true;
//     }
// }));
// console.log(engineArr);

// - двигун = 2л

// let engineArr = cars.filter((value => {
//     if (value.volume ===2){
//         return true
//     }
// }));
// console.log(engineArr);

// - виробник мерс

// let prodArr = cars.filter((value => {
//     if (value.producer === 'mercedes') {
//         return true;
//     }
// }));
// console.log(prodArr);

// - двигун більше 3х літрів + виробник мерседес
// let filterArr = cars.filter((value => {
//     if (value.volume >= 3 && value.producer === 'mercedes'){
//         return true;
//     }
// }));
// console.log(filterArr);

// - двигун більше 3х літрів + виробник субару

// let filterArr = cars.filter(value => value.volume >= 3 && value.producer === 'subaru');
// console.log(filterArr);

// - сили більше ніж 300

// let filterArr = cars.filter( value => value.power > 300);
// console.log(filterArr);

// - сили більше ніж 300 + виробник субару

// let filteArr = cars.filter( value => value.power > 300 && value.producer === 'subaru');
// console.log(filteArr);

// - мотор серіі ej

// let filterArr = cars.filter( value => value.engine.startsWith('ej'));
// console.log(filterArr);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filterArr = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'));
// console.log(filterArr);

// - двигун меньше 3х літрів + виробник мерседес

// let filterArr = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
// console.log(filterArr);

// - двигун більше 2л + сили більше 250

// let filterArr = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(filterArr);

// - сили більше 250  + виробник бмв

// let filterArr = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// // console.log(filterArr);
//
//
//
// - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей

// let sortArr = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sortArr);

// -- отсортировать его по id пользователей в обратном опрядке

// let sortArr = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sortArr);

// -- отсортировать его по возрасту пользователей

// let sortArr = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sortArr);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let sortArr = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sortArr);

// -- отсортировать его по имени пользователей

// let sortArr = usersWithAddress.sort((a, b) => {
//     if ( a.name > b.name){
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(sortArr);

// -- отсортировать его по имени пользователей в обратном порядке

// let sortArr = usersWithAddress.sort((a, b) => {
//     if ( a.name > b.name){
//         return 1
//     } else {
//         return -1
//     }
// });
// console.log(sortArr);

// -- отсортировать его по названию улицы  в алфавитном порядке

// let sortArr = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street){
//         return -1
//     } else {
//         return 1
//     }
// });
// console.log(sortArr);

// -- отсортировать его по номеру дома по возрастанию

// let sortArr = usersWithAddress.sort((a, b) => {
//     if (a.address.number > b.address.number){
//         return -1
//     }else {
//         return 1
//     }
// });
// console.log(sortArr);

// -- отфильтровать (оставить) тех кто младше 30

// let filterArr = usersWithAddress.filter(value => value.age < 30);
// console.log(filterArr);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filterArr = usersWithAddress.filter(value => value.status === false);
// console.log(filterArr);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filterArr = usersWithAddress.filter(value => value.status === false && value.age < 30);
// console.log(filterArr);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let filterArr = usersWithAddress.filter(value => value.address.number %2 ===0);
// console.log(filterArr);
//
//

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// let carArr = [
//     {modelCar:'Audi', power:500, price:25000, year:2010, owner:{name:'Victor',age:26,experience:1}},
//     {modelCar:'Opel', power:140, price:9000, year:2006, owner:{name:'Andriy',age:26,experience:1}},
//     {modelCar:'Volvo', power:77, price:5000, year:2003, owner:{name:'Serhiy',age:28,experience:10}},
//     {modelCar:'Lada', power:50, price:1000, year:1999, owner:{name:'Vasia',age:19,experience:3}},
//     {modelCar:'Toyota', power:200, price:16000, year:2007, owner:{name:'Yana',age:26,experience:0}},
//     {modelCar:'Jeep', power:320, price:50000, year:2019, owner:{name:'Ivan',age:24,experience:6}},
//     {modelCar:'Shkoda', power:100, price:7000, year:2011, owner:{name:'Taras',age:55,experience:20}},
//     {modelCar:'Subaru', power:300, price:4200, year:1996, owner:{name:'Tranduile',age:77,experience:50}},
//     {modelCar:'BMW', power:650, price:117000, year:2019, owner:{name:'Efim',age:120,experience:100}},
//     {modelCar:'Tavria', power:10, price:10, year:1995, owner:{name:'Eugene',age:10,experience:1}},
// ];
// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// for (let i = 1; i < carArr.length; i+=2) {
//     carArr[i].power = carArr[i].power / 100 * 10 + carArr[i].power;
// }
// // console.log(carArr);
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// for ( let i = 1; i < carArr.length; i+=2) {
//     carArr[i].owner = carArr[i].owner = {name: 'NewDriver', age: null, experience: null}
// }
// console.log(carArr);
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// //     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// for (let i = 1; i < carArr.length; i +=2) {
//     carArr[i].power = carArr[i].power / 100 * 10 + carArr[i].power;
//     carArr[i].price = carArr[i].price / 100 * 5 + carArr[i].price;
// }
// console.log(carArr);
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//
// for ( let i = 0; i < carArr.length; i++) {
//     if (carArr[i].owner.experience < 5 && carArr[i].owner.age > 25) {
//         carArr[i].owner.experience ++;
//     }
// }
// console.log(carArr);
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sumOfPrices = carArr.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.price;
// },0);
// console.log(sumOfPrices);
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

//    let  Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// function iterator(arr,el) {
//     let min = null;
//     let max = null;
//     for (let i = 0; i < arr.length; i++ ) {
//         if (arr[i] === el){
//             if (!min) min = i;
//             max = i;
//         }
//     }
// min
//     ? console.log (`Answer: MinIndex = ${min}, MaxIndex = ${max}.`)
//     : console.log (-1)
// }
// iterator(Arr,9);
