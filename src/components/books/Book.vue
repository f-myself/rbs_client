<template>
    <div class="row">
        Hello
        {{$route.params.id}}
    </div>
</template>

<script>

export default {
    name: "Book",
    data: () => {
      return {
        bookInfo: [],
      }
    },
    methods: {
      getBookInfo() {
        // let url = "api/books/" + id;
        // let url = "http://192.168.0.15/~user6/rbs/Server/app/api/books/" + id;
        // let id = this.$route.params.id;
        let url = "http://rbs.loc/Server/app/api/books/" + this.$route.params.id;
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
        data.forEach(value => {
            this.bookInfo.push(value);
            });
        })
      }
    },
    created: function () {
      this.getBookInfo()
      // this.test();
    }
    
}
</script>