<template>
  <nav class="navbar navbar-expand-sm bg-primary navbar-light">
    <router-link class="navbar-brand" to="/">Vue</router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
        <router-link class="nav-link" to="/login">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
    setup() {
    },
}
</script>

