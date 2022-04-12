<template>
  <div>
    <h1 style="text-align: center">Build a basic house</h1>
    <canvas ref="renderCanvas2" width="1000" height="500"></canvas>
  </div>
</template>

<script>
import { createBasicHouse } from '../scenes/basicHouse';

export default {
  name: 'test2-2',
  mounted() {
    const canvas = this.$refs.renderCanvas2;
    if (canvas) {
      createBasicHouse(canvas);
    }
  },
};
</script>
