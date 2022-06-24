let inputTask = document.getElementById("inputTask");
let addTask = document.getElementById("addTask");
let selecting = document.getElementById("filtering");
let completeOrIncomplete = '';
let deleting = '';
let outputContainer = document.getElementById("outputContainer");

class Lists{

    constructor(task, completion){

        this.task = task;
        this.completion = completion;
    }
}

let listHolder = [];
let completedHolder = [];
let incompletedHolder = [];

addTask.addEventListener("click", handleAddingTask);
selecting.addEventListener("change", handleSelection);

function handleAddingTask(){

    listHolder.push(new Lists(inputTask.value, 0));
    printFilter(listHolder);
    inputTask.value = '';

}

function handleSelection(){

    if(selecting.value == "all"){

        outputContainer.textContent = '';
        printFilter(listHolder);

    }

    else if(selecting.value == "completed"){

        outputContainer.textContent = '';

        completedHolder = listHolder.filter( element => element.completion > 0);
        printFilter(completedHolder);

    }

    else{

        outputContainer.textContent = '';

        incompletedHolder = listHolder.filter( element => element.completion < 1);
        printFilter(incompletedHolder);

    }
}

function printFilter(arrayHere){

    outputContainer.textContent = '';
    for(let i = 0; i < arrayHere.length; i++){

            let whole = document.createElement("div");
            whole.className = "whole";
            let p = document.createElement("p");
            p.textContent = arrayHere[i].task;

            if(arrayHere[i].completion == 1){

                p.style.textDecoration = "line-through";
            }
            let completeIncomplete = document.createElement("button");
            completeIncomplete.className = "complete-incomplete";
            completeIncomplete.textContent = "complete/incomplete";

            let deleteButton = document.createElement("button");
            deleteButton.className = "delete";
            deleteButton.textContent = "Delete";

            whole.append(p);
            whole.append(completeIncomplete);
            whole.append(deleteButton);
            // p.append(completeIncomplete);
            outputContainer.append(whole);

    }



    completeOrIncomplete = document.getElementsByClassName("complete-incomplete");
    deleting = document.getElementsByClassName("delete");



 
for(let i = 0; i < completeOrIncomplete.length; i++){

    completeOrIncomplete[i].addEventListener("click",handleCompletion);

}

for(let i = 0; i < deleting.length; i++){

    deleting[i].addEventListener("click",handleDeletion);

}


}

function handleCompletion(){

    let indexHolder = 0;
    for(let i = 0; i < listHolder.length; i++){

        if(listHolder[i].task == this.previousSibling.textContent){

            indexHolder = i;
        }
    }

    if(this.previousSibling.style.textDecoration == "line-through"){

        this.previousSibling.style.textDecoration = "none";
        listHolder[indexHolder].completion = 0;



    }

    else{

        this.previousSibling.style.textDecoration = "line-through";
        listHolder[indexHolder].completion = 1;


    }


    

}

function handleDeletion(){

    let indexHolder = 0;
    for(let i = 0; i < listHolder.length; i++){

        if(listHolder[i].task == this.parentElement.firstElementChild.textContent){

            indexHolder = i;
        }
    }

    if(listHolder.length == 1){


        listHolder.pop();
        console.log(listHolder);

    }
    else{

        listHolder.splice(indexHolder, indexHolder);
        console.log(listHolder);


    }
   
    handleSelection();

}


