<template>
  <div class="nav-search">
    <div class="info-to-shop">
      Go to <router-link to="/shop">Shop</router-link> for advanced search
      <span style="margin: 0 2rem">|</span>
    </div>
    <div class="search-box border rounded d-flex align-items-center px-3">
      <SearchIconMuted />
      <input @input="handleSearch" type="text" placeholder="Search here..." />
      <span @click="handleShowSearch" class="cursor-pointer">
        <cross-icon />
      </span>
      <!-- Nav search list -->
      <div
        v-if="searchlist.length > 0"
        class="search-result border rounded p-3"
      >
        <div class="mb-3">
          <span>Your search result</span>
          <span class="mx-3">-</span>
          <span class="items-found">{{ searchlist.length }} items found</span>
        </div>
        <div class="result-list">
          <ul>
            <li v-for="item in searchlist" :key="item.id">
              <router-link class="py-2 px-2" :to="'/items/' + item.id"
                ><div class="d-flex search-list-item">
                  <div class="mr-3">
                    <img alt="" :src="item.image" />
                  </div>
                  <div class="flex-grow-1">
                    <div class="product-name">{{ item.name }}</div>
                    <span
                      v-if="item.oldPrice !== ''"
                      class="text-muted product-old-price mr-2"
                      >Rs. {{ item.oldPrice }}</span
                    >
                    <span class="text-muted product-new-price"
                      >Rs. {{ item.newPrice }}</span
                    >
                  </div>
                  <!-- <div class="tags">test</div> -->
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="goto-adv-search text-center mt-2">
          <router-link to="/shop">Go to Advanced Search</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIconMuted from "@/assets/svg/SearchIconMuted.vue";
import CrossIcon from "@/assets/svg/CrossIcon.vue";

import { searchListData } from "@/assets/data/searchList";
import Utils from "@/utils";

export default {
  name: "NavSearch",
  components: {
    SearchIconMuted,
    CrossIcon,
  },
  data() {
    return {
      searchlist: [],
      options: ["A", "B", "C"],
      value: "B",
    };
  },
  methods: {
    //To handle show/hide Nav search box
    handleShowSearch() {
      this.$emit("show-search", false);
    },

    // To handle search Result
    handleSearch(e) {
      if (e.target.value.length <= 0) {
        this.searchlist = [];
      } else {
        this.searchlist = Utils.wildCardSearch(searchListData, e.target.value);
      }
    },

    hideSearchBox() {
      this.searchlist = [];
    },
  },

  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.$emit("show-search", false);
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
