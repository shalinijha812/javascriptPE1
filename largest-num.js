/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

(function(){
  "use strict";
  var temp=0;
  var num=new Array(10,20,30,40,50);
  for (let i=0;i<num.length;i++)
    {
      
      if (num[i]>temp)
        {
          temp=num[i];
        }
    }
    console.log("Largest number" , temp);
  })();
/*
Exception: SyntaxError: missing } after function body
@Scratchpad/6:24
*/
/*
Exception: ReferenceError: assignment to undeclared variable i
@Scratchpad/2:14:8
@Scratchpad/2:10:2
*/