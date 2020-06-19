<template>
  <div id="app" class="widget">
    <TimerDisplay />
    <ControlPanel />
  </div>
</template>

<script>
import TimerDisplay from '../components/TimerDisplay';
import ControlPanel from '../components/ControlPanel';

export default {
  name: 'Home',
  components: {
    TimerDisplay,
    ControlPanel
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .widget {
    max-width: 960px;
    margin: auto;
    margin-top:10px;
    padding: 10px;
    border-style: solid;
    border-color: #ccc;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
