<template>
  <CContainer>
    <CRow>
      <CCol md="6" class="mb-md-0 mb-4">
        <ad-horizontal image="/img/advrt/advrt01.png" />
      </CCol>
      <CCol md="6">
        <ad-horizontal image="/img/advrt/advrt01.png" />
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import AdHorizontal from "@/components/shared-components/ad-horizontal/AdHorizontal.vue";
export default {
  name: "HorizontalAdBlock",
  components: { AdHorizontal },
};
</script>

<style lang="scss" scoped></style>
