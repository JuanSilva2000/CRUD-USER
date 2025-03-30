<script setup>
  import { ref, onMounted, watch } from "vue";
  import Header from "./components/Header.vue";
  import UserCard from "./components/UserCard.vue";
  import { getUsers, getUsersBySearch } from "../src/api/users";
  import EmptyUser from "./components/EmptyUser.vue";

  const users = ref([]);
  const searchTerm = ref("");

  const loadUsers = async () => {
    users.value = await getUsers();
  }

  onMounted(loadUsers);

  watch(searchTerm, async (newTerm) => {
    if (newTerm.length > 0) {
      let result = await getUsersBySearch(newTerm);
      users.value = [result];
    } else {
      users.value = await getUsers();
    }
  });
  
</script>

<template>
  <Header @userAdded="loadUsers" @userSearch="searchTerm = $event" :search="searchTerm"/>

  <div class="wrapper">
    <UserCard v-for="user in users" :key="user.id" :user="user" v-if="users.length > 0"  @usersModified="loadUsers"/>
    <EmptyUser v-if="users.length == 0"/>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px;
    gap: 22.5px;
    width: 68vw;
  }

</style>
