<template>
  <div>
    <h1>API with Axios in Vue</h1>
    <h2>List of Users:</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await this.$axios.get('/users'); // Notice we just use the relative URL
        this.users = response.data;
      } catch (error) {
        console.error("There was an error fetching the users:", error);
        this.users = []; // Optionally set an empty array if there's an error
      }
    }
  },
  mounted() {
    this.fetchUsers(); // Call the fetchUsers method when the component is mounted
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
