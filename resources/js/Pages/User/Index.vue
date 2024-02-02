<template>
    <UserLayout>
        <div class="bg-white">
            <div
                class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
            >
                <h2 class="text-2xl mb-5 font-bold tracking-tight text-gray-900">
                    Latest Products List
                </h2>

                <Products :products="products" />

                <div class="mt-6 flex justify-center">
                    <Link
                        :href="route('products.index')"
                        type="button"
                        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Purple to Blue
                    </Link>
                </div>
            </div>
        </div>
    </UserLayout>
</template>

<script setup>
import { Link, router } from "@inertiajs/vue3";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import UserLayout from "./Layouts/UserLayout.vue";
import Products from "./Components/Products.vue";

defineProps({
    products: {
        type: Array,
        required: true,
    },
});


onMounted(() => {
    initFlowbite();
});
</script>
