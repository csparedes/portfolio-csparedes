<script setup lang="ts">
import { ref } from 'vue'
import PortfolioItemComponent from '@/components/ui/PortfolioItemComponent.vue'

const optionSelected = ref('all')

function handleOption(option: string) {
  if (option === optionSelected.value) return
  optionSelected.value = option
}
</script>

<template>
  <div class="p-2">
    <h1>Portfolio</h1>
    <p>Check developed projects</p>
    <ul class="flex w-full justify-around p-6">
      <li
        class="bg-white text-black hover:bg-black hover:text-white hover:border hover:border-1 px-2 hover:cursor-pointer"
        :class="[{ 'border border-1 border-black': optionSelected === 'all' }]"
        @click="handleOption('all')"
      >
        All
      </li>
      <li
        class="bg-white text-black hover:bg-black hover:text-white hover:border hover:border-1 px-2 hover:cursor-pointer"
        :class="[{ 'border border-1 border-black': optionSelected === 'web-design' }]"
        @click="handleOption('web-design')"
      >
        Web Design
      </li>
      <li
        class="bg-white text-black hover:bg-black hover:text-white hover:border hover:border-1 px-2 hover:cursor-pointer"
        :class="{ 'border border-1 border-black': optionSelected === 'mobile-app' }"
        @click="handleOption('mobile-app')"
      >
        Mobile App
      </li>
      <li
        class="bg-white text-black hover:bg-black hover:text-white hover:border hover:border-1 px-2 hover:cursor-pointer"
        :class="{ 'border border-1 border-black': optionSelected === 'dashboard' }"
        @click="handleOption('dashboard')"
      >
        Dashboard
      </li>
      <li
        class="bg-white text-black hover:bg-black hover:text-white hover:border hover:border-1 px-2 hover:cursor-pointer"
        :class="{ 'border border-1 border-black': optionSelected === 'ux-ui-kits' }"
        @click="handleOption('ux-ui-kits')"
      >
        UX/UI Kits
      </li>
    </ul>
    <div>
      <PortfolioItemComponent />
    </div>
  </div>
</template>
