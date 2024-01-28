<template>
    <AdminLayout>
        <ProductList :products="products" />
    </AdminLayout>
</template>

<script setup>
import AdminLayout from "@/Pages/Admin/Layouts/AdminLayout.vue";
import ProductList from "./ProductList.vue";

defineProps({
    products: Object,
});
</script>
