<template>
    <div id="Intro" :style="{opacity: opacity,height: height + '%',}">
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
                        rotateInDownRight: index/2 != 0,
                        rotateInDownLeft: index/2 == 0
                        }'
                >
                    {{ sen }}
                    {{ index }}
                </li>
            </div>
            <div id="Name" v-show=false>
                --爱你的斌斌
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
                height: 100,
                title_seen: false,
                sen_seen: false,
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
            setInterval( () => {
                if(this.opacity >= 0.9) {
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
        }
    }
</script>

<style>
    #Intro {
        width: 100%;
        background-color:lightpink;
    }
    #IntroContent {
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: 30%;
    }
    #IntroTitle {
        font-size: 32px;
        color:firebrick;
    }
</style>