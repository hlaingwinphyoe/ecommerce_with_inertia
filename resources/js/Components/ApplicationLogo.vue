<template>
    <img src="/logo.png" :class="class" alt="" />
</template>

<script setup>
defineProps({
    class: String,
});
</script>
