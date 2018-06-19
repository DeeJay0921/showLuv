<template>
    <div id="heart_click" @click=animate>
        <div id="heart">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeartClick',
    methods: {
        animate() {

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