<template>
  <div>
    <h1 style="text-align: center">Generate Ground</h1>
    <canvas ref="renderCanvas1" width="1000" height="500"></canvas>
  </div>
</template>

<script>
import { createScene } from '../scenes/myFirstScene';

export default {
  name: 'test2-1',
  mounted() {
    const canvas = this.$refs.renderCanvas1;
    if (canvas) {
      createScene(canvas);
    }
  },
};
</script>
