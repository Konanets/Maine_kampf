
function load_task_data(){
    let ul=document.getElementById('task_ul')
    ul.innerHTML=localStorage.getItem('tasks');
    let arr_li=document.querySelectorAll('ul>li.task');
   arr_li.forEach(task=>{
       task.children[0].addEventListener('keydown',store_to_locale)
       task.children[1].addEventListener('click',readable_on_off);
       task.children[2].addEventListener('click',done_task);
       task.children[3].addEventListener('click',minus_task);
   })
}

function store_to_locale(){
    let arr_tasks=document.querySelectorAll('ul>li.task');

    let ul=document.createElement('ul');
    arr_tasks.forEach(e=> {
        let task_value=e.firstChild.value;
        ul.append(e.cloneNode(true));
        ul.lastElementChild.firstChild.setAttribute('value',task_value)
    });
    localStorage.setItem('tasks',ul.innerHTML);
}

function minus_task(task_event){
    task_event.target.parentNode.parentNode.removeChild(task_event.target.parentNode)
    store_to_locale();

}

function readable_on_off(task_event){
    task_event.target.previousElementSibling.readOnly=!task_event.target.previousElementSibling.hasAttribute('readOnly');
    task_event.target.classList.toggle('fa-square-check');
    task_event.target.classList.toggle('fa-square-pen');
    store_to_locale();
}


function done_task(task_event){
    task_event.target.parentNode.firstChild.classList.toggle('line_through');
    store_to_locale();
}

function new_task(){
    let task_block=document.getElementById('task_ul');
    if(document.querySelectorAll('ul>li.task').length<7) {
        let li=document.createElement('li');
        li.classList.add('task')
        li.innerHTML='<input type="text" maxlength="25" id="Input" class="task_text">\n' +
            '    <i class="fa-solid fa-square-check icon2"></i>\n' +
            '    <i class="fa-solid fa-square-minus icon2"></i>\n' +
            '    <i class="fa-solid fa-rectangle-xmark icon2"></i>'
        task_block.append(li);


        let task_buttons=task_block.lastElementChild.children;
        task_buttons[0].addEventListener('keydown',store_to_locale)
        task_buttons[1].addEventListener('click',readable_on_off);
        task_buttons[2].addEventListener('click',done_task);
        task_buttons[3].addEventListener('click',minus_task);

    }
}


let add_task_box=document.querySelector('.fa-square-plus');
add_task_box.addEventListener('click',new_task);
load_task_data();

