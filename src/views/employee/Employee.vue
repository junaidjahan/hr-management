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
                <BaseSelect v-model="selected2" :options="people"/>
            </div>
            <div class="pb-0.5">
                <BaseButton>
                    Filter
                </BaseButton>
            </div>

        </div>
        <BaseTable :columns="columns" :rows="employeeData">
            <template #item-status="{item}">
                <div>
                   <BaseBadge>
                        {{ item.status }}
                   </BaseBadge>
                </div>
            </template>
        </BaseTable>
    </div>
</template>

<script setup>
import { BaseTable, BaseButton, BaseSelect, BaseInput, BaseBadge } from '@components/base'
import { useEmployee } from './use-employee'
import { onMounted, ref } from 'vue';

const { getEmployees, employeeData } = useEmployee()

const columns = [
    {
        title: 'Name',
        value:'first_name'
    },
    {
        title: 'Email',
        value:'email'
    },
    {
        title: 'Status',
        value:'status'
    },
    {
        title: 'Gender',
        value:'gender'
    },
]

const people = [
    { value: 1, name: 'Wade Cooper' },
    { value: 2, name: 'Arlene Mccoy' },
    { value: 3, name: 'Devon Webb' },
    { value: 4, name: 'Tom Cook' },
    { value: 5, name: 'Tanya Fox' },
    { value: 6, name: 'Hellen Schmidt' },
    { value: 7, name: 'Caroline Schultz' },
    { value: 8, name: 'Mason Heaney' },
    { value: 9, name: 'Claudie Smitham' },
    { value: 10, name: 'Emil Schaefer' },
  ]
  
  const selected = ref('')
  const selected1 = ref('')
  const selected2 = ref('')
onMounted(()=>{
    getEmployees()
})

</script>

<style lang="scss" scoped>

</style>