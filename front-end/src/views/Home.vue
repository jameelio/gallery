<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Gallery"/>
    <div>View Gallery</div>
    <image-uploader
    :debug="1"
    :maxWidth="190"
    :quality="0.7"
    :autoRotate=true
    outputFormat="verbose"
    :preview=true
    :className="['fileinput', { 'fileinput--loaded' : hasImage }]"
    capture="environment"
    accept="video/*,image/*"
    doNotResize="['gif', 'svg']"
    @input="setImage"
    @onUpload="startImageResize"
    @onComplete="endImageResize"
  ></image-uploader>
    
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
  data(){
    return{
       hasImage: false,
       image: null
    }
 },
  methods:{
    uploadDone(files){
        if(files && Array.isArray(files)&& files.length){
          //must upload to server
        }
    },
    setImage(output){
      this.hasImage = true;
      this.image = output;

    }
  }
}
</script>
