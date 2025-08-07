<script setup>
import CenterCard from "@/components/CenterCard.vue";
const userData = [
  { title: "Email", value: "example@email.com" },
  { title: "PressPlay 姓名", value: "李泰碧" },
  { title: "PressPlay 連絡電話", value: "0912345678" },
  { title: "TradingView ID", value: "BTC2140" },
  { title: "Telegram ID", value: "1164984125" },
];
</script>

<template>
  <CenterCard>
    <v-card-title>會員中心</v-card-title>
    <v-divider />
    <v-row no-gutters v-for="({ title, value }, i) in userData" :key="i">
      <v-col>
        <v-card-text>
          <span>{{ title }}</span>
        </v-card-text>
      </v-col>
      <v-col>
        <v-card-text>
          <span>{{ value }}</span>
        </v-card-text>
      </v-col>
    </v-row>
  </CenterCard>
</template>
