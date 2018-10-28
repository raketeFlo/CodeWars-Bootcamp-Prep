/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot. Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each sub array has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

function bingo(ticket, win){
 let countWins = 0;
 for (let i = 0; i < ticket.length; i++) {
   for (let j = 0; j < ticket[i][0].length; j++) {
     if (ticket[i][0].charCodeAt(j) == ticket[i][1]) {
       countWins += 1;
    }
   }
 }
 if (countWins >= win) {
 return 'Winner!';
 } else {
 return 'Loser!';
 }
}

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');


