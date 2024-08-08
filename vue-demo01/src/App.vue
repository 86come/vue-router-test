<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>Named Views</h1>
  <ul>
    <li>
      <router-link to="/">First page</router-link>
    </li>
    <li>
      <router-link to="/other">Second page</router-link>
    </li>
  </ul>
  <router-view class="view left-sidebar" name="LeftSidebar" />
  <router-view class="view main-content" />
  <router-view class="view right-sidebar" name="RightSidebar" />
</template>
