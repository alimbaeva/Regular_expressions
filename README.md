
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
console.log(/LOVE/i.test('i love you'));
console.log('i love you'.match(/love/g));
console.log('i love you love'.match(/love/g));
```


###### m - мультистрочного поиска


```
let str = `1 kat
2 ket
3 ket
`;
console.log(str.match(/^\d/mg));
```

## Мeтоды

###### str.match

```
console.log('i love you'.match(/love/))
console.log('i love you'.match(/love/g))

const mySearch = 'i love you love'.match(/like/g) || [];
mySearch[0];
console.log('i love you'.match(/loke/g))
```

###### str.replace(regexp, '')

```
console.log('i love you'.replace(/love/, 'like'));
console.log('i love you love'.replace(/love/, 'like'));
console.log('i love you love'.replace(/love/g, 'like'));
console.log('i love you Love'.replace(/love/g, 'like'));
console.log('i love you love'.replace(/love/gi, 'like'));

```



###### regexp.test(str)

```
console.log(
    /love/.test('I like you')
)
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
    /\d\d/.test('22 january')
)
console.log(
    /\d/.test('22 january')
)
console.log(
    /\d\d\d/.test('22 january')
)
```



###### \w - латинская буква, цифра

```
console.log(
    /\w/.test('22 january')
)
```



###### \s - пробел


```
console.log(
    /\s/.test('22 january')
)
console.log(
    /\s/.test('22january')
)
```


###### \b - обозначение границы слово


```
console.log(/\bjava\b/i.test('javaScript')) // ищем вхождение слов
console.log(/\bjava\b/i.test('java!'))
console.log(/\bjava\b/i.test('java !'))
```

###### . - любой символ кроме \n

```
console.log(
    /./.test('\n')
)
```


## Якоря


- ^ - Начало строки
- & - Конец строки


```
console.log(/^\d\d$/.test('22 lanuary')) // с начало идет 2 цифры, конец 2 цифры
console.log(/^\d\d$/.test('22 lanuary 22')) // с начало идет 2 цифры, конец 2 цифры
console.log(/^\d\d$/.test('22')) // с начало идет 2 цифры, конец 2 цифры
console.log(/^\d\d/.test('22 lanuary')) // с начало идет 2 цифры,
console.log(/\d\d$/.test('22 lanuary 22')) //  конец 2 цифры,
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

