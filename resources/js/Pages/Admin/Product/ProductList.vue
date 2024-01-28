<template>
    <section class="mt-2">
        <el-dialog
            v-model="dialogVisible"
            :title="editMode ? 'Edit Product' : 'Add Product'"
            width="50%"
            :before-close="handleClose"
        >
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <label for="title" class="label">Title</label>
                    <input
                        type="text"
                        v-model="title"
                        id="title"
                        class="form-control"
                        required
                    />
                </div>
                <div>
                    <label for="price" class="label">Price</label>
                    <input
                        type="number"
                        v-model="price"
                        id="price"
                        class="form-control"
                        required
                    />
                </div>
                <div>
                    <label for="qty" class="label">Quantity</label>
                    <input
                        type="number"
                        v-model="quantity"
                        id="qty"
                        class="form-control"
                        required
                    />
                </div>
                <div class="col-span-full grid grid-cols-2 gap-4">
                    <div>
                        <label class="label">Category</label>
                        <el-select
                            v-model="category"
                            placeholder="Select Category"
                            clearable
                            size="large"
                        >
                            <el-option
                                v-for="item in categories"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            />
                        </el-select>
                    </div>

                    <div>
                        <label class="label">Brand</label>
                        <el-select
                            v-model="brand"
                            placeholder="Select Brand"
                            clearable
                            size="large"
                        >
                            <el-option
                                v-for="item in brands"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            />
                        </el-select>
                    </div>
                </div>
                <div class="col-span-full">
                    <label for="Description" class="label">Description</label>
                    <textarea
                        v-model="description"
                        id="Description"
                        class="form-control"
                    ></textarea>
                </div>
                <!-- Multiple images -->
                <div class="col-span-full">
                    <el-upload
                        v-model:file-list="productImages"
                        multiple
                        list-type="picture-card"
                        :on-remove="handleRemove"
                        :on-change="handleFileChange"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </el-upload>
                </div>
            </div>
            <!--  Preview image dialog -->
            <div class="flex gap-4">
                <div
                    v-for="(pimage, index) in product_images"
                    :key="pimage.id"
                    class="h-32 mt-3 relative"
                >
                    <img
                        class="w-32 h-32 object-cover rounded"
                        :src="`/${pimage.image}`"
                        alt=""
                    />
                    <span
                        @click="deleteImage(pimage, index)"
                        class="absolute top-0.5 -right-2 cursor-pointer transform -translate-y-1/2 w-5 h-5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"
                    >
                        <span
                            class="text-white text-xs font-bold absolute -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                            >x</span
                        >
                    </span>
                </div>
            </div>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="submitForm">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div
                class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"
            >
                <div
                    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
                >
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only"
                                >Search</label
                            >
                            <div class="relative w-full">
                                <div
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search"
                                    required=""
                                />
                            </div>
                        </form>
                    </div>
                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
                    >
                        <button
                            @click="openDialogModal"
                            type="button"
                            class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add product
                        </button>
                        <div
                            class="flex items-center space-x-3 w-full md:w-auto"
                        >
                            <button
                                id="actionsDropdownButton"
                                data-dropdown-toggle="actionsDropdown"
                                class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                type="button"
                            >
                                <svg
                                    class="-ml-1 mr-1.5 w-5 h-5"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    />
                                </svg>
                                Actions
                            </button>
                            <div
                                id="actionsDropdown"
                                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul
                                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="actionsDropdownButton"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >Mass Edit</a
                                        >
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a
                                        href="#"
                                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >Delete all</a
                                    >
                                </div>
                            </div>
                            <button
                                id="filterDropdownButton"
                                data-dropdown-toggle="filterDropdown"
                                class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    class="h-4 w-4 mr-2 text-gray-400"
                                    viewbox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Filter
                                <svg
                                    class="-mr-1 ml-1.5 w-5 h-5"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    />
                                </svg>
                            </button>
                            <div
                                id="filterDropdown"
                                class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                            >
                                <h6
                                    class="mb-3 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Choose brand
                                </h6>
                                <ul
                                    class="space-y-2 text-sm"
                                    aria-labelledby="filterDropdownButton"
                                >
                                    <li class="flex items-center">
                                        <input
                                            id="apple"
                                            type="checkbox"
                                            value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="apple"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >Apple (56)</label
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <input
                                            id="fitbit"
                                            type="checkbox"
                                            value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="fitbit"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >Microsoft (16)</label
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <input
                                            id="razor"
                                            type="checkbox"
                                            value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="razor"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >Razor (49)</label
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <input
                                            id="nikon"
                                            type="checkbox"
                                            value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="nikon"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >Nikon (12)</label
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <input
                                            id="benq"
                                            type="checkbox"
                                            value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="benq"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                            >BenQ (74)</label
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table
                        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                    >
                        <thead
                            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        >
                            <tr>
                                <th scope="col" class="px-4 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-4 py-3">Category</th>
                                <th scope="col" class="px-4 py-3">Brand</th>
                                <th scope="col" class="px-4 py-3">Qty</th>
                                <th scope="col" class="px-4 py-3">Price</th>
                                <th scope="col" class="px-4 py-3">Stock</th>
                                <th scope="col" class="px-4 py-3">Publish</th>
                                <th scope="col" class="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(product) in products.data"
                                :key="product.id"
                                class="border-b dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {{ product.title }}
                                </th>
                                <td class="px-4 py-3">
                                    {{ product.category.name }}
                                </td>
                                <td class="px-4 py-3">
                                    {{ product.brand.name }}
                                </td>
                                <td class="px-4 py-3">
                                    {{ product.quantity }}
                                </td>
                                <td class="px-4 py-3">{{ product.price }}</td>
                                <td class="px-4 py-3">
                                    <span
                                        v-if="product.inStock === 0"
                                        class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                    >
                                        In Stock
                                    </span>
                                    <span
                                        v-else
                                        class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
                                    >
                                        Out of Sotck
                                    </span>
                                </td>
                                <td class="px-4 py-3">
                                    <el-switch
                                        v-model="product.published"
                                        :active-value="0"
                                        :inactive-value="1"
                                    />
                                </td>
                                <td class="px-4 py-3">
                                    <a
                                        href="javascript:void(0)"
                                        class="hover:underline text-yellow-600 mr-2"
                                        @click="openEditModal(product)"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        class="hover:underline text-red-600"
                                        @click="deleteProduct(product)"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav
                    class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                    aria-label="Table navigation"
                >
                    <span
                        class="text-sm font-normal text-gray-500 dark:text-gray-400"
                    >
                        Showing
                        <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >1-10</span
                        >
                        of
                        <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >1000</span
                        >
                    </span>
                    <ul class="inline-flex items-stretch -space-x-px">
                        <li>
                            <a
                                href="#"
                                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span class="sr-only">Previous</span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >1</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >2</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-current="page"
                                class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                >3</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >...</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >100</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span class="sr-only">Next</span>
                                <svg
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</template>

