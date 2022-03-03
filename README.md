
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
