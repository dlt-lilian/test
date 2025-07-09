<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  as?: 'p' | 'span' | 'h1' | 'h2'
  size?: 'sm' | 'md' | 'lg'
  weight?: 'normal' | 'semibold'
  color?: 'black'| 'white' | 'gray' | 'green' | 'red'
  colFull?: 'true'| 'false'
  textAlign?: 'left' | 'center' | 'right'

}>()

const tag = props.as ?? 'p'

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

const weights = {
  normal: 'font-normal',
  semibold: 'font-semibold',
}

const colors = {
  black: 'text-black',
  white: 'text-white',
  gray: 'text-gray',
  green: 'text-green',
  red: 'text-red',
}

const colFull = {
  true: 'col-span-full',
  false: '',
}

const textAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

const computedClass = computed(() => {
  return [
    sizes[props.size ?? 'md'],
    weights[props.weight ?? 'normal'],
    colors[props.color ?? 'black'],
    colFull[props.colFull ?? 'false'],
    textAlign[props.textAlign ?? 'left'],
  ].join(' ')
})
</script>

<template>
  <component :is="tag" :class="computedClass">
    <slot />
  </component>
</template>
