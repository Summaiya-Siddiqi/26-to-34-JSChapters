//**************************************************Chapter 26 to 30 ***************************************************************** */
//************************************************** Math method ***************************************************************** */
//Q no 1
// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var positive=+prompt("Enter positive integer:");
// var round=Math.round(positive);
// var floor=Math.floor(positive);
// var ceil=Math.ceil(positive);
// document.write("number:"+positive+"<br>");
// document.write("round of value: "+round+"<br>");
// document.write("floor value: "+floor+"<br>");
// document.write("ceil value: "+ceil);



//Q no 2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var negative=+prompt("Enter negative integer:");
// var round=Math.round(negative);
// var floor=Math.floor(negative);
// var ceil=Math.ceil(negative);
// document.write("number:"+negative+"<br>");
// document.write("round of value: "+round+"<br>");
// document.write("floor value: "+floor+"<br>");
// document.write("ceil value: "+ceil);



//Q no 3
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number=+prompt("Enter a integer:");
// var absolute = Math.abs(number);
// document.write("The absolute value of "+number +" is "+ absolute);



//Q no 4
// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var number = Math.floor(Math.random()*6)+1;
// document.write("Random dice value: "+ number);


//Q no 5
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var toss = Math.random() * 3;
// var floor = Math.floor(toss)
// if(floor === 2){
//     document.write(floor+" <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write(floor+" <br> Random Coin Value: Tails")
// }
// else{
//     document.write("Try again");
// }

 
//Ans 2
// var coinhead=prompt("enter head user:")
// var cointail=prompt("enter tails user:")
// var toss=Math.random()*3
// var floor=Math.floor(toss)
// if(floor==2){
//     alert("Random coin value is :Heads... "+" "+coinhead+" "+"win the toss")
// }
// else{
//     alert("Random coin value is :Tails..."+" "+cointail+" "+"win the toss")
// }


//Q no 6
// Write a program that shows a random number between 1
// and 100 in your browser.

// var number = Math.floor(Math.random()*100);
// document.write("Random number between 1 and 100 is : "+ number);



//Q no 7
// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var user=prompt("Enter your weight in kilograms");
// var weight = parseFloat(user);
// document.write("The weight of User is:"+weight+"  kilograms");



//Q no 8
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var num = Math.floor(Math.random() * 10);
// var secnum = prompt("Enter the number between 1 to 10");
//  if (secnum == num){
//        alert("Congrate your number Matched: ");
//      }
//        else{
//         alert("try again");
//    }

//**************************************************Chapter 31 to 34 ***************************************************************** */
//************************************************** Date method ***************************************************************** */
//Q no 1
// Write a program that displays current date and time in
// your browser.

// var currentdate = new Date();
// document.write(currentdate);


//Q no 2
// Write a program that alerts the current month in words.
// For example December.

// var m = ["January","february","march","april","may","june","july","august","september","october","november","december"];
//  var a = new Date();
//  var b = a.getMonth();
// var c =m[b]
// alert("Current month"+" "+ c);



//Q no 3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var a=new Date();
// var b=a.getDay();
// var c=week[b];
// var d = c.slice(0,3);
// alert("Today is "+" "+ d);



//Q no 4
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var a=new Date()
// var b=a.getDay()
// if(b == 0 || b == 6){
//     alert("It's fun day");
// }
// else{
//     alert("Working day");
// }
//here 0 and 6 refers to index of sunday(0) and saturday(6)



//Q no 5
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var a=new Date()
// var days=a.getDate()
// if(days<16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }



//Q no 6
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var todayDate = new Date();
// var time = todayDate.getTime();
// var min = time/(1000*60*60);

// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since , January 1, 1970: " + time);
// document.write("<br> Elapsed minutes since , January 1, 1970: " + min);



//Q no 7
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var a=new Date()
// var time=a.getTime()
// if(time>12){
//     alert("It's PM");
// }
// else{
//     alert("It's AM");
// }



//Q no 8
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var  laterdate=new Date("31 December, 2020");
// alert("Later Date"+laterdate);



//Q no 9
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var rdate =new Date("June 18, 2015");
// var a=rdate.getTime();
// var fdate=new Date();
// var b=fdate.getTime();
// var sub=b-a;
// var days=sub/(1000*60*60*24);
// var final=Math.floor(days);
// alert(final+" days have passed since 1st ramadan, 2015");



//Q no 10
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var input=prompt("enter reference date:","Month dd, yyyy");
// var inputdate=new Date(input);
// var ref=new Date("January 1, 2015");
// var a=inputdate.getTime();
// var b=ref.getTime();
// var diff=a-b;
// var sec=diff/1000;
// document.write("On reference Date "+inputdate+"<br> "+sec+" seconds had passed since beginning on 2015");




//Q no 11
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var current = new Date();
// var d=new Date();
// var t=d.getHours();
// var f=t-1;
// d.setHours(f);
// document.write("Current date: "+current+"<br>"+"1 Hour ago, it was: "+d);



//Q no 12
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var current = new Date();
// var d=new Date();
// var t=d.getFullYear();
// var f=t-100;
// d.setFullYear(f);
// alert("Current date: "+current+"\n"+"100 Years back, it was: "+d);



//Q no 13
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age=Number(prompt("enter your age ","23"));
// var a=new Date();
// var b=a.getFullYear();
// var c=b-age;
// document.write("Your Age is : "+age+"<br>");
// document.write("Your Birth Year is : "+c);



//Q no 14
//Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var namec=prompt("input custumer name");
// var a=new Date();
// var b=a.getMonth();
// var m=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var units=+prompt("Enter number of units: ");
// var charges=+prompt("Enter charge per unit: ");
// var netamount=units*charges;
// var latefee=+prompt("enter late fee");
// var netamdd=netamount+latefee;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<b>Customer name: "+namec+"<br>");
// document.write("<b>Month: "+m[b]+"<br>");
// document.write("<b>Number of units: <b>"+units+"<br>");
// document.write("<b>Charges per unit: "+charges+"<br><br>");
// document.write("<b>Net amount payble (with in due date): "+netamount+"<br>");
// document.write("<b>Late payment surcharge: "+latefee+"<br>");
// document.write("<b>Gross amount payble (after due date): "+netamdd+"<br>");