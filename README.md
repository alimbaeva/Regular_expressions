
# Регулярные выражения


```
const reg1 = /love/gmi;
const reg2 = new RegExp(`love`, 'gmi');

function check(str, subStr) {
    const reg3 = new RegExp(subStr);
    return reg3.test(str);
}

console.log(check('I love yuo', 'love'))  // true
```



#### флаги


```
console.log(/LOVE/i.test('i love you'));  // true
console.log('i love you'.match(/love/g)); // 0: "love"
console.log('i love you love'.match(/love/g)); // ['love', 'love']
```


###### m - мультистрочного поиска


```
let str = `1 kat
2 ket
3 ket
`;
console.log(str.match(/^\d/mg)); // ['1', '2', '3']
```

## Мeтоды

###### str.match

```
console.log('i love you'.match(/love/))  // ['love', index: 2, input: 'i love you', groups: undefined]
console.log('i love you'.match(/love/g))  //  ['love']

const mySearch = 'i love you love'.match(/like/g) || [];
mySearch[0];
console.log('i love you'.match(/loke/g))  // null
```

###### str.replace(regexp, '')

```
console.log('i love you'.replace(/love/, 'like'));  // i like you
console.log('i love you love'.replace(/love/, 'like'));  // i like you love
console.log('i love you love'.replace(/love/g, 'like'));  //  i like you like
console.log('i love you Love'.replace(/love/g, 'like'));  //  i like you Love
console.log('i love you love'.replace(/love/gi, 'like'));  //  i like you like

```



###### regexp.test(str)

```
console.log(
    /love/.test('I like you')
) 
// false
```



## Буквенные классы


- \d - любая цифра,
- \w - латинская буква, цифра
- \s - пробел
- \D - любой символ кроме \d
- \W - любой символ кроме \w
- \S - любой символ кроме \s
- . - любой символ кроме \n
- \b - обозначение границы слово



###### \d - любая цифра

```
console.log(
    /\d\d/.test('22 january')       // true
)  
console.log(
    /\d/.test('22 january')         // true
)
console.log(
    /\d\d\d/.test('22 january')     //  false
)
```



###### \w - латинская буква, цифра

```
console.log(
    /\w/.test('22 january')        // true
)
```



###### \s - пробел


```
console.log(
    /\s/.test('22 january')   // true
)
console.log(
    /\s/.test('22january')   //  false
)
```


###### \b - обозначение границы слово


```
console.log(/\bjava\b/i.test('javaScript')) // ищем вхождение слов   // false
console.log(/\bjava\b/i.test('java!'))      // true
console.log(/\bjava\b/i.test('java !'))    // true
```

###### . - любой символ кроме \n

```
console.log(
    /./.test('\n')   //  false
)
```


## Якоря


- ^ - Начало строки
- $ - Конец строки


```
console.log(/^\d\d$/.test('22 lanuary')) // с начало идет 2 цифры, конец 2 цифры     //  false
console.log(/^\d\d$/.test('22 lanuary 22')) // с начало идет 2 цифры, конец 2 цифры   //  false
console.log(/^\d\d$/.test('22')) // с начало идет 2 цифры, конец 2 цифры    //  true
console.log(/^\d\d/.test('22 lanuary')) // с начало идет 2 цифры,      // true
console.log(/\d\d$/.test('22 lanuary 22')) //  конец 2 цифры,    // true
```


## Пропуск специальных символов

- [ 
- \ 
- ^ 
- $ 
- ( 
- ) 
- . 
- | 
- ? 
- \* 
- \+ 
- /



```
console.log(/\^\$\./i.test('^$.'))    //  true
console.log(/^$./i.test('^$.'))     //  false

const my = new RegExp('\\^\\$\\.', "i"); // Экранирование спец символов
console.log(my.test('^$.'));    //  true
```


## Наборы и Диапазоны

- [sdr] - любой символ из скобок
- [0-9] - любая цифра от 0 до 9
- [A_Z] - любая буква от A до Z
- [a-z] - любая буква от a до z
- [0-9A-Za-z] - любой символ от 0 до 9, A до Z, a до z

```
console.log(/[sdr]/.test('aaa'))   //  false
console.log(/[sdr]/.test('aaas'))   //  true
console.log(/[а-яё0-9]/.test('aaas'))  //  false
console.log(/[а-яё0-9]/.test('aaasя'))  //  true

console.log(/[^sdr]/.test('aaas')) // Любой символ кроме sdr   //  true
```

1 - . + () -эти сиволы внутри квадратных скобках пишется без экранирования
2 - ^ - ] эти сиволы экранируется

