<script>
export default{
   data(){
    return{
        //Datos de los alumnos
        alumnos:[
          {NumeroControl:22620233,nombre:'Jaczibeth',Carrera:'ISC'},
          {NumeroControl:22320025,nombre:'Denisse',Carrera:'IGE'},
          {NumeroControl:22320323,nombre:'Karen',Carrera:'IM'}, 
          {NumeroControl:22320452,nombre:'Diego',Carrera:'IC'}  
        ]
    }
   }
}
</script>
<template>
<div class="container">
    <h3 class=" dato text-center mt-4"> DATOS DEL ESTUDIATE</h3>    
    <ul>
        <li class="D " v-for="alumno in alumnos" :key="alumno.NumeroControl">
          <strong>{{ alumno.nombre }}</strong>-
          <strong>{{ alumno.Carrera }}</strong>
            
        </li>
    </ul>
</div>
</template>

<style>
.dato {
    font-size: 25px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: white;
    background-color: #D6B3FF;
    border-radius: 15px;
    padding: 10px;
}
ul {
    list-style-type: none;
    padding: 0;
}
.D {
    border-radius: 15px;
    color: white;
    background-color: #F8BBD0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 15px;
    margin: 10px;
    
}
</style>
