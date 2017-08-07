
'use strict'
/**
 * Created by easter on 17-7-18.
 * 字符串中单词小写改为大写---- i have a pencil====> I Have A Pencil
 */

function firstUpperCase(str) {

    let result = str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());

    return result;
}



let str = "i Have a pencil."
let result = firstUpperCase(str);
console.log(result);
