
// import * as THREE from './node_modules/three/build/three.min.js';
// import * as PANOLENS from "./node_modules/panolens/build/panolens.min.js";

// import THREE from './node_modules/three/build/three.module.js';
import * as three from './node_modules/three/build/three.module.js';
import * as Panolens from './node_modules/panolens/build/panolens.module.js';



let TWEEN    = Panolens.TWEEN;
let PANOLENS = Panolens.PANOLENS;

// console.log(panolens, three, PANOLENS);

const panorama = new PANOLENS.ImagePanorama( 'asset/equirectangular.jpg' );
const viewer = new PANOLENS.Viewer();
viewer.add( panorama );
