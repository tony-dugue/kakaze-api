const categories = [
  {
    id: 1,
    name: "Meubles",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    color: "white"
  },
  {
    id: 2,
    name: "Voitures",
    icon: "car",
    backgroundColor: "#fd9644",
    color: "white"
  },
  {
    id: 3,
    name: "Appareils photo",
    icon: "camera",
    backgroundColor: "#fed330",
    color: "white"
  },
  {
    id: 4,
    name: "Jeux",
    icon: "cards",
    backgroundColor: "#26de81",
    color: "white"
  },
  {
    id: 5,
    name: "Vêtements",
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
    color: "white"
  },
  {
    id: 6,
    name: "Sports",
    icon: "basketball",
    backgroundColor: "#45aaf2",
    color: "white"
  },
  {
    id: 7,
    name: "Films & musique",
    icon: "headphones",
    backgroundColor: "#4b7bec",
    color: "white"
  },
  {
    id: 8,
    name: "Livres",
    icon: "book-open-variant",
    backgroundColor: "#a55eea",
    color: "white"
  },
  {
    id: 9,
    name: "Autres",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white"
  }
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
