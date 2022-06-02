<template>
  <div class="cart-drop">
    <div class="text-center">
      <h6>My Cart</h6>
      <p>3 items in cart</p>
    </div>

    <div class="mb-3">
      <anchor-button
        to="/cart"
        className="btn-outline btn-sm w-100"
        size="sm"
        text="View or Edit your cart"
      />
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

    <div class="mt-3 text-end">
      <h6>Total Rs. 4099.00</h6>
    </div>

    <div class="mt-3">
      <anchor-button
        to="/checkout"
        className="btn-solid w-100"
        size="sm"
        text="Go to Checkout"
      />
    </div>
  </div>
</template>

<script>
import CrossIcon from "@/assets/svg/CrossIcon.vue";
import AnchorButton from "../anchor-button/AnchorButton.vue";
export default {
  components: { AnchorButton, CrossIcon },
  name: "CartDropdown",
};
</script>

<style lang="scss" scoped></style>
