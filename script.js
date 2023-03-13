let getChars = false;
const includeChar = document.getElementById('specialChar').addEventListener('click',(e)=>{
if(e.target.checked){
    getChars = true;
}
else{
    getChars = false;
}
})

const slider = document.getElementById('passLength') ;
const output =  document.getElementById('length');
output.innerHTML = slider.value;
let password = [];
let length = 3;

 slider.oninput = ()=> {
    output.innerHTML = slider.value
    length = slider.value
};

const arr = [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialChars = ['!', '@', '#', '$', '%', '^', '&','!', '@', '#', '$', '%', '^', '&', '*'];

let arrAll = [];

function generate() {
    document.querySelector(".main-box").style.height = 'fit-content';
    document.querySelector(".passBox").classList.remove("hidden");
    document.querySelector("#copyBtn").classList.remove("hidden");
    password = []; 
    arrAll = [];
   if(getChars){
    arrAll = specialChars.concat(arr);
   } 
   else{
    arrAll = arr;
   }
   for(let i = 0; i<length; i++){
     let random  = (Math.floor(Math.random()*arrAll.length));
      password.push(arrAll[random]);
   }
    let finalPassword = password.join('').toString()
   document.getElementById('password').value = finalPassword;
}

function copyPassword(){
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

document.querySelector('#generatePassword').addEventListener('click',generate);
document.getElementById("copyBtn").addEventListener('click', copyPassword);




