<template>
  <div class="career-card">
    <div class="career-card-thumbnail mb-4">
      <router-link :to="'/careers/' + career.id">
        <img :alt="title" :src="career.image" />
      </router-link>
    </div>

    <div class="card-meta">
      <div class="card-meta-title">
        <h5 class="pb-2">{{ career.title }}</h5>
      </div>
      <div>
        <router-link :to="'/careers/' + career.id">
          See all {{ career.openPositions }} open positions
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareerCard",
  props: ["career"],
};
</script>

<style lang="scss" scoped></style>
