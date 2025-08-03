 var flag = false; 
 var counter = 0;

function abc(p) {

var arr = document.getElementsByTagName("td");
if (p.innerHTML == ""){
    if (!flag){
        p.innerHTML = "X";
        flag = true;
    }
    else{
        p.innerHTML = "O";
        flag = false;
    }
}

if
(      
         arr[0].innerHTML==="X" && arr[1].innerHTML==="X" && arr[2].innerHTML==="X" ||
         arr[0].innerHTML==="X" && arr[3].innerHTML==="X" && arr[6].innerHTML==="X" ||
         arr[0].innerHTML==="X" && arr[4].innerHTML==="X" && arr[8].innerHTML==="X" || 
         arr[3].innerHTML==="X" && arr[4].innerHTML==="X" && arr[5].innerHTML==="X" ||
         arr[1].innerHTML==="X" && arr[4].innerHTML==="X" && arr[7].innerHTML==="X" ||
         arr[2].innerHTML==="X" && arr[4].innerHTML==="X" && arr[6].innerHTML==="X" ||
         arr[6].innerHTML==="X" && arr[7].innerHTML==="X" && arr[8].innerHTML==="X" ||
         arr[2].innerHTML==="X" && arr[5].innerHTML==="X" && arr[8].innerHTML==="X"  
)
    {
        document.getElementById("result").innerHTML = "<b>X Character won!<b>"
    }

if
(
        arr[0].innerHTML==="O" && arr[1].innerHTML==="O" && arr[2].innerHTML==="O" ||
        arr[0].innerHTML==="O" && arr[3].innerHTML==="O" && arr[6].innerHTML==="O" ||
        arr[0].innerHTML==="O" && arr[4].innerHTML==="O" && arr[8].innerHTML==="O" || 
        arr[3].innerHTML==="O" && arr[4].innerHTML==="O" && arr[5].innerHTML==="O" ||
        arr[1].innerHTML==="O" && arr[4].innerHTML==="O" && arr[7].innerHTML==="O" ||
        arr[2].innerHTML==="O" && arr[4].innerHTML==="O" && arr[6].innerHTML==="O" ||
        arr[6].innerHTML==="O" && arr[7].innerHTML==="O" && arr[8].innerHTML==="O" ||
        arr[2].innerHTML==="O" && arr[5].innerHTML==="O" && arr[8].innerHTML==="O"  
)
     {
         document.getElementById("result").innerHTML = "<b>O Character won!<b>"
     }

     var xxx = 0;
     for(var i = 0; i<arr.length ; i++){
        if(arr[i].innerHTML == "X" || arr[i].innerHTML == "O"){
            xxx++;
        }
     }
        if(xxx===9){
    document.getElementById("result").innerHTML = "<b>Its Teko!<b>"
        }

}

function clearDisplay(){
    var arr = document.getElementsByTagName("td");
    document.getElementById("result").innerHTML = ""
    for(var i = 0; i<arr.length ; i++){
        arr[i].innerHTML = "";
    }
    counter=0;
}



// var arr = document.getElementsByTagName("td");
// var temp = arr[index];

//     if(counter % 2 == 0 && temp.innerHTML != "O" ){
//         temp.innerHTML = "X";
//     }
//     if(counter % 2 == 1 && temp.innerHTML != "X"){
//         temp.innerHTML = "O";
//     }
//     counter++;
    
///////////////////////////////////////////////////////////////////////////////////////////

// var arr = [
//     "./igul.JPG",
//     "./iks.JPG",
//     "./igul.JPG",
//     "./iks.JPG",
//     "./iks.JPG",
//     "./igul.JPG",
//     "./iks.JPG",
//     "./iks.JPG",
//     "./igul.JPG",
//     "./iks.JPG",
//     "./iks.JPG",
//     "./igul.JPG",
//     "./iks.JPG",
//     "./igul.JPG",
//     "./iks.JPG",
//     "./igul.JPG",
//     "./iks.JPG"
// ];
// temp.innerHTML = `<img src="${arr[++num]}" alt="Image">`;


