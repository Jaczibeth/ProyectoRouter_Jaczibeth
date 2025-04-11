<script setup>
import { ref } from 'vue'

defineProps({
 edad: String,
})
</script>

<template>
<p class="ed"> Tengo la edad de:{{ edad }}</p>
</template>

<style scoped>
.ed{
    text-align: center;
}
</style>