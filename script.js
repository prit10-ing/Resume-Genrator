// alert("loading")

function addNewWEField(){


    let newNode = document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here")


    let weOb = document.getElementById('we');

    let weAddButtonOb=document.getElementById('weAddButton');



    weOb.insertBefore(newNode ,weAddButtonOb);
}

function addNewAQField(){



    let newNode = document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here")


    let aqOb = document.getElementById('aq');

    let aqAddButtonOb=document.getElementById('aqAddButton');


    aqOb.insertBefore(newNode ,aqAddButtonOb);


}

function addNewPjField(){

    
    let newNode = document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('PjField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here")


    let PjOb = document.getElementById('Pj');

    let PjAddButtonOb=document.getElementById('PjAddButton');


    PjOb.insertBefore(newNode ,PjAddButtonOb);

}


function addNewIntern(){

    
    let newNode = document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('AmField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here")


    let AmOb = document.getElementById('Am');

    let AmAddButtonOb=document.getElementById('AmAddButton');


    AmOb.insertBefore(newNode ,AmAddButtonOb);

}


function addNewSKField(){


    let newNode = document.createElement('textarea');

    newNode.classList.add('form-control');
    newNode.classList.add('SkField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("placeholder","Enter here")


    let SkOb = document.getElementById('Sk');

    let SkAddButtonOb=document.getElementById('SkAddButton');


    SkOb.insertBefore(newNode ,SkAddButtonOb);



}

//Genrate cv

function genrateResume(){


    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1')


    nameT1.innerHTML = nameField;





    document.getElementById('nameT2').innerHTML = nameField;




    document.getElementById('contactT').innerHTML = document.getElementById('ContactField').value;




    document.getElementById("addressT").innerHTML = document.getElementById("AddressField").value;



    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("InstaField").value;
    document.getElementById("LinkedinT").innerHTML = document.getElementById("LinkedField").value;



    //objective


    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

   // work experience


   let wes = document.getElementsByClassName('weField')

   let str = ''

   for(let e of wes){

    str = str + `<li>  ${e.value}    </li>`;

   

}
document.getElementById("weT").innerHTML = str;


    let aqs = document.getElementsByClassName('eqField')

    let str1 = ''

    for(let e of aqs){

        str1 += `<li>  ${e.value}    </li>`;
    }

document.getElementById('aqT').innerHTML =str1;




let Pj = document.getElementsByClassName('PjField')

let str2 = ''

for(let e of Pj){

    str2 += `<li>  ${e.value}    </li>`;
}

document.getElementById('PjT').innerHTML =str2;




let Am = document.getElementsByClassName('AmField')

let str3 = ''

for(let e of Am){

    str3 += `<li>  ${e.value}    </li>`;
}

document.getElementById('AmT').innerHTML =str3;







let Er = document.getElementsByClassName('PjField')

let str4 = ''

for(let e of Er){

    str4 += `<li>  ${e.value}    </li>`;
}

document.getElementById('PjT').innerHTML =str4;




let Sk = document.getElementsByClassName('SkField')

let str5 = ''

for(let e of Sk){

    str5 += `<li>  ${e.value}    </li>`;
}

document.getElementById('SkT').innerHTML =str5;

// code for setting image


let fileInput = document.getElementById('imgField');
let file = fileInput.files[0];

if(file){


    let reader = new FileReader()

reader.readAsDataURL(file);

console.log(reader.result);

// set the image to template


reader.onloadend = function () {
    
document.getElementById('imgTemplate').src = reader.result;

    
};



}else{

    console.warn("No image selected.");
    document.getElementById('imgTemplate').src = "default.jpg";

}



document.getElementById('cv-form').style.display='none'

document.getElementById('cv-template').style.display='block'



}


//print cv


function printResume(){


    window.print();
}
  