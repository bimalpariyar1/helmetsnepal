<template>
  <ecommerce-layout>
    <item-block v-if="userType === 'CUSTOMER'" />
    <vendor-item-block v-else />
    <template v-if="userType === 'CUSTOMER'">
      <section class="my-5">
        <item-carousel
          :items="itemsList"
          sectionTitle="Recommended Items"
          subTitle=" own it now, up to 6 months interest free!"
          prevEl="mayLikePrevArrow"
          nextEl="mayLikeNextArrow"
        />
      </section>
    </template>
  </ecommerce-layout>
</template>

<script>
import { itemsList } from "@/assets/data/itemListing";
import EcommerceLayout from "@/layouts/EcommerceLayout.vue";
import ItemBlock from "@/containers/e-commerce/item-detail/ItemBlock.vue";
import VendorItemBlock from "@/containers/e-commerce/item-detail/VendorItemBlock.vue";
import ItemCarousel from "@/containers/e-commerce/item-carousel/ItemCarousel.vue";
export default {
  components: {
    EcommerceLayout,
    ItemBlock,
    VendorItemBlock,
    ItemCarousel,
  },
  name: "ItemDetail",

  data() {
    return {
      userType: "CUSTOMER",
      // userType: "VENDOR",
      itemsList,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
