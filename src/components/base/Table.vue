<template>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root border p-2 rounded-md">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-10">
            <table class="min-w-full divide-y divide-gray-300">
              <thead >
                <tr>
                  <th v-for="(column,index) in columns" :key="index" scope="col" class="py-3.5 px-7 text-left text-xs uppercase font-normal text-gray-500 sm:pl-0">{{ column.title }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="(row,index) in rows" :key="index">
                  <td v-for="(col,colIndex) in columns" :key="colIndex" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-900 sm:pl-0">
                    <slot :item="row" :name="`item-${col.value}`">
                        {{ row[col.value] }}
                    </slot>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    rows:{
        type:Array,
        default:null
    },
    columns:{
        type:Array,
        default:null
    },
  })

  </script>