<template>
  <div>
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
      <div class="mt-2">
        <input
          class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus-visible:!outline-0.5 focus-visible:outline-[#146679] focus:ring-[#146679] sm:text-sm sm:leading-6"
          :placeholder="placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    label:{
        default:null,
        type:String
    },
    placeholder:{
        default:null,
        type:String
    },
})
</script>

<style lang="scss" scoped></style>
