<template>
  <CCard class="p-4">
    <div class="vertical-advt">
      <div class="advt-content black-content">
        <div class="tagline mb-2">
          <span class="px-2 py-0"> Get Rewarded </span>
        </div>
        <div class="title mb-2">
          <h3>50% Cash Back Reward</h3>
        </div>
        <div class="description mb-3">
          Valid online & in-store with selected items.
        </div>
        <div class="action">
          <anchor-button
            to="/home"
            className="btn-solid"
            size="md"
            text="View Detail"
          />
        </div>
      </div>
    </div>
  </CCard>
</template>

<script>
import AnchorButton from "../anchor-button/AnchorButton.vue";
export default {
  components: { AnchorButton },
  name: "AdVerticalTwo",
  props: ["image"],
};
</script>

<style lang="scss" scoped></style>
