<script setup lang="ts">
import { logout } from "@/services/auth";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

function handleLogout() {
  logout();
  router.push("/login");
}
</script>

<template>
  <v-app-bar>
    <div class="tw:flex">
      <span class="tw:ml-3!">2025 Vue Demo</span>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon href="/profile" active v-if="route.path === '/profile'" @click.prevent>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon @click="handleLogout" v-if="route.path === '/profile'">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>
