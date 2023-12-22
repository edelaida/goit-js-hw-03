// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких
// будуть задаватися під час її виклику: • content— перший параметр,
//  ширина контенту • padding — другий параметр, значення
// горизонтального падінгу для кожної зі сторін • border — третій параметр,
// значення товщини бордера для кожної зі сторін Значення всіх параметрів
// будуть рядками формату Npx де N — це довільне число, ціле або дробове.

// Доповни код функції так, щоб вона повертала число —загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box - sizing
// дорівнює border - box.

// Візьми код нижче і встав після оголошення своєї функції для перевірки
// коректності її роботи.У консоль будуть виведені результати її роботи.

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// function getElementWidth(content, padding, border) {
//     return (Number.parseFloat(content) + 2 * Number.parseFloat(padding) + 2 * Number.parseFloat(border));
// }
// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));


// Задача 3. Перевірка спаму
// Функція checkForSpam(message) приймає рядок(параметр message),
//     перевіряє його на вміст заборонених слів spam і sale,
//     і повертає результат перевірки.Слова в рядку параметра message 
//         можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false
// Візьми код нижче і встав після оголошення своєї функції для перевірки 
// коректності її роботи.У консоль будуть виведені результати її роботи.
    
function checkForSpam(message) {
    message = message.toLowerCase()
    return (message.includes('spam') || message.includes('sale')); 
    } 
    
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
