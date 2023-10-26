<template>
  <div>
    <div class="init">
      <v-btn @click="shuffleTest"> Mélanger </v-btn>
      <p class="ordre">Ordre : {{ shuffledColors }} | {{ shuffledValues }}</p>
    </div>

    <div class="cards">
      <h2 class="title">Cartes mélangées</h2>
      <div class="hello">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :color="card[0]"
          :value="card[1]"
          class="card-item"
        />
      </div>
    </div>
    <div class="cards">
      <h2 class="title">Cartes triées</h2>
      <div class="hello">
        <Card
          v-for="(card, index) in sortedCards"
          :key="index"
          :color="card[0]"
          :value="card[1]"
          class="card-item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "HelloWorld",
  components: {
    Card,
  },
  data() {
    return {
      shuffledColors: [],
      shuffledValues: [],
      cards: [],
      sortedCards: [],
      orderColors: ["Carreaux", "Coeur", "Pique", "Trèfle"],
      orderValues: [
        "As",
        "5",
        "10",
        "8",
        "6",
        "7",
        "4",
        "2",
        "3",
        "9",
        "Dame",
        "Roi",
        "Valet",
      ],
    };
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
    createCard() {
      this.cards = [];
      while (this.cards.length < 10) {
        let randomColor = Math.floor(Math.random() * 4);
        let randomValue = Math.floor(Math.random() * 12);

        const card = [
          this.orderColors[randomColor],
          this.orderValues[randomValue],
        ];

        const isDuplicate = this.cards.some((existingCard) => {
          return existingCard[0] === card[0] && existingCard[1] === card[1];
        });

        if (!isDuplicate) {
          this.cards.push(card);
        } else {
          console.log("Doublon !");
        }
      }
    },
    sortCards() {
      this.sortedCards = [];

      let spadeArray = [];
      let diamondArray = [];
      let heartArray = [];
      let clubArray = [];

      this.cards.forEach((el) => {
        switch (el[0]) {
          case "Coeur":
            heartArray.push(el);
            break;

          case "Carreaux":
            diamondArray.push(el);
            break;

          case "Pique":
            spadeArray.push(el);
            break;

          case "Trèfle":
            clubArray.push(el);
            break;

          default:
            break;
        }
      });

      const compareFunction = (a, b) => {
        const valueIndexA = this.shuffledValues.indexOf(a[1]);
        const valueIndexB = this.shuffledValues.indexOf(b[1]);
        return valueIndexA - valueIndexB;
      };

      clubArray.sort(compareFunction);
      heartArray.sort(compareFunction);
      diamondArray.sort(compareFunction);
      spadeArray.sort(compareFunction);

      this.shuffledColors.forEach((el) => {
        switch (el) {
          case "Coeur":
            heartArray.forEach((card) => {
              this.sortedCards.push(card);
            });
            break;

          case "Carreaux":
            diamondArray.forEach((card) => {
              this.sortedCards.push(card);
            });
            break;

          case "Pique":
            spadeArray.forEach((card) => {
              this.sortedCards.push(card);
            });
            break;

          case "Trèfle":
            clubArray.forEach((card) => {
              this.sortedCards.push(card);
            });
            break;
        }
      });
    },
    shuffleTest() {
      this.createCard();
      this.shuffledColors = this.shuffle(this.orderColors);
      this.shuffledValues = this.shuffle(this.orderValues);

      this.sortCards();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cards {
  margin-left: 100px;
  margin-right: 50px;
  margin-top: 40px;
  padding-bottom: 50px;
}
.hello {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.card-item {
  margin-left: -50px;
}

.init {
  .ordre {
    margin-top: 20px;
  }
}

.title {
  margin: 10px;
}
</style>
