<template>
    <div class="minutecontainer">
        <div class="minutebox1">
            <div class="minutebox1-1"><button @click="incrementTimer({hour:null,minute:1,second:null})" class="uparrow" type="button"></button></div>
            <div class="minutebox1-2">Minute</div>
            <div class="minutebox1-3"><button @click="incrementTimer({hour:null,minute:-1,second:null})" class="downarrow" type="button"></button></div>
        </div>
        <div class="minutebox2">
            <button @click="setTimer({hour:null,minute:5,second:null})" type="button" class="btn minutebox2-1">5</button>
            <button @click="setTimer({hour:null,minute:10,second:null})" type="button" class="btn minutebox2-1">10</button>
            <button @click="setTimer({hour:null,minute:15,second:null})" type="button" class="btn minutebox2-1">15</button>
            <button @click="setTimer({hour:null,minute:20,second:null})" type="button" class="btn minutebox2-1">20</button>
            <button @click="setTimer({hour:null,minute:25,second:null})" type="button" class="btn minutebox2-1">25</button>
            <button @click="setTimer({hour:null,minute:30,second:null})" type="button" class="btn minutebox2-1">30</button>
            <button @click="setTimer({hour:null,minute:35,second:null})" type="button" class="btn minutebox2-1">35</button>
            <button @click="setTimer({hour:null,minute:40,second:null})" type="button" class="btn minutebox2-1">40</button>
            <button @click="setTimer({hour:null,minute:45,second:null})" type="button" class="btn minutebox2-1">45</button>
            <button @click="setTimer({hour:null,minute:50,second:null})" type="button" class="btn minutebox2-1">50</button>
            <button @click="setTimer({hour:null,minute:55,second:null})" type="button" class="btn minutebox2-1">55</button>
            <button @click="setTimer({hour:null,minute:0,second:null})" type="button" class="btn minutebox2-1">0</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "MinuteControl",
    methods: {
        ...mapActions(['setTimer','incrementTimer'])
    }
}
</script>

<style scoped>
    .minutecontainer{
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
        border-style: solid;
        border-color: #ccc;
        margin:5px;
        padding:5px;
    }
    .minutebox1{
        display:flex;
        flex-direction: column;
        flex:1;
        max-width: 200px;
    }
    .minutebox2{
        display:flex;
        flex-direction: row;
        flex:3;
        flex-wrap: wrap;
    }
    .minutebox1-1{
        flex:1;
        text-align:center;
    }
    .minutebox1-2{
        flex:1;
        text-align:center;
        padding:5px;
        font-size:xx-large;
    }
    .minutebox1-3{
        flex:1;
        text-align:center;
    }
    .minutebox2-1{
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
