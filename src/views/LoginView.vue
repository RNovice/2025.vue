<script setup>
import { ref } from "vue";
import { useZodForm } from "@/composables/useZodForm";
import { loginSchema } from "@/schemas/schemas";
import CenterCard from "@/components/CenterCard.vue";
import { login } from "@/services/auth";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const { form, errors, validate, validateField } = useZodForm(loginSchema);
const showPwd = ref(false);
const router = useRouter();
const route = useRoute();
const toast = useToast();

const handleSubmit = async () => {
  if (validate()) {
    const isSuccess = await login(form.email, form.password);
    if (isSuccess) {
      const redirect = route.query.redirect || "/profile";
      router.push(redirect);
      toast.success("Success\n登入成功");
    } else {
      toast.error("Error\n登入失敗, 請確認帳號及密碼");
    }
  }
};
</script>

<template>
  <CenterCard>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="form.email"
              label="Email"
              append-icon="mdi-email"
              :error="!!errors.email"
              :error-messages="errors.email"
              @input="validateField('email')"
              @blur="validateField('email')"
            />
          </v-col>
        </v-row>
        <v-row no-gutters
          ><v-col cols="12">
            <v-text-field
              v-model="form.password"
              :type="showPwd ? 'text' : 'password'"
              label="密碼"
              :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPwd = !showPwd"
              :error="!!errors.password"
              :error-messages="errors.password"
              @input="validateField('password')"
              @blur="validateField('password')"
            />
          </v-col>
        </v-row>
        <v-row no-gutters class="tw:flex tw:justify-between">
          <v-col cols="5">
            <v-btn class="bg-green tw:mt-5! tw-w-full" block to="/sign-up">前往註冊</v-btn>
          </v-col>
          <v-col cols="5">
            <v-btn class="bg-green tw:mt-5! tw-w-full" block type="submit">登入</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </CenterCard>
</template>
