function register() {
  let nam = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let pass1 = document.getElementById("confirmPassword").value;
  if (pass !== pass1) {
    window.alert("enter both password same");
  } else {
    let prod = {
    username:nam,
    password:pass,

  }
  let prodJson = JSON.stringify(prod);

  let xmlObj = new XMLHttpRequest();
  xmlObj.onload = function (){
    window.alert("Product Added Successfully");
    window.location.href= "C:\Users\exam\Desktop\WBT\AJAX\TASK 3\TASK.html";

    document.getElementById("username").value="";
    document.getElementById("password").value="";
    document.getElementById("confirmPassword").value="";

  };
  xmlObj.open("POST","http://localhost:8585/users");
  xmlObj.send(prodJson);
  
  }
}