<template>
    <div class="row text-center">
            <div class="card mb-4 ml-2 mr-2 col-4 mx-auto" style="max-width: 350px;" :key="item.id"
            v-for="item in allBooks">
                <img src="./../../assets/book.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text">{{item.description}}</p>
                    <router-link :to="'/book/' + item.id" class="btn btn-primary">Go somewhere</router-link>
                </div>
            </div>
        </div>
        
</div>
    </div>
</template>

<script>
export default {
    name: "AllBooks",
    data: () => {
        return {
            allBooks: []
        }
    },
    methods: {
        getAllBooks: function() {
            fetch('api/books/', {method: "GET"})
            // fetch('http://rbs.loc/Server/app/api/books/', {method: "GET"})
            // fetch('http://192.168.0.15/~user6/rbs/Server/app/api/books/', {method: "GET"})
            .then((response) => response.json())
            .then((data) => {
            data.forEach(value => {
                this.allBooks.push(value);
                });
            })
        }
    },
    created: function(){
        this.getAllBooks()
    }
    
}
</script>