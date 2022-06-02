<template>
  <ecommerce-layout>
    <section class="bg-gray py-5 mb-5">
      <CContainer>
        <CRow>
          <CCol md="12" lg="8">
            <CCard class="p-4">
              <heading
                title="Cart"
                description="There are 3 products in  cart."
              />

              <div class="cart-list-items">
                <div
                  class="cart-pg-item border-bottom pb-3 mb-3"
                  v-for="item in cartItems"
                  :key="item.id"
                >
                  <div class="item-left pe-4">
                    <CRow>
                      <CCol md="6" lg="6">
                        <div class="item-info d-flex">
                          <div class="item-image me-3">
                            <img :src="item.image" alt="" />
                          </div>
                          <div class="item-name">
                            {{ item.name }}

                            <div class="mt-2 mb-xl-0 mb-lg-3">
                              {{ item.qty }}x{{ item.amount }}
                            </div>
                          </div>
                        </div>
                      </CCol>
                      <CCol md="6" lg="12" xl="6">
                        <div class="item-meta">
                          <div class="d-flex align-items-center">
                            <div class="qty-controller">
                              <button>
                                <minus-icon />
                              </button>
                              <span class="item-qty">{{ item.qty }}</span>
                              <button>
                                <plus-icon />
                              </button>
                            </div>
                            <div class="item-amount">
                              {{ item.qty * item.amount }}
                            </div>
                          </div>

                          <div class="item-action">
                            <button>
                              <trash-icon />
                            </button>
                          </div>
                        </div>
                      </CCol>
                    </CRow>
                  </div>
                </div>
              </div>

              <!-- <table class="table orders-listing">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartItems" :key="item.id">
                    <td>
                      <div class="d-flex" style="max-width: 250px">
                        <div class="me-3">
                          <img :src="item.image" alt="" />
                        </div>
                        <div>
                          {{ item.name }}
                        </div>
                      </div>
                    </td>
                    <td>{{ item.amount }}</td>
                    <td>
                      <input
                        class="cart-qty"
                        type="number"
                        v-model="item.qty"
                      />
                    </td>
                    <td>{{ item.qty * item.amount }}</td>
                    <td>
                      <button class="btn btn-text">
                        <trash-icon />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table> -->
            </CCard>
            <div class="my-4">
              <span class="w-sm-100 mb-3">
                <button class="btn btn-primary">Checkout</button>
              </span>
              <span class="mx-4 d-none d-sm-none d-md-inline-flex">|</span
              >Continue

              <span>
                <router-link to="/">Shopping</router-link> or Clear Cart
              </span>
            </div>
          </CCol>
          <CCol md="12" lg="4">
            <CCard class="p-4">
              <div class="cart-checkout">
                <div class="mb-4">
                  <heading title="Order Summary" />
                </div>

                <div class="methods-delivery border-bottom pb-4 mb-4">
                  <h6>Shipping Method</h6>

                  <div>
                    <label>
                      <input type="checkbox" />
                      Delivery
                    </label>
                  </div>

                  <div>
                    <label>
                      <input type="checkbox" />
                      Pick up
                    </label>
                  </div>
                </div>

                <div class="discount-code">
                  <h5>Apply Discount Code</h5>

                  <div class="code-apply">
                    <label for="">Enter discount code</label>
                    <input type="text" placeholder="Code here..." />
                  </div>

                  <button class="mt-3 btn-apply-coupon">APPLY DISCOUNT</button>
                </div>

                <div class="my-3">
                  <div class="d-flex mb-2 justify-content-between">
                    <span class="fw-bold"> Sub Total </span>
                    <span class="fw-bold"> NRs. 54000 </span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span class="fw-bold"> Shipping </span>
                    <span class="fw-bold"> NRs. 50 </span>
                  </div>
                </div>

                <div class="cart-total border-top py-3">
                  <div class="d-flex mb-2 justify-content-between">
                    <span class="fw-bold"> Sub Total </span>
                    <span class="fw-bold"> NRs. 54000 </span>
                  </div>
                </div>
                <div>
                  <button class="btn btn-primary w-100">
                    PROCEED TO CHECKOUT
                  </button>
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
  </ecommerce-layout>
</template>

<script>
import { itemsList } from "@/assets/data/itemListing";
import EcommerceLayout from "@/layouts/EcommerceLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import TrashIcon from "@/assets/svg/TrashIcon.vue";

import ItemCarousel from "@/containers/e-commerce/item-carousel/ItemCarousel.vue";
import MinusIcon from "@/assets/svg/MinusIcon.vue";
import PlusIcon from "@/assets/svg/PlusIcon.vue";
export default {
  name: "Cart",
  components: {
    EcommerceLayout,
    Heading,
    TrashIcon,
    ItemCarousel,
    MinusIcon,
    PlusIcon,
  },
  data() {
    return {
      itemsList,
      cartItems: [
        {
          id: "58921",
          name: "LS2 Stream Evo Tacho – Gloss White Black Red",
          qty: 2,
          amount: 4500,
          date: "27/03/2022",
          image: "/img/helmets/helmet01.png",
        },
        {
          id: "56421",
          name: "LS2 Stream Black Red",
          qty: 2,
          amount: 4500,
          date: "27/03/2022",
          image: "/img/helmets/helmet02.png",
        },
        {
          id: "50621",
          name: "Gloss White Black Red",
          qty: 3,
          amount: 4500,
          date: "27/03/2022",
          image: "/img/helmets/helmet03.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
