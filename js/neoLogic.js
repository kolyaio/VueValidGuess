Vue.use(VueValidator);

var vm = new Vue({
  el:"#app",
    data: {
      message: "",
      counter: 0,
      MAX_RAND: 10,
      MIN_RAND: 0,
      showTable: false,
      randoms:[0,0,0],
      guesses:[0,0,0],
    },
    methods: {
      getRandomNumber: function(event) {
        return Math.floor((Math.random() * this.MAX_RAND)+this.MIN_RAND);
      },
      guess: function(event) {
        event.preventDefault();
        this.showTable = true;
        this.counter = 0;

        for(let index in this.randoms) {
            this.randoms.$set(index, this.getRandomNumber());
        }

        for(let index in [...Array(3)]) {
          // if(index == 0) {
          //   console.log('///////////////////////////////////////////////')
          // }
          if(this.randoms[index] == this.guesses[index]) {
            this.counter++;
          }
          // console.log("randoms: " + this.numbers.randoms[index].value)
          // console.log("gusses: " + this.numbers.guesses[index].value)
          // console.log("counter: " + _this.counter);
          // console.log('------------------------------------------------')
        }

        switch (this.counter) {
          case 3:
              this.message = "Well done you guessed all the numbers!! You lucky bastard!!";
            break;
          case 2:
            this.message = "Well done you guessed 2 numbers!! ";
            break;
          case 1:
              this.message = "You guessed one at least!";
              break;
          case 0:
          default:
              this.message = "You unlucky, You didn't guessed even one.";
              break;
        }
      },
      reset: function(evemt) {
        event.preventDefault();
        this.showTable = false;

        for(let index in this.randoms) {
            this.randoms.$set(index, 0);
        }

        for(let index in this.guesses) {
            this.guesses.$set(index, 0);
        }
        this.message = "";
        this.counter = 0;
      },
    }
});
