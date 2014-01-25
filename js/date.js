

   
var d = new Date();
var day = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
document.write(day[d.getDay()] + ", ");
document.write(month[d.getMonth()] + " ");
document.write(d.getDate() + ", ");
document.write(d.getFullYear());

