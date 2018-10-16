/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

(function(){
var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
  function compare_to_sort(x,y) 
 {
  if (x.title < y.title)
    return -1;
  if (x.title > y.title)
    return 1;
  return 0;
 }

console.log(library.sort(compare_to_sort));

})();
//  library.sort(function(obj1, obj2) {
// 	// Ascending: first age less than the previous
// 	return obj2.title - obj1.title;
// });
//  for(let i=0;i<library.length;i++)
//  {
//         console.log(library[i]);
//  }
  
//
/*
Exception: ReferenceError: myObj is not defined
@Scratchpad/2:26:3
@Scratchpad/2:10:2
*/
/*
Exception: ReferenceError: myObj is not defined
@Scratchpad/2:26:3
@Scratchpad/2:10:2
*/
/*
Exception: SyntaxError: expected expression, got '*'
@Scratchpad/2:27
*/