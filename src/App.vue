<template>
  <div id="app">
    <div class="container">
      <div>
        <b-nav tabs>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item-dropdown text="Authors" toggle-class="nav-link-custom">
            <b-dropdown-item :key="item.id" v-for="item in authors">{{item.author}}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Genres" toggle-class="nav-link-custom">
            <b-dropdown-item :key="item.id" v-for="item in genres">{{item.genre}}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>Another Link</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </div>
      <div class="col-12 pt-2">
        <router-view/>
        <!-- Todo: different blocks
        <AllBooks></AllBooks>
        <component :is="'AllBooks'"></component> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      view: 'AllBooks',
      authors: [],
      genres: []
    }
  },
  methods: {
    getAuthors: function () {
      // fetch('api/authors/', {method: "GET"})
      // fetch('http://rbs.loc/Server/app/api/authors/', {method: "GET"})
      fetch('http://192.168.0.15/~user6/rbs/Server/app/api/authors/', {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
          data.forEach(value => {
            this.authors.push(value);
          });
        })
    },
    getGenres: function () {
    // fetch('api/genres/', {method: "GET"})
    // fetch('http://rbs.loc/Server/app/api/genres/', {method: "GET"})
      fetch('http://192.168.0.15/~user6/rbs/Server/app/api/genres/', {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
          data.forEach(value => {
            this.genres.push(value);
          });
        })
    }
  },
  created: function(){
    this.getAuthors();
    this.getGenres();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
