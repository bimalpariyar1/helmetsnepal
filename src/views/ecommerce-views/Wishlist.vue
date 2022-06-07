<template>
  <ecommerce-layout>
    <section class="bg-gray py-5 mb-5">
      <CContainer>
        <CRow>
          <CCol sm="12" lg="3">
            <CCard>
              <ul class="dashboard-side-nav">
                <li v-for="item in navItems" :key="item.id">
                  <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
              </ul>
            </CCard>

            <div class="my-4">
              <advertical-two />
            </div>
          </CCol>
          <CCol class="order-lg-last order-sm-first" sm="12" lg="9">
            <CCard class="p-4">
              <div class="mb-4">
                <heading
                  title="Wishlist"
                  description="There are 3 products in wishlist"
                />
              </div>

              <div
                v-for="item in wishlistData"
                :key="item.id"
                class="wishlist-pg-item border-bottom mb-3 pb-3"
              >
                <CRow>
                  <CCol md="5">
                    <div>
                      <div class="d-flex">
                        <div class="me-3 item-image">
                          <img :src="item.image" alt="" />
                        </div>
                        <div>
                          {{ item.name }}
                        </div>
                      </div>
                    </div>
                  </CCol>
                  <CCol md="7">
                    <div class="items-meta-actions">
                      <div class="items-meta pe-4">
                        <div>
                          {{ item.amount }}
                        </div>
                        <div>
                          {{ item.status }}
                        </div>
                      </div>

                      <div class="action-btns">
                        <button class="btn btn-text me-2">
                          <cart-icon />
                        </button>
                        <button class="btn btn-text">
                          <trash-icon />
                        </button>
                      </div>
                    </div>
                  </CCol>
                </CRow>
              </div>
              <!-- 
              <table class="table orders-listing">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in wishlistData" :key="item.id">
                    <th>{{ item.id }}</th>
                    <td>
                      <div class="d-flex" style="max-width: 200px">
                        <div class="me-3">
                          <img :src="item.image" alt="" />
                        </div>
                        <div>
                          {{ item.name }}
                        </div>
                      </div>
                    </td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.status }}</td>
                    <td>
                      <button class="btn btn-text">
                        <cart-icon />
                      </button>
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
              <span class="mx-4 d-none d-sm-none d-md-inline-flex">|</span>or
              Continue

              <span>
                <router-link to="/">Shopping</router-link>
              </span>
            </div>
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
import AdverticalTwo from "@/components/shared-components/ad-vertical/AdverticalTwo.vue";
import CartIcon from "@/assets/svg/CartIcon.vue";
import TrashIcon from "@/assets/svg/TrashIcon.vue";

import ItemCarousel from "@/containers/e-commerce/item-carousel/ItemCarousel.vue";
export default {
  name: "Wishlist",
  components: {
    EcommerceLayout,
    Heading,
    AdverticalTwo,
    CartIcon,
    TrashIcon,
    ItemCarousel,
  },
  data() {
    return {
      itemsList,
      navItems: [
        { id: 1, name: "Wishlist", path: "/wishlist" },
        { id: 2, name: "Cart", path: "/cart" },
        { id: 3, name: "Profile", path: "/dashboard/profile" },
        { id: 3, name: "My Orders", path: "/dashboard/my-orders" },
      ],
      wishlistData: [
        {
          id: "58921",
          name: "LS2 Stream Evo Black Red",
          qty: 2,
          amount: "Rs. 4500",
          status: "In Stock",
          image: "/img/helmets/helmet01.png",
        },
        {
          id: "56421",
          name: "LS2 Stream Black Red",
          qty: 2,
          amount: "Rs. 4500",
          status: "Selling Fast",
          image: "/img/helmets/helmet02.png",
        },
        {
          id: "50621",
          name: "Gloss White Black Red",
          qty: 2,
          amount: "Rs. 4500",
          status: "Out of Stock",
          image: "/img/helmets/helmet03.png",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
