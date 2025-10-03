
function getData(){
    
    // step1 : create Object of XMLHttpRequest
    let xmlObj = new XMLHttpRequest();
    //step2: write callback function 
    xmlObj.onload = function (){
        // console.log(this.responseText);
        let EmpObj = JSON.parse(this.responseText);
        // console.log(EmpObj);
      let parentEl = document.getElementById("d1");
      for(let e of EmpObj){
            let newRow = document.createElement("tr");
            newRow.innerHTML=`<td>${e.id}</td><td>${e.ename}</td><td>${e.position}</td><td>${e.salary}</td>`;
        parentEl.appendChild(newRow);
      }
      

    };
    // step3: create requests 
    xmlObj.open("GET","http://localhost:8282/employees");
    //step4: send request 
    xmlObj.send();
}

function deleteProduct(){
  let id = document.getElementById("eid").value;
  // console.log(id);
 
  if(window.confirm(`Are you Sure to delete employee with id :${id}`)){
    // step1 : create Object of XMLHttpRequest
    let xmlObj = new XMLHttpRequest();

    xmlObj.onload = function (){
      window.alert("Employee Deleted Successfully");
    }
  
    xmlObj.open("DELETE",`http://localhost:8282/employees/${id}`);
    xmlObj.send();
  }

}

function addEmployees(){
  let emp = {
    pname:document.getElementById("txtname").value,
    pprice:document.getElementById("txtpost").value,
    company:document.getElementById("txtsalary").value,
  }
  let EmpJson = JSON.stringify(Emp);

  let xmlObj = new XMLHttpRequest();
  xmlObj.onload = function (){
    window.alert("Employees Added Successfully");
  
    document.getElementById("txtname").value="";
    document.getElementById("txtpost").value="";
    document.getElementById("txtsalary").value="";

  };
  xmlObj.open("POST","http://localhost:8282/employees");
  xmlObj.send(EmpJson);
}

let id;
function getSingleEmployee(){
   id = document.getElementById("ueid").value;
    // step1 : create Object of XMLHttpRequest
    let xmlObj = new XMLHttpRequest();

    //step2: write callback function 
    xmlObj.onload = function (){
        // console.log(this.responseText);
        let EmpObj = JSON.parse(this.responseText);
        console.log(EmpObj);
         document.getElementById("utxtname").value=EmpObj.ename,
    document.getElementById("utxtpost").value=EmpObj.position,
    document.getElementById("utxtsalary").value=EmpObj.esalary
    };
    // step3: create requests 
    xmlObj.open("GET",`http://localhost:8282/employees/${id}`);
    //step4: send request 
    xmlObj.send();
}

function updateEmployee(){

 let Emp = {
    pname:document.getElementById("utxtname").value,
    ppost:document.getElementById("utxtpost").value,
    salary:document.getElementById("utxtsalary").value
  }
  let EmpJson = JSON.stringify(emp);

  let xmlObj = new XMLHttpRequest();
  xmlObj.onload = function (){
    window.alert("Employees Updated Successfully");
  
    document.getElementById("utxtname").value="";
    document.getElementById("utxtpost").value="";
    document.getElementById("utxtsalary").value="";

  };
  xmlObj.open("PUT",`http://localhost:8282/employees/${id}`);
  xmlObj.send(EmpJson);

}