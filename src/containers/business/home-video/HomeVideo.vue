<template>
  <section class="home-video">
    <page-banner image="/img/banners/pageban01.png">
      <div class="col-md-5">
        <banner-title
          tagline="Who we are"
          title="We provide advanced solutions to grow your business"
          description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
        />
        <div class="text-center mt-4">
          <button
            class="btn video-play-icon"
            @click="
              () => {
                visibleVerticallyCenteredDemo = true;
              }
            "
          >
            <img src="/img/playicon.png" alt="" />
          </button>
        </div>
      </div>
    </page-banner>
  </section>

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
      <CModalTitle>Video title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <iframe
        class="modal-video"
        src="https://www.youtube.com/embed/qcLpDs9ZhYg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </CModalBody>
  </CModal>
</template>

<script>
import PageBanner from "@/components/shared-components/page-banner/PageBanner.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
export default {
  name: "HomeVideo",
  components: { PageBanner, BannerTitle },

  data() {
    return {
      visibleVerticallyCenteredDemo: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
