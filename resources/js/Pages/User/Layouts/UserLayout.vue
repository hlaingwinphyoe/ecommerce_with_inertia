<template>
    <section>
        <!-- Header -->
        <Header></Header> 

        <!-- Hero -->
        <Hero />

        <!-- Main -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
    </section>
</template>

<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import Header from "./Header.vue";
import Hero from "./Hero.vue";

onMounted(() => {
    initFlowbite();
});
</script>
