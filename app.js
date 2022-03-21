const app = Vue.createApp({

  // template:'<h1>{{message}} </h1>',
  data() {
    return {
      firstName: 'Rémi',
      lastName: 'Durand',
      email: 'rémi@live.fr',
      gender: 'male',
      picture: 'https://randomuser.me/portraits/men/10.jpg'
    }
  },

  methods: {

    async getUser() {//notre api
      const res= await fetch ('https://randomuser.me/api')
      const {results}=await res.json()
      // console.log(this.firstName)
      console.log(results)

      this.firstName=results[0].name.title,
        this.lastName= results[0].name.last,
          this.email= results[0].email,
            this.gender= results[0].gender,
             this.picture= results[0].picture.large

    },
  },
}).mount('#app')