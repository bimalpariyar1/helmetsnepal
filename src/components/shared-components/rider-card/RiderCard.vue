<template>
  <div class="testimonie-content">
    <div class="mb-4">
      <quote-icon />
    </div>
    <div class="testimonial">
      <p>
        {{ rider.riderTestimonial }}
      </p>
    </div>

    <div class="testimonie-meta mt-4">
      <avatar
        className="testimonie-article-card"
        :image="rider.image"
        :title="rider.name"
        :subTile="rider.designation"
      />
    </div>

    <div class="my-4">
      <router-link :to="'/rider-story/' + rider.id">View In Detail</router-link>
    </div>
  </div>
</template>

<script>
import QuoteIcon from "@/assets/svg/QuoteIcon.vue";
import Avatar from "../avatar/Avatar.vue";
export default {
  name: "RiderCard",
  components: { QuoteIcon, Avatar },
  props: { rider: Object },
};
</script>

<style lang="scss" scoped></style>