## Квантификаторы

---
Самый простой квантификатор — это число в фигурных скобках: {n}.

Он добавляется к символу (или символьному классу, или набору [...] и т.д.) и указывает, сколько их нам нужно.

Можно по-разному указать количество, например:

Точное количество: {5}
Шаблон \d{5} обозначает ровно 5 цифр, он эквивалентен \d\d\d\d\d.
Диапазон: {3,5}, от 3 до 5 

---



- {n}-точное количество
- {n1, n2}-точное количество от n1 до n2
- {n,}- от n1 и дальше

```
console.log(/\d{3}/.test('123'))  // true
console.log(/\d{3}/.test('12'))   //  false
console.log(/\d{3,}/.test('123456789'))  //  true
console.log(/\d{3,}/.test('123'))   //  true
console.log(/\d{3,}/.test('12'))   // false
```


## cокрашение квантификаторов

- \+ { 1,}
- ? { 0, 1}
- \* { 0,}

```
console.log(/\d+/.test('12'))  //true
console.log(/\d+/.test('ййййййй'))  // false
console.log(/\d?/.test(''))     //true
console.log(/\d?/.test('123'))     //true
console.log(/\d*/.test('1'))    //true
console.log(/\d*/.test(''))    //true
```


## жадность и лень

```
console.log('I "love" or "like" tou'.match(/".+"/g));  //  ['"love" or "like"']
console.log('I "love" or "like" tou'.match(/".+?"/g));  //  ['"love"', '"like"']
```


## Группы захвата

```
console.log(/(go)+/.test('gogogoggo'))  //  true
console.log(/(go){3}/.test('gogo'))    //  false
console.log(/(go){3}/.test('gogogo'))  //  true

console.log('I love you'.match(/(lo)ve/))  // ['love', 'lo', index: 2, input: 'I love you', groups: undefined]
console.log('I love you'.match(/(lo)(ve)/))  //  ['love', 'lo', 've', index: 2, input: 'I love you', groups: undefined]
console.log('I love you'.match(/(lo)(ve)/g))  // ['love']


console.log('Asel Alimbaeva')    // Asel Alimbaeva
console.log('Asel Alimbaeva'.replace(/(\w+) (\w+)/, '$2 $1'))  //  Alimbaeva Asel
console.log('Asel Alimbaeva'.replace(/(?:\w+) (\w+)/, '$2 $1'))  //  $2 Alimbaeva
console.log('Asel Alimbaeva'.replace(/(?:\w+) (\w+)/, '$1'))  //  Alimbaeva
```


## or или


```
console.log(/html|js|css/.test('I love html'))   // true
console.log(/html|js|css/.test('I love python'))  // false
```


#### Примеры


```

const input = '    ';
console.log(/\S/.test(input))   // false

const input2 = '  r  ';
console.log(/\S/.test(input2))    // true

const input3 = '    I love html         ';
console.log(input3.replace(/^\s+|\s+$/g, ''))    //  I love html
console.log(input3.replace(/^\s+|\s+$/g, '').length)   //  11
console.log(input3.trim())    //  I love html
console.log(input3.trim().length)   //  11

const input4 = 'I         love          html';
console.log(input4.replace(/\s+/g, ' '))   // I love html


const checkUrl = 'https://webb.com';
console.log(/^http(s)?:\/\//g.test(checkUrl))       //  true
console.log(/^http(s)?:\/\/(\w+\.)+\w+$/g.test(checkUrl))       //  true


```
