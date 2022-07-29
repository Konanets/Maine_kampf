const background_photos=[
    'https://images8.alphacoders.com/712/thumb-1920-712861.jpg',
    'https://images8.alphacoders.com/468/thumb-1920-468739.jpg',
    'https://images3.alphacoders.com/106/thumb-1920-1065762.jpg',
    'https://images3.alphacoders.com/563/thumb-1920-563119.jpg',
    'https://images2.alphacoders.com/501/thumb-1920-501152.jpg',
]

function setBg(link) {
    const img = new Image();
    img.src = link
        img.onload = () => {
            document.getElementById('backgr').style.background=`url("${img.src}") no-repeat center center fixed`;
            document.getElementById('backgr').style.backgroundSize='cover';
        };
}
//https://raw.githubusercontent.com/Konanets/Photos/master/1.jpg
setBg("https://raw.githubusercontent.com/Konanets/Photos/master/1.jpg");
document.querySelector('.slider_next').addEventListener('click',next_prev);
document.querySelector('.slider_prev').addEventListener('click',next_prev)

function next_prev(targ){
    let myArray = background_photos.indexOf((/".+"/g.exec(document.getElementById('backgr').style.background))[0].replaceAll('"',''));
    if(targ.target.classList[0]==='slider_next')
    {
        if(myArray===background_photos.length-1)myArray=0;
        else myArray++;
        setBg(background_photos[myArray]);
    }
    else{
        if(myArray===0)myArray=background_photos.length-1;
        else myArray--;
        setBg(background_photos[myArray]);
    }
}














