<template>
    <div class="TimerDisplay">
        {{ getCountdownTime }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "TimerDisplay",
    methods: {
        ...mapActions(['resetTimer','startTimer'])
    },
    computed: mapGetters(['getAutoStart','getCountdownTime']),
    created(){
        this.resetTimer();
        (this.getAutoStart) ? this.startTimer() : {};
    }
}
</script>

<style scoped>
    .TimerDisplay {
        text-align:center;
        padding-top:30px;
        padding-bottom:30px;
        font-weight: bold;
        font-size: xx-large;
        margin:5px;
        border-style: solid;
        border-color: #ccc;
    }
</style>
