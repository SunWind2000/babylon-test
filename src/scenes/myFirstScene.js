import * as BABYLON from 'babylonjs';

export const createScene = (canvas) => {
  let engine = new BABYLON.Engine(canvas, true);
  let scene = new BABYLON.Scene(engine);

  /**** Set camera and light *****/
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
  // set box
  let box1 = BABYLON.MeshBuilder.CreateBox('box', {
    width: 2,
    height: 1.5,
    depth: 3,
  });
  box1.position.y = 0.75;
  let box2 = BABYLON.MeshBuilder.CreateBox('box2', {
    width: 2,
    height: 1.5,
    depth: 3,
  });
  box2.position = new BABYLON.Vector3(-3, 0.75, 0);
  let box3 = BABYLON.MeshBuilder.CreateBox('box3', {
    width: 2,
    height: 1.5,
    depth: 3,
  });
  box3.position = new BABYLON.Vector3(3, 0.75, 0);
  // set ground
  BABYLON.MeshBuilder.CreateGround('ground', {
    width: 10,
    height: 10,
  });

  engine.runRenderLoop(() => {
    scene.render();
  });
};
