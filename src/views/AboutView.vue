<script setup lang="ts">
import NumberFlow from '@number-flow/vue'
</script>

<template>
  <div class="flex items-center pt-4">
    <div class="flex flex-col items-center p-4">
      <p class="text-5xl">+<NumberFlow :value="3" /></p>
      <p class="text-2xl">Years working experience</p>
    </div>
    <div class="p-4">
      <h1 class="text-center text-2xl font-bold pb-4">About me</h1>
      <p class="text-xs text-justify">
        I'm Cristian Paredes, I'm System Engineer and I'm passionate about software development, and
        make software smart solutions for my clients and customers. With +3 years of experience in
        the field of software development, I have worked on a wide range of projects, including web
        development, mobile development, and backend development. I have a strong background in
        problem-solving and a keen eye for detail, and I am always looking for new challenges to
        improve my skills and knowledge. I am a quick learner and a team player, and I am always
        eager to take on new responsibilities and collaborate with others to achieve common goals.
      </p>
      <p class="text-xs font-bold pt-4">csparedes1995@gmail.com</p>
    </div>
  </div>
</template>
