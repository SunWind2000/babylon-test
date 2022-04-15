<template>
  <div>
    <h1 style="text-align: center">Build A Village</h1>
    <canvas ref="villageCanvas" width="1000" height="500"></canvas>
  </div>
</template>

<script>
import { createScene } from '../scenes/buildVillage';

export default {
  name: 'village',
  mounted() {
    const canvas = this.$refs.villageCanvas;
    if (canvas) {
      createScene(canvas);
    }
  },
};
</script>
