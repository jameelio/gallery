<template>
<div>
<h4>Login</h4>
<form @submit.prevent="login"><router-link to="/signUp">New user?</router-link>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="password" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
</div>
    
</template>

<script>
export default {
data(){
    return{
        email:"",
        password:""
    }
},methods:{
    login:function(){
        let email = this.email;
        let password = this.password;
        let signInUser = {email,password}

        this.$store.dispatch('login',signInUser)
        .then(()=>{this.$router.push('/home')})
        .catch(error=>{
          this.$swal('Error You Are Not Registered');
          this.$router.push('/signUp');
        });
    }

}
}
</script>

<style>

</style>
