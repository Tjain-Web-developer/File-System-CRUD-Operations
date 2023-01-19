var inputbox = document.querySelector("#input");

document.querySelector("#display").addEventListener("click",function(){
    if(inputbox.style.display === "block"){
        inputbox.style.display = "none"
    }
    else{
        inputbox.style.display = "block"
    }
});
let flag = false;
document.querySelector("#sideBarBtn").addEventListener("click",()=>{
    if(flag){
        document.querySelector("#left").style.width = '25%'
        document.querySelector("#right").style.width = '75%'
        document.querySelector("#icons").style.width = '15%'
        document.querySelector("#icons").style.padding = '20px 0px'
        document.querySelector("#filesctn").style.width = '85%'
        document.querySelector("#filesctn").style.display = 'initial'
        flag = false;
        console.log(flag)
    }else{
        document.querySelector("#filesctn").style.width = '0'
        document.querySelector("#filesctn").style.display = 'none'
        document.querySelector("#right").style.width = '100%'
        document.querySelector("#left").style.width = 'fit-content'
        document.querySelector("#icons").style.width = 'inherit'
        document.querySelector("#icons").style.padding = '20px 9px'
        flag = true;
        console.log(flag)
    }
})

var submitButton = document.querySelector("#btn");
var formtext = document.querySelector("#formtext");
var btnContent = document.querySelector("#btn span");
var btnIcon = document.querySelector("#btn i");
var textarea = document.querySelector("#formtext textarea");
var openfile = document.querySelector("#open");

submitButton.addEventListener("click",function(){
    formtext.submit();
});

textarea.addEventListener("keypress",function(dets){
    submitButton.style.backgroundColor = "rgb(239,239,239)";
    btnContent.textContent = "Save Changes";
    btnIcon.setAttribute("class",`ri-save-3-fill`);
});


window.addEventListener("keydown",function(event){
    if(event.key==='s' && event.ctrlKey ===true){
        e.preventDefault(); // to prevent default ctrl+s action
        formtext.submit();
    }
});

// defaultRTE.contentModule.getDocument().addEventListener("keydown",function(e: any):void{
//     if(e.key === 's' && e.ctrlKey===true){
//           e.preventDefault(); // to prevent default ctrl+s action
//           defaultRTE.updateValue(); // to update the value after editing
//           let value: any= defaultRTE.value; // you can get the RTE content to save in the desired database
//     }
//   })