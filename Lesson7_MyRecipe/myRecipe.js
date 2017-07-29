/* global $ */

/*  
Program Name:   Recipe Display Application  
Author:  Christopher Cyrille
Date:  07/28/2017
Filename:   myRecipe.js 
*/ 



//displays the next element after the current target

function display3(event) { 
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow"); 
 
 
}//end of display

//attach event listener to h3 elements to invoke display function when clicked 

$("h3").click(display3); 

//change the background color h3 element when mouse hovers over it

$("h3").hover(function(){
    
    $(this).css("background-color", "blue");
}, function(){
    $(this).css("background-color", "pink");
    
});

//hover() will trigger display2 method each time mouse hovers over header

$("h3").hover(display3);
