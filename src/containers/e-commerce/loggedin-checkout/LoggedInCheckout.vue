<template>
  <CCard class="p-4">
    <heading
      title="Checkout"
      description="Please select your prefered options"
    />

    <div class="mb-4">
      <h6>Select Delivery Address</h6>
      <CRow>
        <CCol md="6" class="mb-md-0 mb-4">
          <CCard class="p-4">
            <div class="d-flex">
              <div class="me-3">
                <map-muted-icon />
              </div>
              <div>
                <h6>Kathmandu Nepal</h6>
                <p class="m-0">Baneshwor, Shantinagar</p>
              </div>
            </div>
          </CCard>
        </CCol>
        <CCol md="6" class="mb-md-0 mb-4">
          <CCard class="p-4">
            <div class="d-flex">
              <div class="me-3">
                <map-muted-icon />
              </div>
              <div>
                <h6>Kathmandu Nepal</h6>
                <p class="m-0">Chabahil, Dhugedhara</p>
              </div>
            </div>
          </CCard>
        </CCol>
      </CRow>
    </div>
    <div class="mb-4">
      <h6>Select Contact Number</h6>
      <CRow>
        <CCol md="6" class="mb-md-0 mb-4">
          <CCard class="p-4">
            <div class="d-flex">
              <div class="me-3">
                <phone-muted-icon />
              </div>
              <div>
                <h6>Primary</h6>
                <p class="m-0">01526542522</p>
              </div>
            </div>
          </CCard>
        </CCol>
        <CCol md="6" class="mb-md-0 mb-4">
          <CCard class="p-4">
            <div class="d-flex">
              <div class="me-3">
                <phone-muted-icon />
              </div>
              <div>
                <h6>Secondary</h6>
                <p class="m-0">9845623521</p>
              </div>
            </div>
          </CCard>
        </CCol>
      </CRow>
    </div>
    <div>
      <h6>Select Payment Method</h6>
      <CRow>
        <CCol md="6" class="mb-md-0 mb-4">
          <CCard class="p-4 h-100">
            <div class="text-center">
              <div class="mb-2">
                <cash-on-delivery-icon />
              </div>
              <h6>Cash on delivery</h6>
            </div>
          </CCard>
        </CCol>
        <CCol md="6" class="mb-md-0 mb-4">
          <CCard class="p-4 h-100">
            <div class="text-center">
              <div class="mb-2">
                <online-payment-icon />
              </div>
              <h6>Online Payment</h6>
            </div>
          </CCard>
        </CCol>
      </CRow>
    </div>

    <div class="my-4">
      <label>
        <input type="checkbox" />
        By making this purchase you agree to our terms and conditions.
      </label>
    </div>

    <div>
      <button class="btn btn-primary">PLACE ORDER</button>
      <span class="mx-4">|</span> or Continue
      <router-link to="/">Shopping</router-link>
    </div>
  </CCard>
</template>

<script>
import Heading from "@/components/shared-components/heading/Heading.vue";
import MapMutedIcon from "@/assets/svg/MapMutedIcon.vue";
import PhoneMutedIcon from "@/assets/svg/PhoneMutedIcon.vue";
import CashOnDeliveryIcon from "@/assets/svg/CashOnDeliveryIcon.vue";
import OnlinePaymentIcon from "@/assets/svg/OnlinePaymentIcon.vue";
export default {
  components: {
    Heading,
    MapMutedIcon,
    PhoneMutedIcon,
    CashOnDeliveryIcon,
    OnlinePaymentIcon,
  },
  name: "LoggedInCheckout",
};
</script>

<style lang="scss" scoped></style>
