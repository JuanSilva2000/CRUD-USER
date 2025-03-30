<script setup>
  import { ref, defineProps, defineEmits, reactive } from "vue";
  import { deleteUser, updateUser } from "../api/users";

  const props = defineProps({
    user: Object
  });

  const dataupdate = reactive({
        nombre: props.user.nombre,
        email: props.user.email,
        edad: props.user.edad
  });

  const dialog = ref(false);

  const emit = defineEmits(['usersModified'])

  const removeUser = async () => {
    await deleteUser(props.user.id);
    emit('usersModified')
  }

  const updateTheUser = async () => {
    if (dataupdate.edad === '') dataupdate.edad = 0;
    const result = await updateUser(props.user.id, dataupdate);
    alert(result.message);
    emit('usersModified')
    dialog.value = false;
  }

</script>

<template>
  <div class="wrapper-user-card">
    <h1>{{ user.nombre }}</h1>
    <img src="../img/user.png" />
    <h2>{{ user.email }}</h2>
    <h2>{{ user.edad }} años</h2>
    <span class="wrapper-user-buttons">
      <button class="btn-edit" @click="dialog = true">Editar</button>
      <button class="btn-delete" @click ="removeUser">Eliminar</button>
    </span>
  </div>

  <v-dialog v-model="dialog" width="auto">
    <form class="edit-modal-wrap" @submit.prevent="updateTheUser">
      <h1>EDITAR USUARIO</h1>
      <input type="text" placeholder="Nombre" class="input-modal" v-model="dataupdate.nombre" required/>
      <input type="text" placeholder="Correo" class="input-modal" v-model="dataupdate.email" required/>
      <input type="number" placeholder="Edad" class="input-modal" v-model="dataupdate.edad"/>
      <span class="wrapper-user-buttons">
        <button class="btn-edit" @click="dialog = false">Cancelar</button>
        <button class="btn-delete" type="submit">Editar Usuario</button>
      </span>
    </form>
  </v-dialog>
</template>


<style scoped>
    .wrapper-user-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #f8f9fa;
        opacity: 0.9;
        border-bottom: 1px solid #ccc;
        min-width: 240px;
        max-width: 250px;
        border-radius: 15px;
    }
    .wrapper-user-card h1 {
        font-size: 2rem;
        font-weight: 700;
    }
    .wrapper-user-card h2 {
        font-size: 1.5rem;
        color: #232222;
        font-weight: 500;
    }
    .wrapper-user-card img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        margin: 20px 0;
    }

    .wrapper-user-buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        width: 100%;
    }
    
    .btn-edit {
        padding: 10px 20px;
        background-color: white;
        color: #FF467E;
        border: 1px solid #FF467E;
        border-radius: 15px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        font-size: large;
    }

    .btn-edit:hover {
        color: #232222;
        border: 1px solid #232222;
    }

    .btn-delete {
        padding: 10px 20px;
        background-color: #FF467E;
        color: white;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        font-size: large;
    }

    .btn-delete:hover {
        background-color: #232222;
    }

    .edit-modal-wrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 15px;
    }

    .input-modal {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid #bcbcbc;
        border-radius: 15px;
        color: rgb(0, 0, 0);
        font-weight: 500;
        font-size: large;
        margin: 5px auto;
    }
</style>