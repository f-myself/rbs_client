<template>
    <div class="row pt-4">
        <div class="col-6 mb-4">
          <img src="../../assets/book.jpg" class="img-fluid" style="max-height:400px" alt="">
        </div>
        <div class="col-6 mb-4">
          <div class="p-4">
            <h1>{{bookInfo[0].title}}</h1>
            <h5>
            </h5>
          </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Book",
    data: () => {
      return {
        bookInfo: [],
        loading: false
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