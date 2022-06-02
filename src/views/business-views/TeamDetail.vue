<template>
  <app-layout>
    <page-banner-two>
      <div class="col-md-7">
        <banner-title
          tagline="KNOW IN DETAIL"
          title="More info about our member"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        />
      </div>
    </page-banner-two>
    <section class="py-5">
      <CContainer>
        <CRow>
          <CCol md="4">
            <div class="team-thumb">
              <img src="/img/team/team01.png" alt="" />
            </div>
          </CCol>
          <CCol md="8">
            <div>
              <h4>Sajal Joshi</h4>
              <p>Co - Founder/ C.E.O</p>
            </div>
            <div class="rich-text">
              <p>
                <i>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus.
                </i>
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <p>
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede
              </p>
              <br /><br />

              <blockquote>
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, Aenean massa. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec,
              </blockquote>
              <br /><br />
              <h4>pellentesque eu, pretium quis, sem</h4>
              <ul>
                <li>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel
                </li>
                <li>Aenean massa. Cum sociis natoque</li>
                <li>Nullam dictum felis eu pede</li>
              </ul>
              <br />
              <h4>pellentesque eu, pretium quis, sem</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <p>
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede
              </p>
              <br />
              <h4>pellentesque eu, pretium quis, sem</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <p>
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede
              </p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </section>

    <career-linkbanner />
    <core-values />
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
import CoreValues from "@/containers/business/core-values/CoreValues.vue";
import CareerLinkbanner from "@/containers/business/career-link-banner/CareerLinkbanner.vue";
import PageBannerTwo from "@/components/shared-components/page-banner/PageBannerTwo.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
export default {
  components: {
    AppLayout,
    NewsletterSub,
    CoreValues,
    CareerLinkbanner,
    PageBannerTwo,
    BannerTitle,
  },
  name: "TeamDetail",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
