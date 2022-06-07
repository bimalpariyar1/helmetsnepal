<template>
  <section class="pt-5">
    <CContainer>
      <CRow>
        <CCol md="6">
          <div class="mb-5">
            <h6>Please leave us a message</h6>
            <p>One of our team member will get in touch with you soon</p>
          </div>

          <div class="form">
            <FormKit type="form" @submit="submitHandler" :actions="false">
              <CRow>
                <CCol md="6" class="mb-4">
                  <FormKit
                    type="text"
                    name="fname"
                    label="First Name"
                    placeholder="First Name"
                    validation="required"
                    validation-visibility="submit"
                  />
                </CCol>
                <CCol md="6" class="mb-4">
                  <FormKit
                    type="text"
                    name="lname"
                    label="Last Name"
                    placeholder="Last Name"
                    validation="required"
                    validation-visibility="submit"
                  />
                </CCol>
                <CCol md="6" class="mb-4">
                  <FormKit
                    type="text"
                    name="email"
                    label="Email Address"
                    placeholder="Email Address"
                    validation="required"
                    validation-visibility="submit"
                  />
                </CCol>
                <CCol md="6" class="mb-4">
                  <FormKit
                    type="text"
                    name="phone-number"
                    label="Phone Number"
                    placeholder="Phone Number"
                    validation="required"
                    validation-visibility="submit"
                  />
                </CCol>
                <CCol md="12" class="mb-4">
                  <FormKit
                    type="textarea"
                    name="message"
                    label="Message"
                    placeholder="Message"
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
                  Send Message
                </button>
              </div>
            </FormKit>
          </div>
        </CCol>
        <CCol md="6">
          <div class="contact-info mb-4">
            <h4>Head Office</h4>
            <div>Address: Teku, Kathmandu, Nepal</div>
            <div>Phone: (123) 456-789</div>
            <div>Email: info@helmentsnepal.com</div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5941.769831549764!2d85.31482169351003!3d27.686472775244557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20map!5e0!3m2!1sen!2snp!4v1648825145720!5m2!1sen!2snp"
                height="350"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </CCol>
      </CRow>
      <section class="mt-5">
        <CRow>
          <CCol md="4">
            <div class="contact-info mb-4">
              <h4>Naxal Office</h4>
              <div>Address: Teku, Kathmandu, Nepal</div>
              <div>Email: info@helmentsnepal.com</div>
              <div class="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5941.769831549764!2d85.31482169351003!3d27.686472775244557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20map!5e0!3m2!1sen!2snp!4v1648825145720!5m2!1sen!2snp"
                  height="250"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </CCol>
          <CCol md="4">
            <div class="contact-info">
              <h4>Maitighar Office</h4>
              <div>Address: Teku, Kathmandu, Nepal</div>
              <div>Email: info@helmentsnepal.com</div>
              <div class="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5941.769831549764!2d85.31482169351003!3d27.686472775244557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20map!5e0!3m2!1sen!2snp!4v1648825145720!5m2!1sen!2snp"
                  height="250"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </CCol>
          <CCol md="4">
            <div class="contact-info mb-4">
              <h4>Get In touuch</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae
                velit congue iaculis vitae at risus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </CCol>
        </CRow>
      </section>
    </CContainer>
  </section>
</template>

<script>
export default {
  name: "ContactArea",
  methods: {
    submitHandler: function (values) {
      console.log(values);
    },
  },
};
</script>

<style lang="scss" scoped></style>
