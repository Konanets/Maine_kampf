
function check_legths(){
    let lenzs=document.querySelectorAll('li');
    return lenzs.length < 7;
}

function minus_task(event){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}

function add_event_for_tasks(){
    let arr_tasks=document.querySelectorAll('.fa-rectangle-xmark');
    arr_tasks.forEach((task)=>{
        task.addEventListener('click',minus_task);
    })
}


function button_click(){
    let task_block=document.querySelector('ul');
    if(check_legths())task_block.innerHTML+='<li class="task">\n' +
        '    <label>\n' +
        '        <input type="text" class="task_text">\n' +
        '    </label>\n' +
        '    <i class="fa-solid fa-square-check icon2"></i>\n' +
        '    <i class="fa-solid fa-square-minus icon2"></i>\n' +
        '    <i class="fa-solid fa-rectangle-xmark icon2"></i>\n' +
        '</li>'


         add_event_for_tasks();



}


let add_task_box=document.querySelector('.fa-square-plus');
add_task_box.addEventListener('click',button_click);

