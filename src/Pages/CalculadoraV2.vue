<script>
export default {
  data() {
    return {
      display: '',
      currentValue: 0,
    };
  },
  methods: {
    agregarNumero(numero) {
      if (numero === '%') {
        this.display = (parseFloat(this.display) / 100).toString();
      } else {
        this.display += numero;
      }
    },
    calculo() {
      try {
        this.currentValue = eval(this.display);
        this.display = this.currentValue.toString();
      } catch (error) {
        this.display = 'Error';
      }
    },
    limpiarDisplay() {
      this.display = '';
    },
    eliminarNumero() {
      this.display = this.display.slice(0, -1);
    },
  },
};
</script>

<template>
  <div class="container d-flex justify-content-center mt-4" style="height: 350px;">
    <div class="card p-3" style="width: 300px; background-color: #add8e6;">
      <div class="card-body">
        <h6 class="text-center" style="font-family: 'Trebuchet MS', sans-serif;">CALCULADORA V2</h6>

        <!-- Display de la calculadora -->
        <div class="mb-3">
          <input type="text" class="form-control" v-model="display" disabled>
        </div>

        <!-- Botones de funciones -->
        <div class="d-flex justify-content-between">
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('%')">%</button>
          <button class="btn btn-secondary btn-calc" @click="limpiarDisplay" style="font-size: 11px;">CE</button>
          <button class="btn btn-secondary btn-calc" @click="limpiarDisplay">C</button>
          <button class="btn btn-danger btn-calc" @click="eliminarNumero">B</button>
        </div>

        <!-- Números y operaciones -->
        <div class="d-flex justify-content-between mt-2">
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('7')">7</button>
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('8')">8</button>
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('9')">9</button>
          <button class="btn btn-danger btn-calc" @click="agregarNumero('/')">/</button>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('4')">4</button>
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('5')">5</button>
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('6')">6</button>
          <button class="btn btn-danger btn-calc" @click="agregarNumero('*')">x</button>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('1')">1</button>
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('2')">2</button>
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('3')">3</button>
          <button class="btn btn-danger btn-calc" @click="agregarNumero('-')">-</button>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <button class="btn btn-secondary btn-calc" @click="calculo">=</button>
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('0')">0</button>
          <button class="btn btn-secondary btn-calc" @click="agregarNumero('.')">.</button>
          <button class="btn btn-danger btn-calc" @click="agregarNumero('+')">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-calc {
  height: 35px;
  width: 38px;
  text-align: center;
  color: aliceblue;
  background-color: #a2c8cc;
}
</style>
