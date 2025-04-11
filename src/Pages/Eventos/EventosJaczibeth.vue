<template >
    <div class="container mt-5">
       <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class=" t text-center">MI EJEMPLO</h1>
               <h4 class=" subtitulo mt-2"> DATOS PERSONALES</h4>
              <label class="input-group-text"   far="">Ingresa tu nombre </label>
              <input  class="form-control mt-2" type="text" id="nombre" @change="nombreE">
              <p> El nombre ingresado es: <strong>{{ nombre }}</strong></p>
             <div>
               <h4 class="subtitulo mt-4" > MIS GUSTOS </h4>
              <label class="input-group-text center" far=""> Cuentame lo que te gusta  </label>
              <input  class="form-control mt-2" type="text" id="gusto" @change="gustoE">
              <p> Tus gustos son: <strong>{{ gusto }}</strong></p> 
            </div>
            <div class="d-flex justify-content-center gap-3 mt-3">
               <button @mouseover="soyyo" class="clar btn mx-4 "  type="button">Ver mas informacion</button>
               <button @mouseover="soyjaczibeth" class=" clar btn mx-4"  type="button">Boton Personalizado</button>
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
               gusto:''
   
           }
           },
        methods:{
           soyyo(){
               alert("Gracias por visitarme")
           },
           soyjaczibeth(){
               alert("Hola")
           },
           nombreE(event){
               this.nombre = event.target.value
   
           },
           gustoE(event){
               this.gusto = event.target.value
           }
       }
   }
   </script>
   <style >
.t{
    font-family: fantasy;
    background-color: #e3b2e8;
    color: rgb(9, 50, 186);
}
.subtitulo{
        font-family: cursive;
        background-color: #d1e7ff;
        border-radius: 8px;
}

.texto{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color:#a3dbf1;
    text-align: justify;
    }
    .clar{
        background-color: #b2e3f6;
        border-radius: 15px;
        align-self: start;
    }
</style>