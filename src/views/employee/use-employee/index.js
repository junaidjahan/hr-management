import { useDirectus } from '@/composables'
import { readItem, readItems, withToken } from '@directus/sdk'
import { computed, ref } from 'vue'

export const useEmployee = () => {

const { client } = useDirectus()
const employees = ref([])
const columns = [
    {
    title:'Name',
    value:'name'
},
    {
    title:'Title',
    value:'title'
},
    {
    title:'Email',
    value:'email'
},
    {
    title:'Role',
    value:'role'
},
]
const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]

  const employeeData = computed(()=>{
    return employees.value.map(emp=>emp.user)
  })

  const getEmployees = async () => {
    employees.value = await client.request(withToken('OUTeX5b3yYi4PbtOttQMbjGfZ1iG5GRK', readItems('employees',{
        fields:'user.*.*'
    })))
  }

return{
    columns,
    people,
    employeeData,
    getEmployees
}

}