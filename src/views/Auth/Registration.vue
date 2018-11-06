<template>
  <div class="container">
    <h1 class="title">Registration</h1>
    <div class="form-component">
      <form ref="form" @submit="onSubmit" novalidate>
        <div class="form-item name">
          <input 
            type="text"
            name="name"
            autocomplete="off"
            v-model="form.name"
          >
          <label>Input name</label>          
        </div>
        <div class="form-item email">
          <input 
            type="email"
            name="email"
            v-model="form.email"
          >
          <label>Input Email</label>
        </div>
        <div class="form-item password">
          <input 
            type="password"
            name="password"    
            v-model="form.password"
          >
          <label>Input password (at least 6 chars)</label>          
        </div> 
        <div class="form-action">
          <button 
            type="submit"
            :disabled="loading"
            :class='{loading: loading}'
          >
          Register</button>  
        </div>                   
      </form>
    </div>    
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      isValidate: false
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      let target = e.target
      let emails = target.querySelector(".email")
      let pass = target.querySelector(".password")
      
      // check value input
      for (var key in this.form) {
        target.querySelector('.' + key).classList.remove("error")
        if(!this.form[key].length) {
          target.querySelector('.' + key).classList.add("error")
        }
      }
      // check email
      if (!this.validEmail(this.form.email)) {
        emails.classList.add("error")
      } else {
        emails.classList.remove("error")
      }
       // check password
      if (this.form.password.length < 6) {
        pass.classList.add("error")
      } else {
        pass.classList.remove("error")
      }

      if(target.querySelector('.error')) {
        this.isValidate = false
      } else {
        this.isValidate = true
        this.registerUser()
      }
    },
    validEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    registerUser() {
      const user = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password
      }
      this.$store.dispatch('registerUser', user)
      .then(()=> {
        alert('then not work')
       // this.$router.push('/')
      })
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
};
</script>
