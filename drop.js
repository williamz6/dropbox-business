// JavaScript Document

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.background = " white";
   
  } else {
    document.getElementById("navbar").style.background = "";
    
  }
}