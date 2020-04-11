var itemList=[];

var addBtn=document.querySelector("#add");
addBtn.addEventListener("click",addList);

getItems();

function getItems(){
    var storedData=localStorage.getItem("storageList");
}
function addList(){
    var list=document.querySelector("#item").value;
    itemList.push(list);
    document.querySelector("#item").value="";
    document.querySelector("#item").focus();
    showList();
}

function showList(){
    var listArray="<ul>";
    for(var i=0;i<itemList.length;i++){
        listArray+=`<li>${itemList[i]}<span id="${i}" class="close">X</span></li>`;
    }
    listArray+="</ul>";
    document.querySelector("#itemList").innerHTML=listArray;

    var remove=document.querySelectorAll(".close");
    for(var i=0;i<remove.length;i++){
        remove[i].addEventListener("click",removeList);
    }
}

function removeList(){
    var id=this.getAttribute("id");
    itemList.splice(id,1);
    showList();
}