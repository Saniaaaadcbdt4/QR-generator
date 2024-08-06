let imgBox=document.getElementById("img-box");
let qrImg=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");
let errorMessage = document.getElementById("error-msg");
let successMessage=document.getElementById("success-msg")

function generateQR(){
    if(qrText.value.length>0){
       qrImg.src ="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
        + qrText.value;
       imgBox.classList.add("show-img");
       errorMessage.classList.add("hidden"); 
       successMessage.classList.remove("hidden2")
    }else{
        qrText.classList.add("error");
        errorMessage.classList.remove("hidden"); 
        successMessage.classList.add("hidden2")
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }

}

