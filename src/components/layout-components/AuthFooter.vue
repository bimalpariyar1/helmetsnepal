<template>
  <footer>
    <CContainer>
      <div class="text-center">
        <div class="auth-footer-nav mt-5 mb-2">
          <ul>
            <li v-for="(link, index) in navLinks" :key="link.id">
              <router-link :to="link.slug">{{ link.title }}</router-link>
              <span v-if="index !== navLinks.length - 1" class="mx-3 bar"
                >|</span
              >
            </li>
          </ul>
        </div>
        <p>Copyright © 2019 Helmets Nepal. All rights reserved.</p>
      </div>
    </CContainer>
  </footer>
</template>

<script>
import { CContainer } from "@coreui/vue";
export default {
  name: "AuthFooter",
  data() {
    return {
      navLinks: [
        { id: 1, title: "Terms of Service", slug: "/general-page" },
        { id: 2, title: "Privacy Policy", slug: "/general-page" },
        { id: 3, title: "Insurance Policy", slug: "/general-page" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
