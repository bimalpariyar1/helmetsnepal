<template>
  <app-layout>
    <section class="bg-gray py-5 mb-5">
      <CContainer>
        <CRow>
          <CCol md="12" lg="8" class="mb-lg-0 mb-4">
            <logged-in-checkout />
          </CCol>
          <CCol md="12" lg="4">
            <CCard class="p-4">
              <div class="mb-4">
                <heading title="Order Summary" />
              </div>

              <div>
                <h6>Shipping Method</h6>
                <p>
                  <van-icon />
                  Delivery
                </p>
              </div>

              <div class="order-items border-top border-bottom py-2 mb-4">
                <div class="d-flex justify-content-between text-muted mb-2">
                  <span>2 x Helmets</span>
                  <span>Rs 2000.00</span>
                </div>
                <div class="d-flex justify-content-between text-muted mb-2">
                  <span>2 x Globes</span>
                  <span>Rs 400.00</span>
                </div>
              </div>

              <div>
                <h5>Applied Coupon</h5>
                <p>#dfrfD458</p>
              </div>

              <div class="mb-4">
                <div class="d-flex justify-content-between mb-2">
                  <span>Sub Total</span>
                  <span>NRs. 54000</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Discount</span>
                  <span>54%</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>NRs. 50</span>
                </div>
              </div>

              <div class="cart-total border-top pt-3">
                <div class="d-flex mb-2 justify-content-between">
                  <span class="fw-bold"> Total </span>
                  <span class="fw-bold"> NRs. 54000 </span>
                </div>
              </div>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </section>
    <section class="mb-5">
      <item-carousel
        :items="itemsList"
        sectionTitle="Recommended Items"
        subTitle=" own it now, up to 6 months interest free!"
        prevEl="mayLikePrevArrow"
        nextEl="mayLikeNextArrow"
      />
    </section>
  </app-layout>
</template>

<script>
import { itemsList } from "@/assets/data/itemListing";
import AppLayout from "@/layouts/AppLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import VanIcon from "@/assets/svg/VanIcon.vue";
import LoggedInCheckout from "@/containers/e-commerce/loggedin-checkout/LoggedInCheckout.vue";
import NonLoggedIncCheckout from "@/containers/e-commerce/non-loggedin-checkout/NonLoggedIncCheckout.vue";
import ItemCarousel from "@/containers/e-commerce/item-carousel/ItemCarousel.vue";
export default {
  name: "Checkout",
  components: {
    AppLayout,
    Heading,
    VanIcon,
    LoggedInCheckout,
    NonLoggedIncCheckout,
    ItemCarousel,
  },
  data() {
    return {
      itemsList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
