function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function myFunction() {
            var d = new Date();
            var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById("demo").innerHTML = n;
        }
        function fullDateTime() {
            var d = new Date();          
            var n = d.toLocaleString([], { hour12: true});
            document.getElementById("demo2").innerHTML = n;
        }