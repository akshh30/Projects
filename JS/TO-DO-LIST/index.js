let todoContEl=document.getElementById("todoCont");
let userInEl=document.getElementById("userIn");
let errorEl=document.getElementById("error");




function onGetTodoFromLocalStorage(){
    
    let todoArr=localStorage.getItem("myTodoArr");
    
    if(todoArr === null){
        return [];
    }
    else{
        let parsedTodo= JSON.parse(todoArr)
        return parsedTodo ;
    }


   
    
}

let todoList = onGetTodoFromLocalStorage();




function ontodoStatusChange(titleId,checkBoxId){
    
    let myTitle=document.getElementById(titleId);
    let myCheck=document.getElementById(checkBoxId);
    if(myCheck.checked=== true){
        myTitle.style.textDecoration="line-through";
    }
    else{
        myTitle.style.textDecoration="none";
    }   

    let todoId= titleId.slice(5);

    for(each of todoList){
        if(each.id == todoId){
           if(each.isChecked===false){
            each.isChecked=true;
           }

        else{
            each.isChecked=false;
        }

        }
    }








}



function  onDeleteTodo(todoId){
let myTodo=document.getElementById(todoId)
todoContEl.removeChild(myTodo)



}









function  createAndAppendTodo(todo){

    let checkBoxId = "checkbox" + todo.id;
    let titleId= "title" + todo.id
    let todoId="todo"+todo.id;
    

    let listItem=document.createElement("li");
    listItem.classList.add("todo-list-cont");
    listItem.id=todoId;
    todoContEl.appendChild(listItem);


    let checkBoxEl=document.createElement("input");
    checkBoxEl.type="checkbox";
    checkBoxEl.id=checkBoxId;
    checkBoxEl.onclick=function(){
        ontodoStatusChange(titleId,checkBoxId);
    }
    if(todo.isChecked===true){
        checkBoxEl.checked=true;
    }
    listItem.appendChild(checkBoxEl);



    let labelEl=document.createElement("label");
    labelEl.htmlFor=checkBoxId;
    labelEl.classList.add("label-cont");
    listItem.appendChild(labelEl);

    let titleEl=document.createElement("h4");
    titleEl.textContent=todo.title;
    titleEl.id=titleId;
    if(todo.isChecked===true){
        titleEl.style.textDecoration="line-through";
    }
    labelEl.appendChild(titleEl);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("dlt-btn");
    labelEl.appendChild(deleteBtn);
    deleteBtn.onclick= function(){

        onDeleteTodo(todoId);
    }



    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid","fa-trash");
    deleteBtn.appendChild(deleteIcon);

}



for(each of todoList){
   
    createAndAppendTodo(each);
}




function onAddNewTodo(){
    
    let userInVal=userInEl.value;
 
    if (userInVal==="") {
        errorEl.textContent="------Error please enter your task------"
    } else {
        
        let newTodo={
            title:userInVal,
            id:todoList.length+1,
            isChecked : false
            
        }
        createAndAppendTodo(newTodo);
        todoList.push(newTodo);
        errorEl.textContent=""
        userInEl.value="";
    }
       
}






function saveToBrowser()
{    
    let stringTodo = JSON.stringify(todoList);
   
    localStorage.setItem("myTodoArr",stringTodo );
    

}