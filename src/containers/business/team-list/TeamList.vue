<template>
  <section class="py-5">
    <div class="mb-5">
      <CContainer>
        <CRow class="align-items-end">
          <CCol md="6">
            <CRow>
              <CCol xl="9" xxl="9">
                <section-title
                  tagline="Our Team"
                  description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol md="6" class="text-end">
            <router-link to="/career" class="btn btn-primary"
              >Join Our Team</router-link
            >
          </CCol>
        </CRow>
      </CContainer>
    </div>
    <CContainer>
      <CRow>
        <CCol
          xs="12"
          sm="6"
          md="3"
          v-for="teamMember in teamMembers"
          :key="teamMember.id"
        >
          <team-member :member="teamMember" />
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import TeamMember from "@/components/shared-components/team-member/TeamMember.vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";

export default {
  name: "TeamList",
  components: { TeamMember, SectionTitle },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          image: "/img/avatars/thumb-1.jpg",
          name: "Sajal Joshi",
          designation: "Co - Founder/ C.E.O",
        },
        {
          id: 2,
          image: "/img/avatars/thumb-2.jpg",
          name: "Arun Sharma Pokhrel",
          designation: "Operations Manager",
        },
        {
          id: 3,
          image: "/img/avatars/thumb-3.jpg",
          name: "Karna Lal Shrestha",
          designation: "Sales In-Charge",
        },
        {
          id: 4,
          image: "/img/avatars/thumb-4.jpg",
          name: "Rais Man Maharjan",
          designation: "Asst. Sales In-Charge",
        },
        {
          id: 5,
          image: "/img/avatars/thumb-2.jpg",
          name: "Arun Sharma Pokhrel",
          designation: "Operations Manager",
        },
        {
          id: 6,
          image: "/img/avatars/thumb-3.jpg",
          name: "Karna Lal Shrestha",
          designation: "Sales In-Charge",
        },
        {
          id: 7,
          image: "/img/avatars/thumb-1.jpg",
          name: "Sajal Joshi",
          designation: "Co - Founder/ C.E.O",
        },
        {
          id: 8,
          image: "/img/avatars/thumb-2.jpg",
          name: "Arun Sharma Pokhrel",
          designation: "Operations Manager",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
