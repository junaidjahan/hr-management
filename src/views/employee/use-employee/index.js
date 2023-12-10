import { useDirectus } from '@/composables'
import { readItem, readItems, withToken } from '@directus/sdk'
import { computed, ref } from 'vue'
import { useQuery } from 'vue-query'

export const useEmployee = () => {

const { client } = useDirectus()
const employees = ref([])
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

  const employeeData = computed(()=>{
    return employees.value.map(emp=>emp.user)
  })

  const getEmployees = async () => {
    return await client.request(withToken('OUTeX5b3yYi4PbtOttQMbjGfZ1iG5GRK', readItems('employees',{
        fields:'user.*.*'
    })))
  }

  const callingApi = ()=>{
    return useQuery('employee', getEmployees)
  }

return{
    columns,
    people,
    employeeData,
    getEmployees,
    callingApi
}

}