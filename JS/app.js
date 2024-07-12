let dice = document.getElementById("image")

let arryColor = ["IMAGES/dice-1-preview.png" , "IMAGES/dice-2-preview.png" ,"IMAGES/dice-3-preview.png",
    "IMAGES/dice-4-preview.png" ,"IMAGES/dice-5-preview.png","IMAGES/dice-6-preview.png"
]
let [imge1, imge2, imge3,imge4,imge5,imge6] = arryColor;
function dicebutton(){
    let image = document.getElementById('image');
            image.classList.toggle('rotate')
    var num = Math.ceil(Math.random()*6)
    // console.log(num);
if(num == "1"){
    dice.src = imge1;
}else if(num == "2"){
    dice.src = imge2;
}else if(num == "3"){
    dice.src = imge3;
}
    else if(num == "4"){
    dice.src = imge4;

    }else if(num == "5"){
        dice.src = imge5;
    }
else if(num == "6"){

    dice.src = imge6;
}
  
}
function startnow(){

    dice.src = "IMAGES/3d-rendering.jpg"
}