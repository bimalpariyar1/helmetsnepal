<template>
  <ecommerce-layout>
    <section class="item-listing bg-gray pb-5 mb-5">
      <CContainer>
        <CRow>
          <div class="mb-4 category-banner-img">
            <CCol md="12">
              <img src="/img/itemban.png" alt="" />
            </CCol>
          </div>
          <CCol md="4" lg="3">
            <CCard class="p-3 mb-4 item-filter">
              <div class="mb-3">
                <h6>Filters</h6>
              </div>
              <div class="mb-3">
                <v-select
                  :options="categories"
                  label="category"
                  placeholder="Category"
                  :searchable="false"
                  :clearable="false"
                >
                  <template #option="{ category }">
                    <span style="margin: 0">{{ category }}</span>
                  </template>
                </v-select>
              </div>

              <div class="mb-3">
                <v-select
                  :options="brands"
                  label="brand"
                  placeholder="Brand"
                  :searchable="false"
                  :clearable="false"
                >
                  <template #option="{ brand }">
                    <span style="margin: 0">{{ brand }}</span>
                  </template>
                </v-select>
              </div>
              <div class="mb-3">
                <v-select
                  :options="priceRange"
                  label="perPage"
                  placeholder="Price Range"
                  :searchable="false"
                  :clearable="false"
                >
                  <template #option="{ perPage }">
                    <span style="margin: 0">{{ perPage }}</span>
                  </template>
                </v-select>
              </div>
            </CCard>
            <CCard class="p-3 mb-4 item-filter">
              <div class="mb-3">
                <h6>Category Options</h6>
              </div>
              <CFormCheck
                v-for="option in filterOptions"
                :key="option.key"
                :id="option.key"
                :label="option.name"
              />
            </CCard>
            <div>
              <ad-vertical image="/img/advrt/advrt01.png" />
            </div>
          </CCol>
          <CCol md="8" lg="9">
            <CRow>
              <CCol lg="5" class="mb-lg-0 mb-2">
                <div>Items 1-35 of 61</div>
              </CCol>
              <CCol lg="7">
                <CRow>
                  <CCol lg="6" class="mb-lg-0 mb-2">
                    <v-select
                      :options="sortBy"
                      label="sort"
                      placeholder="Sort By"
                      :searchable="false"
                      :clearable="false"
                    >
                      <template #option="{ sort }">
                        <span style="margin: 0">{{ sort }}</span>
                      </template>
                    </v-select>
                  </CCol>
                  <CCol lg="6">
                    <v-select
                      :options="displayNumber"
                      label="perPage"
                      placeholder="Display Per Page"
                      :searchable="false"
                      :clearable="false"
                    >
                      <template #option="{ perPage }">
                        <span style="margin: 0">{{ perPage }}</span>
                      </template>
                    </v-select>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>

            <div class="mt-4">
              <CRow>
                <CCol
                  class="mb-4"
                  sm="6"
                  md="6"
                  lg="4"
                  v-for="item in itemsList"
                  :key="item.id"
                >
                  <item-card :item="item" />
                </CCol>
              </CRow>
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
import {
  categories,
  brands,
  filterOptions,
  sortBy,
  displayNumber,
  itemsList,
} from "@/assets/data/itemListing";
import EcommerceLayout from "@/layouts/EcommerceLayout.vue";
import AdVertical from "@/components/shared-components/ad-vertical/AdVertical.vue";
import vSelect from "vue-select";
import ItemCard from "@/components/shared-components/item-card/ItemCard.vue";
import ItemCarousel from "@/containers/e-commerce/item-carousel/ItemCarousel.vue";
export default {
  name: "ItemListing",
  components: { EcommerceLayout, vSelect, AdVertical, ItemCard, ItemCarousel },
  data() {
    return {
      categories,
      brands,
      filterOptions,
      sortBy,
      displayNumber,
      itemsList,
      priceRange: ["0-5000", "5000-10000", "10000-15000"],
    };
  },
  methods: {
    submitHandler: function (values) {
      console.log(values);
    },

    handleSelectChange: function (value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
