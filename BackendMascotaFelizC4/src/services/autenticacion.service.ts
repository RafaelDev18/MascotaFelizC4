import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  //metodo para crear la clave del usuario
  GenerarClave(){
    let clave = generador(8, false); //aqui se define  la longitud y complejidad de la clave
    return clave;
  }

  //metodo para cifrar la clave
  CifrarClave(clave:string){
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  
    }

}
