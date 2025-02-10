<template>
    <div class="image-gallery">
        <img  style="margin: 0; padding: 0;"
            :src="`${URI}/read-photo-product/bVZrUNNY`"
            :class="{ 'horizontal-image': !isMobile, 'vertical-image': isMobile }" alt="Menucito" />
    </div>
</template>

<script setup>
import { URI } from '@/service/conection';

</script>

<style scoped>
.image-gallery {
    margin-top: 0rem;
    margin-bottom: 0;
    padding-bottom: 0;
    /* max-width: 1910px; */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}


.horizontal-image {
    width: 100%;
    margin: 0;
    padding: 0;
}

.vertical-image {
    width: 100%;
    padding: 0;
    margin: 0;
}
</style>
