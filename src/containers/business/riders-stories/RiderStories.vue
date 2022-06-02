<template>
  <section class="rider-stories py-5">
    <div
      class="bg-image"
      style="background-image: url('/img/slider/slider01.png')"
    ></div>
    <CContainer>
      <CRow>
        <CCol md="6"> </CCol>
        <CCol md="6">
          <section-title
            tagline="RIDERS STORIES"
            title="Over the years, we’ve helped people to experience their passion "
            description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
          />

          <div class="pt-4">
            <swiper
              :modules="modules"
              :breakpoints="swiperOptions"
              :autoHeight="true"
              :slides-per-view="1"
              :space-between="50"
              :navigation="{
                nextEl: '.riderNextArrow',
                prevEl: '.RiderPprevArrow',
              }"
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide v-for="rider in riders" :key="rider.id">
                <rider-card :rider="rider" />
              </swiper-slide>
            </swiper>
            <swiper-nav
              leftClassName="RiderPprevArrow"
              RightClassName="riderNextArrow"
            />
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
// swiper core
import SwiperCore, { Navigation, Parallax } from "swiper";
import { CRow, CCol, CContainer } from "@coreui/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import RiderCard from "@/components/shared-components/rider-card/RiderCard.vue";
import SwiperNav from "@/components/shared-components/swiper-nav/SwiperNav.vue";

SwiperCore.use([Navigation, Parallax]);
export default {
  name: "RiderStories",
  components: {
    CRow,
    CCol,
    CContainer,
    Swiper,
    SwiperSlide,
    SectionTitle,
    RiderCard,
    SwiperNav,
  },

  data() {
    return {
      riders: [
        {
          id: 1,
          name: "Shreyash Poudel",
          riderTestimonial:
            "I was a small boy aged eleven or twelve when I started riding bikes. I feel that the passion was inbuilt in me since the early days of childhood itself",
          image: "/img/avatars/thumb-1.jpg",
        },
        {
          id: 2,
          name: "Sushan Maharjan",
          riderTestimonial:
            "As our small step in awaring people about safety and the importance of safety gears, we cover the mishaps stories of riders and share their thoughts and experiences.",
          image: "/img/avatars/thumb-2.jpg",
        },
        {
          id: 3,
          name: "Luzaw Sayami",
          riderTestimonial:
            "Accidents happen unannounced so it's better to be prepared all the time",
          image: "/img/avatars/thumb-3.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
