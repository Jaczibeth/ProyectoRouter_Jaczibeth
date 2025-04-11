<script setup>

</script>

<template>
     <form id="opinion" class="p-4 bg-#f4ead5" style="max-width: 700px; width: 100%;">
        <div class="row">
            <label class="form-label"><h4>Dejanos un comentario</h4></label>
            <!--Aviso-->
            <small class="text-muted"><h6>Sus datos personales no serán expuestos.</h6></small>
            <!-- Campo de Nombre -->
            <div class="col-md-4">
                <label class="form-label">Nombre *</label>
                <input type="text" class="form-control" placeholder="Ingrese su nombre">
            </div>            
            <!-- Campo de Correo -->
            <div class="col-md-6">
                <label class="form-label">Correo *</label>
                <input type="email" class="form-control" placeholder="Ingrese su correo">
            </div>
        </div> 
        <!-- Campo de Comentarios -->   
        <div class="row mt-3">
            <div class="col-md-10">
                <label class="form-label">Comentarios *</label>
                <textarea class="form-control" rows="2" placeholder="Comentario"></textarea>
            </div>
        </div>
        <!-- Botón de Enviar -->
        <div class="row mt-2">
            <div class="col-md-4">
                <button class="btn btn-warning w-80">Enviar comentario</button>
            </div>
        </div>
    </form>
</template>

