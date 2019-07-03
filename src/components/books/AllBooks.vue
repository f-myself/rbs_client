<template>
    <div class="row text-center">
            <!-- <b-card
            :key="item.id"
            v-for="item in allBooks"
            title="{{item.title}}"
            img-src="/static/img/book.6b4e317.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4 col-4 mx-auto"
            style="max-width: 350px"
        >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card> -->
            <div class="card mb-4 ml-2 mr-2 col-4 mx-auto" style="max-width: 350px;" :key="item.id"
            v-for="item in allBooks">
                <img src="../../assets/book.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text">{{item.description}}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        
</div>
        <!-- <div v-if="allBooks.length">{{allBooks}}</div> -->
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
            // fetch('api/authors/', {method: "GET"})
            // fetch('http://rbs.loc/Server/app/api/authors/', {method: "GET"})
            fetch('http://192.168.0.15/~user6/rbs/Server/app/api/books/', {method: "GET"})
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