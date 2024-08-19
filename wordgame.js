 function longestWord(item) {
    let array = item.split(' ');
    let sum = 0;
    let longest = '';
    for (let i = 0; i < array.length; i++) {
      let word = array[i];
      if (word.length >= sum) {
        sum = word.length;
        longest = word;
      }
    }
    return longest;
  }
  
function shortestWord(item) {
    let array = item.split(' ');
    let sum = 9999; 
    let shortest = '';
    for (let i = 0; i < array.length; i++) {
      let word = array[i];
      if (word.length <= sum) {
        sum = word.length;
        shortest = word;
      }
    }
    return shortest;
  }
  
 function wordLengths(item) {
    let array = item.split(' ');
    let words = array.map(w => w.length);
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      sum = sum + words[i];
    }
    return sum;
  }
  
export {longestWord,shortestWord,wordLengths}  