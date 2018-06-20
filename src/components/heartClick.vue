<template>
    <div id="heart_click" @click=animate>
        <div :class='{animated: animated,
            infinite: infinite,
            bounceOutDown: bounceOutDown,
            rubberBand: rubberBand}'>
            <div id="heart"></div>
        </div>
        <div id="click_tip" v-if='tip_show'>click~</div>
    </div>
</template>

<script>
export default {
    name: 'HeartClick',
    data () {
        return {
            animated: true,
            infinite: true,
            bounce: true,
            bounceOutDown: false,
            rubberBand: true,
            tip_show: false
        }
    },
    methods: {
        animate() {
            this.tip_show = false
            this.bounce = false
            this.bounceOutDown = true
            this.infinite = false
            setTimeout( () => {
                this.$emit('stepDone',1)
            },1000)
        }
    }
}
</script>

<style>
    #heart_click {
        width:  100%;
        height:  100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color:azure;
    }
    #click_tip {
        position: absolute;
        /* top: 50%; */
        /* left: 50%; */
        /* transform: translate(-50%,-50%); */
    }
    #heart {
        width: 15vw;
        height: 15vw;
        background-color: crimson;
        transform: rotate(45deg);
        position: relative;
    }
    #heart::after,#heart::before {
        position: absolute;
        content: '';
        display: block;
        width: 15vw;
        height: 15vw;
        background-color: crimson;
        border-radius: 50%;
    }
    #heart::before {
        left: -7.5vw;
        top: 0;
    }
    #heart::after {
        right: 0;
        top: -7.5vw;
    }
</style>