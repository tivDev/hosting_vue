<template>
  <div class="container">
    <h1>API with Axios in Vue</h1>
    
    <h2>List of Users:</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
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
thead th{
  background: black;
  color: white;
}
</style>

