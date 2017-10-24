//Prevents entire page from reloading on submit
$(document).ready(function() {
  $("#newsletter").on('submit', function(e) {
    e.preventDefault();
  })
})

function checkAll() {

  if (document.getElementById("age").checked === false) {
alert("Please fill out all fields"); // replaced innertHTML to alert as required
}
  
  
