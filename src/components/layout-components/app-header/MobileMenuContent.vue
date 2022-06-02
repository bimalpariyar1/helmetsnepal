<template>
  <div class="mobile-menu-content">
    <div class="text-end mb-4 mob-nav-close">
      <button @click="handleMenu()">
        <cross-icon-two />
      </button>
    </div>

    <div class="mobile-nav-items p-4">
      <ul class="site-nav">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">About</router-link>
        </li>
        <li>
          <router-link to="/">Shop</router-link>
          <div class="sub-menus">
            <h6>Helmets</h6>
            <ul>
              <li>
                <router-link to="/">Full Helmets</router-link>
              </li>
              <li>
                <router-link to="/">Half Helmets</router-link>
              </li>
              <li>
                <router-link to="/">Dirt Helmets</router-link>
              </li>
              <li>
                <router-link to="/">Cycle Helmets</router-link>
              </li>
              <li>
                <router-link to="/">Kid Helmets</router-link>
              </li>
            </ul>
          </div>
          <div class="sub-menus">
            <h6>Apparel</h6>
            <ul>
              <li>
                <router-link to="/">Shoes</router-link>
              </li>
              <li>
                <router-link to="/">Bandana</router-link>
              </li>
              <li>
                <router-link to="/">Boot</router-link>
              </li>
              <li>
                <router-link to="/">Jersey</router-link>
              </li>
            </ul>
          </div>
          <div class="sub-menus">
            <h6>Accessories</h6>
            <ul>
              <li>
                <router-link to="/">Action Camera</router-link>
              </li>
              <li>
                <router-link to="/">Clearner</router-link>
              </li>
              <li>
                <router-link to="/">Goggles</router-link>
              </li>
              <li>
                <router-link to="/">Keyrings</router-link>
              </li>
              <li>
                <router-link to="/">Paddock Stand</router-link>
              </li>
              <li>
                <router-link to="/">Visor</router-link>
              </li>
            </ul>
          </div>
          <div class="sub-menus">
            <h6>Bags</h6>
            <ul>
              <li>
                <router-link to="/">Action Camera</router-link>
              </li>
              <li>
                <router-link to="/">Clearner</router-link>
              </li>
              <li>
                <router-link to="/">Goggles</router-link>
              </li>
              <li>
                <router-link to="/">Keyrings</router-link>
              </li>
              <li>
                <router-link to="/">Paddock Stand</router-link>
              </li>
              <li>
                <router-link to="/">Visor</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="/">Blogs</router-link>
        </li>
        <li>
          <router-link to="/">Contact Us</router-link>
        </li>
        <li>
          <router-link to="/">Settings</router-link>
        </li>
      </ul>

      <div class="border-top mob-logout-btn">
        <button>Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import CrossIconCricle from "@/assets/svg/CrossIconCricle.vue";
import CrossIconTwo from "@/assets/svg/CrossIconTwo.vue";
import CrossIcon from "@/assets/svg/CrossIcon.vue";
export default {
  components: { CrossIconCricle, CrossIconTwo, CrossIcon },
  name: "MobileMenuContent",

  methods: {
    handleMenu() {
      this.$emit("handleMenu");

      document.body.style.overflow = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
