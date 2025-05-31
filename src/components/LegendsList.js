import mauiHookLegend from "./legends/maui-hook";
import poliahuPeleLegend from "./legends/poliahu-pele";
import mooLegend from "./legends/Moo";
import boilingPotsLegend from "./legends/boilingPots";
import mauiFireLegend from "./legends/maui-fire";
import sharkManLegend from "./legends/sharkMan";
import hiilaweHakaloaLegend from "./legends/hiilaweHakaloa";
import naupakaLegend from "./legends/naupaka";
import nahaStoneLegend from "./legends/nahaStone";

const legends = [
  {
    id: 1,
    title: "Poli'ahu and Pele's Sled Race",
    description:
      "This epic race between the snow goddess Poliʻahu and volcano goddess Pele reveals how Hawaiʻi Island came to hold both icy peaks and fiery lands.",
    fullLegend: poliahuPeleLegend,
    sources: [
      { title: "Hawaiian Myths of Earth, Sea, and Sky by Vivian L. Thompson", url: "https://www.amazon.com/Hawaiian-Myths-Earth-Sea-Sky/dp/0824811712" },
      { title: "Bishop Museum Storytelling: The Collapse of Onomea Arch", url: "https://storytelling.bishopmuseum.yourcultureconnect.com/e/aina/the-collapse-of-onomea-arch" }
    ],
    lat: 19.807189,
    lon: -155.092848,
  },
  {
    id: 2,
    title: "Maui and his Magical Hook  ",
    description: "Maui attempts to unite the islands together with his magical hook.",
    fullLegend: mauiHookLegend,
    sources: [
      { title: "Hilo Legends Retold by Frances Reed", url: "https://www.amazon.com/Hilo-Legends-Frances-Reed/dp/091218065X" },
      { title: "Coconut Island: A Tiny Historic Gem in Hilo Bay", url: "https://bigisland.org/coconut-island-a-tiny-historic-gem-in-hilo-bay" }
    ],
    lat: 19.729485,
    lon: -155.068584,
  },
  {
    id: 3,
    title: "The Last of Mo'o Kuna",
    description: "A tale of the giant Mo'o, the goddess Hina, and Maui the demigod. ",
    fullLegend: mooLegend,
    sources: [
      { title: "Hilo Legends Retold by Frances Reed", url: "https://www.amazon.com/Hilo-Legends-Frances-Reed/dp/091218065X" },
      { title: "Hawaiian Myths of Earth, Sea, and Sky by Vivian L. Thompson", url: "https://www.amazon.com/Hawaiian-Myths-Earth-Sea-Sky/dp/0824811712" },
    ],
    lat: 19.719929627263326,
    lon: -155.10944345767197,
  },
  {
    id: 4,
    title: "The Boiling Pots and Mo'o Kuna",
    description: "The continuation of the story of Mo'o Kuna, the giant dragon, and his battle with Maui.",
    fullLegend: boilingPotsLegend,
    sources: [
      { title: "Hilo Legends Retold by Frances Reed", url: "https://www.amazon.com/Hilo-Legends-Frances-Reed/dp/091218065X" },
      { title: "Hawaiian Myths of Earth, Sea, and Sky by Vivian L. Thompson", url: "https://www.amazon.com/Hawaiian-Myths-Earth-Sea-Sky/dp/0824811712" },
    ],
    lat: 19.715379,
    lon: -155.130824,
  },
  {
    id: 5,
    title: "Maui and the ʻAlae Birds",
    description: "The story of how Maui learned to make fire with the help of the Alae birds.",
    fullLegend: mauiFireLegend,
    sources: [
      { title: "Hilo Legends Retold by Frances Reed", url: "https://www.amazon.com/Hilo-Legends-Frances-Reed/dp/091218065X" },
      { title: "Legends of the Wailuku by Charlotte Hapai", url: "https://www.gutenberg.org/ebooks/29773" },
      { title: "Legends of Ma-ui: A Demi-God of Polynesia by W.D. Westervelt", url: "https://www.amazon.com/Legends-Ma-ui-Demi-Polynesia-Mother/dp/1537132997"},
      { title: "At the Gateways of the Day by Padraic Colum", url: "https://www.gutenberg.org/ebooks/69724" },
    ],
    lat: 19.717193,
    lon: -155.095809,
  },
  {
    id: 6,
    title: "The Sharkman of Waipi'o Valley",
    description: "Gifted by gods, cursed by hunger, Nanaue's fate was sealed by the secret on his back.",
    fullLegend: sharkManLegend,
    sources: [
      { title: "Hawaiian Folk Tales compiled by Thos. G. Thrum", url: "https://archive.org/download/hawaiianfolktale00thru/hawaiianfolktale00thru.pdf" },
    ],
    lat: 20.119622,
    lon: -155.590681,
  },
  {
    id: 7,
    title: "Hi'ilawe and Hakalaoa",
    description: "Love story of Hi'ilawe and Hakalaoa.",
    fullLegend: hiilaweHakaloaLegend,
    sources: [
      { title: "Big Island Attractions: Hi'ilawe Falls", url: "https://www.hawaiiactivities.com/travelguide/hiilawe-falls/" },
    ],
    lat: 20.098171735609657,
    lon: -155.59917318082273,
  },
  {
    id: 8,
    title: "The Legend of Naupaka",
    description: "Love story of the Naupaka flower, a symbol of eternal separation and forbidden love.",
    fullLegend: naupakaLegend,
    sources: [
      { title: "The Legend of Naupaka – HomeyHawaii", url: "https://www.homeyhawaii.com/blog/culture/legend-of-naupaka/" },
      { title: "The Naupaka Flower’s Story – Ke Alakaʻi (BYU–Hawaii)", url: "https://kealakai.byuh.edu/the-naupaka-flowers-story" },
      { title: "The Enchanting Legend of Naupaka – Kona Sea Salt", url: "https://konaseasalt.com/blogs/news/naupaka-a-symbol-of-enduring-love-and-separation" },
    ],
    lat: 20.119508,
    lon: -155.592001,
  },
  {
    id: 9,
    title: "The Story of the Naha Stone",
    description: "The story of how Kamehameha the Great used the Naha Stone to prove his strength and destiny.",
    fullLegend: nahaStoneLegend,
    sources: [
      { title: "Hilo Legends Retold by Frances Reed", url: "https://www.amazon.com/Hilo-Legends-Frances-Reed/dp/091218065X" },
    ],
    lat: 19.724905418213705,
    lon: -155.09061267844766,
  },
  
];

export default legends;