let tablinks=document.getElementsByClassName("tab-links");
let tabl_conantts=document.getElementsByClassName("tab-contents");
function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active")
}
for(tabl_conantt of tabl_conantts){
    tabl_conantt.classList.remove("active-tab")
}
event.currentTarget.classList.add("active");
document.getElementById(tabname).classList.add("active-tab");
}

