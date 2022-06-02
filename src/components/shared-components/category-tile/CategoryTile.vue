<template>
  <div class="category-tile">
    <router-link :to="'/category' + category.url">
      <div class="text-center">
        <div class="mb-2">
          <img :alt="name" :src="category.image" />
        </div>
        {{ category.name }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CategoryTile",
  props: { category: Object },
};
</script>

<style lang="scss" scoped></style>
