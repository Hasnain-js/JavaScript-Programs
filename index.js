// Question no 1 Create a  program to check whether a given number is even or odd.
function checknumber() {
     let number = document.getElementById("Num").value ;
     
    if(number % 2 == 0){
        return  document.getElementById("ChNo").innerHTML =  number + " is Even Number" ;

    } else{
        document.getElementById("ChNo").innerHTML = number +" is Odd Number" ; 
    }

    
}

// Question no 2 Create   a  program to check whether a given number is Positive of Negative

function checknumber1() {
     let number = document.getElementById("Num1").value ;
     
    if(number > 0  ){
        return  document.getElementById("ChNo1").innerHTML =  number + " its a Possitve Number" ;

    } else{
        document.getElementById("ChNo1").innerHTML = number +" its a Negative Number" ; 
    }

    
}

// Question no 3 Create a program to get the age of a candidate and determine whether it is eligible for casting his/her own vote.

function checknumber2() {
     let age = document.getElementById("Num2").value ;
     
    if( age > 18  ){
        return  document.getElementById("ChNo2").innerHTML =   "You are eligible for casting vote " ;

    } else{
        document.getElementById("ChNo2").innerHTML = "You not are eligible for casting vote " ; 
    }
    
}

 //Question no 4 Create a program to accept the height of a person in meters than convert to centimeter and categorize the person according to their height. 
   
function checknumber3() {
     let heightmeter = document.getElementById("Num3").value ;
     heightcentimeter = heightmeter * 100 ; 
     if ( heightmeter == 1){
     document.getElementById("ChNo3").innerHTML = heightcentimeter + " Cm (Mediam Height) " ; }
    else if ( heightmeter == 2 ) {
         document.getElementById("ChNo3").innerHTML = heightcentimeter + " Cm (Tall) " ; }
    else  if ( heightmeter > 2 ) {
            document.getElementById("ChNo3").innerHTML = heightcentimeter + " Cm (very tall) " ;
        }
        else {
            document.getElementById("ChNo3").innerHTML = heightcentimeter + " Cm (Small) " ;
        }
    

     
  
}


// Question no 5 write a program get score from user and print the Grade ("A", "B", "C", "D", or "F" ) given according to score 

function checknumber4() {
     let score = document.getElementById("Num4").value ;
     
    
     if ( score >= 80 && score <= 100) {
     document.getElementById("ChNo4").innerHTML = " A grade" ; }
    else if ( score >= 60 && score < 80 ) {
         document.getElementById("ChNo4").innerHTML = "B grade" ; }
    else  if ( score >= 40 && score < 60 ) {
            document.getElementById("ChNo4").innerHTML = "C grade" ;
        }
    else  if ( score >= 30 && score < 40 ) {
            document.getElementById("ChNo4").innerHTML = "D grade" ;
        }
     else if (score < 30 ) {
            document.getElementById("ChNo4").innerHTML = "F grade" ;
        }
        else {
            document.getElementById("ChNo4").innerHTML = "Please enter a score less then 100 " ; 
        }
    

     
  
}

// Question no 6 Get 2two numbers from user and print the greater no
function checknumber5(){
    let a = document.getElementById("Num5").value ; 
    let b = document.getElementById("num5").value ;
    if ( a > b) {
        document.getElementById("ChNo5").innerHTML = "A is greater Number" ;
        
    }else{
        document.getElementById("ChNo5").innerHTML = "B is Greater Number" ;
    }
}

//Question no 7  Create an object and print using loop 

function checknumber6(){
   var element = ""
   let  Bio = {
       
     Firstname : document.getElementById("fname").value , 
     lastname : document.getElementById("lname").value ,
    
    }
    for (const key in Bio) {
         element += Bio[key] + " " ;
    }
    document.getElementById("ChNo6").innerHTML = element ;


}


// Question no 8 Create an Array of Person=['Name 1','Name2','Name3','Haider','Name5'] and then create logic if  name is Haider print any print Haider else print Name not found

var array = [];
function fillarr(){
    
    for (let i = 0; i < 4; i++) {
            array[i] = prompt(`Enter the ${i + 1} name ?`,"Haider");
     }    
     
}

function checkname(name){
    return name == "Haider"
}

function myFunction() {
    document.getElementById("ChNo8").innerHTML = array.find(checkname);
  }

  //Question no 9 Create an Array of colors and change background-color of class name [any class  name] with each color in array using loop
  function backcolor(){
        let classcolor = document.getElementsByClassName("card-header");
        let compSequence = ['AliceBlue','AntiqueWhite','CornflowerBlue', 'DarkCyan' , 'CadetBlue' , 'AliceBlue','AntiqueWhite','CornflowerBlue', 'DarkCyan' , 'CadetBlue']
       for (let i = 0; i < compSequence.length; i++) {
          classcolor[i].style.backgroundColor = compSequence[i] ;
           
       }
  }


    //   Create an Object and Array, Get values from user  and than save in array and object 
    //   and then print all the values using  loop!
function question10(){
    var firstname = document.getElementById("name_10").value ;
    var fathername = document.getElementById("Fathername").value ;
    var age = document.getElementById("age").value ; 
    var objectelement = "";
    var arrayelement = "";
    let bioobject = {
        name : firstname ,
        fname : fathername  ,
        nameage :  age ,
    }
    for (const key in bioobject) {
        if (bioobject.hasOwnProperty.call(bioobject, key)) {
            objectelement += bioobject[key] + ' ';
            
        }
         document.getElementById("object").innerHTML = objectelement ; 

   let bioarray = [ firstname , fathername ,age ]; 
   for (let a = 0; a < bioarray.length; a++) {
       arrayelement += bioarray[a] + " ";
      
       
   } 

    document.getElementById("array").innerHTML = arrayelement ;
   
}


}