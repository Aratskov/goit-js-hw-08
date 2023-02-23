import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import storage from './storage';
const { save, load } = storage;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';

const loading = load(KEY);
player.setCurrentTime(loading.seconds);

const onPlay = data => {
  save(KEY, data);
};

player.on('timeupdate', throttle(onPlay, 1000));
