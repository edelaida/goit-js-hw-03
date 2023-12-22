// Оголоси функцію getShippingMessage, яка очікує три параметри,
//     значення яких будуть задаватися під час її виклику:

// country — перший параметр, рядок, що містить країну доставки
// price — другий параметр, число, що містить загальну вартістьовару
// deliveryFee — третій параметр, число, що містить вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням
// про доставку товару в країну користувача:
// "Shipping to <country> will cost <totalPrice> credits", де:

// <country> — це країни доставки
// <totalPrice> — це загальна вартість замовлення, що включає вартість
// товару і його доставки
// Візьми код нижче і встав після оголошення своєї функції
// для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));

// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = (price + deliveryFee);
//     return(`Shipping to ${country} will cost ${totalPrice} credits`)
// }
// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));


// Задача 2. Форматування повідомлення

// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок(параметр message)
// та перевіряє його довжину відповідно до заданої максимальної довжини(параметр maxLength).

// Доповни код функції таким чином, що:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий 
// рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів,
//     додає трикрапку "..." в кінці та повертає обрізану версію.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності 
// її роботи.У консоль будуть виведені результати її роботи.

function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return (message);
    } else {
        message = message.slice(0, maxLength);
        return (`${message}...`);
    } 
  }     
    
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


 