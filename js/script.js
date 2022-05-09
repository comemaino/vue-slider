Vue.config.devtools = true;

const app = new Vue({
  el: "#root",
  data: {
    activeImage: 0,
    images: [
      {
        image: "img/01.jpg",
        title: "Svezia",
        text: "Ciao Svezia",
      },
      {
        image: "img/02.jpg",
        title: "Svizzera",
        text: "Ciao Svizzera",
      },
      {
        image: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Ciao UK",
      },
      {
        image: "img/04.jpg",
        title: "Germania",
        text: "Ciao Germania",
      },
      {
        image: "img/05.jpg",
        title: "Paradise",
        text: "Ciao Ciao Paradise",
      },
    ],
  },

  methods: {
    showPrev: function () {
      if (this.activeImage === 0) {
        this.activeImage = this.images.length - 1;
      } else {
        this.activeImage--;
      }
    },
    showNext: function () {
      if (this.activeImage >= this.images.length - 1) {
        this.activeImage = 0;
      } else {
        this.activeImage++;
      }
    },

    showImage: function (index) {
      this.activeImage = index;
    },
  },
});
