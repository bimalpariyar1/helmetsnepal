<template>
  <div class="header-actions">
    <div class="drop-parent">
      <div class="action-item" @click="handleShowSearch">
        <magnify-icon />
      </div>
    </div>
    <div class="drop-parent">
      <div class="action-item">
        <div class="badge-holder">
          <span class="badge-spec">3</span>
          <cart-icon />
        </div>
      </div>
      <div class="drop-item">
        <CCard class="p-3">
          <cart-dropdown />
        </CCard>
      </div>
    </div>
    <div class="drop-parent">
      <div class="action-item">
        <user-icon />
      </div>
      <div class="drop-item">
        <CCard class="p-3">
          <div class="auth-drop">
            <ul class="auth-drop-menu">
              <li>
                <router-link to="/login">Login</router-link>
              </li>
              <li>
                <router-link to="/login">Register</router-link>
              </li>
            </ul>
          </div>
        </CCard>
      </div>
    </div>

    <div class="drop-parent">
      <div class="action-item">
        <div class="badge-holder">
          <span class="badge-spec">3</span>
          <wishlist-icon />
        </div>
      </div>
      <div class="drop-item">
        <CCard class="p-3">
          <wishlist-dropdown />
        </CCard>
      </div>
    </div>
    <div class="drop-parent">
      <div class="action-item">
        <div class="badge-holder">
          <span class="badge-spec">3</span>
          <notification-icon />
        </div>
      </div>
      <div class="drop-item">
        <CCard>
          <notification-dropdown />
        </CCard>
      </div>
    </div>
    <div class="drop-parent">
      <div class="action-item">
        <div class="header-profile-pic">
          <img src="/img/avatars/thumb-1.jpg" alt="" />
        </div>
      </div>
      <div class="drop-item">
        <CCard class="p-3">
          <div class="auth-drop">
            <ul class="auth-drop-menu">
              <li>
                <router-link to="/dashboard/profile">Dashboard</router-link>
              </li>
              <li>
                <router-link to="/dashboard/settings">Settings</router-link>
              </li>
              <li>
                <router-link to="/dashboard/my-orders">Orders</router-link>
              </li>
            </ul>
            <div class="mt-3">
              <button class="btn btn-primary btn-sm w-100">Logout</button>
            </div>
          </div>
        </CCard>
      </div>
    </div>
  </div>
</template>

<script>
import MagnifyIcon from "@/assets/svg/header-icons/MagnifyIcon.vue";
import CartIcon from "@/assets/svg/header-icons/CartIcon.vue";
import WishlistIcon from "@/assets/svg/header-icons/WishlistIcon.vue";
import UserIcon from "@/assets/svg/header-icons/UserIcon.vue";
import NotificationIcon from "@/assets/svg/header-icons/NotificationIcon.vue";
import CartDropdown from "@/components/shared-components/cart-dropdown/CartDropdown.vue";
import WishlistDropdown from "@/components/shared-components/wishlist-dropdown/WishlistDropdown.vue";
import NotificationDropdown from "@/components/shared-components/notification-dropdown/NotificationDropdown.vue";
export default {
  components: {
    MagnifyIcon,
    CartIcon,
    CartDropdown,
    WishlistIcon,
    NotificationIcon,
    UserIcon,
    WishlistDropdown,
    NotificationDropdown,
  },
  name: "HeaderActions",
  methods: {
    //To handle show/hide Nav search box
    handleShowSearch() {
      this.$emit("show-search", true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
