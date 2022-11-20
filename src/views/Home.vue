<script lang="ts" setup>
import {useRoute, useRouter} from "vue-router";

const bodyStyle = {
  height: '200px',
  // width: '200px',
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
  // {
  //   name: 'C/C++',
  //   link: '/c',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
  // {
  //   name: 'Python',
  //   link: '/py',
  //   logo: '/go-logo.svg',
  // },
]
const {push} = useRouter()

</script>

<template>
  <el-row :gutter="20">
    <el-col class="col" v-for="item in bookList" :xs="24" :sm="8" :md="8" :lg="4" :xl="4">
      <el-card class="card" :style="bodyStyle" @click="push({path:item.link})">
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
  transform: scale(1.1);
}

.col{
  margin-bottom: 1em;
}
</style>