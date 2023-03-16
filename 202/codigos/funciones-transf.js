 /**
 * Geometria: construye una geometria THREEJS y la retorna
 * Entradas: vx=Arreglo de vertices para la geometria(arreglo de arreglos)
 * Salida: geom=Geometria generada a partir vx
  */
function Geometria (vx) {
    geom = new THREE.Geometry();
      var largoVertice = vx.length;
     for (i = 0; i < largoVertice; i++){
       [x,y,z]=[vx[i][0],vx[i][1],vx[i][2]]
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
      }
      return geom;
    }

    /**
      * 
      * Traslacion construye la matriz de traslacion para el vector  vt y la retorna
      * Entradas vt= vector de traslacion(arreglos de enteros)
      * Salidas matrizT = matriz de traslaccion para el vector vt
      */ 
    function Traslacion(vt) {
      var matrizT = new THREE.Matrix4();
      matrizT.set(1, 0, 0, vt[0],
        0, 1, 0, vt[1],
        0, 0, 1, vt[2],
        0, 0, 0, 1); 
        return matrizT;      
    }
    /**
      * Escalado construye la matriz de escalado para el vector  vs y la retorna
      * Entradas vs= vector de escalado
      * Salida matrizs = matriz de escalado para el vector vs 
      */ 
    function Escalado(vs){
    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0], 0, 0, 0,
            0, vs[1], 0, 0,
            0, 0, vs[2], 0,
            0, 0, 0, 1);
        return matrizS;
    }
 /**
  * la rotacion en x 
  * ejecs en coseno
  * ejess enseno
  * salida el retorno
  */
 function rotacionx (ejecs, ejess, ar){
 var matrizR = new THREE.Matrix4();
 var ar = 45;
 var ejecs = Math.cos(ar);
 var ejess = Math.sin(ar);
 
 matrizR.set(1,  0, 0, 0,
    0, ejecs, -ejess, 0, 
    0, ejecs, ejess, 0,
    0, 0, 0, 1);
    return matrizR;	
 }
 /**
  * la rotacion en y
  * ejecs en coseno
  * ejess enseno
  * salida el retorno
  */
 function rotaciony (ejecs, ejess, ar){
    var matrizR = new THREE.Matrix4();
    var ar = 45;
    var ejecs = Math.cos(ar);
    var ejess = Math.sin(ar);
    
 matrizR.set(ejecs,  0, ejess, 0,
    0, 1, 0, 0, 
    -ejess, 0, ejecs, 0,
    0, 0, 0, 1);
    return matrizR;	
 }
/**
 * la rotacion en z
 * ejecs en coseno
 * ejess enseno
* salida el retorno
 */
 function rotacionz (ejecs, ejess, ar){
    var matrizR = new THREE.Matrix4();
    var ar = 60;
    var ejecs = Math.cos(ar);
    var ejess = Math.sin(ar);
    
matrizR.set(ejecs,  -ejess, 0, 0,
         ejess, ejecs, 0, 0, 
         0, 0, 1, 0,
         0, 0, 0, 1);	
  return matrizR;
 }

    function  rotacionReal ( obj, ar,  eje,  posi) {
        var  matrizR  =  new THREE.Matrizx4();
        var  alpha  =  ( ar*Math.PI ) / 180;
        var  ejecs  =  Math.cos( alpha );
        var  ejess  =  Math.sin( alpha );
        tr=[-posi[0],-posi[1],-posi[2] ] ;  //vector para llevar al origen
        obj.applyMatriz (traslater(tr)) ;       //Aplicar matriz para llevar al origen
        if ( eje == 'x' ) {
            matrizR . set (   1 ,   0 ,   0 ,  0 ,
                          0 ,  ejecs , - ejess ,  0 , 
                          0 ,  ejess ,  ejecs ,  0 ,
                          0 ,   0 ,   0 ,  1 ) ;    
              obj.applyMatriz( matrizR ) ;    //Aplicar matriz de rotacion al objeto
                
    
        } else
            if ( eje == 'y' ) {
            matrizR . conjunto (  ejecs, 0, ejess,  0 ,
                          0 ,   1 ,   0 ,  0 , 
                        -ejess , 0 , ejecs , 0 ,    
                          0 , 0 , 0 , 1 ) ;    
                    obj.applyMatriz ( matrizR ) ;    //Aplicar matriz de rotacion al objeto
            }
        }                            
 