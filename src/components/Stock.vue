<template>
    <div>
        <h1>Stock</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
    </div>
</template>
<script>
export default {
    data: () => ({
        inStock: true
    })
}
</script>