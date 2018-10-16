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
 
  var strSplitted=[];
  var k=0;
  
  
  function getCount(str1,char1)
  {
     var count=0;
   strSplitted=str1.split('');
    for(let i=0;i<strSplitted.length;i++)
      {
        if(strSplitted[i]===char1)
          //console.log(strSplitted[i]);
          count =count+1;  
      }
    return count;
    
  }
  var countf=getCount("shalini","i");
  console.log("number of occurences :-",countf);
 
 
 })();

