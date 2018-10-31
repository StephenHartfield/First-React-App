export function convertToRoman(num) {
  var newNum = num.toString().split('').map(x => parseInt(x));
  
  var numerals = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M']];
  var result = '';
  
  for(var i = 1; i <= newNum.length; i++) {
  result = getResult(newNum[i - 1], numerals[newNum.length - i])
  }
    
    function getResult(num, numerals) {
      switch(num) {
      case 0:
        result += '';
        break;
      case 1:
        result += numerals[0];
        break;
      case 2:
        result += (numerals[0] + numerals[0]);
        break;
      case 3:
        result += (numerals[0] + numerals[0] + numerals[0]);
        break;
      case 4:
        result += (numerals[0] + numerals[1]);
        break;
       case 5:
        result += numerals[1];
        break;
      case 6:
         result += (numerals[1] + numerals[0]);
        break;
      case 7:
        result += (numerals[1] + (numerals[0] + numerals[0]));
        break;
      case 8:
        result += (numerals[1] + (numerals[0] + numerals[0] + numerals[0]))
        break;
      case 9:
        result += (numerals[0] + numerals[2]);
        break;
    }
      return result;
    }
  return result;
}