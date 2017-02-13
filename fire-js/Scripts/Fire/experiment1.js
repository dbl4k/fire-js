var createScene = function () {

    function createParticleSystem(scene, name, textureName, maxLife) {
        var particleSystem = new BABYLON.ParticleSystem(name, 2000, scene, null);
        particleSystem.particleTexture = new BABYLON.Texture(textureName, scene);
        particleSystem.emitter = sphere;
        particleSystem.minEmitPower = 0.01;
        particleSystem.minEmitPower = 0.02;
        particleSystem.minEmitBox = new BABYLON.Vector3(-0.5, 0, 0); // Starting all From
        particleSystem.maxEmitBox = new BABYLON.Vector3(0.5, 0, 0); // To...
        particleSystem.minSize = 0.5;
        particleSystem.maxSize = 0.8;
        particleSystem.minLifeTime = 0.3;
        particleSystem.maxLifeTime = maxLife;
        particleSystem.emitRate = 100;
        particleSystem.direction1 = new BABYLON.Vector3(-1, 4, 2);
        particleSystem.direction2 = new BABYLON.Vector3(1, 4, -1);
        particleSystem.minAngularSpeed = 0;
        particleSystem.maxAngularSpeed = 0.3;

        return particleSystem
    };

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 2, -4), scene);

    // This targets the camera to scene origin
    camera.setTarget(new BABYLON.Vector3(0, 2, 0));

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.visibility = false;

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    ground.visibility = false;

    // Messing around with some arbitrary rhubarb.
    
    //particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
    
    createParticleSystem(scene, "redfire", "/Content/Images/fire-red.png", 0.5).start();
    createParticleSystem(scene, "redfire", "/Content/Images/fire-yellow.png", 0.4).start();

    return scene;

};



var canvas = $("#renderCanvas").get(0)
var engine = new BABYLON.Engine(canvas, true);
var scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});
