<template>
  <div>
    <div id="top_nav" class="flex justify-between items-center p-5">
      <p class="text-3xl">NEWS</p>
      <menu-icon class="md:hidden" @click="isActive = !isActive"></menu-icon>
      <ul class="sm:hidden md:flex justify-between items-center">
        <li class="mx-2">
          <router-link to="/">Home</router-link>
        </li>
        <li class="mx-2">
          <router-link to="/about">About</router-link>
        </li>
        <li class="mx-2">
          <div>
            <router-link to="/profile" v-if="status">Profile</router-link>
            <router-link to="/auth" v-else>Login/Register</router-link>
          </div>
        </li>
      </ul>
    </div>
    <div id="side_nav" :class="isActive" v-show="false">
      <!-- remeber to change v-show -->
      <x-icon @click="isActive = false"></x-icon>
    </div>
  </div>
</template>
<script>
import { MenuIcon, XIcon } from "vue-feather-icons";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: mapState(['status']),
  watch: {},
};
</script>