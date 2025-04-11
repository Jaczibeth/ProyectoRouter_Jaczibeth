<template>
    <div class="container mt-3">
      <div class="d-flex justify-content-between ">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitz4TASZnvJEZqYlPeZO0ei5uG1_BaF0be0OQX4S7kWU-6yi5rOsYl-snS-TQKZRDjRk&usqp=CAU"  alt="LOGO" width="200px" height="88px" >
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tecnologico_Nacional_de_Mexico.svg/1200px-Tecnologico_Nacional_de_Mexico.svg.png" alt="LOGO" width="190px" height="65px" >   
                 <img src="https://cbtis2.edu.mx/wp-content/uploads/logo_tec_texto2.png"  alt="LOGO" width="200px" height="75px" >
                  </div>
                  
    </div>
        <div class="table-responsive p-3">
    
            <h3 class="text-center ">MI HORARIO DE CLASES</h3>
    
            <table class="table table-hover table-bordered mb-4">
              <thead class="table-secondary">
                  <tr >
                    <th scope="col">Numero Control</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Grado</th>
                    <th scope="col">Periodo</th> 
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(h, index) in Datos" :key="index">
                      <td>{{ h.numerocontrol }}</td>
                      <td>{{ h.nombre }}</td>
                      <td>{{ h.grado }}</td>
                      <td>{{ h.periodo }}</td>
                  </tr>
              </tbody>
            </table> 
    
            <table class="table table-hover table-bordered mb-4">
              <thead class="table-secondary">
                  <tr>
                    <th scope="col">Carrera</th>
                    <th scope="col">Especialidad</th>
                    <th scope="col">Créditos</th>
                    <th scope="col">Plan de Estudios</th> 
                  </tr>
              </thead>
              <tbody>
                  <tr  v-for="(h, index) in Escolaridad" :key="index">
                      <td>{{ h.carrera }}</td>
                      <td>{{ h.especialidad }}</td>
                      <td>{{ h.creditos }}</td>
                      <td>{{ h.plan }}</td>
                  </tr>
              </tbody>
            </table> 
            
            <table class="table table-hover table-bordered">
              <thead class="table-secondary">
                     <tr> 
                    <th scope="col">Materia</th>
                    <th scope="col">Rep</th>
                    <th scope="col">Cr</th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miércoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>  
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(h, index) in Horario" :key="index">
                      <td>{{ h.materia }}</td>
                      <td>{{ h.rep }}</td>
                      <td>{{ h.cr }}</td>
                      <td>{{ h.lunes }}</td>
                      <td>{{ h.martes }}</td>
                      <td>{{ h.miercoles }}</td>
                      <td>{{ h.jueves }}</td>
                      <td>{{ h.viernes }}</td>
                  </tr>
              </tbody>
            </table> 
        </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    
    const Horario = ref([
      { materia:'SCD1O15/6BS/LENGUAJES Y AUTOMATAS I/ SOLANO HERNANDEZ MIGUEL ANGEL',rep:'N',cr:'5', lunes:'11:00-13:00/MAG5',martes:'', miercoles:'11:00-13:00/4',jueves:'',viernes:'12:00-13:00/RDS'},
      { materia:'SCD1021/6BS/REDES DE COMPUTADORAS/SANCHEZ VASQUEZ LUCIA',rep:'N',cr:'5', lunes:'',martes:'13:00-15:00/RDS', miercoles:'',jueves:'13:00-15:00/LDS',viernes:'16:00-17:00/LDS'},
      { materia:'AEB1055/6BS/PROGRAMACION WEB/ VASQUEZ MARTINEZ JOSUE ISRAEL',rep:'N',cr:'5', lunes:'',martes:'17:00-19:00/ACS', miercoles:'',jueves:'17:00-19:00/ACS',viernes:'13:00-14:00/ACS'},
      { materia:'SCA1026/6BS/TALLER DE SISTEMAS OPERATIVOS/CRUZ PEREZ JORGE',rep:'N',cr:'5', lunes:'13:00-15:00/LDS',martes:'', miercoles:'13:00-15:00/LDS',jueves:'',viernes:''},
      { materia:'SCB1001/6BS/ADMINISTRACION DE BASE DE DATOS/ GARCIA HERNANDEZ HILARIO VIDAL',rep:'N',cr:'5', lunes:'',martes:'15:00-17:00/MAG4', miercoles:'15:00-17:00/LDS',jueves:'',viernes:'14:00-15:00/LDS'},
      { materia:'SCC1014/6BS/LENGUAJES DE INTERFAZ/SANCHEZ VASQUEZ LUCIA',rep:'N',cr:'5', lunes:'',martes:'11:00-13:00/MAG2', miercoles:'17:00-19:00/RDS',jueves:'',viernes:''},
      { materia:'SCD1011/6BS/INGENIERIA DE SOFTWARE/ROMAN CRUZ JOSE ALFREDO',rep:'N',cr:'5', lunes:'11:00-13:00/MAG5',martes:'', miercoles:'',jueves:'15:00-17:00/LDS',viernes:'15:00-116:00/RDS'},
    ]);
    
    const Datos= ref([
        {numerocontrol:22620233,nombre:'CRUZ RAMIREZ JACZIBETH',grado:'6',periodo:'ENE-JUN 25'}
    ]);
    
    const Escolaridad=ref([
      {carrera:'INGENIERIA EN SISTEMAS COMPUTACIONALES',especialidad:'',creditos:'33',plan:'ISIC-2010-224'}
    ]);
    </script>
    