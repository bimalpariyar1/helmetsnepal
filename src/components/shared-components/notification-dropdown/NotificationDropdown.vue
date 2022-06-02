<template>
  <div class="notification-drop">
    <ul>
      <li>
        <router-link class="d-flex" to="/dashboard/notifications">
          <div class="notif-icon-holder me-2 bg-info"><user-icon /></div>
          <div class="notif-content">
            <div class="notif-heading">Lorem ipsum dolor sit amet.</div>
            <p>consectetur rerum reprehenderit dolorum amet dolor sit amet,</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link class="d-flex" to="/dashboard/notifications">
          <div class="notif-icon-holder me-2 bg-danger"><wishlist-icon /></div>
          <div class="notif-content">
            <div class="notif-heading">Lorem ipsum dolor sit amet.</div>
            <p>dolorum amet animi! Lorem ipsum dolor sit amet,</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link class="d-flex" to="/dashboard/notifications">
          <div class="notif-icon-holder me-2 bg-warning"><wishlist-icon /></div>
          <div class="notif-content">
            <div class="notif-heading">Lorem ipsum dolor sit amet.</div>
            <p>
              Non voluptate rerum reprehenderit dolorum amet animi! Lorem amet,
            </p>
          </div>
        </router-link>
      </li>
    </ul>

    <div class="text-center my-3">
      <router-link to="/dashboard/notifications">View All</router-link>
    </div>
  </div>
</template>

<script>
import WishlistIcon from "@/assets/svg/header-icons/WishlistIcon.vue";
import NotificationIcon from "@/assets/svg/header-icons/NotificationIcon.vue";
import UserIcon from "@/assets/svg/header-icons/UserIcon.vue";
export default {
  name: "NotificationDropdown",
  components: {
    WishlistIcon,
    NotificationIcon,
    UserIcon,
  },
};
</script>

<style lang="scss" scoped></style>
