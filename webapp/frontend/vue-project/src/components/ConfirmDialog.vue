<template>
  <div class="dialog">
    <div class="center">
      <p>{{ text }}</p>
      <button @click="closeDialog(false)" class="btn">NO</button>
      <button @click="closeDialog()" class="btn">YES</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { closeDialog } from 'vue3-promise-dialog'

export default defineComponent({
  props: {
    text: String,
  },
  setup() {
    function returnValue() {
      return true
    }
    return {
      returnValue,
      closeDialog,
    }
  },
})
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
}

.btn {
  margin: 10px;
}
</style>
