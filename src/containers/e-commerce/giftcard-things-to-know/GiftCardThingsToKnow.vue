<template>
  <section class="bg-gray my-5 py-5">
    <CContainer>
      <CRow>
        <CCol :md="{ span: 4, offset: 1 }">
          <section-title
            tagline="Better To Know"
            title="Things You Should Know"
            description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
          />
        </CCol>
        <CCol md="6">
          <div class="rich-text">
            <h6>Aenean vulputate eleifend tellus.</h6>
            <p>
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum.
            </p>

            <ul>
              <li>
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel
              </li>
              <li>Aenean massa. Cum sociis natoque</li>
              <li>Nullam dictum felis eu pede</li>
            </ul>
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
  name: "GiftCardThingsToKnow",
};
</script>

<style lang="scss" scoped></style>
