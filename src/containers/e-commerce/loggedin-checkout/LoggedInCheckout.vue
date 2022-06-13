<template>
  <CCard class="p-4">
    <heading
      title="Checkout"
      description="Please select your prefered options"
    />

    <div class="mb-4">
      <h6>Select Delivery Address</h6>
      <CRow>
        <CCol
          v-for="address in addresses"
          :key="address.type"
          md="6"
          class="mb-md-0 mb-4"
          @click="() => handleAddress(address.type)"
        >
          <CCard
            :class="selectedAddress === address.type ? 'selected-block' : ''"
          >
            <div class="d-flex block-card p-4">
              <div class="me-3">
                <map-muted-icon />
              </div>
              <div>
                <h6>{{ address.city }} {{ address.country }}</h6>
                <p class="m-0">{{ address.area }}, {{ address.place }}</p>
              </div>
            </div>
          </CCard>
        </CCol>
      </CRow>
    </div>
    <div class="mb-4">
      <h6>Select Contact Number</h6>
      <CRow>
        <CCol
          v-for="contact in contacts"
          :key="contact.type"
          md="6"
          class="mb-md-0 mb-4"
          @click="() => handleContact(contact.type)"
        >
          <CCard
            :class="selectedContact === contact.type ? 'selected-block' : ''"
          >
            <div class="d-flex block-card p-4">
              <div class="me-3">
                <phone-muted-icon />
              </div>
              <div>
                <h6>{{ contact.name }}</h6>
                <p class="m-0">{{ contact.number }}</p>
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
          <CCard
            :class="
              selectedPayment === 'cashOnDelivery'
                ? 'h-100 selected-block'
                : 'h-100'
            "
            @click="() => handlepayment('cashOnDelivery')"
          >
            <div class="text-center p-4 block-card">
              <div class="mb-2">
                <cash-on-delivery-icon />
              </div>
              <h6>Cash on delivery</h6>
            </div>
          </CCard>
        </CCol>
        <CCol md="6" class="mb-md-0 mb-4">
          <CCard
            :class="
              selectedPayment === 'onlinePayment'
                ? 'h-100 selected-block'
                : 'h-100'
            "
            @click="() => handlepayment('onlinePayment')"
          >
            <div class="text-center p-4 block-card">
              <div class="mb-2">
                <online-payment-icon />
              </div>
              <h6>Online Payment</h6>
            </div>
          </CCard>
        </CCol>
      </CRow>

      <div class="mt-3" v-if="selectedPayment === 'onlinePayment'">
        <div>
          <h6>Please select your prefered payment Gateway</h6>
        </div>
        <span
          v-for="(payment, index) in paymentGateways"
          :key="payment.id"
          @click="() => handlePaymentGateway(index)"
          :class="
            selectedPaymentGateway === index
              ? 'payment-gateways-selection seleted-payment me-3'
              : 'payment-gateways-selection me-3'
          "
          ><img :src="payment.icon" alt=""
        /></span>
      </div>
    </div>

    <div class="my-4">
      <label>
        <input type="checkbox" />
        By making this purchase you agree to our
        <router-link to="/general-page">terms and conditions</router-link>.
      </label>
    </div>

    <div>
      <button class="btn btn-primary">PLACE ORDER</button>
      <span class="mx-4">|</span> or Continue
      <router-link to="/">Shopping</router-link>
    </div>

    <div class="mt-4">
      <CAlert color="danger"> Order place failure message goes here. </CAlert>
      <CAlert color="success"> Order place success message goes here. </CAlert>
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

  data() {
    return {
      selectedAddress: "primary",
      selectedContact: "primary",
      selectedPayment: "cashOnDelivery",
      selectedPaymentGateway: 0,
      addresses: [
        {
          type: "primary",
          city: "Kathmandu",
          country: "Nepal",
          area: "Baneshwor",
          place: "Shantinagar",
        },
        {
          type: "secondary",
          city: "Kathmandu",
          country: "Nepal",
          area: "Chabahil",
          place: "Dhugedhara",
        },
      ],
      contacts: [
        { type: "primary", name: "Primary", number: "01526542522" },
        { type: "secondary", name: "Secondary", number: "9845623521" },
      ],
      paymentGateways: [
        { id: 0, name: "Esewa", icon: "/img/payments/esewa.png" },
        { id: 1, name: "Khalti", icon: "/img/payments/khalti.png" },
        { id: 1, name: "Imepay", icon: "/img/payments/imepay.png" },
      ],
    };
  },

  methods: {
    handleAddress(type) {
      this.selectedAddress = type;
    },
    handleContact(type) {
      this.selectedContact = type;
    },
    handlepayment(type) {
      this.selectedPayment = type;
    },

    handlePaymentGateway(index) {
      this.selectedPaymentGateway = index;
    },
  },
};
</script>

<style lang="scss" scoped></style>
