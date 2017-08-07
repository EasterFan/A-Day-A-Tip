/**
 *
 * Created by easter on 17-7-25.
 */

/*
* 要求：打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，
 其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，
 因为153=1的三次方＋5的三次方＋3的三次方。
* */
'use strict'

function waterflower()
{
    let g,s,b;
    var result = [];
    for(let i=100;i<1000;i++)
    {
        g = parseInt(i % 10);
        s = parseInt((i/10 ) % 10);
        b = parseInt((i/100 ) % 10);


        if(i == g*g*g + s*s*s + b*b*b)
        {
            result.push(i);

        }
    }

    return result;

}

let result = waterflower();
console.log(result);