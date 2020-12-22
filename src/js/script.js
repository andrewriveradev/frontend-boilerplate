const bigInt = 2e10
console.log(bigInt)

const bigInt2 = 2e-10
console.log(bigInt2)
// Охеренно работает, но не в обратную сторону

const num1 = 3.16
console.log(Math.trunc(num1))
// удаление дробной части

console.log(Math.floor(num1))
// округление вниз

console.log(Math.PI)
// просто вывод числа Пи

const num3 = 445.1234
const num3fixed = num3.toFixed(2)
console.log(typeof num3fixed)
// оставление после запятой указанного числа знаков
// и этот метод возвратит строку а не число

const num4 = 6.35
console.log((num4 * 10).toFixed(10))
// хрень какая-то


const str3 = 'ololo'
const str4 = str3 + 'huy'
console.log(str4)
// строки

const str5 = '   Toyota RAV4  '
console.log(str5.includes('RAV5'))
console.log(str5.trim().length)

const extractCurrencyValue = (price) => {
    if (price.startsWith('$')) {
        console.log(price.slice(1))
    } else {
        console.log('incorrect value!')
    }
}
extractCurrencyValue('50$')
// выделение числа из стоимости

const Person = {
    age: 30,
    name: 'Petro',
    sayHiFunc() {
        setTimeout(function () {
            console.log(`Hi, my name is ${this.name}!`)
        }, 100)
    },
    sayHiArrow () {
        setTimeout(() => {
            console.log(`Hi, my name is ${this.name} again!`)
        }, 100)
    }
}

Person.sayHiFunc()
Person.sayHiArrow()
// наглядно показано различие в контексте при использовании разных типов функций
// надо не забывать вызывать функции!

const greet = 'hi, my name is '
const name1 = (def = 'man with no name') => {
    return (def)
}

const myFunc = (hi = greet, getName = name1('eminem')) => {
    return (hi + getName)
}
console.log(myFunc())
// сейчас попробуем с параметрами по умолчанию
// надо не забывать вызывать функции

const average = (...arr) => {
    return arr.reduce((accum, element) => (accum += element) / arr.length)
}
console.log(average(23, 34, 23, 998, 24, 56, 100))
// тут все дело в области видимости
