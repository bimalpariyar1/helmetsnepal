<template>
  <section class="my-5">
    <CContainer>
      <CRow>
        <CCol md="12">
          <swiper
            :breakpoints="breakpoints"
            :autoHeight="true"
            :slides-per-view="5"
            :space-between="50"
          >
            <swiper-slide v-for="category in categories" :key="category.id">
              <category-tile :category="category" />
            </swiper-slide>
          </swiper>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import { CRow, CCol, CContainer } from "@coreui/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import CategoryTile from "@/components/shared-components/category-tile/CategoryTile.vue";
export default {
  name: "CategorieTiles",
  components: { CContainer, CRow, CCol, Swiper, SwiperSlide, CategoryTile },
  data() {
    return {
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 10,
        },

        425: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
      categories: [
        {
          id: 1,
          name: "Helmets",
          url: "/helmets",
          image: "/img/categories/cat-helmets.png",
        },
        {
          id: 2,
          name: "Bags",
          url: "/bags",
          image: "/img/categories/cat-bags.png",
        },
        {
          id: 3,
          name: "Accessories",
          url: "/accessories",
          image: "/img/categories/cat-accessories.png",
        },
        {
          id: 4,
          name: "Aperals",
          url: "/aperals",
          image: "/img/categories/cat-aperals.png",
        },
        {
          id: 5,
          name: "Tyres",
          url: "/tyres",
          image: "/img/categories/cat-tyres.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
