<template>
  <div id="login">
    <div class="w-full max-w-xl mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4" v-show="signUp">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="fullName">Full Name:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
            v-model.lazy.trim="user.fullName"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            v-model.lazy.trim="user.email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="****"
            v-model.lazy="user.password"
          />
        </div>
        <div class="mb-6" v-show="signUp">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Confirm Password:</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="****"
            v-model.lazy="user.confirmPassword"
          />
        </div>
        <button
          class="bg-black p-2 text-white w-full rounded"
          @click.prevent="auth"
          v-if="!signUp"
        >Login</button>
        <button class="bg-black p-2 text-white w-full rounded" @click.prevent="auth" v-else>Sign Up</button>
      </form>
      <p class="text-center text-gray-700 text-xs" v-if="!signUp">
        Don't have an account?
        <span class="text-black cursor-pointer hover:underline" @click="signUp = true">Sign Up</span>
      </p>
      <p class="text-center text-gray-700 text-xs" v-else>
        Already have an account?
        <span class="text-black cursor-pointer hover:underline" @click="signUp = false">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      signUp: false,
    };
  },
  methods: {
    auth() {
      if (!this.signUp) {
        // Login
        console.log("login");
      } else {
        // Sign Up
        console.log("sign up");
      }
    },
  },
};
</script>