let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();
    let load = new THREE.TextureLoader();
    load.load('../img/fondo.png', function(texture){
        scene.background = texture
    })


    //---------------------------------------------------------------------------------------------
    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 90;
    camera.position.y = 10;
    camera.position.z = 80;
    
    
    //---------------------------------------------------------------------------------------------
    hlight = new THREE.AmbientLight (0x404040,10);
    scene.add(hlight);
    
    directionalLight = new THREE.DirectionalLight(0xffffff,10);
    directionalLight.position.set(0,0,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight)
    
    light = new THREE.PointLight(0xc4c4c4,0.3);
    light.position.set(0,0,0);
    scene.add(light);
    
    light2 = new THREE.PointLight(0xc4c4c4,0.3);
    light2.position.set(0,0,0);
    scene.add(light2);
    
    light3 = new THREE.PointLight(0xc4c4c4,0.3);
    light3.position.set(0,0,0);
    scene.add(light3);
    
    light4 = new THREE.PointLight(0xc4c4c4,0.3);
    light4.position.set(0,0,0);
    scene.add(light4);
    
    //---------------------------------------------------------------------------------------------
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    let loader1 = new THREE.GLTFLoader();
    loader1.load('../3D/obj1/scene.gltf',function(gltf){
        flor = gltf.scene.children[0];
        flor.scale.set(3,3,3);
        flor.position.x = 50;
        flor.position.y = -6;
        
        scene.add(gltf.scene);
        renderer.render(scene,camera);
    });
    
    let loader2 = new THREE.GLTFLoader();
    loader2.load('../3D/obj2/scene.gltf',function(gltf){
        flor2 = gltf.scene.children[0];
        flor2.scale.set(2.8,2.8,2.8);
        flor2.position.x = -100;
        flor2.position.y = -30;
        scene.add(gltf.scene);
        renderer.render(scene,camera);
    });

    let loader3 = new THREE.GLTFLoader();
    loader3.load('../3D/obj3/scene.gltf',function(gltf){
        flores = gltf.scene.children[0];
        flores.scale.set(0.7,0.7,0.7);
        flores.position.x = -180;
        flores.position.y = -44;
        scene.add(gltf.scene);
        renderer.render(scene,camera);
    });
    
    let loader4 = new THREE.GLTFLoader();
    loader4.load('../3D/obj4/scene.gltf',function(gltf){
        monk = gltf.scene.children[0];
        monk.scale.set(7,7,7);
        monk.position.x = -30;
        monk.position.y = -18;
        monk.rotation.z = 35/180*Math.PI;
        scene.add(gltf.scene);
        renderer.render(scene,camera);
    });
    
    let loader5 = new THREE.GLTFLoader();
    loader5.load('../3D/obj5/scene.gltf',function(gltf){
        arrow = gltf.scene.children[0];
        arrow.scale.set(22,22,22);
        arrow.position.x = 10;
        arrow.position.y = -14;
        arrow.rotation.z = 45/180*Math.PI;
        scene.add(gltf.scene);
        renderer.render(scene,camera);
    });
    
    let loader6 = new THREE.GLTFLoader();
    loader6.load('../3D/obj6/scene.gltf',function(gltf){
        archer = gltf.scene.children[0];
        archer.scale.set(20,20,20);
        archer.position.x = 30;
        archer.position.y = -12;
        archer.rotation.z = 55/180*Math.PI;
        scene.add(gltf.scene);
        renderer.render(scene,camera);
    });
    
    //---------------------------------------------------------------------------------------------
    const flyControls= new THREE.FlyControls(camera, renderer.domElement);
    
    flyControls.movementSpeed = 50;
    flyControls.rollSpeed = 0.01;
    flyControls.autoForward = false;
    flyControls.dragToLock = false;

    /* camera.position.z = 20; */
    
    //---------------------------------------------------------------------------------------------
    function animate(){
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
        flyControls.update(0.5);
    }
    animate();
}

init();

