<script >
import cafe from "C:/Users/jaczi/Documents/PaginaWebJaczibeth/src/assets/IMG/CafeTradicional.jpg"


export default{
    data() {
        return{
            cafe
        }
    }
};

</script>

<template>

<div id="inicio" class="container-fluid banner">
        <div class="text-container">
            <h1>El café que mereces, directo a tu taza</h1>
            <p>
                Sumérgete en el mundo del café con granos seleccionados de las mejores fincas, tostados a la
                perfección para resaltar cada nota de sabor. Desde un espresso intenso hasta un latte cremoso,
                cada sorbo es una experiencia única. Ya sea que busques energía para
                empezar el día o un momento de calma, aquí encontrarás el café ideal para ti. ¡Disfruta el auténtico
                aroma y sabor en cada taza!
            </p>
            <button class="btn btn-warning me-2">Saber más</button>
            <button class="btn btn-outline-light">Contacto</button>
        </div>
        <div class="col-md-6 text-center">
            <img :src="cafe" class="img-cafe" alt="Taza de café">
        </div>
    </div>
</template>
