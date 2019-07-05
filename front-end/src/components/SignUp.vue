<template>
<div>
    <h4>Register</h4>
    <form @submit.prevent="register"><router-link to="/">Return to Login ?</router-link>
         <div class="form-group">
             <label for="name">Name</label>
             <input class="form-control" type="text" v-model="name" placeholder="Name">
         </div>
         <div class="form-group">
             <label for="email">Email address</label>
             <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
         </div>
         <div class="form-group">
             <label for="password">Password</label>
             <input type="password" class="form-control" v-model="password" placeholder="Password">
         </div>
         <button class="btn btn-primary btn-block" type="submit">Register</button>
    </form>
</div>
</template>

<script>
export default {
    data(){
        return{
            name:"",
            email:"",
            password:"",
            passwordConfirm:""
        }
    },methods:{
        register:function(){
            let newRegister = {
                name:this.name,
                email:this.email,
                password:this.password
            }

            this.$store.dispatch('register',newRegister)
            .then(()=>this.$router.push('/'))
            .catch(error => {
                //console.log(error)
                this.$swal("Error please ensure details are filled in correctly",{buttons:false,visible:true,dangerMode: true,});
            });
        }
    }

}
</script>

<style>

</style>
