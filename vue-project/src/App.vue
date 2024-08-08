<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
      <!-- <strong>当前页面：</strong>{{ $route.path }}
      <nav>
        <RouterLink to="/users/eduardo/posts/1">/users/eduardo/posts/1</RouterLink>
        <RouterLink to="/users/eduardo/posts/20">/users/eduardo/posts/20</RouterLink>
      </nav> -->
      <p>
      <router-link to="/users/eduardo">/users/eduardo</router-link>
      <br />
      <router-link to="/users/eduardo/profile"
        >/users/eduardo/profile</router-link
      >
      <br />
      <router-link to="/users/eduardo/posts">/users/eduardo/posts</router-link>
      </p>
      <RouterLink :to="{name : 'order',params:{id:255}}">Order Page</RouterLink>
      <router-view></router-view>

  <!-- <RouterView /> -->
</template>

