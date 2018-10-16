/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

(function(){
  "use strict"
  var str=["apple","mango","banana","grapes"];
  str.sort();
  console.log("ascending order :- ")
  for(let i=0;i<str.length;i++)
    {
      console.log(str[i]);
    }
  str.reverse();
  console.log("descending order :-");
  for(let i=0;i<str.length;i++)
    {
      console.log(str[i]);
    }
  
})();
/*
Exception: SyntaxError: unexpected token: '{'
@Scratchpad/8:10
*/
/*
Exception: SyntaxError: function statement requires a name
@Scratchpad/8:10
*/