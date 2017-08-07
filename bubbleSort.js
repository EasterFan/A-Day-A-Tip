/**
 * Created by easter on 17-7-20.
 */
'use strict'



function bubbleSort(arr)
{
    var n = arr.length;
    var temp = null;

    for (let i=0; i<n; i++)
    {
        for(let j=0; j<n-i; j++)
        {
            if(arr[j]>arr[j+1])
            { //如果a[j]>a[j+1]则交换位置
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

}

let arr = [8,33,76,3,2,5,6];
let result = bubbleSort(arr);
console.log(result);