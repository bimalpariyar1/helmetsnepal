<template>
  <div class="testimonie-content">
    <div class="mb-4">
      <quote-icon />
    </div>
    <p>
      {{ testimonie.text }}
    </p>
    <!-- <div class="testimonie-link">Webiste: <a href="#">xyz.com</a></div> -->

    <div class="testimonie-meta mt-4">
      <avatar
        className="testimonie-article-card"
        :image="testimonie.image"
        :title="testimonie.name"
        :subTile="testimonie.designation"
      />
    </div>
  </div>
</template>

<script>
import QuoteIcon from "@/assets/svg/QuoteIcon.vue";
import Avatar from "../avatar/Avatar.vue";
export default {
  name: "Testimonie",
  components: { QuoteIcon, Avatar },
  props: { testimonie: Object },
};
</script>

<style lang="scss" scoped></style>
