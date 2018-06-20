<template>
    <div id="Intro" :style="{opacity: opacity}">
        <div id="IntroContent">
            <div id="IntroTitle" 
                v-if='title_seen'
                :class='{
                    animated: animated,
                    bounceInUp: bounceInUp
                }'>
                亲爱哒～
            </div>
            <div id="IntroSentence" v-if='sen_seen'>
                <li v-for='(sen) in sentences'
                    :class='{
                        animated: true,
                        rotateInDownLeft: true
                        }'
                >
                    {{ sen }}
                </li>
            </div>
            <div id="Name" v-if='name_seen' class='animated tada'>
                --爱你的斌斌
            </div>
            <div id="forever" v-if='love_seen' class="animated bounceInLeft">
                love u forever and ever ~
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Intro',
        data() {
            return {
                opacity: 0,
                title_seen: false,
                sen_seen: false,
                name_seen: false,
                love_seen: false,
                index: 0,
                animated: true,
                infinite: true,
                bounceInUp: true,
                bounceOutDown: false,
                rubberBand: true,
                sentences: [],
                sentences2: [
                    '在一起很久了',
                    '也不知道说什么',
                    '但是爱你的心情你是懂的',
                    '么么哒～'
                ]
            }
        },
        methods: {

        },
        mounted () {
            var timer1 = setInterval( () => {
                if(this.opacity >= 0.9) {
                    clearTimeout(timer1)
                    return
                }
                this.opacity += 0.1
            },100)
            setTimeout( () => {
                this.title_seen = true
            },1000)
            setTimeout( () => {
                this.sen_seen = true
                setInterval( () => {
                    if (this.sentences.length >= 4) {
                        return
                    }
                    this.sentences.push(this.sentences2[this.index])
                    this.index += 1
                },800)
            },1500)
            setTimeout( () => {
                this.name_seen = true
            },7000)
            setTimeout( () => {
                this.love_seen = true
            },8000)

            setTimeout( () => {
                var timer2 = setInterval( () => {
                    if(this.opacity < 0) {
                        this.$emit('stepDone',2)
                        clearTimeout(timer2)
                        return
                    }
                    this.opacity -= 0.1
                },100)
            },9000)
        }
    }
</script>

<style>
    #Intro {
        width: 100%;
        height: 100%;
        background-color:lightpink;
    }
    #IntroContent {
        width: 100%;
        height: 100%;
        text-align: center;
        /* padding-top: 30%; */
    }
    #IntroTitle {
        font-size: 32px;
        color:firebrick;
        padding-top: 30%;
        padding-bottom: 20%;
    }
    #IntroSentence li {
        list-style: none;
        line-height: 17vw;
        color:darkred;
        font-size: 18px;
    }
    #Name {
        padding-top: 10%;
        padding-right: 5vw;
        text-align: right;
        font-size: 22px;
        color:dimgray;
    }
    #forever {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 5vw;
        color:indianred;
    }
</style>