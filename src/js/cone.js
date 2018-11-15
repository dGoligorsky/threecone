import {ConeGeometry, MeshNormalMaterial, Mesh} from 'three';

export default function(color){

    var geometry = new ConeGeometry( 5, 20, 32 );
    var material = new MeshNormalMaterial( {color: color} );
    var cone = new Mesh( geometry, material );
    return cone;

}