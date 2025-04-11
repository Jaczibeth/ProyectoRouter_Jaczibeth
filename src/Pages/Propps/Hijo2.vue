<script setup>
import { ref } from 'vue'
import Hijo from './Hijo.vue'
import Hijo2 from './Hijo2.vue'

defineProps({
 edad: String,
})
</script>

<template>
<h6> Soy el Componente Hijo2</h6>
<p>{{ edad }}</p>
</template>

<style scoped></style>