<template>
  <section class="hero-slider-business">
    <swiper :space-between="0" :breakpoints="swiperOptions" :autoHeight="true">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div
          class="single-slide"
          :style="{ backgroundImage: 'url(' + slide.image + ')' }"
        >
          <div class="overlay"></div>
          <div class="slider-content-wrapper">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <span class="tagline py-1 px-2 mb-4 d-inline-flex">{{
                    slide.tag
                  }}</span>
                  <div class="slide-content">
                    <h1 v-html="slide.title"></h1>
                    <p>{{ slide.description }}</p>
                  </div>
                  <div class="slide-action">
                    <router-link
                      :to="slide.url"
                      class="btn btn-primary btn-sm text-uppercase anchor-button"
                    >
                      View Detail</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  name: "BusinessHeroSlider",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      slides: [
        {
          id: 1,
          tag: "Be Safe",
          title: "Safety. your <br/>first priority",
          description: "Valid online & in-store with selected items.",
          url: "/home",
          image: "/img/slider/slider01.png",
        },
        {
          id: 2,
          tag: "Riding Gears",
          title: "Riding Gears. you <br/>need the most",
          description: "Valid online & in-store with selected items.",
          url: "/about",
          image: "/img/slider/slider01.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
