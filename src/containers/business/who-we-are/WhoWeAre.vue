<template>
  <section class="who-we-are py-5">
    <CContainer>
      <CRow>
        <CCol md="6">
          <CRow>
            <CCol xl="9" xxl="9">
              <section-title
                tagline="Ultimate Tagline"
                title="We provide advanced solutions to grow your business"
                description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
              />
            </CCol>
          </CRow>
        </CCol>
        <CCol md="6">
          <CRow class="row h-100 align-items-end">
            <CCol md="6" class="mb-md-0 mb-4">
              <section-title
                tagline="Ultimate Tagline"
                description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
              />
            </CCol>
            <CCol md="6">
              <section-title
                tagline="Ultimate Tagline"
                description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
              />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>

    <CContainer>
      <CRow>
        <CCol md="12">
          <div class="pt-5">
            <swiper-nav
              leftClassName="WhoPrevArrow"
              RightClassName="whoNextArrow"
            />
          </div>
          <div class="pt-5 margin-outside-vw">
            <swiper
              :breakpoints="breakpoints"
              :autoHeight="true"
              :slides-per-view="3"
              :space-between="50"
              :navigation="{ nextEl: '.whoNextArrow', prevEl: '.WhoPrevArrow' }"
            >
              <swiper-slide v-for="item in whoWeAreCards" :key="item.id">
                <image-card :cardContent="item" />
              </swiper-slide>
            </swiper>
          </div> </CCol></CRow
    ></CContainer>
  </section>
</template>

<script>
import { CRow, CCol, CContainer } from "@coreui/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import ImageCard from "@/components/shared-components/image-card/ImageCard.vue";
import SwiperNav from "@/components/shared-components/swiper-nav/SwiperNav.vue";
export default {
  name: "WhoWeAre",
  components: {
    CRow,
    CCol,
    CContainer,
    SectionTitle,
    Swiper,
    SwiperSlide,
    ImageCard,
    SwiperNav,
  },

  data() {
    return {
      whoWeAreCards: [
        {
          id: 1,
          image: "/img/services/service01.png",
          tagline: "High Quality Products",
          title: "We are delivering beautiful products",
        },
        {
          id: 2,
          image: "/img/services/service02.png",
          tagline: "Grow your business",
          title: "We help businesses grow with us",
        },
        {
          id: 3,
          image: "/img/services/service03.png",
          tagline: "Unique Experience",
          title: "Better online shopping experience",
        },
        {
          id: 4,
          image: "/img/services/service02.png",
          tagline: "Grow your business",
          title: "We help businesses grow with us",
        },
        {
          id: 5,
          image: "/img/services/service03.png",
          tagline: "Unique Experience",
          title: "Better online shopping experience",
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
