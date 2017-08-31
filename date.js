/**
 * 输出今天星期几（优化）
 */
var week = new Date().getDay();
var weekstr = '';
switch (week){
    case 0:
        weekstr = "日";
        break;
    case 1:
        weekstr = "一";
        break;
    case 2:
        weekstr = "二";
        break;
    case 3:
        weekstr = "三";
        break;
    case 4:
        weekstr = "四";
        break;
    case 5:
        weekstr = "五";
        break;
    default:
        weekstr = "六";
        break;
}
console.log("今天是星期" + weekstr);