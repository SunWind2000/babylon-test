<template>
  <div>
    <h1 style="text-align: center">Hello world</h1>
    <canvas ref="renderCanvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
import * as BABYLON from 'babylonjs';

export default {
  name: 'test1',
  mounted() {
    const canvas = this.$refs.renderCanvas;
    if (canvas) {
      this.createScene(canvas);
    }
  },
  methods: {
    createScene(canvas) {
      const engine = new BABYLON.Engine(canvas);
      const scene = new BABYLON.Scene(engine);

      const camera = new BABYLON.FreeCamera(
        'camera1',
        new BABYLON.Vector3(0, 5, -10),
        scene
      );
      camera.setTarget(BABYLON.Vector3.Zero());
      camera.attachControl(canvas, true);

      new BABYLON.HemisphericLight('light', BABYLON.Vector3.Up(), scene);

      const box = BABYLON.MeshBuilder.CreateBox('box', { size: 2 }, scene);
      const material = new BABYLON.StandardMaterial('box-material', scene);
      material.diffuseColor = BABYLON.Color3.Blue();
      box.material = material;

      engine.runRenderLoop(() => {
        scene.render();
      });
    },
  },
};
</script>
