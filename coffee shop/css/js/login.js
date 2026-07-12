document.addEventListener("DOMContentLoaded", function(){



/* ================= CUSTOMER LOGIN ================= */


const loginForm =
document.getElementById("loginForm");



if(loginForm){



loginForm.addEventListener("submit",function(e){


e.preventDefault();



const email =
loginForm.querySelector(
'input[type="email"]'
).value;



const password =
loginForm.querySelector(
'input[type="password"]'
).value;





if(email==="" || password===""){


showAlert(
"Please enter email and password",
"error"
);


return;


}






/*
 Demo Authentication

 Replace this section with
 backend API authentication
 when connecting database.

*/



const user={


name:"Coffee Customer",


email:email,


role:"customer",


loginTime:new Date()

};





localStorage.setItem(
"loggedUser",
JSON.stringify(user)
);





showAlert(
"Login successful! Welcome back.",
"success"
);






setTimeout(()=>{


window.location.href =
"customer-dashboard.html";


},1200);




});



}









/* ================= EMPLOYEE LOGIN ================= */



const employeeForm =
document.getElementById(
"employeeLoginForm"
);





if(employeeForm){



employeeForm.addEventListener("submit",
function(e){


e.preventDefault();



const employeeId =
employeeForm.querySelector(
'input[type="text"]'
).value;




const password =
employeeForm.querySelector(
'input[type="password"]'
).value;





if(employeeId==="" || password===""){


showAlert(
"Enter employee ID and password",
"error"
);


return;


}







const employee={


id:employeeId,


name:"Bean Haven Employee",


role:"employee",


loginTime:new Date()


};





localStorage.setItem(
"loggedEmployee",
JSON.stringify(employee)
);






showAlert(
"Employee login successful",
"success"
);






setTimeout(()=>{


window.location.href =
"employee-dashboard.html";



},1200);




});



}









/* ================= ADMIN LOGIN SUPPORT ================= */



const adminForm =
document.getElementById(
"adminLoginForm"
);



if(adminForm){


adminForm.addEventListener(
"submit",
function(e){



e.preventDefault();




const admin={


name:"Administrator",


role:"admin"


};





localStorage.setItem(
"adminUser",
JSON.stringify(admin)
);




showAlert(
"Admin login successful",
"success"
);



setTimeout(()=>{


window.location.href =
"admin-dashboard.html";


},1200);



});



}









/* ================= PASSWORD VISIBILITY ================= */


const passwordIcons =
document.querySelectorAll(
".toggle-password, #showPassword, #employeeShowPassword"
);




passwordIcons.forEach(icon=>{


icon.addEventListener("click",function(){



const input =
this.parentElement.querySelector(
"input"
);



if(!input) return;





if(input.type==="password"){


input.type="text";


this.classList.remove(
"fa-eye"
);


this.classList.add(
"fa-eye-slash"
);



}

else{


input.type="password";


this.classList.remove(
"fa-eye-slash"
);



this.classList.add(
"fa-eye"
);



}



});



});









/* ================= LOGOUT ================= */


window.logoutUser=function(){



localStorage.removeItem(
"loggedUser"
);



localStorage.removeItem(
"loggedEmployee"
);



localStorage.removeItem(
"adminUser"
);




showAlert(
"Logged out successfully",
"success"
);




setTimeout(()=>{


window.location.href="index.html";


},1000);



};









/* ================= AUTH CHECK ================= */



window.checkLogin=function(role){



let user;



if(role==="customer"){


user =
localStorage.getItem(
"loggedUser"
);


}



if(role==="employee"){


user =
localStorage.getItem(
"loggedEmployee"
);


}



if(role==="admin"){


user =
localStorage.getItem(
"adminUser"
);


}





if(!user){



alert(
"Please login first"
);



window.location.href="login.html";



return false;



}



return true;



};









/* ================= ALERT MESSAGE ================= */


function showAlert(message,type){



const alertBox =
document.createElement("div");



alertBox.className =
"auth-alert "+type;



alertBox.innerHTML=`


<i class="fas fa-circle-check"></i>


${message}


`;



document.body.appendChild(alertBox);




setTimeout(()=>{


alertBox.classList.add(
"show"
);



},100);





setTimeout(()=>{


alertBox.classList.remove(
"show"
);



setTimeout(()=>{


alertBox.remove();



},500);



},3000);



}





});