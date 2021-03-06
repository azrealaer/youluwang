/**
 * Created by ttc on 18-2-8.
 */
function toTwo ( n ) {

    if(n < 10)
    {
        return '0' + n;
    }
    else
    {
        return '' + n;
    }
//            return n < 10 ?  '0' + n : '' + n;
}

function showTime() {
    var h1 = document.getElementById('time');
    var myTime = new Date();
    var iYear = myTime.getFullYear();
    var iMonth = myTime.getMonth()+1;
    var iDate = myTime.getDate();
    var iWeek = myTime.getDay();//星期几？0代表星期日
    var iHours = myTime.getHours();
    var iMin = myTime.getMinutes();
    var iSec = myTime.getSeconds();

    if( iWeek === 0 ) iWeek = '星期日';
    if( iWeek === 1 ) iWeek = '星期一';
    if( iWeek === 2 ) iWeek = '星期二';
    if( iWeek === 3 ) iWeek = '星期三';
    if( iWeek === 4 ) iWeek = '星期四';
    if( iWeek === 5 ) iWeek = '星期五';
    if( iWeek === 6 ) iWeek = '星期六';

    var str = iYear+ '年' +iMonth+'月'+iDate+'日 '+iWeek+' '+ toTwo(iHours)+' : '+ toTwo(iMin)+' : '+ toTwo(iSec);
    h1.innerHTML = str;
}

window.onload = function () {
    showTime();
    setInterval(showTime,1000);
}