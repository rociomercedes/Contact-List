// Agregar contacto

function addContact(){
    let cName= document.querySelector("#name").value.toUpperCase();
    let cNumber=document.querySelector("#number").value;
    let displayNotification= document.querySelector("#displayNoti");
    
    if(cName == "" || cNumber ==""){
        displayNotification.innerHTML="Introduzca los datos";
        displayNotification.getElementsByClassName.color="red";

    }else{
        //set Items
        localStorage.setItem(cName, cNumber);
        displayNotification.innerHTML="Contacto Agregado";
        displayNotification.style.color="green";
    }

    setInterval(()=>{
        displayNotification.innerHTML="";
    },2000)
}

// Consultar contacto

function getContact(){
    let displayDetail= document.querySelector("#displayContact");
    let displayOutput=document.getElementById("displayContact");
    displayOutput.classList.add("displayContactStyle");
    let getContactName= document.querySelector("#getContactName").value.toUpperCase();

    // obtener contacto

    let output=localStorage.getItem(getContactName);
    displayDetail.innerHTML=`${getContactName}: ${
        output== null ? "Este contacto no fue agregado " : `+54
        ${output}` }`;

        getContactName="";
    }

function  reset(){
    location.reload();
}