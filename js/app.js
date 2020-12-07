
var name = localStorage.getItem('userName');
if (name != 'null'){
    alert('welcome back ,' + name);
}




$('#myBtn').on('click', function(){
  
    var name = $('#myInput').val();
    
    localStorage.setItem('userName', name)
})



var arr = ["hello","welcome","hi","shalom"];

var cars = [{name: "Fiat", year: 2020 }]

var carsString = JSON.stringify(cars);

//save the object as string
localStorage.setItem("cars", carsString);

var readCarsString = localStorage.getItem('cars');

var readCarsObject = JSON.parse(readCarsString);

