<template>
  <div class="container">
    <v-row class="align-center">
      <v-col cols="5">
        <v-card outlined>
          <v-card-text class="pa-8">
            <ValidationObserver v-slot="{validated,invalid,passes}">
              <v-form :value="validated">

                <VTextFieldWithValidation
                  label="E-mail: "
                  v-model="user.email"
                  rules="required|email"
                  type="email"
                />

                <VTextFieldWithValidation
                  label="Password: "
                  v-model="user.password"
                  rules="required|min:3"
                  type="password"
                />

                <div class="text-right">
                  <v-btn
                    :loading="isLoading"
                    @click.prevent="passes(login)"
                    right
                    color="primary"
                  >Login
                  </v-btn>
                </div>
              </v-form>
            </ValidationObserver>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import {ValidationObserver} from "vee-validate";
  import VTextFieldWithValidation from "~/components/inputs/VTextFieldWithValidation";

  export default {
    name: "login",
    components: {
      VTextFieldWithValidation,
      ValidationObserver
    },
    data() {
      return {
        isLoading: false,
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async login() {
        this.loading = true
        await this.$store.dispatch('login', this.user)
        this.loading = false
      }
    },
  }
</script>

<style scoped>

</style>
