<template>
    <div class="container ">
      <h3 class=" s mt-4 text-center ">Horario de clases de Sistemas </h3>
          <table class="table table-hover">
          <thead>
              <tr>
              <th scope="col">Hora</th>
              <th scope="col">Lunes</th>
              <th scope="col">Martes</th>
              <th scope="col">Miercoles</th>
              <th scope="col">Jueves</th>
              <th scope="col">Viernes</th>  
              </tr>
          </thead>
          <tbody>
              <tr v-for="(h, index) in Horario" :key="index"> 
                      <td> {{ h.hora }}</td>
                      <td> {{ h.lunes }}</td>
                      <td> {{ h.martes }}</td>
                      <td> {{ h.miercoles}}</td>
                      <td> {{ h.jueves}}</td>
                      <td> {{ h.viernes}}</td>
                      </tr>
                  </tbody>
              </table> 
          </div>
</template>
<script setup>
import { ref } from 'vue';
const Horario = ref([
  {hora:'7:00 - 9:00', lunes:'IA',martes:'Agil', miercoles:'Web',jueves:'IA',viernes:'Movil'},
  {hora:'9:00 - 11:00', lunes:'IA',martes:'Agil', miercoles:'Web',jueves:'IA',viernes:'Movil'},
  {hora:'11:00 - 13:00', lunes:'Libre',martes:'Agil', miercoles:'Web',jueves:'IA',viernes:'Movil'},
  {hora:'13:00 - 15:00', lunes:'IA',martes:'Agil', miercoles:'Web',jueves:'IA',viernes:'Movil'},
  {hora:'15:00 - 17:00', lunes:'IA',martes:'Agil', miercoles:'Web',jueves:'IA',viernes:'Movil'}
])
</script>
<style>
.s{
    font-family: fantasy;
    background-color: #e3b2e8;
    border-radius:8px;
    color: azure;
}
</style>