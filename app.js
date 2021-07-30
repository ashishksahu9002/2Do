var elements = [];
const popBlur = document.querySelector('.popupBlur');


// functions

window.onload = function(){
    if(JSON.parse(localStorage.getItem("todo-elements")) != null){
        elements = JSON.parse(localStorage.getItem("todo-elements"));
        display();
    }
}

function addElement(){
    if(document.querySelector(".addTxt").value.trim()!=""){
        elements.push(document.querySelector(".addTxt").value.trim());
        if(localStorage.getItem("todo-elements")==null){
            localStorage.setItem("todo-elements", JSON.stringify(elements));
        }
        else{
            localStorage.setItem("todo-elements", JSON.stringify(elements));
        }
        
        popBlur.style.display = 'none';        
        display();
        document.querySelector('.addTxt').value = "";
    }
}

function display(){
    document.querySelector(".list").innerHTML = "";
    for(var i=0; i<elements.length; i++)
        document.querySelector(".list").innerHTML += "<center><div class='element'>"+elements[i]+"<img src = './tick.png' class='tick' onclick='strike("+i+")'><img src = './dustbin.png' class='dustbin' onclick='del("+i+")'></div></center>"

}

function del(index){
    elements.splice(index,1);
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    else{
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    display();
}

function strike(index){
    if(elements[index].includes("<strike>")){
        elements[index] = elements[index].replace("<strike>","");
        elements[index] = elements[index].replace("</strike>","");
    }
    else{
        elements[index] = "<strike>"+ elements[index] + "</strike>";
    }
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    else{
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    
    display();
}

function addPop(){
    popBlur.style.display = 'block';        
}

function closePopUp(){
    popBlur.style.display = 'none';
}