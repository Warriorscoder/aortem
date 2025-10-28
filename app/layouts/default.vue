<template>
  
    <AppNavbar />

    <main>
      <slot />
    </main>
    
    <AppFooter />

</template>

<script setup>
import AppFooter from '~/components/app/AppFooter.vue';
import AppNavbar from '~/components/app/AppNavbar.vue';

</script>

<style>

body {
  font-family: 'Inter', sans-serif;
}
</style>
