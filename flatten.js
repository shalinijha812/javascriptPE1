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
  var myObj = [5, [22], [[14]], [[4]],[5,6]];
 var arr= myObj.flat(2);
//   var flatten=require('flat')
//   var arr=flatten(myObj,2);
  
//   for(let i=0;i<arr.length;i++)
//     {
//       console.log(arr[i]);
//     }
  console.log(Object.values(arr));
  
})();
/*
Exception: ReferenceError: require is not defined
@Scratchpad/1:13:7
@Scratchpad/1:10:2
*/