/**
 * 获取字符串中最长的单词
 * Created by easter on 17-7-17.
 */


'use strict'
function getLongestWord(str)
{
    // var str = "I have a pencil";
    var arr = str.split(' ');
    let longestwordlength = 0;
    let longestword;
    for(let i=0;i<arr.length;i++)
    {
        if (arr[i].length > longestwordlength)
        {
            longestwordlength = arr[i].length;
            longestword = arr[i];
        }

    }
    
    return longestword;

}


var str = "I havenot a pencilcase";
let longest = getLongestWord(str);
console.log(longest);