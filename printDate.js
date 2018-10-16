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
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var day=today.getDay();
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var hr=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();
  
  var prepand=(hr>=12)?"PM":"AM";
  hr=(hr>=12)?hr-12:hr;
  if (hr===0 && prepand==='PM')
    {
      if(min===0 && sec===0)
        {
          hr=12;
          prepand='Noon';
        }
      else
        {
          hr=12;
          prepand='PM';
        }
    }
 if (hr=== 0 && prepand==='AM')
    {
      if(min===0 && sec===0)
        {
          hr=12;
          prepand='Midnight';
        }
      else
      {
        hr=12;
        prepand='AM';
      }
    }
    

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 
console.log(`Day: ${daylist[day]}, Current Time : ${hr}${prepand} : ${min} : ${sec} `);

today = mm + '/' + dd + '/' + yyyy;
  console.log(today);
})();
/*
Exception: ReferenceError: invalid assignment left-hand side
@Scratchpad/2:36
*/
/*
Exception: ReferenceError: invalid assignment left-hand side
@Scratchpad/2:36
*/
/*
Exception: ReferenceError: invalid assignment left-hand side
@Scratchpad/2:36
*/
/*
Exception: ReferenceError: invalid assignment left-hand side
@Scratchpad/2:36
*/