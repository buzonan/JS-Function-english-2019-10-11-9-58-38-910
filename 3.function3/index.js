function alphabetSort(message){
  // wirte your code here
  var sortedMessage = message.split('').sort();
  return sortedMessage.join('');

}
alphabetSort('hello'); // should return 'ehllo'