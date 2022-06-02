<template>
  <CContainer>
    <CRow>
      <CCol md="6">
        <div class="image-swiper">
          <div class="item-main-img-holder">
            <swiper
              :breakpoints="swiperOptions"
              :autoHeight="true"
              :slides-per-view="1"
              :space-between="50"
              :navigation="{
                nextEl: '.prevImageNextArrow',
                prevEl: '.prevImagePrevArrow',
              }"
            >
              <swiper-slide>
                <div class="item-preview-img">
                  <img src="/img/preview/preview01.png" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item-preview-img">
                  <img src="/img/preview/preview02.png" alt="" />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="item-preview-img">
                  <img src="/img/preview/preview03.png" alt="" />
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <div class="text-center mt-4">
            <swiper-nav
              leftClassName="prevImagePrevArrow"
              RightClassName="prevImageNextArrow"
            />
          </div>
        </div>
      </CCol>
      <CCol md="6">
        <div class="item-detail-content">
          <div>
            <h1>LS2 Stream Evo Tacho – Gloss White Black Red</h1>
          </div>
          <div class="indicators">
            <CRow>
              <CCol md="4">
                <div class="category">
                  <div class="indi-text">Category</div>
                  <p>Full Helmets</p>
                </div>
              </CCol>
              <CCol md="4">
                <div class="brand">
                  <div class="indi-text">Brand</div>
                  <p>
                    <img src="/img/brands/brand04.png" alt="" />
                    Avg
                  </p>
                </div>
              </CCol>
              <CCol md="4">
                <div class="item-ratings">
                  <star-rating
                    :rating="2.5"
                    :increment="0.5"
                    @update:rating="setRating"
                    :show-rating="false"
                    :read-only="true"
                    :star-points="[
                      23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36,
                      34, 46, 19, 31, 17,
                    ]"
                    :star-size="15"
                  ></star-rating>

                  <div>
                    <p>Reviews (4)</p>
                  </div>
                </div>
              </CCol>
            </CRow>
          </div>
          <div class="py-4 mb-4 border-top border-bottom">
            <div>
              <div class="mb-2">
                <span class="item-price-old me-3"> ₨ 9,500.00 </span>
                <span class="item-price-new"> ₨ 8,500.00 </span>
              </div>
              <div class="stock-alerts">
                <span class="text-success">25 left in stock</span> - Order Soon.
              </div>
            </div>

            <div class="my-4">
              <CCard class="p-3">
                <CRow>
                  <CCol md="6">
                    <h6>Sizes</h6>
                    <v-select
                      :options="sizes"
                      label="size"
                      placeholder="placeholder"
                      :searchable="false"
                      :clearable="false"
                    >
                      <template #option="{ size }">
                        <span style="margin: 0">{{ size }}</span>
                      </template>
                    </v-select>
                  </CCol>
                  <CCol md="6">
                    <h6>Sizes</h6>
                    <v-select
                      :options="colors"
                      label="color"
                      placeholder="placeholder"
                      :searchable="false"
                      :clearable="false"
                    >
                      <template #option="{ color }">
                        <span
                          :style="{
                            width: '20px',
                            height: '20px',
                            display: 'inline-flex',
                            background: color,
                          }"
                        ></span
                        ><span>{{ color }}</span>
                      </template>
                    </v-select>
                  </CCol>
                  <CCol md="12" class="mt-4">
                    <div class="item-qty mt-4">
                      <div class="mb-3">
                        <h6>Quantity</h6>
                      </div>
                      <div class="d-flex">
                        <button class="qty-ctrlor">
                          <minus-icon />
                        </button>
                        <span class="qty-display mx-3">2</span>
                        <button class="qty-ctrlor">
                          <plus-icon />
                        </button>
                      </div>
                    </div>
                  </CCol>
                </CRow>
              </CCard>

              <div class="mt-4 text-end">
                <button class="btn btn-primary btn-sm">Add Variation</button>
              </div>
            </div>

            <div class="attributes-meta mt-4">
              <div class="item-purchase-actions mt-4">
                <button class="item-cart me-3">Add To Cart</button>
                <button class="item-buynow me-3">Buy Now</button>
              </div>
            </div>
          </div>

          <div class="about-item">
            <h6>About Item</h6>
            <div class="rich-text">
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pedeDonec quam felis, ultricies nec, pellentesque eu,
              </p>
              <h6>imperdiet a, venenatis vitae, justo. Nullam dictum</h6>
              <ul>
                <li>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel
                </li>
                <li>Aenean massa. Cum sociis natoque</li>
                <li>Nullam dictum felis eu pede</li>
              </ul>
            </div>
          </div>

          <div class="item-spec mt-5">
            <h6>Item Specifications</h6>

            <table class="table">
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>Brand Name</td>
                </tr>
                <tr>
                  <td>Item model number</td>
                  <td>X1526d25</td>
                </tr>
                <tr>
                  <td>Item Weight</td>
                  <td>0.5 KG</td>
                </tr>
                <tr>
                  <td>Manufacturer</td>
                  <td>Manufacturer Name</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import vSelect from "vue-select";
import StarRating from "vue-star-rating";
import { Swiper, SwiperSlide } from "swiper/vue";
import ShowroomCardTwo from "@/components/shared-components/showroom-card/ShowroomCardTwo.vue";
import MinusIcon from "@/assets/svg/MinusIcon.vue";
import PlusIcon from "@/assets/svg/PlusIcon.vue";
import SwiperNav from "@/components/shared-components/swiper-nav/SwiperNav.vue";
import HeartIcon from "@/assets/svg/HeartIcon.vue";
import HorizontalAdBlock from "@/containers/e-commerce/horizontal-ads-block/HorizontalAdBlock.vue";
export default {
  components: {
    vSelect,
    StarRating,
    Swiper,
    SwiperSlide,
    ShowroomCardTwo,
    MinusIcon,
    PlusIcon,
    SwiperNav,
    HeartIcon,
    HorizontalAdBlock,
  },
  name: "VendorItemBlock",
  data() {
    return {
      item: {
        colors: ["#EC1B23", "#305DFC", "#958E8E", "#000000"],
      },
      qty: 1,
      sizes: [
        {
          size: "XXXl",
        },
        {
          size: "XXL",
        },
        {
          size: "MD",
        },
        {
          size: "SM",
        },
      ],
      colors: [
        {
          color: "#EC1B23",
        },
        {
          color: "#305DFC",
        },
        {
          color: "#958E8E",
        },
        {
          color: "#000000",
        },
      ],
    };
  },
  methods: {
    setRating(rating) {
      console.log(rating);
    },
    submitHandler: function (values) {
      console.log(values);
    },

    descraseItemQty: function () {
      if (this.qty <= 1) return;

      this.qty = this.qty - 1;
    },

    increaseItemQty: function () {
      this.qty = this.qty + 1;
    },

    handleInput: function (value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
