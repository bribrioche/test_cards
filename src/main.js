import { createApp } from "vue";
import App from "./App.vue";

//Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//ICONS
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { mdiHeart } from "@mdi/js";
import { mdiCardsSpade } from "@mdi/js";
import { mdiCardsDiamond } from "@mdi/js";
import { mdiCardsClub } from "@mdi/js";

const vuetify = createVuetify({
  theme: { defaultTheme: "light" },
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      heart: mdiHeart,
      spade: mdiCardsSpade,
      diamond: mdiCardsDiamond,
      club: mdiCardsClub,
    },
    sets: {
      mdi,
    },
  },
});

const VueApp = createApp(App);

VueApp.use(vuetify);

VueApp.mount("#app");
