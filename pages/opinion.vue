<template>
  <div class="opinion-container">
    <div class="head">
      <h1 class="head_text text-center">Opinion.</h1>
      <p class="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    <div class="form-box">
      <h1 class="form-title">Your Opinion Matters</h1>
      <div class="form">
        <v-form ref="opinionForm" v-model="valid" class="sign-up-form">
          <v-text-field v-model="name" append-outer-icon="mdi-account-circle" :rules="nameRules" label="Name" required />

          <v-text-field v-model="email" append-outer-icon="mdi-email" :rules="emailRules" label="E-mail" required />

          <v-text-field v-model="idea" append-outer-icon="mdi-lightbulb-on" :rules="ideaRules" label="Your Idea" required />

          <v-textarea
            auto-grow
            counter
            rows="7"
            v-model="detail"
            append-icon="mdi-clipboard-text"
            :rules="detailRules"
            label="Brief Us More"
            required
            class="my-1"
          ></v-textarea>

          <v-btn tile light block class="my-btn submit-idea" @click="submitOpinion"> Sign Up </v-btn>
        </v-form>
      </div>
      <div class="form-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
      </div>
    </div>
    <div class="footer">
      <MyFooter />
    </div>
  </div>
</template>

<script>
import MyFooter from '~/components/MyFooter'
export default {
  components: {
    MyFooter,
  },
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [(v) => !!v || 'Name is required', (v) => (v && v.length <= 20) || 'Name must be less than 15 characters'],
      email: '',
      emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      idea: '',
      ideaRules: [(v) => !!v || 'Idea is must', (v) => (v && v.length <= 40) || 'Just give a Short Title'],
      detail: '',
      detailRules: [(v) => !!v || 'Please Tell us More', (v) => (v && v.length >= 100 && v.length <= 3000) || 'Tell us more detailed'],
    }
  },
  methods: {
    submitOpinion() {
      this.$refs.opinionForm.validate()
      if (this.valid) {
        console.log(this.name, this.idea)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.opinion-container {
  padding: 0 3rem;
}
.head {
  margin: 5rem 0 7.5rem;
  h1 {
    margin-bottom: 2rem;
  }
  .desc {
    font-size: 2rem;
    text-align: center;
  }
}
.form-box {
  max-width: 1000px;
  width: min(90vw, 800px);
  margin: 5rem auto;
  background-color: #232323;
  border-radius: 30px;
  box-shadow: 0 0 50px #000;
  padding: 5% 10%;
  @media (max-width: 600px) {
    padding: 5% 4%;
    border-radius: 5px;
  }
  text-align: center;
  .form-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  .form {
    .submit-idea {
      margin-top: 3rem;
    }
  }
  .form-bottom {
    font-size: 2rem;
    margin: 4rem auto 2rem;
  }
}
.footer {
  margin: 15rem auto 0;
}
</style>
