<template>
  <dashboard-layout>
    <div class="user-profile-content">
      <CCard class="p-4">
        <heading title="Notifications" />
        <div>
          <ul>
            <li
              class="d-flex align-items-center justify-content-between notification-pg-list"
            >
              <div class="d-flex">
                <div class="notif-icon-holder me-2">
                  <user-icon />
                </div>
                <div class="notif-content">
                  <div class="notif-heading">Lorem ipsum dolor sit amet.</div>
                  <p>
                    consectetur rerum reprehenderit dolorum amet dolor sit amet,
                  </p>
                </div>
              </div>
              <div class="btn-clear">
                <button>x</button>
              </div>
            </li>
            <li
              class="d-flex align-items-center justify-content-between notification-pg-list"
            >
              <div class="d-flex">
                <div class="notif-icon-holder me-2">
                  <user-icon />
                </div>
                <div class="notif-content">
                  <div class="notif-heading">Lorem ipsum dolor sit amet.</div>
                  <p>
                    consectetur rerum reprehenderit dolorum amet dolor sit amet,
                  </p>
                </div>
              </div>
              <div class="btn-clear">
                <button>x</button>
              </div>
            </li>
            <li
              class="d-flex align-items-center justify-content-between notification-pg-list"
            >
              <div class="d-flex">
                <div class="notif-icon-holder me-2">
                  <wishlist-icon />
                </div>
                <div class="notif-content">
                  <div class="notif-heading">Lorem ipsum dolor sit amet.</div>
                  <p>
                    consectetur rerum reprehenderit dolorum amet dolor sit amet,
                  </p>
                </div>
              </div>
              <div class="btn-clear">
                <button>x</button>
              </div>
            </li>
          </ul>

          <div class="text-center">
            <button class="btn btn-text">Clear All</button>
          </div>
        </div>
      </CCard>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import InfoTile from "@/components/shared-components/info-tile/InfoTile.vue";
import WishlistIcon from "@/assets/svg/header-icons/WishlistIcon.vue";
import NotificationIcon from "@/assets/svg/header-icons/NotificationIcon.vue";
import UserIcon from "@/assets/svg/header-icons/UserIcon.vue";
export default {
  components: {
    DashboardLayout,
    Heading,
    InfoTile,
    WishlistIcon,
    NotificationIcon,
    UserIcon,
  },
  name: "Notifications",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
