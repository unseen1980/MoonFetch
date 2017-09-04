const app = new Moon({
  el: "#app",
  data: {
    count: 0,
    condition: false,
    users: []
  },
  methods: {
    getPosts: function() {
      let self = this;
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => self.set("users", json))
        .catch((ex) => console.log("parsing failed", ex));
    }
  }
});

app.callMethod("getPosts");