<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Gallery"/>
    <div>View Gallery</div>
    <v-upload @done="uploadDone"></v-upload>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    uploadDone(files){
        if(files && Array.isArray(files)&& files.length){
          //must upload to server
        }
    }
  }
}
</script>
