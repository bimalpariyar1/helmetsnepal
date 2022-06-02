<template>
  <CContainer>
    <div class="row justify-content-md-center">
      <CCol md="7" lg="5">
        <CRow>
          <CCol sm="6" md="6" class="mb-sm-0 mb-4">
            <CCard
              :class="
                selected === 'CUSTOMER'
                  ? 'cursor-pointer active-card'
                  : 'cursor-pointer'
              "
              @click="click('CUSTOMER')"
            >
              <div class="py-5 px-4 text-center">
                <div class="mb-4">
                  <customer-icon />
                </div>
                <div>
                  <p>I’m a customer, looking for shopping</p>
                </div>
              </div>
            </CCard>
          </CCol>
          <CCol sm="6" md="6">
            <CCard
              :class="
                selected === 'VENDOR'
                  ? 'cursor-pointer active-card'
                  : 'cursor-pointer'
              "
              @click="click('VENDOR')"
            >
              <div class="py-5 px-4 text-center">
                <div class="mb-4">
                  <vendor-icon />
                </div>
                <div>
                  <p>I’m a vendor, looking for business</p>
                </div>
              </div>
            </CCard>
          </CCol>

          <div class="text-center mt-4">
            <anchor-button
              :to="
                selected === 'CUSTOMER'
                  ? '/register/customer'
                  : '/register/vendor'
              "
              :text="buttonText"
              className="btn btn-primary text-white"
            />
            <div class="mt-4 py-3 border-top border-bottom">
              Already Have an Account?
              <router-link to="/login">Sign In!</router-link>
            </div>
          </div>
        </CRow>
      </CCol>
    </div>
  </CContainer>
</template>

<script>
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CDropdownDivider,
  CButton,
} from "@coreui/vue";
import GoogleIcon from "@/assets/svg/GoogleIcon.vue";
import FacebookIcon from "@/assets/svg/FacebookIcon.vue";
import AnchorButton from "@/components/shared-components/anchor-button/AnchorButton.vue";
import CustomerIcon from "@/assets/svg/CustomerIcon.vue";
import VendorIcon from "@/assets/svg/VendorIcon.vue";
export default {
  components: {
    CContainer,
    CRow,
    CCol,
    CCard,
    CDropdownDivider,
    CButton,
    GoogleIcon,
    FacebookIcon,
    AnchorButton,
    CustomerIcon,
    VendorIcon,
  },
  name: "Register",

  data() {
    return {
      buttonText: "Register as Customer",
      selected: "CUSTOMER",
    };
  },

  methods: {
    click: function (userType) {
      if (userType === "CUSTOMER") {
        this.buttonText = "Register as Customer";
        this.selected = userType;
      } else {
        this.buttonText = "Register as Vendor";
        this.selected = userType;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
