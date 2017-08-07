/**
 * 求前n个斐波那契数的和
 * 斐波那契数：前两个数之和等于下一个数
 * Created by easter on 17-7-14.
 */
'use strict';
function fb(end)
{
    var num1 = 0;
    var num2 = 1;
    var num3 = 0;

    if(end == 0)
    {
        return num1;

    }else if(end == 1){

        return num2;

    }else {

        for(let i=0;i<end-2;i++) {
            num3 = num1 + num2;
            num1 = num2;
            num2 = num3;
        }
    }
        return num3;

}

console.log(fb(10));