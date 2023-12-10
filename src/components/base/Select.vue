<template>
    <Listbox as="div" v-model="selectedModelValue" :defaultValue="{name:'sdsfsdf', value:'dsfsd'}">
      <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</ListboxLabel>
      <div class="relative mt-2">
        <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#146679] sm:text-sm sm:leading-6">
          <span class="block truncate h-full">{{ selectedModelValue?.name ?? 'Select' }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>
  
        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="option in options" :key="option.value" :value="option" v-slot="{ active, selectedModelValue }">
              <li :class="[active ? 'bg[#146679] text-gray-400' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <span :class="[selectedModelValue ? 'font-semibold' : 'font-normal', 'block truncate']">{{ option.name }}</span>
  
                <span v-if="selected" :class="[active ? 'text-white' : 'text-[#146679]', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue'
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps(
    {
        options:{
            default: null,
            type: Array
        },
        modelValue:{
            default:null,
            type:String
        },
        label:{
            default:null,
            type:String
        },
    }
)

const emit = defineEmits(['update:modelValue'])
  

  const selectedModelValue = computed({
    get(){
        return props.modelValue
    },
    set(val){
        emit('update:modelValue', val)
    }
  })
  
  </script>