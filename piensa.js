'use strict'


class Usuario{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

 login(username, password){
    //logica para iniciar sesión
    if(username===this.username && password===this.password){
        alert("Bienvenido")
    }else{
        alert("Error")
    }
 }
  resetpassword(newPassword){
    this.password = newPassword;
}
  updateinfo(){
    this.email = newEmail;
  }
  showInfo(){
    alert (this.username + this.password + this.email );
  };
}

class Niveles {
    constructor() {
      this.niveles = [
        { nombre: "Nivel 1", completado: false },
        { nombre: "Nivel 2", completado: false },
        { nombre: "Nivel 3", completado: false },
        { nombre: "Nivel 4", completado: false },
        { nombre: "Nivel 5", completado: false }
      ];
    }
  
    completarNivel(numeroNivel) {
      if (numeroNivel >= 1 && numeroNivel <= 5) {
        this.niveles[numeroNivel - 1].completado = true;
      } else {
        alert("Número de nivel inválido");
      }
    }
  }
  