<script setup>
import { router, usePage } from "@inertiajs/vue3";
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";
import { reactive, ref } from "vue";

defineProps({
    products: Object,
});
// const products = usePage().props.products;
const brands = usePage().props.brands;
const categories = usePage().props.categories;

const isAddProduct = ref(false);
const dialogVisible = ref(false);
const editMode = ref(false);

const id = ref("");
const title = ref("");
const price = ref("");
const description = ref("");
const category = ref("");
const brand = ref("");
const quantity = ref("");
const images = ref([]);
const inStock = ref("");
const published = ref("");

const productImages = ref([]);
const dialogImageUrl = ref("");
const product_images = ref([]);

const handleFileChange = (file) => {
    productImages.value.push(file);
};

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url;
    dialogVisible.value = true;
};

const handleRemove = (file) => {
    console.log(file);
};

const openDialogModal = () => {
    isAddProduct.value = true;
    dialogVisible.value = true;
    editMode.value = false;
};

const openEditModal = (product) => {
    isAddProduct.value = false;
    dialogVisible.value = true;
    editMode.value = true;

    // check product
    id.value = product.id;
    title.value = product.title;
    price.value = product.price;
    description.value = product.description;
    quantity.value = product.quantity;
    product_images.value = product.product_images;
    brand.value = product.brand_id;
    category.value = product.category_id;
};

const resetFormData = () => {
    id.value = "";
    title.value = "";
    price.value = "";
    description.value = "";
    category.value = "";
    brand.value = "";
    quantity.value = "";
    images.value = [];
    inStock.value = "";
    published.value = "";
    dialogImageUrl.value = "";
};

const handleClose = () => {};

const submitForm = async () => {
    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("price", price.value);
    formData.append("description", description.value);
    formData.append("quantity", quantity.value);
    formData.append("category", category.value);
    formData.append("brand", brand.value);
    formData.append("inStock", inStock.value);
    formData.append("published", published.value);

    for (const image of productImages.value) {
        formData.append("images[]", image.raw);
    }
    if (editMode.value === false) {
        try {
            await router.post("/admin/products", formData, {
                onSuccess: (page) => {
                    dialogVisible.value = false;
                    resetFormData();
                    ElNotification({
                        title: "Success",
                        message: page.props.flash.success,
                        type: "success",
                    });
                },
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        formData.append("_method", "PUT");

        try {
            await router.post(`/admin/products/${id.value}/update`, formData, {
                onSuccess: (page) => {
                    dialogVisible.value = false;
                    resetFormData();
                    ElNotification({
                        title: "Success",
                        message: page.props.flash.success,
                        type: "success",
                    });
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
};

const deleteImage = async (pimage, index) => {
    try {
        await router.delete("/admin/products/images/" + pimage.id, {
            onSuccess: (page) => {
                productImages.value.splice(index, 1);
                ElNotification({
                    title: "Success",
                    message: page.props.flash.success,
                    type: "success",
                });
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteProduct = (product) => {
    ElMessageBox.confirm(
        "proxy will permanently delete the product. Continue?",
        "Warning",
        {
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            type: "warning",
        }
    )
        .then(() => {
            router.delete("/admin/products/destroy/" + product.id, {
                onSuccess: (page) => {
                    ElMessage({
                        type: "success",
                        message: "Delete completed",
                    });
                },
            });
        })
        .catch(() => {
            ElMessage({
                type: "info",
                message: "Cancel",
            });
        });
};
</script>
