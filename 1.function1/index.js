function reverseString(message){
  // write your code here
  var result = '';
  var num = message.length;
  for(var i = message.length; i--;){
  	result += message.charAt(i);
  }
  return result;
}
reverseString('hello'); // should return 'olleh'