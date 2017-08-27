/**
 * Created by easter on 17-8-28.
 * 求一组数字的平均值，arguments对象
 */
'use strict'

function avg()
{
    var sum = 0,len = arguments.length;
    for(let i=0;i<=len;i++)
    {
        sum+=i;
    }

    var avg = sum/len;
    return avg;
}

var result = avg(1,2,3,4,5);
console.log(result);
