<template>
  <section class="py-5">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="6">
          <div class="text-center">
            <section-title
              tagline="NEWSLETTER SUBSCRIPTION"
              title="Do not get left, get in touch with us by subscribing to our newsletter"
              description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
            />
          </div>
        </CCol>
      </CRow>
      <CRow class="justify-content-center">
        <CCol md="6">
          <div class="nwesletter-sub-form mt-4">
            <FormKit type="form" @submit="submitHandler" :actions="false">
              <CRow>
                <CCol md="12" lg="8" class="mb-lg-0 mb-4">
                  <FormKit
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    validation="required"
                    validation-visibility="submit"
                  />
                </CCol>
                <CCol md="12" lg="4">
                  <button
                    class="btn btn-primary text-white py-2 px-3 w-100"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </CCol>
              </CRow>
            </FormKit>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
export default {
  components: { SectionTitle },
  name: "NewsletterSub",
  methods: {
    submitHandler: function (values) {
      console.log(values);
    },
  },
};
</script>

<style lang="scss" scoped></style>
