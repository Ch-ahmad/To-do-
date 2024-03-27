let todo = [];

let req = prompt("Please enter your request.");
while(true){
    if(req=="quit"){
        console.log("Quitting!");
        break;
    }

    if(req=="list"){
        console.log("________");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("________");
    }else if(req=="add"){
        let task = prompt("Please enter the task you want");
        todo.push(task);
        console.log("task Added!");
    }else if(req=="delete"){
        let idx = prompt("Please the index to delete!")
        todo.splice(idx, 1)
        console.log("task deleted!")
    }



    req = prompt("Please enter your next request.");

}