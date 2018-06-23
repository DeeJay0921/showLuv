<template>
  <div id="time">
    <div id="time-content">
      我们已经在一起: {{calcedDate.day}}天 {{calcedDate.hour}}小时 {{calcedDate.min}}分钟又 {{calcedDate.sec}}秒了
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
        }
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
          this.calcedDate = '0' + this.calcedDate.min
        }
        totalSec = totalSec % 60
        this.calcedDate.sec = Math.floor(totalSec)
        if (this.calcedDate.sec < 10) {
          this.calcedDate.sec = '0' + this.calcedDate.sec
        }
      }
    },
  }
</script>

<style>
  #time {
    width: 100%;
    height: 100%;
  }
</style>