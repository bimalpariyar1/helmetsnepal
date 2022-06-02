<template>
  <section class="core-values py-5">
    <CContainer>
      <CRow>
        <CCol :md="{ span: 4, offset: 1 }" class="mb-md-0 mb-4">
          <section-title
            tagline="What We Believe"
            title="Our Core Values"
            description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
          />
        </CCol>
        <CCol md="6">
          <div
            class="core-value-list mb-4"
            v-for="value in coreValues"
            :key="value.id"
          >
            <media-list-item
              :image="value.image"
              :title="value.title"
              :description="value.description"
            />
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import MediaListItem from "@/components/shared-components/media-list-item/MediaListItem.vue";
export default {
  components: { SectionTitle, MediaListItem },
  name: "CoreValues",

  data() {
    return {
      coreValues: [
        {
          id: 1,
          title: "Exceed customer’s and emplouee expectations",
          description:
            "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
          image: "/img/values/values01.png",
        },
        {
          id: 2,
          title: "Exceed customer’s and emplouee expectations",
          description:
            "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
          image: "/img/values/values02.png",
        },
        {
          id: 3,
          title: "Exceed customer’s and emplouee expectations",
          description:
            "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
          image: "/img/values/values03.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
