<template>
    <UserLayout>
        <div class="mx-auto max-w-8xl px-4 py-5 lg:max-w-7xl flex gap-8">
            <div class="w-2/3 relative overflow-x-auto sm:rounded-lg">
                <table
                    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                        <tr>
                            <th scope="col" class="px-16 py-3">
                                <span class="sr-only">Image</span>
                            </th>
                            <th scope="col" class="px-6 py-3">Product</th>
                            <th scope="col" class="px-6 py-3">Qty</th>
                            <th scope="col" class="px-6 py-3">Price</th>
                            <th scope="col" class="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="product in products"
                            :key="product.id"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <td class="p-4">
                                <img
                                    v-if="product.product_images.length"
                                    :src="`/${product.product_images[0].image}`"
                                    alt=""
                                    class="h-16 w-16 object-cover"
                                />
                                <img
                                    v-else
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                                    alt=""
                                    class="h-16 w-16 object-cover"
                                />
                            </td>
                            <td
                                class="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                            >
                                {{ product.title }}
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <button
                                        @click.prevent="
                                            update(
                                                product,
                                                carts[itemId(product.id)]
                                                    .quantity - 1
                                            )
                                        "
                                        :disabled="
                                            carts[itemId(product.id)]
                                                .quantity <= 1
                                        "
                                        :class="[
                                            carts[itemId(product.id)].quantity >
                                            1
                                                ? 'cursor-pointer text-gray-600'
                                                : 'text-gray-400 cursor-not-allowed',
                                            'inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
                                        ]"
                                        type="button"
                                    >
                                        <svg
                                            class="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 1h16"
                                            />
                                        </svg>
                                    </button>
                                    <div>
                                        <input
                                            type="number"
                                            id="first_product"
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="
                                                carts[itemId(product.id)]
                                                    .quantity
                                            "
                                            required
                                        />
                                    </div>
                                    <button
                                        @click.prevent="
                                            update(
                                                product,
                                                carts[itemId(product.id)]
                                                    .quantity + 1
                                            )
                                        "
                                        class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <svg
                                            class="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 1v16M1 9h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td
                                class="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                            >
                                $ {{ product.price }}
                            </td>
                            <td class="px-6 py-4">
                                <a
                                    @click="onRemove(product)"
                                    href="#"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                                    >Remove</a
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="w-1/3">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                    Summary
                </h2>
                <p class="leading-relaxed mb-5 text-gray-600">
                    Total - $ {{ total }}
                </p>

                <div v-if="userAddress">
                    <h2
                        class="text-gray-900 text-lg mb-1 font-medium title-font"
                    >
                        Shipping Address 1
                    </h2>
                    <p class="leading-relaxed mb-5 text-gray-600">
                        {{ userAddress.address1 }}, {{ userAddress.city }}
                    </p>
                    <p class="leading-relaxed mb-5 text-gray-600">
                        Or add another address
                    </p>
                </div>

                <form @submit.prevent="submitForm">
                    <div class="relative mb-4">
                        <InputLabel for="address" value="Address" />
                        <TextInput
                            id="address"
                            v-model="form.address"
                            class="mt-1 w-full"
                        />
                    </div>
                    <div class="relative mb-4">
                        <InputLabel for="city" value="City" />
                        <TextInput
                            id="city"
                            v-model="form.city"
                            class="mt-1 w-full"
                        />
                    </div>
                    <div class="relative mb-4">
                        <InputLabel for="state" value="State" />
                        <TextInput
                            id="state"
                            v-model="form.state"
                            class="mt-1 w-full"
                        />
                    </div>
                    <div class="relative mb-4">
                        <InputLabel for="zipcode" value="Zipcode" />
                        <TextInput
                            id="zipcode"
                            v-model="form.zipcode"
                            class="mt-1 w-full"
                        />
                    </div>
                    <div class="relative mb-4">
                        <InputLabel for="country_code" value="Country Code" />
                        <TextInput
                            id="country_code"
                            v-model="form.country_code"
                            class="mt-1 w-full"
                        />
                    </div>
                    <div class="relative mb-4">
                        <InputLabel for="address_type" value="Address Type" />
                        <TextInput
                            id="address_type"
                            v-model="form.address_type"
                            class="mt-1 w-full"
                        />
                    </div>
                    <div class="w-full pt-3">
                        <PrimaryButton
                            v-if="formFilled || userAddress"
                            class="w-full py-2.5 justify-center"
                        >
                            Checkout
                        </PrimaryButton>
                        <SecondaryButton
                            v-else
                            class="w-full py-2.5 bg-green-700 hover:bg-green-600 text-white justify-center"
                        >
                            Add Address
                        </SecondaryButton>
                    </div>
                </form>
                <p class="text-xs text-gray-500 mt-3">Happy Shopping</p>
            </div>
        </div>
    </UserLayout>
</template>

<script setup>
import { router, usePage } from "@inertiajs/vue3";
import { computed, reactive } from "vue";
import UserLayout from "./Layouts/UserLayout.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
const products = computed(() => usePage().props.cart.data.products);
const carts = computed(() => usePage().props.cart.data.items);

const total = computed(() => usePage().props.cart.data.total);

defineProps({
    userAddress: Object,
});

const itemId = (id) => carts.value.findIndex((item) => item.product_id === id);

const update = (product, quantity) => {
    router.patch(route("cart.update", product), {
        quantity,
    });
};

const onRemove = (product) => {
    router.delete(route("cart.delete", product));
};

// add address
const form = reactive({
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country_code: "",
    address_type: "",
});

const formFilled = computed(() => {
    return (
        form.address !== "" &&
        form.city !== "" &&
        form.state !== "" &&
        form.zipcode !== "" &&
        form.country_code !== "" &&
        form.address_type !== ""
    );
});

const submitForm = () => {
    router.visit(route("checkout.store"), {
        method: "post",
        data: {
            carts: usePage().props.cart.data.items,
            products: usePage().props.cart.data.products,
            total: usePage().props.cart.data.total,
            address: form,
        },
    });
};
</script>

<style></style>
