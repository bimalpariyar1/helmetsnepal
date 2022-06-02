<template>
  <auth-layout>
    <template v-if="userType === 'customer'">
      <customer-form />
    </template>
    <template v-else-if="userType === 'vendor'">
      <vendor-form />
    </template>
  </auth-layout>
</template>

<script>
import { useRoute } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import CustomerForm from "@/containers/auth/customer-form/CustomerForm.vue";
import VendorForm from "@/containers/auth/vendor-form/VendorForm.vue";
export default {
  components: { AuthLayout, CustomerForm, VendorForm, VendorForm },
  name: "UserRegistration",

  data() {
    return {
      userType: "",
    };
  },

  created() {
    const route = useRoute();
    this.userType = route.params.type;
  },
};
</script>

<style lang="scss" scoped></style>
