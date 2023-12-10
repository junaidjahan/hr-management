<template>
  <div class="mt-10">
    <div class="grid grid-cols-12 items-end gap-x-2">
      <div class="col-start-3 col-span-3">
        <BaseInput placeholder="Search" />
      </div>
      <div class="col-span-2">
        <BaseSelect v-model="selected" :options="people" />
      </div>
      <div class="col-span-2">
        <BaseSelect v-model="selected1" :options="people" />
      </div>
      <div class="col-span-2">
        <BaseSelect v-model="selected2" :options="people" />
      </div>
      <div class="pb-0.5">
        <BaseButton @click="refetch"> Filter </BaseButton>
      </div>
    </div>
    <p v-if="isLoading" class=" mt-10 text-center flex items-center justify-center gap-x-2" >
        Loading
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-[#146679]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </p>
    <BaseTable v-else :columns="columns" :rows="employees">
      <template #item-status="{ item }">
        <div>
          <BaseBadge>
            <p>
                {{ item.status }}
            </p>
          </BaseBadge>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup>
import { BaseTable, BaseButton, BaseSelect, BaseInput, BaseBadge } from '@components/base'
import { useEmployee } from './use-employee'
import { computed, onMounted, ref } from 'vue'
import { useQuery } from 'vue-query'


const { callingApi, employeeData, columns, people } = useEmployee()

const selected = ref('')
const selected1 = ref('')
const selected2 = ref('')

const { isLoading, data } = callingApi()

const employees = computed(() => {
    return data.value?.map(emp=>emp.user)
})

const refetch = () => {
    useQuery('employees')
}

</script>

<style lang="scss" scoped></style>
