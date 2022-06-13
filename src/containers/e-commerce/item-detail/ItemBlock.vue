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

            <div class="attributes-meta mt-4">
              <CRow>
                <CCol md="6">
                  <div>
                    <h6>Available Sizes</h6>
                    <div>
                      <span
                        v-for="(size, index) in item.sizes"
                        :class="
                          selectedAttributes.size === index
                            ? 'size-palatte size-palatte-selected  me-3 mb-2'
                            : 'size-palatte me-3 mb-2'
                        "
                        :key="size"
                        @click="() => sizeHandler(size, index)"
                        >{{ size }}
                      </span>
                    </div>
                  </div>
                </CCol>
                <CCol md="6">
                  <div>
                    <h6>Available Colors</h6>
                    <div>
                      <span
                        v-for="(color, index) in item.colors"
                        :key="color"
                        @click="() => colorHandler(color, index)"
                        :class="
                          selectedAttributes.color === index
                            ? 'color-palatte-holder color-palatte-selected me-3'
                            : 'color-palatte-holder me-3'
                        "
                      >
                        <span
                          class="color-palatte"
                          :style="{ background: color }"
                        ></span>
                      </span>
                    </div>
                  </div>
                </CCol>
              </CRow>

              <div class="item-qty mt-4">
                <div class="mb-3">
                  <h6>Quantity</h6>
                </div>
                <div class="d-flex">
                  <button class="qty-ctrlor" @click="descraseItemQty">
                    <minus-icon />
                  </button>
                  <span class="qty-display mx-3">{{ qty }}</span>
                  <button class="qty-ctrlor" @click="increaseItemQty">
                    <plus-icon />
                  </button>
                </div>
              </div>
              <div class="item-purchase-actions mt-4">
                <button class="item-cart me-3">Add To Cart</button>
                <button class="item-buynow me-3">Buy Now</button>
                <button class="item-wishlist">
                  <heart-icon />
                </button>
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

          <div class="nearest-showrooms my-5">
            <h6>Buy From you nearest Store</h6>

            <div class="mt-4">
              <swiper
                :breakpoints="breakpoints"
                :autoHeight="true"
                :slides-per-view="2.5"
                :space-between="20"
                :navigation="{
                  nextEl: '.showroomNextArrow',
                  prevEl: '.showroomPrevArrow',
                }"
              >
                <swiper-slide> <showroom-card-two /></swiper-slide>
                <swiper-slide> <showroom-card-two /></swiper-slide>
                <swiper-slide> <showroom-card-two /></swiper-slide>
                <swiper-slide> <showroom-card-two /></swiper-slide>
                <swiper-slide> <showroom-card-two /></swiper-slide>
              </swiper>
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

          <div class="give-review my-5">
            <h6>Your Review</h6>

            <div class="mb-3">
              <div class="d-flex flex-wrap">
                <span class="me-2"> Rate this item: </span>
                <star-rating
                  :rating="0"
                  :increment="0.5"
                  @update:rating="setRating"
                  :show-rating="false"
                  :read-only="false"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                  :star-size="15"
                ></star-rating>
              </div>
            </div>
            <FormKit type="form" @submit="submitHandler" :actions="false">
              <CRow>
                <CCol md="12" class="mb-4">
                  <FormKit
                    type="textarea"
                    name="review"
                    placeholder="Review"
                    validation="required"
                    validation-visibility="submit"
                  />
                </CCol>
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

          <div class="item-reviews">
            <h6>Reviews</h6>
            <div class="bg-light rounded p-3 mb-4">
              <div class="d-flex">
                <div class="author-img me-3">
                  <img src="/img/avatars/thumb-1.jpg" alt="" />
                </div>
                <div class="comment-meta">
                  <h6>Reviewer Name</h6>
                  <p>3/8/2022</p>
                  <p class="m-0">
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-light rounded p-3 mb-4">
              <div class="d-flex">
                <div class="author-img me-3">
                  <img src="/img/avatars/thumb-1.jpg" alt="" />
                </div>
                <div class="comment-meta">
                  <h6>Reviewer Name</h6>
                  <p>3/8/2022</p>
                  <p class="m-0">
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CCol>
    </CRow>
    <section>
      <horizontal-ad-block />
    </section>
  </CContainer>
</template>

<script>
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
  name: "ItemDetail",
  data() {
    return {
      selectedAttributes: {
        size: 0,
        color: 0,
      },
      item: {
        colors: ["#EC1B23", "#305DFC", "#958E8E", "#000000"],
        sizes: ["XXX", "XXL", "Xl", "MD", "SM"],
      },
      qty: 1,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
      },
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

    sizeHandler: function (size, index) {
      this.selectedAttributes = { ...this.selectedAttributes, size: index };
    },
    colorHandler: function (color, index) {
      this.selectedAttributes = { ...this.selectedAttributes, color: index };
    },
  },
};
</script>

<style lang="scss" scoped></style>
