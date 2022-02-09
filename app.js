function  reverseStr(str) {
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();

    var reversedStr = reverseListOfChars.join('');

    return reversedStr;
    // return str.split('').reverse().join('');

}

function isPalindrome(str) {
var reverse = reverseStr(str);

return str === reverse
}


function convertDateToStr(date) {
    var dateStr = { day: '', month: '', year: ''};

    if (date.day < 10) {
        dateStr.day = '0' + date.day;    
    } 
    else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = '0' + date.month;    
    } 
    else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr
}



