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
  var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

  //Display

   for(let i=0;i<myObj.length;i++)
  {
    
   var descriptor=Object.getOwnPropertyDescriptor(myObj[i],'occupation');
    if(descriptor.value==='Programmer')
      {
        console.log(myObj[i]);
      }
    
  }
  //Sort

  myObj.sort(function(obj1, obj2) {
	// Ascending: first age less than the previous
	return obj2.age - obj1.age;
});
 for(let i=0;i<myObj.length;i++)
 {
        console.log(myObj[i]);
 }
  //Create objects from objects
  function noDup(arr)
  {
    var set = new Set(arr);
    return Array.from(set);
  }
  
  var temp=[];

for(let i=0;i<myObj.length;i++)
  {
    temp[i]=myObj[i].occupation;
   
  }
  var occObj=noDup(temp);
  var objMap=new Map();
 for(let i=0;i<occObj.length;i++)
   {
     for(let j=0;j<myObj.length;j++)
       {
         var copy = Object.assign({}, myObj[i]);
         if(myObj[j].occupation===occObj[i])
           {
             delete copy.occupation;
             objMap.set(occObj[i],copy);
           }
       }
   }
  console.log(Array.from(objMap));
  
  
  
  
//   //Map fuction to make an array of names
//   var map1 = new Map([[30 , 'Saurabh'], [32 ,'Anupriya'] ,[25, 'Kalyani'],[27,'Damodaran'],[22,'Krishnakath'],[28,'Venketraman']]);
//   console.log(Array.from(map1.values()));
//  for(let i=0;i<myObj.length;i++)
//                myObj.map(Object.getOwnPropertyDescriptor(myObj[i],'name'));
               
  
  //
  
})();



/*
Exception: TypeError: occObj.push is not a function
@Scratchpad/5:44:3
@Scratchpad/5:10:2
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/5:45
*/
/*
Exception: ReferenceError: occObject is not defined
@Scratchpad/5:52:1
@Scratchpad/5:10:2
*/
/*
Exception: ReferenceError: occObject is not defined
@Scratchpad/5:52:1
@Scratchpad/5:10:2
*/
/*
Exception: TypeError: occObj is undefined
@Scratchpad/5:45:21
@Scratchpad/5:10:2
*/
/*
Exception: SyntaxError: unexpected token: '['
@Scratchpad/5:48
*/
/*
Exception: SyntaxError: unexpected token: '['
@Scratchpad/5:48
*/
/*
Exception: SyntaxError: unexpected token: '['
@Scratchpad/5:49
*/
/*
Exception: SyntaxError: unexpected token: '['
@Scratchpad/5:63
*/
/*
Exception: TypeError: copy.delete is not a function
@Scratchpad/5:65:14
@Scratchpad/5:10:2
*/
/*
Exception: TypeError: copy.push is not a function
@Scratchpad/5:64:14
@Scratchpad/5:10:2
*/
/*
Exception: TypeError: copy[i] is undefined
@Scratchpad/5:64:14
@Scratchpad/5:10:2
*/