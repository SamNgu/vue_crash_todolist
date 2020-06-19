<template>
    <div class="secondcontainer">
        <div class="secondbox1">
            <div class="secondbox1-1"><button @click="incrementTimer({hour:null,minute:null,second:1})" class="uparrow" type="button"></button></div>
            <div class="secondbox1-2">Second</div>
            <div class="secondbox1-3"><button @click="incrementTimer({hour:null,minute:null,second:-1})" class="downarrow" type="button"></button></div>
        </div>
        <div class="secondbox2">
            <button @click="setTimer({hour:null,minute:null,second:5})" type="button" class="btn secondbox2-1">5</button>
            <button @click="setTimer({hour:null,minute:null,second:10})" type="button" class="btn secondbox2-1">10</button>
            <button @click="setTimer({hour:null,minute:null,second:15})" type="button" class="btn secondbox2-1">15</button>
            <button @click="setTimer({hour:null,minute:null,second:20})" type="button" class="btn secondbox2-1">20</button>
            <button @click="setTimer({hour:null,minute:null,second:25})" type="button" class="btn secondbox2-1">25</button>
            <button @click="setTimer({hour:null,minute:null,second:30})" type="button" class="btn secondbox2-1">30</button>
            <button @click="setTimer({hour:null,minute:null,second:35})" type="button" class="btn secondbox2-1">35</button>
            <button @click="setTimer({hour:null,minute:null,second:40})" type="button" class="btn secondbox2-1">40</button>
            <button @click="setTimer({hour:null,minute:null,second:45})" type="button" class="btn secondbox2-1">45</button>
            <button @click="setTimer({hour:null,minute:null,second:50})" type="button" class="btn secondbox2-1">50</button>
            <button @click="setTimer({hour:null,minute:null,second:55})" type="button" class="btn secondbox2-1">55</button>
            <button @click="setTimer({hour:null,minute:null,second:0})" type="button" class="btn secondbox2-1">0</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "SecondControl",
    methods: {
        ...mapActions(['setTimer','incrementTimer'])
    }
}
</script>

<style scoped>
    .secondcontainer{
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
        border-style: solid;
        border-color: #ccc;
        margin:5px;
        padding:5px;
    }
    .secondbox1{
        display:flex;
        flex-direction: column;
        flex:1;
        max-width: 200px;
    }
    .secondbox2{
        display:flex;
        flex-direction: row;
        flex:3;
        flex-wrap: wrap;
    }
    .secondbox1-1{
        flex:1;
        text-align:center;
    }
    .secondbox1-2{
        flex:1;
        text-align:center;
        padding:5px;
        font-size:xx-large;
    }
    .secondbox1-3{
        flex:1;
        text-align:center;
    }
    .secondbox2-1{
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
