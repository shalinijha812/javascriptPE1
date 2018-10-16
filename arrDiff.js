/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

(function(){
  var arr1= new Array(10,20,30,40,50);
  var arr2=new Array(20,70,60,60,120);
  var diffArr=new Array(5);
  for(let i=0;i<arr1.length;i++)
    {
      diffArr[i]=arr2[i]-arr1[i];
      console.log(diffArr[i]);
    }
  
})();