<template>
    <div class="timercontainer">
        <div class="timerbox1">
            <button v-if="!getTimerStatus" @click="startTimer" class="btn" type="button">Start</button>
            <button v-else @click="stopTimer" class="btn" type="button">Stop</button>
        </div>
        <div class="timerbox2">
            <input v-if="getAutoStart" @click="toggleAutoStart" type="checkbox" checked>
            <input v-else @click="toggleAutoStart" type="checkbox"> auto start on page load
        </div>
        <div class="timerbox3">
            <div class="timerbox3-1"><button @click="resetTimer" class="btn" type="button">Reset to</button></div>
            <div class="timerbox3-2">{{ getDefaultTime }}</div>     
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "TimerControl",
    computed: mapGetters(['getAutoStart','getDefaultTime','getTimerStatus']),
    methods: {
        ...mapActions(['startTimer','stopTimer','resetTimer','toggleAutoStart'])
    }
}
</script>

<style scoped>
    .timercontainer{
        display:flex;
        flex-direction:column;
        max-width: 200px;
        border-style: solid;
        border-color: #ccc;
        margin:5px;
        padding:5px;
    }
    .timerbox1{
        display:flex;
        flex-direction:column;
    }
    .timerbox3{
        display:flex;
        flex-direction:row;
    }
    .timerbox3-1{
        flex:1;
    }
    .timerbox3-2{
        flex:1;
        margin:auto;
        text-align:center;
        overflow: hidden;
    }

</style>
