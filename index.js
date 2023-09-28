

function add(){




    // alert(document.getElementsByClassName("input1").innerHTML)
    let value1=document.getElementsByClassName("input1");
    
    
    let value2=document.getElementsByClassName("input2");
    
    let ans;
    ans =Number(value1[0].value)+Number(value2[0].value);
    
    document.getElementById("answer").innerHTML = ans;
    
}










function sub(){
//      let value1=document.getElementsByClassName("input1");
    
    
let value1=document.getElementsByClassName("input1");
    
    
let value2=document.getElementsByClassName("input2");

let ans;
ans =Number(value1[0].value)-Number(value2[0].value);

document.getElementById("answer").innerHTML = ans;
    
}

function mul(){
//      let value1=document.getElementsByClassName("input1");
    
    
let value1=document.getElementsByClassName("input1");
    
    
let value2=document.getElementsByClassName("input2");

let ans;
ans =Number(value1[0].value)*Number(value2[0].value);

document.getElementById("answer").innerHTML = ans;
    
}


function div(){
    let value1=document.getElementsByClassName("input1");
    
    
    let value2=document.getElementsByClassName("input2");
    
    let ans;
    ans =Number(value1[0].value)/Number(value2[0].value);
    
    document.getElementById("answer").innerHTML = ans;
}

function reset(){
    document.getElementById("answer").innerHTML=0;
}