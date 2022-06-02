<template>
  <CContainer>
    <CRow>
      <CCol md="12">
        <div
          class="mb-4 d-flex flex-wrap align-items-center justify-content-sm-between"
        >
          <div class="flex-grow-1">
            <item-group-title :title="sectionTitle" :subTitle="subTitle" />
          </div>
          <div>
            <span class="me-3">
              <router-link :to="'/category/' + id">
                View All Items
              </router-link>
            </span>
            <swiper-nav :leftClassName="prevEl" :RightClassName="nextEl" />
          </div>
        </div>

        <div>
          <swiper
            :breakpoints="breakpoints"
            :autoHeight="true"
            :slides-per-view="5"
            :space-between="50"
            :navigation="{
              nextEl: `.${nextEl}`,
              prevEl: `.${prevEl}`,
            }"
          >
            <swiper-slide v-for="item in items" :key="item.id">
              <item-card :item="item" />
            </swiper-slide>
          </swiper>
        </div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import ItemGroupTitle from "@/components/shared-components/item-group-title/ItemGroupTitle.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import ItemCard from "@/components/shared-components/item-card/ItemCard.vue";
import SwiperNav from "@/components/shared-components/swiper-nav/SwiperNav.vue";
export default {
  components: { ItemGroupTitle, Swiper, SwiperSlide, ItemCard, SwiperNav },
  name: "ItemCarousel",
  props: ["items", "sectionTitle", "subTitle", "nextEl", "prevEl"],
  data() {
    return {
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
