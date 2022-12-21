var dob=document.querySelector("#input-date");
var luckyNum=document.querySelector("#inp-number");
var checkBtn=document.querySelector("#button");
var output=document.querySelector("#output-area")

function calculateSum(date){
    var sum=0;
    var dateOfBirth=date.value.replaceAll("-","");
    for(let i=0;i<dateOfBirth.length;i++){
        sum=sum+Number(dateOfBirth.charAt(i));

    }
    return sum;
}


function checkLucky(){
     var date=calculateSum(dob);
     console.log(date)
     
     if(date%luckyNum.value===0){
        output.innerText="You are lucky"
     }else{
        output.innerText="Oops you arent"
     }
}

checkBtn.addEventListener("click",checkLucky);