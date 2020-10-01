function countWords(message){
  // wirte your code here
  var messageCount = message.split(' ');
  return console.log(messageCount.length);
}
countWords('Good morning, I love JavaScript.'); // should return 5

