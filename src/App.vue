<script lang="ts" setup>
import { PersonStanding } from 'lucide-vue-next'
import IconLogo from './components/icons/IconLogo.vue'
import MainButtonComponent from './components/inputs/MainButtonComponent.vue'
</script>

<template>
  <nav class="flex justify-between p-2 items-center">
    <RouterLink to="/">
      <IconLogo class="w-10 h-10 hover:cursor-pointer" />
    </RouterLink>
    <div class="flex gap-3">
      <RouterLink
        class="hover:bg-black hover:text-white px-1"
        active-class="border border-black border-1"
        to="/"
        >Home
      </RouterLink>
      <RouterLink
        class="hover:bg-black hover:text-white px-1"
        active-class="border border-black border-1"
        to="/about"
      >
        About</RouterLink
      >
      <RouterLink
        class="hover:bg-black hover:text-white px-1"
        active-class="border border-black border-1"
        to="/services"
        >Services</RouterLink
      >
      <RouterLink
        class="hover:bg-black hover:text-white px-1"
        active-class="border border-black border-1"
        to="/portfolio"
        >Portfolio</RouterLink
      >
      <RouterLink
        class="hover:bg-black hover:text-white px-1"
        active-class="border border-black border-1"
        to="/personal-blog"
        >Personal Blog</RouterLink
      >
      <RouterLink
        class="hover:bg-black hover:text-white px-1"
        active-class="border border-black border-1"
        to="/contact"
        >Contact</RouterLink
      >
    </div>
    <MainButtonComponent>
      <p>Hire me</p>
      <PersonStanding class="ml-2" />
    </MainButtonComponent>
  </nav>

  <RouterView />
</template>
