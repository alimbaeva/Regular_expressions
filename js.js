
// const reg1 = /love/gmi;
// const reg2 = new RegExp(`love`, 'gmi');

// function check(str, subStr) {
//     const reg3 = new RegExp(subStr);
//     return reg3.test(str);
// }

// console.log(check('I love yuo', 'love'))

// -------флаги
// console.log(/LOVE/i.test('i love you'));
// console.log('i love you'.match(/love/g));
// console.log('i love you love'.match(/love/g));

// -------m - мультистрочного поиска.

// let str = `1 kat
// 2 ket
// 3 ket
// `;
// console.log(str.match(/^\d/mg));

//  ---------Мeтоды
// ----------3.1 str.match

// console.log('i love you'.match(/love/))
// console.log('i love you'.match(/love/g))

// const mySearch = 'i love you love'.match(/like/g) || [];
// mySearch[0];
// console.log('i love you'.match(/loke/g))



// ---------3.2 str.replace(regexp, '')

// console.log('i love you'.replace(/love/, 'like'));
// console.log('i love you love'.replace(/love/, 'like'));
// console.log('i love you love'.replace(/love/g, 'like'));
// console.log('i love you Love'.replace(/love/g, 'like'));
// console.log('i love you love'.replace(/love/gi, 'like'));


// --------3.3 regexp.test(str)
// console.log(
//     /love/.test('I like you')
// )

// --------4. Буквенные классы

// \d - любая цифра,
// \w - латинская буква, цифра
// \s - пробел
// \D - любой символ кроме \d
// \W - любой символ кроме \w
// \S - любой символ кроме \s
// . - любой символ кроме \n

// console.log(
//     /\d\d/.test('22 january')
// )
// console.log(
//     /\d/.test('22 january')
// )
// console.log(
//     /\d\d\d/.test('22 january')
// )
// console.log(
//     /\w/.test('22 january')
// )
// console.log(
//     /\s/.test('22 january')
// )
// console.log(
//     /\s/.test('22january')
// )
// console.log(
//     /./.test('\n')
// )

//  ----- 5. Якоря

// ^ - Начало строки
// & - Конец строки
// \b - обозначение границы слово

// console.log(/^\d\d$/.test('22 lanuary')) // с начало идет 2 цифры, конец 2 цифры
// console.log(/^\d\d$/.test('22 lanuary 22')) // с начало идет 2 цифры, конец 2 цифры
// console.log(/^\d\d$/.test('22')) // с начало идет 2 цифры, конец 2 цифры
// console.log(/^\d\d/.test('22 lanuary')) // с начало идет 2 цифры,
// console.log(/\d\d$/.test('22 lanuary 22')) //  конец 2 цифры,


// console.log(/\bjava\b/i.test('javaScript')) // ищем вхождение слов
// console.log(/\bjava\b/i.test('java!'))
// console.log(/\bjava\b/i.test('java !'))


// ----- 6. Пропуск специальных символов
// [ \ ^ $ ( ) . | ? * + /

// console.log(/\^\$\./i.test('^$.'))
// console.log(/^$./i.test('^$.'))

// const my = new RegExp('\\^\\$\\.', "i"); // Экранирование спец символов
// console.log(my.test('^$.'));

// --------- 7. Наборы и Диапазоны
// [sdr] - любой символ из скобок
// [0-9] - любая цифра от 0 до 9
// [A_Z]
// [a-z]
// [0-9A-Za-z]


// console.log(/[sdr]/.test('aaa'))
// console.log(/[sdr]/.test('aaas'))
// console.log(/[а-яё0-9]/.test('aaas'))
// console.log(/[а-яё0-9]/.test('aaasя'))

// console.log(/[^sdr]/.test('aaas')) // Любой символ кроме sdr

// 1 - . + () -эти сиволы внутри квадратных скобках пишется без экранирования
// 2- ^ - ] эти сиволы экранируется


// --------7. Квантификаторы
// Количество {n}
// Самый простой квантификатор — это число в фигурных скобках: {n}.

// Он добавляется к символу (или символьному классу, или набору [...] и т.д.) и указывает, сколько их нам нужно.

// Можно по-разному указать количество, например:

// Точное количество: {5}
// Шаблон \d{5} обозначает ровно 5 цифр, он эквивалентен \d\d\d\d\d.
// Диапазон: {3,5}, от 3 до 5

// {n}-точное количество
// {n1, n2}-точное количество от n1 до n2
// {n,}- от n1 и дальше

// console.log(/\d{3}/.test('123'))
// console.log(/\d{3}/.test('12'))
// console.log(/\d{3,}/.test('123456789'))
// console.log(/\d{3,}/.test('123'))
// console.log(/\d{3,}/.test('12'))

// ------- 7.1- окрашение квантификаторов
// + { 1,}
//     ? { 0, 1}
//         * { 0,}


// console.log(/\d+/.test('12'))
// console.log(/\d+/.test('ййййййй'))
// console.log(/\d?/.test(''))
// console.log(/\d?/.test('123'))
// console.log(/\d*/.test('1'))
// console.log(/\d*/.test(''))

// ------ 8- жадность и лень

// console.log('I "love" or "like" tou'.match(/".+"/g));
// console.log('I "love" or "like" tou'.match(/".+?"/g));

// ------9-Группы захвата

// console.log(/(go)+/.test('gogogoggo'))
// console.log(/(go){3}/.test('gogo'))
// console.log(/(go){3}/.test('gogogo'))

// console.log('I love you'.match(/(lo)ve/))
// console.log('I love you'.match(/(lo)(ve)/))
// console.log('I love you'.match(/(lo)(ve)/g))


// console.log('Asel Alimbaeva')
// console.log('Asel Alimbaeva'.replace(/(\w+) (\w+)/, '$2 $1'))
// console.log('Asel Alimbaeva'.replace(/(?:\w+) (\w+)/, '$2 $1'))
// console.log('Asel Alimbaeva'.replace(/(?:\w+) (\w+)/, '$1'))

// ------10.- or или

// console.log(/html|js|css/.test('I love html'))
// console.log(/html|js|css/.test('I love python'))


