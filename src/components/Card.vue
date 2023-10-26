<template>
  <div class="card">
    <v-card class="vcard">
      <div class="value-icon top-left">
        <h1 class="red" v-if="color === 'Coeur' || color === 'Carreaux'">
          {{ value }}
        </h1>
        <h1 class="black" v-if="color === 'Trèfle' || color === 'Pique'">
          {{ value }}
        </h1>
        <v-icon color="red" icon="$heart" v-if="color === 'Coeur'"></v-icon>
        <v-icon
          color="red"
          icon="$diamond"
          v-if="color === 'Carreaux'"
        ></v-icon>
        <v-icon color="black" icon="$club" v-if="color === 'Trèfle'"></v-icon>
        <v-icon color="black" icon="$spade" v-if="color === 'Pique'"></v-icon>
      </div>
      <div class="value-icon bottom-right">
        <h1 class="red" v-if="color === 'Coeur' || color === 'Carreaux'">
          {{ value }}
        </h1>
        <h1 class="black" v-if="color === 'Trèfle' || color === 'Pique'">
          {{ value }}
        </h1>
        <v-icon color="red" icon="$heart" v-if="color === 'Coeur'"></v-icon>
        <v-icon
          color="red"
          icon="$diamond"
          v-if="color === 'Carreaux'"
        ></v-icon>
        <v-icon color="black" icon="$club" v-if="color === 'Trèfle'"></v-icon>
        <v-icon color="black" icon="$spade" v-if="color === 'Pique'"></v-icon>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "cardComp",
  props: {
    value: String,
    color: String,
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  width: 200px;
  height: 300px;
  transition: all 1s;
  &:hover {
    cursor: pointer;
    scale: 1.2;
    z-index: 1000;
  }

  .vcard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .value-icon {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .red {
    color: #f44336;
  }

  .black {
    color: #161313;
  }

  .top-left {
    top: 10px;
    left: 10px;
  }

  .bottom-right {
    bottom: 10px;
    right: 10px;
  }
}
</style>
