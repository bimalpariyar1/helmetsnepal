<template>
  <div class="header-actions-mobile">
    <div class="action-item" @click="handleShowSearch">
      <magnify-icon />
    </div>
    <div class="action-item">
      <div class="badge-holder">
        <router-link to="/cart">
          <span class="badge-spec">3</span>
          <cart-icon />
        </router-link>
      </div>
    </div>
    <div class="action-item">
      <user-icon />
    </div>
    <div class="action-item">
      <div class="badge-holder">
        <router-link to="/wishlist">
          <span class="badge-spec">3</span>
          <wishlist-icon />
        </router-link>
      </div>
    </div>
    <div class="action-item">
      <div class="badge-holder">
        <router-link to="/notifications">
          <span class="badge-spec">3</span>
          <notification-icon />
        </router-link>
      </div>
    </div>
    <div class="action-item">
      <div class="header-profile-pic">
        <router-link to="/dashboard/profile">
          <img src="/img/avatars/thumb-1.jpg" alt="" />
        </router-link>
      </div>
    </div>
    <div class="action-item" @click="handleMenu">
      <menu-bar-icon />
    </div>
  </div>
  <mobile-menu-content v-if="showMobileMenu" @handleMenu="handleMenu" />
</template>

<script>
import MagnifyIcon from "@/assets/svg/header-icons/MagnifyIcon.vue";
import CartIcon from "@/assets/svg/header-icons/CartIcon.vue";
import WishlistIcon from "@/assets/svg/header-icons/WishlistIcon.vue";
import UserIcon from "@/assets/svg/header-icons/UserIcon.vue";
import NotificationIcon from "@/assets/svg/header-icons/NotificationIcon.vue";
import MenuBarIcon from "@/assets/svg/MenuBarIcon.vue";
import MobileMenuContent from "./MobileMenuContent.vue";
export default {
  name: "HeaderActionsMobile",
  components: {
    MagnifyIcon,
    CartIcon,
    WishlistIcon,
    NotificationIcon,
    UserIcon,
    MenuBarIcon,
    MobileMenuContent,
  },

  data() {
    return {
      showMobileMenu: false,
    };
  },

  methods: {
    handleMenu: function () {
      this.showMobileMenu = !this.showMobileMenu;
      document.body.style.overflow = "hidden";
    },
    handleShowSearch() {
      this.$emit("show-search", true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
