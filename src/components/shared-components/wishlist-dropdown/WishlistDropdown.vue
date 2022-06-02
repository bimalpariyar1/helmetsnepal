<template>
  <div class="wishlist-drop">
    <div class="text-center">
      <h6>My Wishlist</h6>
      <p>3 items in Wishlist</p>
    </div>

    <div class="header-item-drop py-2">
      <div class="d-flex">
        <span>2</span>
        <span class="mx-2">X</span>
      </div>
      <div class="d-flex flex-grow-1">
        <div class="item-image me-2">
          <router-link to="/items/:id"
            ><img src="/img/helmets/helmet02.png"
          /></router-link>
        </div>
        <div class="item-content me-4">
          <router-link to="/items/:id"
            ><h5>Bilmola Defender Treasure</h5></router-link
          >
          <span class="amount">Rs.5500 </span>
        </div>
      </div>
      <div class="item-action">
        <div class="icon">
          <cross-icon />
        </div>
      </div>
    </div>

    <div class="mt-3">
      <anchor-button
        to="/wishlist"
        className="btn-outline w-100"
        size="sm"
        text="View or Edit your Wishlist"
      />
    </div>
  </div>
</template>

<script>
import CrossIcon from "@/assets/svg/CrossIcon.vue";
import AnchorButton from "../anchor-button/AnchorButton.vue";
export default {
  components: { AnchorButton, CrossIcon },
  name: "WisthlistDropdown",
};
</script>

<style lang="scss" scoped></style>
