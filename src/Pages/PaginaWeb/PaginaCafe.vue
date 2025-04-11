<script setup>
import Navbar from './Navbar.vue';
import Banner from './Banner.vue';
import Carrusel from './Carrusel.vue';
import Formulario from './Formulario.vue';
import Contactos from './contactos.vue';

</script>

<template>
   <div>
    <Navbar />
    <Banner />
    <Carrusel />
    <Formulario />
    <Contactos /> 
    
  </div>

 </template>


<style >
.custom-bg {
    background-color: #E64A70 !important; /* Código del color rosa */
}
.button-bg{
    background-color: #c6e5d9 !important; /* Código del color rosa */

}

.input-bg{

    background-color: #c6a49a !important;
}
p{
    text-align: left;
    font-family:'Times New Roman', Times, serif;
    margin-left: 20px;

    
}
h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;
}
.banner {
    background-color:#c6a49a;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.text-container {
    max-width: 600px; 
    text-align: left;
    margin-left: 5%; 
    color: black;
}

/* Estilos para los botones "Saber más" y "Contacto" */
.btn-warning, 
.btn-outline-light {
    background-color: #d68189 !important; 
    border-color: #f4ead5 !important; 
    color: #000000 !important; 
    font-family: 'Poppins', sans-serif; 
    padding: 10px 20px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
}

/* Efecto para ambos botones */
.btn-warning:hover, 
.btn-outline-light:hover {
    background-color: #e94e77 !important; 
    color: #000000 !important; 
}

.img-cafe {
    border-radius: 20px;
    width: 450px; 
    height: auto; 
    box-shadow: 5px 5px 15px rgba(24, 23, 23, 0.6);
    margin-left: 50px;
}
/*estilos para imagenes del carrusel*/
.d-block{
    border-radius: 20px;
    box-shadow: 5px 5px 15px rgba(24, 23, 23, 0.6);
    max-width: 70%;
    min-width: 350px;
    max-height: 500px;
    object-fit: contain;
    image-rendering: crisp-edges;
}
/*inicio de estilos para contactos y direccion(parte final)*/
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.footer {
    background-color: #d68189;
    color: white;
    padding: 20px 10%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer div {
    flex: 1;
    min-width: 200px;
    margin-bottom: 10px;
}

.footer h3 {
    margin-bottom: 10px;
    font-size: 16px;
}

.footer p {
    font-size: 14px;
    margin: 5px 0;
}

.social-icons {
    display: flex;
    gap: 10px;
}

.social-icons a {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

.link {
    color: white;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}

.footer-bottom {
    background: #111;
    color: #ccc;
    text-align: center;
    padding: 10px;
    font-size: 13px;
}

.footer-bottom a {
    color: #ccc;
    text-decoration: none;
    margin: 0 5px;
}

.footer-bottom a:hover {
    text-decoration: underline;
}

.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #444;
    color: white;
    padding: 10px;
    border-radius: 50%;
    text-decoration: none;
    font-size: 18px;
}

.back-to-top:hover {
    background: #666;
}

/*Fin de estilos para contactos y direccion(parte final)*/


html {
    scroll-behavior: smooth;
}
</style>