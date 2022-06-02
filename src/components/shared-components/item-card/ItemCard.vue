<template>
  <CCard>
    <div class="item-card p-4">
      <template v-if="item.tag.type === 'new'">
        <div class="item-badge badge-new">{{ item.tag.name }}</div>
      </template>
      <template v-if="item.tag.type === 'sale'">
        <div class="item-badge badge-sale">{{ item.tag.name }}</div>
      </template>
      <div class="item-images text-center">
        <router-link to="/items/:id"
          ><img
            :src="activeImage === '' ? item.images[0].image : activeImage"
            alt=""
        /></router-link>
      </div>

      <div class="item-content text-center">
        <div class="item-colors mt-4">
          <span
            v-for="color in item.colors"
            :key="color"
            class="color-palette"
            :style="{ background: color }"
            @mouseover="setActiveImage(color)"
            @mouseout="setActiveImage('')"
          ></span>
        </div>
        <div class="item-meta">
          <div class="item-reputation my-3">
            <div class="rating mr-3">
              <star-rating
                :rating="2.5"
                :increment="0.5"
                @update:rating="setRating"
                :show-rating="false"
                :read-only="true"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
                :star-size="15"
              ></star-rating>
            </div>
            <div class="review">Reviews (4)</div>
          </div>

          <div class="name">
            <router-link to="/items/:id"
              ><h5>{{ item.name }}</h5></router-link
            >
          </div>
          <div class="item-card-base">
            <div class="price mt-4">
              <div>
                <span class="old-price text-muted">Rs. 4599.00</span>
              </div>
              <div>
                <span class="new-price">Rs. 4099.00</span>
              </div>
            </div>
            <div class="base-action">
              <div class="btn-holder">
                <button class="btn btn-primary">Add To Cart</button>
                <button class="btn btn-primary buy-now">Buy Now</button>
              </div>
              <div class="text-end mt-2 hover-price">
                <span class="old-price text-muted me-3">Rs. 4599.00</span>
                <span class="new-price">Rs. 4099.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="floating-action">
        <div class="mb-2">
          <button>
            <heart-white-icon />
          </button>
        </div>
      </div>
    </div>
  </CCard>
</template>

<script>
import HeartWhiteIcon from "@/assets/svg/HeartWhiteIcon.vue";
import StarRating from "vue-star-rating";
import EyeWhiteIcon from "@/assets/svg/EyeWhiteIcon.vue";
export default {
  name: "ItemCard",
  components: { StarRating, HeartWhiteIcon, EyeWhiteIcon },
  props: ["item"],
  data() {
    return {
      activeImage: "",
    };
  },
  methods: {
    setRating(rating) {
      console.log(rating);
    },
    setActiveImage(color) {
      if (color === "") {
        this.activeImage = color;
      } else {
        const { image } = this.item.images.find((img) => img.color === color);
        this.activeImage = image;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
