document.addEventListener("DOMContentLoaded", function(){



/* ================= USER DATA LOAD ================= */


const userData =
JSON.parse(localStorage.getItem("loggedUser"));



const employeeData =
JSON.parse(localStorage.getItem("loggedEmployee"));



const adminData =
JSON.parse(localStorage.getItem("adminUser"));









/* ================= CUSTOMER DASHBOARD ================= */


if(document.querySelector(".dashboard")){


if(!userData){


window.location.href="login.html";


return;


}





const customerName =
document.querySelector(".profile h3");



const welcomeText =
document.querySelector(".dashboard-content h1");





if(customerName){


customerName.innerText =
userData.name;


}



if(welcomeText){


welcomeText.innerHTML =
`Welcome Back, ${userData.name} ☕`;


}





}









/* ================= EMPLOYEE DASHBOARD ================= */


if(document.querySelector(".employee-dashboard")){



if(!employeeData){


window.location.href="employee-login.html";


return;


}





const employeeName =
document.querySelector(
".employee-profile h3"
);



const employeeWelcome =
document.querySelector(
".employee-content h1"
);





if(employeeName){


employeeName.innerText =
employeeData.name;


}





if(employeeWelcome){


employeeWelcome.innerHTML =
`Good Morning, ${employeeData.name} ☕`;


}





}









/* ================= ADMIN DASHBOARD ================= */


if(document.querySelector(".admin-dashboard")){



if(!adminData){


window.location.href="login.html";


return;


}






const adminName =
document.querySelector(
".admin-profile h3"
);





if(adminName){


adminName.innerText =
adminData.name;


}




}









/* ================= LOGOUT BUTTONS ================= */


const logoutButtons =
document.querySelectorAll(
"#logoutBtn, #employeeLogout, #adminLogout"
);



logoutButtons.forEach(button=>{


button.addEventListener("click",function(){



localStorage.removeItem(
"loggedUser"
);



localStorage.removeItem(
"loggedEmployee"
);



localStorage.removeItem(
"adminUser"
);





showDashboardMessage(
"Logged out successfully"
);




setTimeout(()=>{


window.location.href="index.html";


},1000);




});



});









/* ================= ORDER STATUS UPDATE ================= */


const completeButtons =
document.querySelectorAll(
".complete-btn"
);



completeButtons.forEach(button=>{


button.addEventListener("click",function(){



let row =
this.closest("tr");



if(row){



let status =
row.querySelector(
"span"
);



if(status){



status.innerText =
"Completed";



status.className =
"success";



}



this.innerText =
"Done";



this.disabled=true;



showDashboardMessage(
"Order updated successfully"
);



}




});



});









/* ================= TASK CHECKBOX ================= */


const taskCheckboxes =
document.querySelectorAll(
".task-card input"
);



taskCheckboxes.forEach(box=>{


box.addEventListener("change",
function(){



const card =
this.closest(".task-card");





if(this.checked){



card.style.opacity="0.6";


card.style.transform =
"scale(.98)";



}

else{


card.style.opacity="1";


card.style.transform =
"scale(1)";


}



});



});









/* ================= ANIMATED COUNTERS ================= */


const counters =
document.querySelectorAll(
".dashboard-card h2, .admin-card h2, .employee-card h2"
);



counters.forEach(counter=>{


let target =
parseInt(
counter.innerText.replace(/,/g,"")
);



if(isNaN(target))
return;




let current=0;


let increment =
Math.ceil(target/80);





let timer =
setInterval(()=>{


current += increment;



if(current>=target){


current=target;


clearInterval(timer);


}





counter.innerText =
current.toLocaleString();



},20);




});









/* ================= SEARCH DASHBOARD ================= */


const searchInput =
document.getElementById(
"dashboardSearch"
);



if(searchInput){



searchInput.addEventListener(
"keyup",
function(){



let value =
this.value.toLowerCase();




const rows =
document.querySelectorAll(
"table tbody tr"
);





rows.forEach(row=>{



let text =
row.innerText.toLowerCase();



if(text.includes(value)){


row.style.display="";


}

else{


row.style.display="none";


}



});



});



}









/* ================= TOAST MESSAGE ================= */


function showDashboardMessage(message){



const toast =
document.createElement("div");



toast.className =
"dashboard-toast";



toast.innerHTML=`

<i class="fas fa-check-circle"></i>

${message}

`;



document.body.appendChild(toast);




setTimeout(()=>{


toast.classList.add("active");


},100);





setTimeout(()=>{


toast.classList.remove("active");



setTimeout(()=>{


toast.remove();


},500);



},2500);



}





});