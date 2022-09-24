// In JavaScript, switch can replace multiple if statements.

// switch(n){
//   case 1:  
//     //code block
//     break;
//   case 2:
//     //code block
//     break;
//   case ...:
//     //code block
//     break;

//   default:       //default is optional, sometimes it can be omitted
//     //code block
//                  //The last one does not need break
// }
// switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" 
// you can add your code for what to do in that case. 
// The keyword break is used as termination - if you forget break, the code will continue running through the other case statements and default until a break appears. 
// default is always entered if you've reached it.
// In some instances, the switch statement is clearer than the if..else statement.

// Solution

function howManydays(month){
    var days;
    switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30
        break;
      case 2:
        days = 28
        break;
  
       
    }
    return days;
}