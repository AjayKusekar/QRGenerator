const inputbox = document.getElementById("inputbox");
const qrimage = document.getElementById("qrimage");
const generatebtn = document.getElementById("generatebtn");


function generateqrcode(){
    if(inputbox.value.length > 0)
        {
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputbox.value;
    image.classList.add("showimage");
        }
    else
    {
        inputbox.classList.add("error");
        setTimeout(()=>{
            inputbox.classList.remove("error");       
        },2000)
    }
}
