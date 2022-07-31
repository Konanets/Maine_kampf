


function digitalClock() {
    let date = new Date();
    const options = {weekday:'long',month: 'long',day: 'numeric'};
    const currentDate = (date.toLocaleDateString('en-US', options)).split(' ');
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("id_clock").innerHTML = hours + ":" + minutes + ":" + seconds;
    document.querySelector('.time_text').textContent=`${currentDate[0]} ${currentDate[1]} ${currentDate[2]}`;
    setTimeout("digitalClock()", 1000);
}
digitalClock();

document.getElementById('quota').addEventListener("click", change_quote);
function change_quote(quotes) {

    //https://type.fit/api/quotes
    fetch('quotes.json').then(text => text.json()).then(quotes => {
        let quote_text = document.querySelector('.quota');
        let quote_author = document.querySelector('.author');
        let rand_num = random(quotes.length)
        quote_text.innerHTML = quotes[rand_num].text;
        quote_author.innerHTML = quotes[rand_num].author;
    })
    function random(lenz){
        return Math.floor(Math.random()*(lenz-1));
    }
}
change_quote();


























