<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
    </button>
   <a class="navbar-brand" href="#">My App</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link class="nav-link" to="/home">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item" v-if="isLoggedIn">
          <a @click="logout">Logout</a>
      </li>
    </ul>
  </div>
   </nav>
   <div class="container">
      <router-view/>
   </div>
  </div>
</template>


<script>
export default {
  computed:{
    isLoggedIn:function(){
      console.log(this.$store.getters.isLoggedIn);
      return this.$store.getters.isLoggedIn
    }

  },mounted(){
    const isUserLoggedIn = this.$store.getters.isLoggedIn;
    if(!isUserLoggedIn)this.$router.push('/');

  },
  methods:{
    logout:function(){
      this.$store.dispatch('logout').then(()=>{
        this.$router.push('/');

      }).catch(err=>{
        console.log("ERROR LOGIN",err);
      })
    }
  }

}
</script>

<style>

</style>
