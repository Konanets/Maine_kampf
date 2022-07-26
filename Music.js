// let playlists=[
//     My_top={
//         name:'Favorite songs',
//         songs:[
//             {
//                 name:'Ptaha Fred',
//                 duration:'3:20',
//                 url:"music/Ptaha_Fred.mp3"
//             }
//         ]
//     }
// ]
//
//
//
//
// const playBtn = document.querySelector('.play');
// const pauseBtn = document.querySelector('.pause');
//
//
//
// function toggleBtn() {
// }
//
//
// function playAudio() {
//     let audio=document.querySelector("audio");
//     audio.src = "music/Ptaha_Fred.mp3";
//     audio.autoplay;
//     audio.play();
//     document.querySelector('.center_music').classList.toggle('pause');
//     document.querySelector('.center_music').classList.toggle('play');
// }
//
// function pauseAudio() {
//     let audio=document.querySelector("audio");
//     audio.pause();
//     document.querySelector('.center_music').classList.toggle('pause');
//     document.querySelector('.center_music').classList.toggle('play');
// }
//
// playBtn.addEventListener('click', turn_on_off);
//
//
// function turn_on_off(e){
//     let g=false;
//     e.target.classList.forEach((item)=>{
//         if(item==='play')g=true;
//     })
//     g?playAudio():pauseAudio();
//
// }
//
//
//
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
    };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
};
