<template>
  <footer class="app-footer pb-5">
    <CContainer>
      <CRow>
        <CCol md="6">
          <CRow>
            <CCol md="4">
              <logo />
            </CCol>
            <CCol md="8">
              <div class="footer-office-info">
                <span class="tagline">Head Office</span>
                <p>
                  Sipradi Trading Building, 4th Floor Tripureshowr, Kathmandu
                </p>
              </div>

              <div class="medium">9802061944 / 01-4100079</div>
              <div class="medium">info@helmetsnepal.com</div>
            </CCol>
          </CRow>
        </CCol>
        <CCol md="6">
          <CRow>
            <CCol md="6">
              <div class="mb-4">
                <h6>Quick Links</h6>
              </div>
              <div class="footer-menu">
                <ul>
                  <li>
                    <router-link to="/">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/about">About</router-link>
                  </li>
                  <li>
                    <router-link to="/shop">Shop</router-link>
                  </li>
                  <li>
                    <router-link to="/faqs">Faqs</router-link>
                  </li>
                  <li>
                    <router-link to="/contact">Contact</router-link>
                  </li>
                  <li>
                    <router-link to="/blogs">Blogs</router-link>
                  </li>
                </ul>
              </div>
            </CCol>
            <CCol md="6">
              <div class="mb-4">
                <h6>Social</h6>
              </div>
              <div class="footer-menu">
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </CCol>
          </CRow>

          <div class="mt-3">
            <p>Copyright © 2019 Helmets Nepal. All rights reserved.</p>
          </div>
        </CCol>
      </CRow>
      <div class="scroll-up" @click="scrollUp">
        <up-arrow-icon />
      </div>
    </CContainer>
  </footer>
</template>

<script>
import UpArrowIcon from "@/assets/svg/UpArrowIcon.vue";
import Logo from "../Logo.vue";
export default {
  components: { Logo, UpArrowIcon },
  name: "AppFooter",

  methods: {
    scrollUp: function () {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
