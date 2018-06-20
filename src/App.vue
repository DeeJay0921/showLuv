<template>
  <div id="app">
    <div id="music" 
        @click='handleMusic' 
        :class='{musicPlaying: isplaying}'>
        <div class="iconfont icon-yinlemusic214"></div>
        <audio src="http://ox2pbpy73.bkt.clouddn.com/%E7%9C%8B%E9%80%8F%E4%BB%A5%E5%90%8E.mp3" id='music'></audio>
    </div>
    <HeartClick 
    v-if="step == 1"
    @stepDone='changeStep'
    ></HeartClick>

    <Intro
    v-if="step == 2"
    ></Intro>
    
  </div>
</template>

<script>
  import HeartClick from './components/heartClick'
  import Intro from './components/Intro'

  export default {
    name: 'App',
    components: {
      HeartClick,
      Intro
    },
    data() {
      return {
        isPaused: false,
        isplaying: true,
        step: 1,
      }
    },
    methods: {
      changeStep(step) {
        if(step == 1) {
          this.step += 1
        }
      },
      handleMusic() {
        if(!this.isPaused) {
          this.music.pause()
          this.isPaused = !this.isPaused
          this.isplaying = !this.isplaying
        }else {
          this.music.play()
          this.isPaused = !this.isPaused
          this.isplaying = !this.isplaying
        }
      }
    },
    mounted () {
      this.music = document.querySelector('#music audio')
      this.music.play()
      this.music.addEventListener('ended',() => {
        this.isPaused = true
        this.isplaying = false
      })
    }
  }
</script>

<style>
  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  #music {
    position: absolute;
    width: 8vw;
    height: 8vw;
    z-index: 2;
    border-radius: 50%;
    right: 3vw;
    top: 3vw;
  }
  .musicPlaying {
    animation: 1s rotate infinite linear;
    animation-play-state: running;    
  }
  @keyframes rotate {
    from {transform: rotate(0deg)}
    25% {transform: rotate(90deg)}
    50% {transform: rotate(180deg)}
    75% {transform: rotate(270deg)}
    to {transform: rotate(360deg)}
  }
  #music div {
    width: 100%;
    height: 100%;
    font-size: 8.1vw;
  }
</style>
