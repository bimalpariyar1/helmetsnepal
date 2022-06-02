<template>
  <CCard>
    <ul class="dashboard-side-nav">
      <li
        :class="item.active === true ? 'active' : ''"
        v-for="item in navItems"
        :key="item.id"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </CCard>
</template>

<script>
export default {
  name: "DashboardNav",

  data() {
    return {
      navItems: [
        { id: 2, name: "Profile", path: "/dashboard/profile", active: false },
        { id: 3, name: "Settings", path: "/dashboard/settings", active: false },
        { id: 4, name: "Orders", path: "/dashboard/my-orders", active: false },
        {
          id: 5,
          name: "Past Orders",
          path: "/dashboard/past-orders",
          active: false,
        },
        // {
        //   id: 6,
        //   name: "Tickets",
        //   path: "/dashboard/my-tickets",
        //   active: false,
        // },
        { id: 7, name: "Return", path: "/dashboard/return", active: false },
        {
          id: 8,
          name: "Notifications",
          path: "/dashboard/notifications",
          active: false,
        },
      ],
    };
  },
  created() {
    this.navItems = this.navItems.map((item, i) => {
      const windowPath = window.location.pathname;
      if (item.path === windowPath) {
        return {
          ...item,
          active: true,
          test: "test",
        };
      } else {
        return {
          ...item,
        };
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
