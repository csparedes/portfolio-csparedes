<script setup lang="ts">
import { CircleChevronRight, SquareChevronRight } from 'lucide-vue-next'
</script>

<template>
  <div class="border border-1 border-black flex">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXert6ekqTL1J7LVWNAhs65_GeostayFqh6A&s"
      alt="spider-man"
      class="h-auto"
    />
    <div class="pl-2 pt-2 w-full flex flex-col jsutify-between">
      <div class="h-full">
        <h3 class="font-bold">Spider-man</h3>
        <span class="text-xs text-justify">Description</span>
      </div>
      <div class="w-full flex justify-end">
        <CircleChevronRight class="hover:cursor-pointer m-2" />
      </div>
    </div>
  </div>
</template>
