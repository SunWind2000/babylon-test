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

  //options parameter to set different images on each side
  const faceUV = [];
  faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
  faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
  faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
  faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
  // set box and roof
  let box = BABYLON.MeshBuilder.CreateBox('box', {
    faceUV: faceUV,
    wrap: true,
  });
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
  let ground = BABYLON.MeshBuilder.CreateGround('ground', {
    width: 10,
    height: 10,
  });

  /**
   * materials: color, texture
   */
  let roofMat = new BABYLON.StandardMaterial('roofMat');
  roofMat.diffuseTexture = new BABYLON.Texture(
    'https://assets.babylonjs.com/environments/roof.jpg'
  );
  let boxMat = new BABYLON.StandardMaterial('boxMat');
  boxMat.diffuseTexture = new BABYLON.Texture(
    'https://assets.babylonjs.com/environments/cubehouse.png'
  );
  let groundMat = new BABYLON.StandardMaterial('groundMat');
  groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
  roof.material = roofMat;
  box.material = boxMat;
  ground.material = groundMat;

  engine.runRenderLoop(() => {
    scene.render();
  });
};
