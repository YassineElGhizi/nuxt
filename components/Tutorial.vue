<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <h1>List Users</h1>
    <ul>

      <li v-for="user in users">
        <p>{{user.name}}</p>
        <ul v-for="role in user.roles">
          <li>{{role.name}}</li>
        </ul>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',

  async fetch(){
    await this.$store.dispatch('users/get_users_from_api')
  },
  computed : {
    users(){
      return this.$store.getters["users/getUsers"]
    }
  }

}
</script>
