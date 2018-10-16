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
  var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };
  var arr=Object.getOwnPropertyNames(student);
  //console.log(...arr);
  console.log(arr.join(","));
 
//   for(let i=0;i<arr.length;i++)
//     {
//       console.log(arr[i]);
//     }
/*
Exception: ReferenceError: arr is not defined
@Scratchpad/2:1:15
*/
/*
// Exception: SyntaxError: expected expression, got end of script
// @Scratchpad/2:4
// */
// //   var getKeys = function(student){
// //                                var keys = [];
// //                                for(var key in obj){
// //                                   keys.push(key);
                              
// //                                }
// //    return keys;
// //   }
  
// //   for(let i=0;i<keys.length;i++)
// //     {
// //       console.log(keys[i]+ " ");
// //     }
  
})();

/*
Exception: SyntaxError: expected expression, got '.'
@Scratchpad/2:17
*/
/*
Exception: SyntaxError: expected expression, got ','
@Scratchpad/5:18
*/