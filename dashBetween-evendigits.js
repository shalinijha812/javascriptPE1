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
  var num=window.prompt();
  //var num=0245678;
  var str=num.toString();
  const result = [str[0]];
  for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
  
})();



/*
Exception: SyntaxError: "0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead
@Scratchpad/1:12
*/
/*
Exception: SyntaxError: unexpected token: numeric literal
@Scratchpad/1:12
*/
/*
Exception: SyntaxError: missing octal digits after '0o'
@Scratchpad/1:12
*/