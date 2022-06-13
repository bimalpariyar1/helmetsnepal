<template>
  <dashboard-layout>
    <CCard class="p-4">
      <heading title="Settings"> </heading>

      <div class="setting-controllers">
        <div class="d-flex justify-content-between border-bottom pb-2 mb-2">
          <div>Profile</div>
          <div>
            <router-link to="/profile/edit">Edit</router-link>
          </div>
        </div>
        <div class="d-flex justify-content-between border-bottom pb-2 mb-2">
          <div>Email</div>
          <div>
            <router-link to="/profile/edit">Change</router-link>
          </div>
        </div>
        <div class="d-flex justify-content-between border-bottom pb-2 mb-2">
          <div>Password</div>
          <div>
            <router-link to="/change-password">Reset</router-link>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>Allow Notifications</div>
          <div>
            <Toggle v-model="value" @change="onChange" />
          </div>
        </div>
      </div>
    </CCard>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import Toggle from "@vueform/toggle";
export default {
  components: { DashboardLayout, Toggle, Heading },
  name: "Settings",

  method: {
    click: function () {},
  },
  data() {
    return {
      value: true,
    };
  },
  methods: {
    onChange: function (value) {},
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
