<template>
    <div class="controlcontainer">
        <div class="controlbox1">
            <div class="controlbox1-1"><TimerControl /></div>
            <div class="controlbox1-2"><SoundControl /></div>        
        </div>
        <div class="controlbox3"><HourControl /></div>
        <div class="controlbox3"><MinuteControl /></div>
        <div class="controlbox3"><SecondControl /></div>
    </div>
</template>

<script>
import TimerControl from '../components/TimerControl';
import SoundControl from '../components/SoundControl';
import HourControl from '../components/HourControl';
import MinuteControl from '../components/MinuteControl';
import SecondControl from '../components/SecondControl';

export default {
    name: "ControlPanel",
    components: {
        TimerControl,
        SoundControl,
        HourControl,
        MinuteControl,
        SecondControl
    }
}
</script>

<style scoped>
    .controlbox1{
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
    }
    .controlbox1-1{
        flex:1;
    }
    .controlbox1-2{
        flex:auto;
    }

</style>
