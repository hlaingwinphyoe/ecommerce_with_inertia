<template>
    <section class="antialiased bg-gray-50 h-screen dark:bg-gray-900">
        <!-- Navbar start -->
        <Navbar />
        <!-- Navbar end -->

        <!-- Sidebar start -->
        <Sidebar />
        <!-- Sidebar end -->

        <!-- Main start -->
        <main class="p-4 md:ml-56 h-auto pt-20">
            <slot />
        </main>
        <!-- Main start -->
    </section>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import { initFlowbite } from "flowbite";
onMounted(() => {
    initFlowbite();
});
</script>

<style></style>
