<script setup>
import { h, ref } from 'vue'
import Hijok from './Hijok.vue';
import HijoD from './HijoD.vue';
</script>
<template>
    <div class="container mt-4">
        <h2 class="props"> MI PROPS</h2>
            <div class="row mt-4">
          <div class="col-md-4 ">
            <div class="card" style="width: 25rem;">
                <h4> Soy el  padre de Karen y Denisse</h4>
             <img src="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170515352/79062795-ilustraci%C3%B3n-de-vector-de-miembro-de-familia-de-padre-de-familia-masculina-hombre-de-dibujos.jpg" class="card-img-top" alt="...">
            </div>
          </div>
          <div class="col-md-4">
            <div class="card " style="width: 21rem; ">
                <h4 class="ed">Me llamo Denisse</h4>
             <img src="https://img.freepik.com/vector-premium/hija-respetuosa-muestra-afecto-cuidado-su-madre-ilustracion-vectorial-dibujos-animados_1263357-18807.jpg?w=826" class="card-img-top" alt="...">
             <HijoD class="mt-4" edad=" 15 años"/>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 21rem;">
                <h4 class="ed">Me llamo Karen</h4>
                <img src="https://img.freepik.com/vector-premium/dibujo-dibujos-animados-chica-vestido-azul_1205884-9439.jpg"class="card-img-top" alt="...">
             <Hijok class="mt-4" edad=" 11 años"/>
            </div>
          </div>
        </div>
        </div>
</template>

<style scoped>
.props{

    text-align: center;
    background-color: rgb(184, 242, 247);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;   
}
.ed{
  text-align: center;
}

</style>