<template>
  <CContainer>
    <CRow class="align-items-center">
      <CCol :md="{ span: 4, offset: 2 }">
        <div class="body-banner-heading">
          <span class="tagline py-1 px-2 mb-4 d-inline-flex">Get Rewarded</span>
          <div class="slide-content">
            <h2>
              First time<br />
              in Nepal
            </h2>
            <p>Valid online & in-store with selected items.</p>
          </div>
          <div class="slide-action">
            <router-link
              to="/"
              class="btn btn-primary btn-sm text-uppercase anchor-button"
            >
              View Detail</router-link
            >
          </div>
        </div>
      </CCol>
      <CCol md="6">
        <img class="img-fluid" src="/img/showpiece.png" alt="" />
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: "BodyBanner",
};
</script>

<style lang="scss" scoped></style>
