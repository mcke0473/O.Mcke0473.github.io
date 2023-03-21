<div>


<h2 id="Ian"> Who is the best character? </h2>

<button type="button" onclick="myFunction()">Click for answer</button>
<script type="text/javascript">

function myFunction() {
  document.getElementById("Ian").innerHTML = "Ian Murray!";
}

</script>

</div>


<p><button onclick="myMove()">Click Me!</button></p> 

<div id ="box">
  <div id ="animate"></div>
</div>

<script>
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}	

</script>