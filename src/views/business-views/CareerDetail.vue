<template>
  <app-layout>
    <section class="career-detail-page">
      <CContainer>
        <CRow class="justify-content-center">
          <CCol md="6">
            <div class="career-title my-4">
              <h1>Branch Manager (NP Candidates)</h1>
              <span>Maketing/Advertisement</span>
            </div>

            <div class="rich-text">
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
              <br />
              <br />
              <br />
              <h4>Job description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <blockquote>
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec,
              </blockquote>
              <p>
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede
              </p>
              <br />
              <h4>Must Have</h4>
              <ul>
                <li>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel
                </li>
                <li>Aenean massa. Cum sociis natoque</li>
                <li>Nullam dictum felis eu pede</li>
              </ul>
              <br />
              <h4>Nice-to-haves:</h4>
              <ul>
                <li>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel
                </li>
                <li>Aenean massa. Cum sociis natoque</li>
                <li>Nullam dictum felis eu pede</li>
              </ul>
              <br />
              <h4>Perks & benefits:</h4>
              <ul>
                <li>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel
                </li>
                <li>Aenean massa. Cum sociis natoque</li>
                <li>Nullam dictum felis eu pede</li>
              </ul>
            </div>
          </CCol>
          <CCol md="6" class="career-apply-area">
            <div class="mt-5 p-4">
              <div class="mb-4">
                <span>OPENING SOON</span>
              </div>
              <div>
                <h6>Code and position type</h6>
                <p>20k-30K Before Tax (Business Contract)</p>
              </div>
              <div class="career-apply-form mt-5">
                <FormKit type="form" @submit="submitHandler" :actions="false">
                  <div class="mb-4">
                    <FormKit
                      type="text"
                      name="full-name"
                      label="Full Name"
                      placeholder="Full Name"
                      validation="required"
                      validation-visibility="submit"
                    />
                  </div>
                  <div class="mb-4">
                    <FormKit
                      type="text"
                      name="email"
                      label="Email Address"
                      placeholder="Email Address"
                      validation="required"
                      validation-visibility="submit"
                    />
                  </div>
                  <div class="mb-4">
                    <button
                      class="d-flex align-items-center btn btn-secondary py-2 px-3 w-100 text-start"
                    >
                      <span class="me-3">
                        <upload-icon />
                      </span>
                      Upload CV
                    </button>
                  </div>
                  <div>
                    <button
                      class="btn btn-primary text-white py-2 px-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </FormKit>
              </div>
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
import UploadIcon from "@/assets/svg/UploadIcon.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
export default {
  components: { AppLayout, UploadIcon, NewsletterSub },
  name: "CareerDetail",

  methods: {
    submitHandler: function (values) {
      console.log(values);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
