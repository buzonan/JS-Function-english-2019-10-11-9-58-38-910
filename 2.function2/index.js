function palindrome(message){
  // wirte your code here
  var result = '';
  var num = message.length;
  for(var i = message.length; i--;){
  	result += message.charAt(i);
  }

  if(message === result){
  	return true;
  }
  return false;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true