<template>
    <div class="soundcontainer">
        <div class="soundbox1">
            <label> Sound:</label>
            <div> Beethonven's 9th Sympthony</div>
            <a href="#">Soundcheck</a>            
        </div>
        <div class="soundbox2"><input type="checkbox"> gradually become louder </div>
        <div class="soundbox3">
            <div class="soundbox3-1">
                Pick from List: 
                <select @change="selectSound($event)">
                <option value="Song1">Song1song</option>
                <option value="Song1">Song1</option>
                <option value="Song1">Song1</option>
                <option value="Song1">Song1</option>
                </select>
            </div>
            <div class="soundbox3-2">
                Or
            </div>
            <div class="soundbox3-3">
                <button class="btn" type="button">Upload File</button>
            </div>
        </div>
        <audio type="audio/mp3" id="alarm_sound" loop preload="auto" 
        src="https://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4"></audio>
    </div>
</template>

<script>
export default {
    name: "SoundControl"
}
</script>

<style scoped>
    .soundcontainer{
        display:flex;
        flex-direction:column;
        flex-wrap: wrap;
        border-style: solid;
        border-color: #ccc;
        margin:5px;
        padding:5px;
    }
    .soundbox1{
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
    }
    .soundbox1 label{
        flex:1;
    }
    .soundbox1 div{
        flex:2;
        justify-content:flex-start;
        overflow: auto;
    }
    .soundbox1 a{
        flex:1;
        overflow:hidden;
    }
    .soundbox3{
        display: flex;
        flex-direction: row;
        
    }
    .soundbox3-1{
        flex: 1;
        text-align: center;
        margin:auto;
    }
    .soundbox3-2{
        flex: 1;
        text-align: center;
        margin:auto;
    }
    .soundbox3-3{
        flex: 1;
        text-align: center;
        margin:auto;
    }

</style>
