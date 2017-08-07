/**
 * 求100以内所有质数
 * 只有1和本身能被整除的数
 * Created by easter on 17-7-24.
 */

'use strict'

function zhishu()
{
   let arr = [];
   for (let i = 3;i<100;i++)
   {
       for (let j =2; j<i;j++)
       {
           if(i % j == 0)
               break;
           if(i - 1 == j)
               arr.push(i);

       }
   }

   return arr;
}

let arr = zhishu();
let result = "100以内的质数有：" + arr;
console.log(result);