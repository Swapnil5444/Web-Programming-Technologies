function checkLogin() {
  // Get input values
  var userIdInput = document.getElementById("userid").value;
  var userPassInput = document.getElementById("userpass").value;


  // Create XMLHttpRequest
  var xhr = new XMLHttpRequest();


  xhr.onload = function () {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      var found = false;


      for (var i=0;i<users.length;i++) {
        if (
          users[i].userid === userIdInput &&
          users[i].userpass === userPassInput
        ) {
          found=true;
          break;
        }
      }


      if (found){
        alert("Login successful!");
        window.location.href="http://www.hematitecorp.com";
      } else {
        alert("Invalid user ID or password!");
      }
    } else {
      alert("Error loading users.");
    }
  };


  xhr.open("GET", "http://localhost:5000/users",true);
  xhr.send();
}
