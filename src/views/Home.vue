<script lang="ts" setup>
import {useRoute, useRouter} from "vue-router";

const bodyStyle = {
  height: '200px',
  // width: '100%',
  textAlign: 'center'
}

const bookList: {
  name: string,
  link: string,
  logo: string
}[] = [
  {
    name: 'Rust',
    link: '/rs',
    logo: '/rust-logo.svg',
  },
  {
    name: 'Golang',
    link: '/go',
    logo: '/go-logo.svg',
  },
  {
    name: 'C/C++',
    link: '/c',
    logo: '/go-logo.svg',
  },
  {
    name: 'Python',
    link: '/py',
    logo: '/go-logo.svg',
  },
  {
    name: 'Python',
    link: '/py',
    logo: '/go-logo.svg',
  },

]
const {push} = useRouter()

</script>

<template>
  <el-row justify="space-between">
    <el-col v-for="item in bookList" :span="4">
      <el-card class="card" :style="bodyStyle" shadow="hover" @click="push({path:item.link})">
        <el-space direction="vertical">
          <el-image class="logo-img" :src="item.logo"></el-image>
          <h3>{{ item.name }}</h3>
        </el-space>
      </el-card>
    </el-col>
  </el-row>
</template>


<style lang="less" scoped>
.logo-img {
  width: 100px;
  height: 100px;
}

.card:hover {
  cursor: pointer;
}
</style>