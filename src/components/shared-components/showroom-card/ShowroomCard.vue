<template>
  <div class="shoroom-card">
    <div class="showroom-image mb-4">
      <img :src="showroom.image" alt="" />
    </div>
    <div class="showroom-meta">
      <div class="address d-flex">
        <div class="me-3">
          <map-muted-icon />
        </div>
        <span class="showroom-address"> {{ showroom.address }} </span>
      </div>
      <div class="title my-4">
        <h5>{{ showroom.showroomName }}</h5>
      </div>
      <div class="contact-info d-flex">
        <div class="me-3">
          <phone-muted-icon />
        </div>
        <div class="contact-detail">
          <div class="phone-number mb-1 pb-1">{{ showroom.phone }}</div>
          <div class="contact-person">{{ showroom.contactPerson }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapMutedIcon from "@/assets/svg/MapMutedIcon.vue";
import PhoneMutedIcon from "@/assets/svg/PhoneMutedIcon.vue";
export default {
  components: { MapMutedIcon, PhoneMutedIcon },
  name: "ShowroomCard",
  props: ["showroom"],
};
</script>

<style lang="scss" scoped></style>
