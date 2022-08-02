
var elms = ['track', 'timer', 'duration', 'playBtn', 'pauseBtn', 'prevBtn', 'nextBtn', 'progress', 'playlist', 'list', 'volume'];
elms.forEach(function(elm) {
    window[elm] = document.getElementById(elm);
});


var Player = function(playlist) {
    this.playlist = playlist;
    this.index = 0;
    track.innerHTML = '1. ' + playlist[0].artist + ' - ' + playlist[0].title;
    playlist.forEach(function(song) {
        var div = document.createElement('div');
        div.className = 'list-song';
        div.innerHTML = song.artist + ' - ' + song.title + ' | ' + song.duration;
        var aDownload = document.createElement('a');
        aDownload.className = 'download';
        div.appendChild(aDownload);
        aDownload.href=song.file;
        aDownload.download = 'file.mp3';
        aDownload.addEventListener("click", function(e) {
            e.stopPropagation();
        });

        var timeSound;
        div.onclick = function() {
            if(div.classList.contains("list-song1")) {
                player.pause();
                var soundPlaylist = playlist[playlist.indexOf(song)].howl;
                var seekPlaylist = soundPlaylist.seek() || 0;
                timeSound = seekPlaylist / soundPlaylist.duration();
                div.classList.remove("list-song1");
                div.classList.add("list-song");
            } else {
                player.skipTo(playlist.indexOf(song));
                player.seek(timeSound);
                progress.style.width = ((timeSound * 100) || 0) + '%';
            }
        };
        list.appendChild(div);
    });
};

Player.prototype = {

    play: function(index) {
        var self = this;
        var sound;

        index = typeof index === 'number' ? index : self.index;
        var data = self.playlist[index];

        if (data.howl) {
            sound = data.howl;
        } else {
            sound = data.howl = new Howl({

                src: [data.file],
                html5: true,
                onplay: function() {
                    duration.innerHTML = self.formatTime(Math.round(sound.duration()));
                    requestAnimationFrame(self.step.bind(self));
                    pauseBtn.style.display = 'flex';
                },
                onload: function() {
                },
                onend: function() {
                    self.skip('right');
                },
                onpause: function() {
                },
                onstop: function() {
                }
            });
        }

        sound.play();

        track.innerHTML = (index + 1) + '. ' + data.artist + ' - ' + data.title;

        if (sound.state() === 'loaded') {
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'flex';
        } else {
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'flex';
        }

        var songLists = document.querySelectorAll("#list div");
        for(var i = 0; i < songLists.length; i++) {
            if(songLists[i].classList.contains("list-song1")) {
                songLists[i].classList.remove("list-song1");
                songLists[i].classList.add("list-song");
            }
            if(i == index) {
                songLists[i].classList.remove("list-song");
                songLists[i].classList.add("list-song1");
            }
        }

        pauseBtn.addEventListener("click", function() {
            for(var i = 0; i < songLists.length; i++) {
                if(songLists[i].classList.contains("list-song1")) {
                    songLists[i].classList.remove("list-song1");
                    songLists[i].classList.add("list-song");
                }
            }
        });

        self.index = index;


        var progressBar = document.querySelector(".duration-player");
        progressBar.addEventListener("click", function(e) {

            if (self.index == index)  {
                progressValue = e.offsetX;
                progressValueWidth = progressValue/(progressBar.offsetWidth);
                if(progressValueWidth > 0 && progressValueWidth < 1) {
                    progress.style.width = (((progressValueWidth) * 100) || 0) + '%';
                    player.seek(progressValueWidth);
                }
            }
        });
    },


    pause: function() {
        var self = this;

        var sound = self.playlist[self.index].howl;

        sound.pause();


        playBtn.style.display = 'flex';
        pauseBtn.style.display = 'none';

    },

    skip: function(direction) {
        var self = this;

        var index = 0;
        if (direction === 'prev') {
            index = self.index - 1;
            if (index < 0) {
                index = self.playlist.length - 1;
            }
        } else {
            index = self.index + 1;
            if (index >= self.playlist.length) {
                index = 0;
            }
        }

        self.skipTo(index);
    },

    skipTo: function(index) {
        var self = this;


        if (self.playlist[self.index].howl) {
            self.playlist[self.index].howl.stop();
        }

        progress.style.width = '15%';


        self.play(index);

        var songLists = document.querySelectorAll("#list div");
        for(var i = 0; i < songLists.length; i++) {
            if(songLists[i].classList.contains("list-song1")) {
                songLists[i].classList.remove("list-song1");
                songLists[i].classList.add("list-song");
            }
            if(i == index) {
                songLists[i].classList.remove("list-song");
                songLists[i].classList.add("list-song1");
            }
        }

    },



    volume: function(val) {
        var self = this;
        Howler.volume(val);
    },


    seek: function(per) {
        var self = this;

        var sound = self.playlist[self.index].howl;

        if (sound.playing()) {
            sound.seek(sound.duration() * per);
        }
    },

    step: function() {
        var self = this;

        var sound = self.playlist[self.index].howl;
        var seek = sound.seek() || 0;

        timer.innerHTML = self.formatTime(Math.round(seek));
        progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

        if (sound.playing()) {
            requestAnimationFrame(self.step.bind(self));
        }
    },

    formatTime: function(secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;

        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
};

var player = new Player(
    CreatePlayer()
);

playBtn.addEventListener('click', function() {
    player.play();
});
pauseBtn.addEventListener('click', function() {
    player.pause();
});
prevBtn.addEventListener('click', function() {
    player.skip('prev');
});
nextBtn.addEventListener('click', function() {
    player.skip('next');
});


var soundVolume = document.getElementById("soundVolume");
soundVolume.addEventListener('input', function() {
    player.volume(soundVolume.value);
});

function muter() {
    if (soundVolume.value == 0) {
        player.volume(restoreValue);
        soundVolume.value = restoreValue;
        muteButton.style.opacity = 1;
    } else {
        player.volume(0);
        restoreValue = soundVolume.value;
        soundVolume.value = 0;
        muteButton.style.opacity = 0.4;
    }
}

var muteButton = document.getElementById("muteButton");
muteButton.addEventListener("click", muter); 