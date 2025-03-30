<script setup>
    import { reactive, ref, defineEmits  } from 'vue'
    import { createUser } from '../api/users'

    const dialog = ref(false)

    const dataForm=reactive({
        nombre: '',
        email: '',
        edad: null
    })

    defineProps(["search"]); 
    const emit = defineEmits(['userAdded', 'userSearch'])

    const createNewUser = async () => {
        if (dataForm.edad === null) dataForm.edad = 0
        const result = await createUser(dataForm)
        alert(result.message)

        emit('userAdded')

        dataForm.nombre = ''
        dataForm.email = ''
        dataForm.edad = null
        dialog.value = false
    }

</script>

<template>
    <div class="wrapper-header">
        <input 
            type="text" 
            placeholder="Digite un usuario" 
            class="input-search" 
            autofocus 
            :value="search"
            @input="emit('userSearch', $event.target.value)"
        />
        <span class="Wrapper-header-buttons">
            <!-- <button class="btn-search">Buscar</button> -->
            <button @click="dialog = true" class="btn-add">Agregar</button>
        </span>
    </div>

    <v-dialog v-model="dialog" width="auto">
        <form class="add-modal-wrap" @submit.prevent="createNewUser">
                <h2 class="title">AGREGAR USUARIO</h2>   
                <input type="text" placeholder="Nombre" class = "input-modal" nombre="nombre" v-model="dataForm.nombre" required/>
                <input type="text" placeholder="Correo" class = "input-modal" nombre="email" v-model="dataForm.email" required/>
                <input type="number" placeholder="Edad" class = "input-modal" nombre="edad" v-model="dataForm.edad"/>
                <div class="wrapper-modal-buttons">
                    <button class="btn-cancel" text @click="dialog = false">
                        Cancelar
                    </button>

                    <button class="btn-añadir" type="submit">
                        Agregar
                    </button>
                </div>
        </form>         
    </v-dialog>
</template>

<style scoped>
    .wrapper-header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #f8f9fa;
        opacity: 0.9;
        border-bottom: 1px solid #ccc;
        width: 70vw;
        border-radius: 15px;
    }
    
    .input-search {
        width: 50%;
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid #bcbcbc;
        border-radius: 15px;
        color: rgb(0, 0, 0);
        font-weight: 500;
        font-size: large;
    }

    .input-search:focus {
        outline: none;
    }

    .Wrapper-header-buttons {
        display: flex;
        gap: 10px;
        margin-left: 20px;
    }

    .btn-search {
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

    .btn-search:hover {
        color: #232222;
        border: 1px solid #232222;
    }
    
    .btn-add {
        padding: 10px 20px;
        background-color: #FF467E;
        color: white;
        border-radius: 15px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        font-size: large;
    }
    
    .btn-add:hover {
        background-color: #232222;   
    }

    .title{
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: center;
    }
    
    .add-modal-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 15px;
    }
    
    .wrapper-modal-buttons{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
        width: 100%;
    }
    
    .btn-cancel {
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
    .btn-cancel:hover {
        color: #232222;
        border: 1px solid #232222;
    }
    
    .btn-añadir {
        padding: 10px 20px;
        background-color: #FF467E;
        color: white;
        border-radius: 15px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        font-size: large;
    }
    .btn-añadir:hover {
        background-color: #232222;   
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
    
    @media screen and (max-width: 744px) {
        .wrapper-header {
            flex-wrap: wrap;   
        }
    
        .Wrapper-header-buttons {
            justify-content: center;
            margin-left: 0px;
        }
    
        .input-search {
            min-width: 240px;
            margin-bottom: 10px;
        }
    }
</style>