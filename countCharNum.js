/**
 * Created by easter on 17-7-21.
 *
 * 输入字符串和字符，返回该字符在字符串中出现的次数
 */

'use strict'
function countCharNum(str,char)
{
    let arr = str.split('');
    let count = 0;
    for(let item of arr)
    {
        if(item == char)
            count ++;
    }

    return count;

}

let str = 'aa abbb bc c';
let result = countCharNum(str,'c');
console.log(result);
