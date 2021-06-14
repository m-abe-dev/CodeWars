// Best Practice
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }



// My answer

// 1 I am given a number and expecting a number back
// 2 as I want the highest number I should sort the number in a descending way
// 3 can only call the sort if I convert the number into an array. But first, I will have to convert the number to a string and only then can I split it.
// 4 from the given examples its reversed so call the reverse method
// 5 and then I want to join it back to a number

function descendingOrder(n){
    let nString = n.toString();
    let nSplit = nString.split("");
    let nSort = nSplit.sort();
    let nReverse = nSort.reverse();
    let nJoin = nReverse.join("")
    let nBackNumber = Number(nJoin);

    return nBackNumber;
  }

// JavaScript Demo: Standard built-in objects - parseInt()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// JavaScript Demo: Array.sort()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//   JavaScript Demo: String.split()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split

// JavaScript Demo: Array.join()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join
