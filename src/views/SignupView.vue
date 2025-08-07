<script setup>
import { ref } from "vue";
import { useZodForm } from "@/composables/useZodForm";
import { signupSchema } from "@/schemas/schemas";
import CenterCard from "@/components/CenterCard.vue";
import { useRouter } from "vue-router";

const { form, errors, validate, validateField } = useZodForm(signupSchema);
const showPwd = ref(false);
const showCpwd = ref(false);
const router = useRouter();

const handleSubmit = () => {
  if (validate()) {
    router.push("/login");
  }
};
</script>

<template>
  <CenterCard max-width="448px">
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="form.email"
              label="PressPlay Email"
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
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="form.confirm"
              :type="showCpwd ? 'text' : 'password'"
              label="確認密碼"
              :append-icon="showCpwd ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showCpwd = !showCpwd"
              :error="!!errors.confirm"
              :error-messages="errors.confirm"
              @input="validateField('confirm')"
              @blur="validateField('confirm')"
            />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="form.ppaName"
              label="PressPlay 會員姓名"
              append-icon="mdi-account"
              messages="#"
              :error="!!errors.ppaName"
              :error-messages="errors.ppaName"
              @input="validateField('ppaName')"
              @blur="validateField('ppaName')"
            >
              <template #message="{ message }">
                <div v-if="!errors.ppaName">
                  (打開 PressPlay APP > 帳號 > 個人資訊 > 複製姓名貼上)<br />(前往註冊：<a
                    class="tw:text-blue-500"
                    target="_blank"
                    href="https://www.pressplay.cc"
                    >https://www.pressplay.cc</a
                  >)
                </div>
                <div v-else>{{ message }}</div>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="form.phone"
              label="PressPlay 聯絡電話"
              append-icon="mdi-phone"
              messages="#"
              :error="!!errors.phone"
              :error-messages="errors.phone"
              @input="validateField('phone')"
              @blur="validateField('phone')"
            >
              <template #message="{ message }">
                <div v-if="!errors.phone">
                  (打開 PressPlay APP > 帳號 > 個人資訊 > 複製聯絡電話貼上)
                </div>
                <div v-else>{{ message }}</div>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="form.tvUsername"
              label="TradingView 用戶名"
              append-icon="mdi-account"
              messages="#"
              :error="!!errors.tvUsername"
              :error-messages="errors.tvUsername"
              @input="validateField('tvUsername')"
              @blur="validateField('tvUsername')"
            >
              <template #message="{ message }">
                <div v-if="!errors.tvUsername">
                  (打開 TradingView APP > 選單 > 複製用戶名稱貼上)<br />(前往註冊：<a
                    class="tw:text-blue-500"
                    target="_blank"
                    href="https://tw.tradingview.com"
                    >https://tw.tradingview.com</a
                  >)
                </div>
                <div v-else>{{ message }}</div>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="form.telegramId"
              label="Telegram ID"
              append-icon="mdi-account"
              messages="#"
              :error="!!errors.telegramId"
              :error-messages="errors.telegramId"
              @input="validateField('telegramId')"
              @blur="validateField('telegramId')"
            >
              <template #message="{ message }">
                <div v-if="!errors.telegramId">(加入 2140 Telegram Bot > 獲取 Telegram ID)</div>
                <div v-else>{{ message }}</div>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters class="tw:flex tw:justify-between">
          <v-col cols="5">
            <v-btn class="bg-green tw:mt-5! tw-w-full" block to="/login">前往登入</v-btn>
          </v-col>
          <v-col cols="5">
            <v-btn class="bg-green tw:mt-5! tw-w-full" block type="submit">註冊</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </CenterCard>
</template>
