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
  var obj = {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}
  console.log(Object.values(obj));
//  var obj ='{"One":"1","Two":"2","Three":"3","Four":"4"}';
// var jsArray=JSON.parse('{"One":"1","Two":"2","Three":"3","Four":"4"}');
// console.log(jsArray);
  
})();
// var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
//   var obj=JSON.parse('{"mike":"Book","jason":"sweater","chels":"iPad"}');
//   console.log(obj);

/*
Exception: SyntaxError: '' string literal contains an unescaped line break
@Scratchpad/2:12
*/