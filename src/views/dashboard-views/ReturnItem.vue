<template>
  <dashboard-layout>
    <CRow class="justify-content-center">
      <CCol md="4">
        <order-summary :order="orderDetail" />
      </CCol>
      <CCol md="8">
        <div class="mb-4">
          <heading title="Return Request" />
          <p>
            Your return request will valid olny if it meets our
            <router-link to="/return-policies">return policies</router-link>
            .
          </p>
        </div>
        <CCard class="p-4">
          <heading title="Item Info" />
          <div class="return-item mb-4 border-bottom pb-2 d-flex flex-wrap">
            <div class="me-3">2 &nbsp;&nbsp;&nbsp;&nbsp;X</div>
            <div class="item-info d-flex">
              <div class="me-3">
                <img src="/img/helmets/helmet01.png" alt="" />
              </div>
              <div>LS2 Stream Evo Tacho – Gloss White Black Red</div>
            </div>
            <div class="fw-bold">Rs. 4099.00</div>
          </div>

          <div class="reason-to">
            <FormKit type="form" @submit="submitHandler" :actions="false">
              <CRow>
                <CCol md="12" class="mb-4">
                  <div>
                    <h6>Reason to return</h6>
                    <p>Please explain in detail</p>
                  </div>
                  <FormKit
                    type="textarea"
                    name="reason"
                    placeholder="Reason"
                    validation="required"
                    validation-visibility="submit"
                  />
                </CCol>
                <div class="mb-4">
                  <FormKit type="checkbox" validation="required" />

                  <span
                    >I agree with
                    <router-link to="/general-page"
                      >terms and conditions</router-link
                    ></span
                  >
                </div>
              </CRow>
              <div class="">
                <button
                  class="btn btn-primary text-white py-2 px-3"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </FormKit>
          </div>
        </CCard>
      </CCol>
    </CRow>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import OrderSummary from "@/components/shared-components/order-summary/OrderSummary.vue";
export default {
  name: "ReturnItem",
  components: { DashboardLayout, Heading, OrderSummary },
  data() {
    return {
      orderDetail: {
        id: "#256JI22",
        amount: "Rs 6355.00",
        addressLineOne: "Kathmandu Nepal",
        addressLineTwo: "Baneshwor, Shantinagar",
        phone: "98454623252",
        orderStatus: 2,
        item: {
          id: "#58921",
          name: "LS2 Stream Evo Tacho – Gloss White Black Red",
          qty: 2,
          amount: "Rs. 4500",
          date: "27/03/2022",
          image: "/img/helmets/helmet01.png",
        },
      },
    };
  },
  methods: {
    submitHandler: function (values) {
      console.log(values);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
