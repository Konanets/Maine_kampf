const background_photos=[
    'https://images8.alphacoders.com/712/thumb-1920-712861.jpg',
    'https://images8.alphacoders.com/468/thumb-1920-468739.jpg',
    'https://images3.alphacoders.com/106/thumb-1920-1065762.jpg',
    'https://images3.alphacoders.com/563/thumb-1920-563119.jpg',
    'https://images2.alphacoders.com/501/thumb-1920-501152.jpg',
]

const sliders=document.querySelectorAll('.slider-icon');

document.getElementById('backgr').style.background=`url("${background_photos[0]}") no-repeat center center fixed`;
document.getElementById('backgr').style.backgroundSize='cover';
document.querySelector('.slider_next').addEventListener('click',next_prev);
document.querySelector('.slider_prev').addEventListener('click',next_prev)

function next_prev(targ){
    let myArray = background_photos.indexOf((/".+"/g.exec(document.getElementById('backgr').style.background))[0].replaceAll('"',''));
    let back=document.getElementById('backgr');
    if(targ.target.classList[0]==='slider_next')
    {
        if(myArray===background_photos.length-1)myArray=0;
        else myArray++;
        back.style.background=`url("${background_photos[myArray]}") no-repeat center center fixed`;
        back.style.backgroundSize='cover';
    }
    else{
        if(myArray===0)myArray=background_photos.length-1;
        else myArray--;
        back.style.background=`url("${background_photos[myArray]}") no-repeat center center fixed`;
        back.style.backgroundSize='cover';
    }
}














