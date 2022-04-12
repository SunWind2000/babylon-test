import * as BABYLON from 'babylonjs';

export const createBasicHouse = (canvas) => {
  let engine = new BABYLON.Engine(canvas, true);
  let scene = new BABYLON.Scene(engine);

  // set camera and light
  let camera = new BABYLON.ArcRotateCamera(
    'camera',
    -Math.PI / 2,
    Math.PI / 2.5,
    10,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);
  new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0));

  // set box and roof
  let box = BABYLON.MeshBuilder.CreateBox('box', {});
  box.position.y = 0.5;
  let roof = BABYLON.MeshBuilder.CreateCylinder('roof', {
    diameter: 1.3,
    height: 1.2,
    tessellation: 3,
  });
  roof.scaling.x = 0.75;
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.22;
  // set ground
  BABYLON.MeshBuilder.CreateGround('ground', { width: 10, height: 10 });

  engine.runRenderLoop(() => {
    scene.render();
  });
};
