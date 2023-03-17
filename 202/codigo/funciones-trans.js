 /**
 * Geometria: construye una geometria THREEJS y la retorna
 * Entradas: vx=Arreglo de vertices para la geometria(arreglo de arreglos)
 * Salida: geom=Geometria generada a partir vx
  */
function Geometria(vertices){
    geom = new THREE.Geometry();
    for (let i = 0; i < vertices.length; ++i) {
        x = vertices[i][0];
        y = vertices[i][1];
        z = vertices[i][2];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;
    }   
    
    /**
     * Traslacion crea la matriz de Traslacion a partir del vector vt
     * entrada vt vector de Traslacion (arreglo de tamaño 3 (x,y,z))
     * salida Matriz de Traslacion generada apartir de vt
     */
    
    function Traslacion(vt) {
        var matriz = new THREE.Matrix4();
        matriz.set(1, 0, 0, vt[0],
            0, 1, 0, vt[1],
            0, 0, 1, vt[2],
            0, 0, 0, 1);
        return matriz;
    }
    
    /**
      * escalado construye la matriz de escalado para el vector  vs y la retorna
      * entradas vs vector de escalado
      * salida matrizs  matriz de escalado para el vector vs 
     */

    function Escalado(vs) {
        var matriz = new THREE.Matrix4();
        matriz.set(vs[0], 0, 0, 0,
                    0, vs[1], 0, 0,
                    0, 0, vs[2], 0,
                    0, 0, 0, 1);
        return matriz;
    }
    
    /**
     * rotacion x sea la matriz de rotacion matrizx a partir de angulo
     * entrada angulo Angulo en radianes 
     * salida matriz de rotacion en X generada por el angulo
     */
    
    function rotacionx(angulo) {
        var matrizx = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matrizx.set(1, 0, 0, 0,
                   0, Math.cos(radianes), -Math.sin(radianes), 0,
                   0, Math.sin(radianes), Math.cos(radianes), 0,
                   0, 0, 0, 1);
        return matrizx;
    }
    
 /**
     * rotaciony crea la matriz de rotacion matrizy a partir de angulo
     * entrada angulo en radianes 
     * salida matriz de rotacion en Y generada por el angulo
     */

    function rotaciony(angulo) {
        var matrizy = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matrizy.set(Math.cos(radianes), 0, Math.sin(radianes), 0,
                   0, 1, 0, 0,
                   -Math.sin(radianes), 0, Math.cos(radianes), 0,
                   0, 0, 0, 1);
        return matrizy;
    }

   /**
     * rotacionz crea la matriz de rotacion matrizz a partir de angulo
     * entrada angulo en radianes 
     * salida matriz de rotacion en Z generada por el angulo
     */
    
    function rotacionz(angulo) {
        var matrizz = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matrizz.set(Math.cos(radianes), -Math.sin(radianes), 0, 0,
                   Math.sin(radianes), Math.cos(radianes), 0, 0,
                   0, 0, 1, 0,
                   0, 0, 0, 1);
        return matrizz;
      }
    
    /**
     *escalado Real
    * entrada vp vector posicion 
     * vs vector escalado  
     * obj objeto de tipo THREE.Line a ser escalado
     * Salida obj actualizado
     */

    function realescalado(obj,vt,vs){
        vp=[-vt[0],-vt[1],-vt[2]];
        obj.applyMatrix(Traslacion(vp));
        obj.applyMatrix(Escalado(vs));
        obj.applyMatrix(Traslacion(vt));
    }

    /**
     *rotacion real x
    * entrada vp vector posicion 
     * vs vector escalado  
     * angulo cantidad a rotar
     * obj  objeto de tipo THREE.Line a ser escalado
     * Salida obj actualizado
     */

    function rotacionRealx (obj, vp, angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslacion(vt));
        obj.applyMatrix(rotacionx (angulo));
        obj.applyMatrix(Traslacion(vp));
    }
    
     /**
     * rotacion real y
     * Entrada vp vector posicion 
     * vs vector escalado  
     * angulo cantidad a rotar
     * obj objeto de tipo THREE.Line a ser escalado
     * Salida obj actualizado
     */

     function rotacionRealy (obj, vp, angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslacion(vt));
        obj.applyMatrix(rotaciony(angulo));
        obj.applyMatrix(Traslacion(vp));
    }

    /**
     *rotacion real z 
    * Entrada vp vector posicion 
     * vs vector escalado  
     * angulo cantidad a rotar
     * obj  objeto de tipo THREE.Line a ser escalado
     * salida obj actualizado
     */

    function rotacionRealz(obj, vp, angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslacion(vt));
        obj.applyMatrix(rotacionz(angulo));
        obj.applyMatrix(Traslacion(vp));
      }