import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';

console.log(player)
const onPlay = function(data) {
     localStorage.setItem('KEY', JSON.stringify(data))
  };

player.on('timeupdate', throttle(onPlay,1000));

const local = localStorage.getItem('KEY');
const time = JSON.parse(local)
console.log(time)

player.setCurrentTime(time.seconds).then(function(seconds) {
console.log(seconds)
}).catch(function(error) {
    switch (50) {
        case time.seconds:
            console.log("dct")
            break;

        default:
            // some other error occurred
            break;
    }
});
