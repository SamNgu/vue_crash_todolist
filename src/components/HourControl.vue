<template>
    <div class="hourcontainer">
        <div class="hourbox1">
            <div class="hourbox1-1"><button @click="incrementTimer({hour:1,minute:null,second:null})" class="uparrow" type="button"></button></div>
            <div class="hourbox1-2">Hour</div>
            <div class="hourbox1-3"><button @click="incrementTimer({hour:-1,minute:null,second:null})" class="downarrow" type="button"></button></div>
        </div>
        <div class="hourbox2">
            <button @click="setTimer({hour:1,minute:null,second:null})" type="button" class="btn hourbox2-1">1</button>
            <button @click="setTimer({hour:2,minute:null,second:null})" type="button" class="btn hourbox2-1">2</button>
            <button @click="setTimer({hour:3,minute:null,second:null})" type="button" class="btn hourbox2-1">3</button>
            <button @click="setTimer({hour:4,minute:null,second:null})" type="button" class="btn hourbox2-1">4</button>
            <button @click="setTimer({hour:5,minute:null,second:null})" type="button" class="btn hourbox2-1">5</button>
            <button @click="setTimer({hour:6,minute:null,second:null})" type="button" class="btn hourbox2-1">6</button>
            <button @click="setTimer({hour:7,minute:null,second:null})" type="button" class="btn hourbox2-1">7</button>
            <button @click="setTimer({hour:8,minute:null,second:null})" type="button" class="btn hourbox2-1">8</button>
            <button @click="setTimer({hour:9,minute:null,second:null})" type="button" class="btn hourbox2-1">9</button>
            <button @click="setTimer({hour:0,minute:null,second:null})" type="button" class="btn hourbox2-1">0</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "HourControl",
    methods: {
        ...mapActions(['setTimer','incrementTimer'])
    }
}
</script>

<style scoped>
    .hourcontainer{
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
        border-style: solid;
        border-color: #ccc;
        margin:5px;
        padding:5px;        
    }
    .hourbox1{
        display:flex;
        flex-direction: column;
        flex:1;
        max-width: 200px;
    }
    .hourbox2{
        display:flex;
        flex-direction: row;
        flex:3;
        flex-wrap: wrap;
    }
    .hourbox1-1{
        flex:1;
        text-align:center;
    }
    .hourbox1-2{
        flex:1;
        text-align:center;
        padding:5px;
        font-size:xx-large;
    }
    .hourbox1-3{
        flex:1;
        text-align:center;
    }
    .hourbox2-1{
        flex:flex-start;
        text-align:center;
        border-style: solid;
        border-color: #ccc;
        margin:10px;
        height:70px;
        width:70px;
        font-size:xx-large;          
        padding:10px;
    }
    .btn{
        background-color: #ccc;
        color: black;
    }
    .uparrow{
        width: 0; 
        height: 0; 
        border-left: 15px solid white;
        border-right: 15px solid white;  
        border-bottom: 25px solid black;
    }
    .downarrow{
        width: 0; 
        height: 0; 
        border-left: 15px solid white;
        border-right: 15px solid white;  
        border-top: 25px solid black;
    }

</style>
