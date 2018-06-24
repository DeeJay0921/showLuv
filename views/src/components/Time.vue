<template>
  <div id="time" v-cloak>
    <div id="time-content">
      <div id="together" v-if='together_seen' class='animated bounceIn'>
        我们在一起
      </div>
      <div id="already" v-if='already_seen' class="animated bounceInUp">
        已经:
      </div>
      <div id="img" v-if='img_seen' :style="{opacity: opa,}">
        <img src="../assets/hand.jpeg" alt="hand">
      </div>
      <div id="totalTime" v-if='time_seen'>
        <div :class='{animated: true,infinite: true,pulse: isPulse}' id='timeLayout'>
            <span class="number">{{calcedDate.day}}</span>天
            <span class='number'>{{calcedDate.hour}}</span>小时
            <span class="number">{{calcedDate.min}}</span>分钟又
            <span class="number">{{calcedDate.sec}}</span>秒了
        </div>
      </div>
    </div>
    <div id="future" v-if='future_seen' class="animated rubberBand ">
      未来的日子，也要一起扶持着走过啊
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Time',
    data() {
      return {
        startDate: {
          sYear: 2014,
          sMonth: 9,
          sDay: 6,
          sHour: 23,
          sMin: 22,
          sSec: 0
        },
        now: null,
        start: null,
        calcedDate: {
          day: null,
          hour: null,
          min: null,
          sec: null
        },
        img_seen: false,
        opa: 0,
        together_seen: false,
        already_seen: false,
        future_seen: false,
        time_seen: false,
        isPulse: true,
      }
    },
    created() {
      this.now = new Date()
      this.start = new Date(2014, 8, 6, 23, 22, 0)
      this.calcDate()
      setInterval(() => {
        this.now = new Date()
        this.calcDate()
      }, 1000)
      this.img_seen = true
      setInterval(() => {
        if (this.opa >= 0.9) {
          return
        }
        this.opa += 0.1
      }, 200)
    },
    computed: {
      year() {
        return this.now.getFullYear() - this.startDate.sYear
      },
    },
    methods: {
      calcDate() {
        var ms = this.now.getTime() - this.start.getTime()
        var totalSec = ms / 1000
        this.calcedDate.day = Math.floor(totalSec / 3600 / 24)
        totalSec = totalSec % (3600 * 24)
        this.calcedDate.hour = Math.floor(totalSec / 3600)
        if (this.calcedDate.hour < 10) {
          this.calcedDate.hour = '0' + this.calcedDate.hour
        }
        totalSec = totalSec % 3600
        this.calcedDate.min = Math.floor(totalSec / 60)
        if (this.calcedDate.min < 10) {
          this.calcedDate.min = '0' + this.calcedDate.min
        }
        totalSec = totalSec % 60
        this.calcedDate.sec = Math.floor(totalSec)
        if (this.calcedDate.sec < 10) {
          this.calcedDate.sec = '0' + this.calcedDate.sec
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.together_seen = true
      }, 2000)
      setTimeout(() => {
        this.already_seen = true
      }, 2500)
      setTimeout(() => {
        this.time_seen = true
      }, 3500)
      setTimeout( () => {
        this.future_seen = true
      },4500)
    }
  }
</script>

<style>
  #time,
  #time-content {
    width: 100%;
    height: 100%;
  }

  #time-content {
    position: relative;
  }

  #img {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  #together,
  #already {
    text-align: center;
    font-size: 30px;
    color: dimgray;
  }

  #together {
    padding-top: 20%;
    padding-bottom: 5%;
  }

  #totalTime {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 20%;
    font-family: "sans-serif";
    color: #666;
    font-size: 18px;
    display: flex;
    justify-content: center;
  }

  .number {
    font-size: 32px;
    font-family: 'Tinos', serif;
  }

  #future {
    color: #666;
    text-align: center;
    position: absolute;
    bottom: 10%;
    width: 100%;
  }
  #timeLayout {
    width:  80%;
  }
  [v-cloak] {
    display: none;
  }
</style>