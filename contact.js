var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

 const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Get form values
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (email && subject && message) {
      alert("Thank you for contacting us!\n\nWe'll get back to you soon.");
      form.reset(); // Clear the form
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
