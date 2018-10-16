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
//   var studGrades = new Map([['David', 80], ['Vinoth', 77],['Divya',88],['Ishitha',95],['Thomas',68]]);
//   function student(name, marks) {
//   this.name = name;
//   this.marks = marks;
//   //this.sex = sex;
// }
  var stud1 = { name: 'David',marks:80 };
  var stud2 = { name: 'Vinoth',marks:77 };
  var stud3 = { name: 'Divya',marks:88 };
  var stud4 = { name: 'Isitha',marks:95 };
  var stud5 = { name: 'Thomas',marks:68 };
//   var stud1=student("David",80);
//   var stud2=student("Vinoth",77);
//   var stud3=student("Divya",88);
//   var stud4=student("Ishitha",95)
//   var stud5=student("Thomas",68);
  function calcGrade(marks){
    var grade='';
    if (marks>=90 && marks<=100)
      grade='A';
    else if(marks>=80 && marks<90)
      grade='B';
    else if(marks>=70&& marks<80)
      grade='C';
    else if(marks>=60 && marks<70)
      grade='D';
    else grade='F';
    return grade;
     }
  
  stud1.grade=calcGrade(stud1.marks);
  stud2.grade=calcGrade(stud2.marks);
  stud3.grade=calcGrade(stud3.marks);
  stud4.grade=calcGrade(stud4.marks);
  stud5.grade=calcGrade(stud5.marks);
  console.log(stud1.grade,stud2.grade,stud3.grade,stud4.grade,stud5.grade);
 })();

/*
Exception: TypeError: this is undefined
student@Scratchpad/2:14:3
@Scratchpad/2:20:13
@Scratchpad/2:10:2
*/