<template>
  <section>
    <CContainer>
      <CRow>
        <CCol md="12">
          <div class="body-adv py-3 px-4">
            <slot></slot>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
export default {
  name: "BodyAd",
};
</script>

<style lang="scss" scoped></style>
