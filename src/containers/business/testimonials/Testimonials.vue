<template>
  <div class="mb-4">
    <CContainer>
      <CRow class="align-items-end">
        <CCol md="6">
          <section-title
            tagline="WHAT PEOPLE ARE SAYING ABOUT US"
            title="Over the years, we’ve helped people to experience their passion "
            description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
          />
        </CCol>
        <CCol md="6">
          <swiper-nav
            leftClassName="testiPprevArrow"
            RightClassName="testiNextArrow"
          />
        </CCol>
      </CRow>
    </CContainer>
  </div>
  <CContainer>
    <CRow>
      <CCol md="12">
        <div class="pt-4">
          <swiper
            :modules="modules"
            :breakpoints="breakpoints"
            :autoHeight="true"
            :slides-per-view="2"
            :space-between="50"
            :navigation="{
              nextEl: '.testiNextArrow',
              prevEl: '.testiPprevArrow',
            }"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="testimonie in testimonials"
              :key="testimonie.id"
            >
              <CCard class="p-4">
                <testimonie :testimonie="testimonie" />
              </CCard>
            </swiper-slide>
          </swiper>
        </div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import { CRow, CCol, CContainer, CCard } from "@coreui/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import SwiperNav from "@/components/shared-components/swiper-nav/SwiperNav.vue";
import Testimonie from "@/components/shared-components/testimonie/Testimonie.vue";
export default {
  components: {
    CRow,
    CCol,
    CContainer,
    CCard,
    Swiper,
    SwiperSlide,
    SectionTitle,
    SwiperNav,
    Testimonie,
  },
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "John Chrzanawska",
          text: "I was a small boy aged eleven or twelve when I started riding bikes. I feel that the passion was inbuilt in me since the early days of childhood itself",
          image: "/img/avatars/thumb-1.jpg",
          designation: "Ceo XyZ Compnay",
        },
        {
          id: 2,
          name: "Jane Chrzanawska",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque",
          image: "/img/avatars/thumb-2.jpg",
          designation: "Tutor ABC School",
        },
        {
          id: 3,
          name: "James Williams",
          text: "I was a small boy aged eleven or twelve when I started riding bikes. I feel that the passion was inbuilt in me since the early days of childhood itself",
          image: "/img/avatars/thumb-3.jpg",
          designation: "Web Designer",
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
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
