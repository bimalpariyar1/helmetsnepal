<template>
  <div>
    <CContainer>
      <CCard class="p-3">
        <div class="mb-4">
          <div class="flex-grow-1">
            <item-group-title
              title="Advanced Search"
              subTitle="Filter in depth to get more out of it"
            />
          </div>
        </div>

        <div class="advanced-search">
          <div class="input-holder">
            <input type="text" placeholder="Keyword" />
          </div>
          <div class="input-holder">
            <v-select
              :options="categories"
              label="perPage"
              placeholder="Category"
              :searchable="false"
              :clearable="false"
            >
              <template #option="{ perPage }">
                <span style="margin: 0">{{ perPage }}</span>
              </template>
            </v-select>
          </div>
          <div class="input-holder">
            <v-select
              :options="subCategories"
              label="perPage"
              placeholder="Sub Category"
              :searchable="false"
              :clearable="false"
            >
              <template #option="{ perPage }">
                <span style="margin: 0">{{ perPage }}</span>
              </template>
            </v-select>
          </div>
          <div class="input-holder">
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
          <div class="input-holder">
            <button class="btn btn-primary">Search</button>
          </div>
        </div>
      </CCard>
    </CContainer>
  </div>
</template>

<script>
import ItemGroupTitle from "@/components/shared-components/item-group-title/ItemGroupTitle.vue";
import vSelect from "vue-select";
export default {
  components: { vSelect, ItemGroupTitle },
  name: "AdvancedSearch",
  data() {
    return {
      categories: ["Helmets", "Accessories", "Tyres"],
      subCategories: ["AVG", "Steel Bird", "Toxin"],
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
