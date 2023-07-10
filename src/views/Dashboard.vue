<script setup>
import { onMounted, reactive, ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const rutas = useRouter()
const usuarioDatos = ref(null)

//validamos que el usuario este logeado para ingresar al dashboard
onMounted(async () => {
    const auth = getAuth()
    const user = auth.currentUser
    const db = getFirestore()

    if(user){
        const docRef = doc(db, 'usuarios', user.uid)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            usuarioDatos.value = docSnap.data()
        } else {
            console.log('no existe')
        }
    } else {
        console.log('no hay usuario')
    }
})
</script>
<template>
    <el-row class="tac">
    <el-col :span="10">
        <el-col :span="10">
      <h5 class="mb-2">Custom colors</h5>
      <el-menu
        active-text-color="#ffd04b"
        background-color=" #1188c7"
        class="el-menu-vertical-demo"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Inicio</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Registros</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>Actividades</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Configuracion</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    </el-col>
  </el-row>
</template>