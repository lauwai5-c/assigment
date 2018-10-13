function function1(){

var tbl = document.getElementById("FirstTable"); // TABLE ID

// You can directly copy below codes by changing the table id only

var row = tbl.insertRow(tbl.rows.length);    // expending row
var i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }


    var tcbl = document.getElementById("FirstTable"); //expending column
    var i;
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}




// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement("div"); // create DIV element
    var txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute("class", style);        // set DIV class attribute
    div.setAttribute("className", style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);      
}


//********************************FETCHING  JSON******************************************

fetch('https://api.exchangeratesapi.io/latest?base=EUR')
  .then(res => res.json())
  .then(data => obj1 = data)
  
 

fetch('https://api.exchangeratesapi.io/latest?base=USD')
   .then(res => res.json())
   .then(data => obj2 = data)
  

fetch('https://api.exchangeratesapi.io/latest?base=JPY')
   .then(res => res.json())
   .then(data => obj3 = data)

fetch('https://api.exchangeratesapi.io/latest?base=AMD')
   .then(res => res.json())
   .then(data => obj4 = data)
 

//********************************** CONVERT CURRENCY*****************
  
$('#InputID').keyup(function() {
    document.getElementById("FirstTable").rows[1].cells[1].innerHTML =  $(this).val() * 1;
    document.getElementById("FirstTable").rows[1].cells[2].innerHTML =  $(this).val() * obj1.rates.USD;
    document.getElementById("FirstTable").rows[1].cells[3].innerHTML =  obj1.rates.JPY * $(this).val();

    document.getElementById("FirstTable").rows[2].cells[1].innerHTML = obj2.rates.EUR * $(this).val()  ;
    document.getElementById("FirstTable").rows[2].cells[2].innerHTML = 1 * $(this).val()  ;
    document.getElementById("FirstTable").rows[2].cells[3].innerHTML = obj2.rates.JPY * $(this).val()  ;

    document.getElementById("FirstTable").rows[3].cells[1].innerHTML = obj3.rates.EUR * $(this).val()  ;
    document.getElementById("FirstTable").rows[3].cells[2].innerHTML = obj3.rates.USD * $(this).val()  ;
    document.getElementById("FirstTable").rows[3].cells[3].innerHTML = 1 * $(this).val()  ;
  });







  