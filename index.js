
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
form.addEventListener("submit",function(event){
   event.preventDefault();
   let obj={
    task:form.task.value,
    prior:form.priority.value,
}
displaytodo(obj)
});
function displaytodo(data){
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText=data.task;;
        let col2 = document.createElement("td");
        col2.innerText=data.prior;
        if(data.prior == "High"){
            col2.style.backgroundColor="red"
        } else {
            col2.style.backgroundColor="green"
        }
        let col3 = document.createElement("td");
        col3.innerText="Delete";
        col3.addEventListener("click",function (event){
            event.target.parentNode.remove();
        })
        col3.style.color="red";
        row.append(col1,col2,col3);
      tbody.append(row);
    }


