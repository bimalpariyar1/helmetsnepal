<template>
  <div>
    <CContainer>
      <CRow>
        <CCol md="12" class="mb-4">
          <swiper-nav
            leftClassName="vGalleryprevArrow"
            RightClassName="vGalleryNextArrow"
          />
        </CCol>
      </CRow>
    </CContainer>

    <swiper
      :breakpoints="breakpoints"
      :autoHeight="true"
      :slides-per-view="5"
      :space-between="50"
      :navigation="{
        nextEl: '.vGalleryprevArrow',
        prevEl: '.vGalleryNextArrow',
      }"
    >
      <swiper-slide v-for="video in videos" :key="video.id">
        <div class="image-card gall-video-item">
          <img alt="" :src="video.image" />
          <div class="overlay"></div>
          <div class="card-content">
            <h4>{{ video.title }}</h4>

            <button
              class="btn video-play-icon"
              @click="() => handleVideoPlay(video)"
            >
              <img src="/img/playicon.png" alt="" />
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <CModal
    alignment="center"
    :visible="visibleVerticallyCenteredDemo"
    @close="
      () => {
        visibleVerticallyCenteredDemo = false;
      }
    "
  >
    <CModalHeader>
      <CModalTitle>{{ currentVideo.title }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <iframe
        class="modal-video"
        :src="'https://www.youtube.com/embed/' + currentVideo.videoKey"
        :title="currentVideo.title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </CModalBody>
  </CModal>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperNav from "@/components/shared-components/swiper-nav/SwiperNav.vue";
export default {
  name: "AboutVideoGallery",
  components: { Swiper, SwiperSlide, SwiperNav },
  data() {
    return {
      visibleVerticallyCenteredDemo: false,
      currentVideo: {
        id: 1,
        image: "/img/services/service01.png",
        title: "We are delivering beautiful products",
        videoKey: "qcLpDs9ZhYg",
      },
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
      videos: [
        {
          id: 1,
          image: "/img/services/service01.png",
          title: "We are delivering beautiful products",
          videoKey: "qcLpDs9ZhYg",
        },
        {
          id: 2,
          image: "/img/services/service02.png",
          title: "We help businesses grow with us",
          videoKey: "wYmjXfzzyfo",
        },
        {
          id: 3,
          image: "/img/services/service03.png",
          title: "Better online shopping experience",
          videoKey: "YxOOkENp6mQ",
        },
        {
          id: 4,
          image: "/img/services/service02.png",
          title: "We help businesses grow with us",
          videoKey: "TFJykGxgOUE",
        },
        {
          id: 5,
          image: "/img/services/service03.png",
          title: "Better online shopping experience",
          videoKey: "Nlzwm7p1DuA",
        },
        {
          id: 6,
          image: "/img/services/service02.png",
          title: "We help businesses grow with us",
          videoKey: "RTFCCZ2Wcf0",
        },
        {
          id: 7,
          image: "/img/services/service03.png",
          title: "Better online shopping experience",
          videoKey: "QB8ZyJfEcYE",
        },
      ],
    };
  },

  methods: {
    handleVideoPlay: function (video) {
      this.visibleVerticallyCenteredDemo = true;
      this.currentVideo = video;
    },
  },
};
</script>

<style lang="scss" scoped></style>
