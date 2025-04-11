<script >

</script>

<template>
     <div id="app">
      <div class="container p-3">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <a class="navbar-brand" href="#">Proyecto</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <!-- HOME -->
        <li class="nav-item">
          <a class="nav-link  text-decoration-none" href="#"><router-link to="/" class="nav-link text-decoration-none">Home</router-link> </a>
        </li>
        <!-- ABOUT -->
        <li class="nav-item">
          <a class="nav-link text-decoration-none" href="#">  <router-link to="/about"class="nav-link text-decoration-none">About</router-link></a>
        </li>
        <!-- Calculadora -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Calculadoras
          </a>
          <ul class="dropdown-menu">
            <li> <a class="nav-link " href="#">  <router-link to="/calculadorav1" class="nav-link text-decoration-none">CalculadoraV1 </router-link></a></li>
            <li><a class="nav-link " href="#">  <router-link to="/calculadorav2" class="nav-link text-decoration-none">CalculadoraV2 </router-link></a></li>
          </ul>
        </li>
        <!-- Ejemplo videos -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ejemplos de videos
          </a>
          <ul class="dropdown-menu">
            <li> <a class="nav-link " href="#">  <router-link to="/recorrido"class="nav-link text-decoration-none">Recorrido </router-link></a></li>
            <li> <a class="nav-link" href="#">  <router-link to="/padre" class="nav-link text-decoration-none"> PROPS</router-link></a></li>
            <li> <a class="nav-link " href="#">  <router-link to="/horario" class="nav-link text-decoration-none">Horario</router-link></a></li>
            <li> <a class="nav-link" href="#">  <router-link to="/gatos" class="nav-link text-decoration-none">Gatos</router-link></a></li>
            <li> <a class="nav-link" href="#">  <router-link to="/gatosc" class="nav-link text-decoration-none">CardGatos</router-link></a></li>
            <li> <a class="nav-link" href="#">  <router-link to="/evento" class="nav-link text-decoration-none">Evento</router-link></a></li>
          </ul>
        </li>
        <!-- Ejemplo propios -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ejemplos propios
          </a>
          <ul class="dropdown-menu">
            <li><a class="nav-link " href="#">  <router-link to="/recorridoJaczibeth"class="nav-link text-decoration-none">RecorridoJaczibeth </router-link></a></li>
            <li> <a class="nav-link" href="#">  <router-link to="/padrej" class="nav-link text-decoration-none">PROPSJ</router-link></a></li>
            <li> <a class="nav-link " href="#">  <router-link to="/horariojaczibeth "class="nav-link text-decoration-none">Horariojaczibeth</router-link></a></li>
            <li> <a class="nav-link " href="#">  <router-link to="/tulipanes" class="nav-link text-decoration-none">Tulipanes</router-link></a></li>
            <li> <a class="nav-link " href="#">  <router-link to="/cardtulipanes" class="nav-link text-decoration-none">CardTulipan</router-link></a></li>
            <li> <a class="nav-link " href="#">  <router-link to="/eventosJaczibeth" class="nav-link text-decoration-none">EventosJaczibeth</router-link></a></li>
          </ul>
        </li>
        <!-- pagina web cafe -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Página Web Cáfeteria
          </a>
          <ul class="dropdown-menu">
            <li><a class="nav-link " href="#">  <router-link to="/paginacafe"class="nav-link text-decoration-none">Página Cáfe</router-link></a></li>
          </ul>
        </li>
      </ul>
    </div>
</nav>
        <!-- <h1> Vue Router </h1> -->
        <!-- <nav class="nav" > 
        
        </nav> -->
        <router-view></router-view>
      
     </div>
    </div>
</template>

<style > 
#app {
  background-color: #f4e6fb;
  min-height: 100vh;
}
.nav-link {
  color: #4e2a84;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.dropdown-menu {
  background-color: #f3d8f8;
  border: none;
  font-family: 'Arial', sans-serif;
  font-size: 15px;
}

.navbar-brand {
  font-family: 'Impact', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 30px;
  color: #6c3a8d;
}



</style>
