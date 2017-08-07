/**
 * Created by easter on 17-8-7.
 */

/**
 *
 *
 * 输入两个字符串片段，计算里面的每个单词出现的次数
 Example
 chunk1: "Google Bye GoodBye Hadoop code"
 chunk2: "lintcode code Bye"

 result:
 Bye: 2
 GoodBye: 1
 Google: 1
 Hadoop: 1
 code: 2
 lintcode: 1

 */

'use strict'

function mergeString(str1,str2)
{
    let arr1 = str1.split(" ");
    let arr2 = str2.split(" ");
    let arr = arr1.concat(arr2);

    return arr;
}


function count(arr)
{
    let map = new Map();
    for (let item of arr)
    {
        if(map.has(item)){
            map.set(item,map.get(item)+1);
        }else {
            map.set(item,1);
        }
    }

    return map;

}

let str1 =  "Google Bye GoodBye Hadoop code";
let str2 = "lintcode code Bye";
let arr = mergeString(str1,str2);
let map = count(arr);
console.log(map);
