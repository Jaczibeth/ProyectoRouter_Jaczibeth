<template >
    <div class="container">
       <div class="row mt-4">
           <div>
               <h4> Evento Click</h4>
               <button @click="Click" class="btn btn-danger"  style="width: 100px; height: 50px;" type="button">Dale Clic</button>
               <button @click="soyButon" class="btn btn-warning mx-2"  style="width: 105px; height: 50px;"  type="button">Dale Clic 2</button>
           </div>
           <div>
               <h4> Evento Change</h4>
              <label class="input-group-text"   far="">Ingresa tu nombre </label>
              <input  class="form-control mt-2" type="text" id="nombre" @change="nombreE">
              <p> El nombre ingresado es: <strong>{{ nombre }}</strong></p>
           </div>
   
           <div>
               <h3> Evento de mouseenter y mouseleave</h3>
               <div style=" color: azure;  width: 300px;height: 200px; background-color: #e1f5fe ;text-align:center;padding: 15px;border-radius:14px;"
               @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
               <p> pase el mause </p>
               <p > {{ mensaje }}</p>
                </div>
           </div>
                   </div>
        </div>
   </template>
   <script>
   export default {
       data(){
           return{
               nombre:'',
               mensaje:'',
           }
           },
       methods:{
           Click(){
               alert("Gracias por darle clic")
           },
           soyButon(){
               alert("soy un boton")
           },
           nombreE(event){
               this.nombre = event.target.value
   
           },
   
           mostrarMensaje(){
               this.mensaje="El mause esta dentro del rectangulo"
           },
   
           ocultarMensaje(){
                this.mensaje="El mause esta fuera del rectangulo"
           }
       }
   }
   </script>
   <style >



</style>