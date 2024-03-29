const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");
const messsageSpan = document.querySelector(".message span")
const searchForm = document.querySelector(".search");



function updateMessages(){
    const textLength = tasks.children.length;
    messsageSpan.textContent = `You have ${textLength} pending tasks.`
}

updateMessages();

addForm.addEventListener("submit", event => {
    event.preventDefault();
    const value = addForm.task.value.trim()
    if (value.length) {
        console.log(value);
        tasks.innerHTML += ` <li>
                               <span>${value}</span>
                               <i class="bi bi-trash-fill delete"></i>
                            </li>`
        addForm.reset();
        updateMessages();
    }
});

tasks.addEventListener("click",  event => {

    if(event.target.classList.contains("delete")){
         
        //console.log(event.target.parentElement);
        event.target.parentElement.remove();
        updateMessages();

    }

});

clearAll.addEventListener("click",event => {

    const taskItems = tasks.querySelectorAll("li");
    taskItems.forEach(item => {
       item.remove();

    })
    updateMessages();
});


function filterTask(term)
{
    Array.from(tasks.children)
    .filter(task =>{

        return !task.textContent.toLowerCase().includes(term);

    })
    .forEach(task => {

        task.classList.add("hide")
    });

    Array.from(tasks.children)
    .filter(task =>{

        return task.textContent.toLowerCase().includes(term);

    })
    .forEach(task => {

        task.classList.remove("hide")
    });

}



searchForm.addEventListener("keyup",event => {
    const term = searchForm.task.value.trim().toLowerCase();
    filterTask(term);
});


searchForm.addEventListener("click",event => {

    if(event.target.classList.contains('reset')){
        searchForm.reset();
        const term = searchForm.task.value.trim();
        filterTask(term);
        
    }

})