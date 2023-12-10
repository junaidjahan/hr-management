<script setup>
</script>

<template>
  <header>
  </header>

  <main>
    <Employee />
  </main>
</template>
<script setup>
  import Employee from "@/views/employee/Employee.vue"
  import { useQueryProvider } from "vue-query";

  useQueryProvider();
</script>
<style scoped>

</style>
