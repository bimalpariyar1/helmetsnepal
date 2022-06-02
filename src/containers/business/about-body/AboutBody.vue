<template>
  <section class="pt-5">
    <CContainer>
      <CRow>
        <CCol :md="{ span: 4, offset: 1 }" class="mb-md-0 mb-4">
          <section-title
            tagline="About Us"
            title="Outpace the competition with new or improved offerings"
            description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
          />
        </CCol>
        <CCol md="6">
          <div class="body-content">
            <p>
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum.
            </p>
            <p>
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
              tempus, tellus eget condimentum rhoncus,
            </p>
            <p>
              sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
            </p>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
export default {
  components: { SectionTitle },
  name: "AboutBody",
};
</script>

<style lang="scss" scoped></style>
