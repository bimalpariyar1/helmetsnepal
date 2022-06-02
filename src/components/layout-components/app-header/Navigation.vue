<template>
  <div class="nav-item">
    <ul class="parent-nav-items">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/shop">Shop</router-link>
        <div class="nav-drop">
          <CCard style="width: 100%">
            <div class="nav-drop-content d-flex">
              <div class="category-list p-3">
                <div class="cat-items">
                  <div class="cat-items-list pb-2">
                    <h6>Helmets</h6>
                    <div class="meta">
                      <span>1200 Items</span>
                    </div>
                    <div class="border-top mt-2">
                      <ul>
                        <li>
                          <router-link to="/">Full Helmets</router-link>
                        </li>
                        <li>
                          <router-link to="/">Half Helmets</router-link>
                        </li>
                        <li>
                          <router-link to="/">Dirt Helmets</router-link>
                        </li>
                        <li>
                          <router-link to="/">Cycle Helmets</router-link>
                        </li>
                        <li>
                          <router-link to="/">Kid Helmets</router-link>
                        </li>
                        <li>
                          <router-link to="/">View All</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="category-list p-3">
                <div class="cat-items">
                  <div class="cat-items-list pb-2">
                    <h6>Apparel</h6>
                    <div class="meta">
                      <span>1200 Items</span>
                    </div>
                    <div class="border-top mt-2">
                      <ul>
                        <li>
                          <router-link to="/">Shoes</router-link>
                        </li>
                        <li>
                          <router-link to="/">Bandana</router-link>
                        </li>
                        <li>
                          <router-link to="/">Boot</router-link>
                        </li>
                        <li>
                          <router-link to="/">Jersey</router-link>
                        </li>
                        <li>
                          <router-link to="/">View All</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="category-list p-3">
                <div class="cat-items">
                  <div class="cat-items-list pb-2">
                    <h6>Accessories</h6>
                    <div class="meta">
                      <span>1200 Items</span>
                    </div>
                    <div class="border-top mt-2">
                      <ul>
                        <li>
                          <router-link to="/">Action Camera</router-link>
                        </li>
                        <li>
                          <router-link to="/">Clearner</router-link>
                        </li>
                        <li>
                          <router-link to="/">Goggles</router-link>
                        </li>
                        <li>
                          <router-link to="/">Keyrings</router-link>
                        </li>
                        <li>
                          <router-link to="/">Paddock Stand</router-link>
                        </li>
                        <li>
                          <router-link to="/">Visor</router-link>
                        </li>
                        <li>
                          <router-link to="/">View All</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="category-list p-3">
                <div class="cat-items">
                  <div class="cat-items-list pb-2">
                    <h6>Bags</h6>
                    <div class="meta">
                      <span>1200 Items</span>
                    </div>
                    <div class="border-top mt-2">
                      <ul>
                        <li>
                          <router-link to="/">Action Camera</router-link>
                        </li>
                        <li>
                          <router-link to="/">Clearner</router-link>
                        </li>
                        <li>
                          <router-link to="/">Goggles</router-link>
                        </li>
                        <li>
                          <router-link to="/">Keyrings</router-link>
                        </li>
                        <li>
                          <router-link to="/">Paddock Stand</router-link>
                        </li>
                        <li>
                          <router-link to="/">Visor</router-link>
                        </li>
                        <li>
                          <router-link to="/">View All</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="category-list p-3">
                <div class="cat-items">
                  <div class="cat-items-list pb-2">
                    <h6>Tyres</h6>
                    <div class="meta">
                      <span>1200 Items</span>
                    </div>
                    <div class="border-top mt-2">
                      <ul>
                        <li>
                          <router-link to="/">Action Camera</router-link>
                        </li>
                        <li>
                          <router-link to="/">Clearner</router-link>
                        </li>
                        <li>
                          <router-link to="/">Goggles</router-link>
                        </li>
                        <li>
                          <router-link to="/">Keyrings</router-link>
                        </li>
                        <li>
                          <router-link to="/">Paddock Stand</router-link>
                        </li>
                        <li>
                          <router-link to="/">Visor</router-link>
                        </li>
                        <li>
                          <router-link to="/">View All</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCard>
        </div>
      </li>
      <li>
        <router-link to="/blogs">Blogs</router-link>
      </li>
      <li>
        <router-link to="/contact-us">Contact Us</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped></style>
