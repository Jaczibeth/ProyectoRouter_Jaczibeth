<script>
export default {
  data() {
    return {
      // Datos de personales del alumno
      Personas: [
        { id: 1, nombre: "Jaczibeth", gusta: "Leer libros" },
        { id: 2, nombre: "Denisse", gusta: "Escuchar música" },
        { id: 3, nombre: "Karen", gusta: "Hacer ejercicio" },
        { id: 4, nombre: "Diego", gusta: "Jugar videojuegos" }
      ]
    };
  }
};
</script>

<template>
  <div class="container text-center">
    <h3 class="personal mt-4 text-center"> DATOS PERSONALES DEL ALUMNO</h3>    
    <ul>
      <li class=" g" v-for="persona in Personas" :key="persona.id">
        <strong>ID:</strong> {{ persona.id }} - 
        <strong>Nombre:</strong> {{ persona.nombre }} - 
        <strong>Le gusta:</strong> {{ persona.gusta }}
      </li>
    </ul>
  </div>
</template>

<style>
.personal {
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
.g {
    border-radius: 15px;
    color: white;
    background-color: #F8BBD0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 15px;
    margin: 10px;
    text-align-last: center;
}
</style>
