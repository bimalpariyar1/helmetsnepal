<template>
  <section class="py-5">
    <div class="mb-5">
      <CContainer>
        <CRow class="align-items-end">
          <CCol md="6" class="md-md-0 mb-4">
            <CRow>
              <CCol xl="9" xxl="9">
                <section-title
                  tagline="Our Showrooms"
                  title="Fuel for your passion! from our blog"
                  description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol md="6" class="text-end">
            <router-link to="/showrooms" class="btn btn-primary"
              >View All Showrooms</router-link
            >
            <div class="ms-3 d-inline-flex">
              <swiper-nav
                leftClassName="shworoomPprevArrow"
                RightClassName="shworoomNextArrow"
              />
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    <CContainer>
      <CRow>
        <CCol md="12">
          <swiper
            :modules="modules"
            :breakpoints="breakpoints"
            :autoHeight="true"
            :space-between="50"
            :navigation="{
              nextEl: '.shworoomNextArrow',
              prevEl: '.shworoomPprevArrow',
            }"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="showroom in showrooms" :key="showroom.id">
              <showroom-card :showroom="showroom" />
            </swiper-slide>
          </swiper>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import SwiperNav from "@/components/shared-components/swiper-nav/SwiperNav.vue";
import ShowroomCard from "@/components/shared-components/showroom-card/ShowroomCard.vue";
export default {
  components: { SectionTitle, SwiperNav, ShowroomCard, Swiper, SwiperSlide },
  name: "ShowroomBlock",
  data() {
    return {
      showrooms: [
        {
          id: 1,
          address: "Address of Showroom",
          showroomName: "Theme name of showroom",
          phone: "+977 9845625321",
          contactPerson: "John Chrzanawska",
          image: "/img/showrooms/showroom01.png",
        },
        {
          id: 2,
          address: "Address of Showroom",
          showroomName: "Theme name of showroom",
          phone: "+977 9845625321",
          contactPerson: "John Chrzanawska",
          image: "/img/showrooms/showroom02.png",
        },
        {
          id: 3,
          address: "Address of Showroom",
          showroomName: "Theme name of showroom",
          phone: "+977 9845625321",
          contactPerson: "John Chrzanawska",
          image: "/img/showrooms/showroom03.png",
        },
        {
          id: 4,
          address: "Address of Showroom",
          showroomName: "Theme name of showroom",
          phone: "+977 9845625321",
          contactPerson: "John Chrzanawska",
          image: "/img/showrooms/showroom01.png",
        },
      ],

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
