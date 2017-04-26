var btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener("click", function(event) {
  event.preventDefault();
  validateForm();
}, false);


function validateForm(){
  var name = document.getElementById('nombre');
  var fono = document.getElementById('telefono');
  var email = document.getElementById('email');
  var direccion = document.getElementById('direccion');
  var mensaje = document.getElementById('mensaje');
  var mensajeExito = document.getElementById('mensajeExito');
  console.log(email.parentNode.childNodes);
  console.log(direccion.parentNode.childNodes);
  if( validateName() != "" ){
    getSpan(name,validateName,3);
  }
  else{
    removeSpan(name,4);
  }

  if( validateFono() != "" ){
    getSpan(fono,validateFono,3);
  }
  else{
    removeSpan(fono,4);
  }

  if( validateEmail() != "" ){
    getSpan(email,validateEmail,3);
  }
  else{
    removeSpan(email,4);
  }

  if( validateDireccion() != "" ){
    getSpan(direccion,validateDireccion,3);
  }
  else{
    removeSpan(direccion,4);
  }

  if( validateMensaje() != "" ){
    getSpan(mensaje,validateMensaje,2);
  }
  else{
    removeSpan(mensaje,3);
  }

  if(validateName() == "" && validateFono() == "" && validateEmail() == "" && validateDireccion() == "" && validateMensaje() == ""){
    return mensajeExito.style.visibility ="visible";
  }
  function getSpan(valor, validateValor,max){
    if(valor.parentNode.childNodes.length == max ){
      span = document.createElement("span");
      span.setAttribute("class","mensaje-error");
      span.innerHTML = validateValor();
      valor.parentNode.insertBefore(span,valor.parentNode.childNodes[2]);
    }
    else{
      span = valor.parentNode.childNodes[2];
      span.innerHTML = validateValor();
    }
    valor.style.backgroundColor =  "#FDD";
    valor.border =  "solid 1px #C66";
  }

  function removeSpan(valor, max){
    if(valor.parentNode.childNodes.length == max){
      valor.parentNode.removeChild(valor.parentNode.childNodes[2]);
    }
    valor.style.backgroundColor =  "#DFD";
    valor.border =  "solid 1px #6C6";
  }

  function validateName(){
    if(name.value.length == 0 || name  == null || /^\s+$/.test(name.value)){
      return "Debe ingresar su nombre";
    }
    else if(name.value.length<=2){
      return "El nombre debe contener al 3 menos carácteres";
    }
    else if(name.value.search(/^[a-zA-Z]*$/) == -1){
      return "El nombre debe ser letras y/o no debe contener espacios vacíos";
    }
    else if(name.value.search(/^[a-zA-Z]*$/) == -1){
      return "El nombre debe contener sólo letras";
    }
    else if(name.value.search(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/) == -1){
      return "La primera letra debe ser mayúscula";
    }
    return "";
  }

  function validateFono(){
    if(fono.value.length == 0 || fono  == null || /^\s+$/.test(fono.value)){
      return "Debe ingresar su número telefónico";
    }
    else if(fono.value.search(/^[9]\d{8}$/) == -1){
      return "El número telefónico tiene que ser de 9 dígitos";
    }
    return "";
  }

  function validateEmail(){
    if(email.value.length == 0 || email  == null || /^\s+$/.test(email.value)){
      return "Debe ingresar su email";
    }
    else if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value))){
      return "Verifique su email";
    }
    return "";
  }

  function validateDireccion(){
    if( direccion.value.length == 0 || direccion  == null || /^\s+$/.test(direccion.value) ){
      return "Debe ingresar su direccion";
    }

    return "";
  }

  function validateMensaje(){
    if( mensaje.value.length == 0 || mensaje  == null || /^\s+$/.test(mensaje.value) ){
      return "Debe ingresar su mensaje";
    }

    return "";
  }

}
