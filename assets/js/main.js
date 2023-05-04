console.log("Hola desde un script externo");


function changeColorTo(color){
    const refName = document.getElementById("name");
    refName.style.color = color;
}

function changeColorParagraph(refObj, color){
    console.log(refObj);
    refObj.style.color = color;
}

function resetColors(){
    const refObjs = document.getElementsByClassName("text-color");
    console.log(refObjs);
    for (let index = 0; index < refObjs.length; index++) {
        const element = refObjs[index];
        element.style.color = "purple";
    }
}