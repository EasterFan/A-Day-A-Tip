/**
 * 合并两个数组，去除重复元素
 * Created by easter on 17-7-19.
 */

'use strict'



function linkArrays(arrA, arrB)
{
    var arrC = arrA.concat(arrB);
    var arrD = [];
    for(let i=0; i<arrC.length; i++)
    {
       if (arrD.indexOf(arrC[i]) == -1)
       {
           arrD.push(arrC[i]);
       }
    }

    return arrD;

}


let arrA = [1,2,3,4,5];
let arrB = [2,2,3,4];
let arrC = linkArrays(arrA,arrB);
console.log(arrC);

