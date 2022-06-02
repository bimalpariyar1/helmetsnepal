<template>
  <div class="nearest-showroom p-3">
    <h6>Showroom Name</h6>
    <div>12 Pieces Available</div>
    <div class="mt-2">
      <div class="d-flex">
        <div class="me-2">
          <location-sm-icon />
        </div>
        <div>Baneshwor</div>
      </div>
      <div class="d-flex">
        <div class="me-2">
          <phone-sm-icon />
        </div>
        <div>9845659856</div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationSmIcon from "@/assets/svg/LocationSmIcon.vue";
import PhoneSmIcon from "@/assets/svg/PhoneSmIcon.vue";
export default {
  components: { LocationSmIcon, PhoneSmIcon },
  name: "ShowroomCardTwo",
  props: ["showroom"],
};
</script>

<style lang="scss" scoped></style>
