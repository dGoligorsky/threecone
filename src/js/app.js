import { Scene, WebGLRenderer} from 'three';
import Cone from './cone';
import Camera from './camera';
import cone from './cone';

var scene = new Scene();
var camera = new Camera();

var renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add(cone(0xffff00));

const animate = () => {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
}

animate();