<script setup lang="ts">
import MainButtonComponent from '@/components/inputs/MainButtonComponent.vue'
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  XIcon,
} from 'lucide-vue-next'
</script>

<template>
  <div class="flex justify-between items-center w-full h-96">
    <div class="p-4">
      <p>Hi, I'm Cristian Paredes</p>
      <p class="font-bold">System Engineer</p>
      <p class="text-xs">
        Especialized in software development, web development and mobile development.
      </p>
      <p class="pt-2 text-xs">Follow me</p>
      <div class="flex justify-around px-8 py-4">
        <FacebookIcon class="hover:cursor-pointer" />
        <InstagramIcon class="hover:cursor-pointer" />
        <TwitterIcon class="hover:cursor-pointer" />
        <LinkedinIcon class="hover:cursor-pointer" />
        <GithubIcon class="hover:cursor-pointer" />
      </div>
      <div class="flex gap-3">
        <MainButtonComponent>Download CV</MainButtonComponent>
        <MainButtonComponent>Book a meeting</MainButtonComponent>
      </div>
    </div>
    <div class="w-full flex justify-center items-center">
      <img src="../assets/profile.jpg" alt="profile-photo" class="w-60 h-60 rounded-full" />
    </div>
  </div>
</template>
