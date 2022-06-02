<template>
  <header class="app-header">
    <CContainer v-if="showSearch">
      <CRow>
        <CCol md="12">
          <nav-search @show-search="handleShowSearch" />
        </CCol>
      </CRow>
    </CContainer>
    <CContainer v-else>
      <CRow>
        <CCol md="12">
          <div class="header-content">
            <div class="heaader-left">
              <logo />
            </div>
            <div class="header-right">
              <navigation />
              <header-actions @show-search="handleShowSearch" />
              <header-actions-mobile @show-search="handleShowSearch" />
            </div>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </header>
</template>

<script>
import Logo from "../Logo.vue";
import NavSearch from "../nav-search/NavSearch.vue";
import HeaderActions from "./HeaderActions.vue";
import HeaderActionsMobile from "./HeaderActionsMobile.vue";
import Navigation from "./Navigation.vue";
export default {
  components: {
    Logo,
    Navigation,
    HeaderActions,
    HeaderActionsMobile,
    NavSearch,
    Logo,
  },
  name: "AppHeader",

  data() {
    return {
      showSearch: false,
    };
  },

  methods: {
    //To handle show/hide Nav search box
    handleShowSearch(value) {
      this.showSearch = value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
