<template>
  <app-layout>
    <section class="pt-5">
      <CContainer>
        <CRow class="justify-content-center">
          <CCol md="8">
            <div class="text-center">
              <div>
                <h1>Privacy Policies</h1>
              </div>
            </div>
          </CCol>
          <CCol md="6">
            <div class="rich-text mt-3">
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
              <img src="/img/bodyimg01.png" alt="" />
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
              <br />
              <blockquote>
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, Aenean massa. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec,
              </blockquote>
              <br />
              <p>
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede
              </p>
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
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </section>
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
export default {
  name: "GeneralPage",
  components: { AppLayout, NewsletterSub },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
