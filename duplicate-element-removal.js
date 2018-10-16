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
  var arr=new Array(10,10,20,31,40,50,50);
  var f=0;
  var temp=0;
  for(let i=0;i<arr.length;i++)
    {
      temp=arr[i];
      for(let j=0;j<arr.length;j++)
        {
          if(temp===arr[j])
            {
              f=f+1;
            }
            
        }
      if(f==2)
        {
          arr.splice(i, 1);
        }
      
      
    }
  for(let i=0;i<arr.length;i++)
    {
      console.log(arr[i]);
    }
  
})();