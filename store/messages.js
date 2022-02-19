const messages = [
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "Le produit est t'il toujours disponible ?",
    id: 1,
    dateTime: 1586044521956
  },
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "Je suis intéressé par cet article. Offrez-vous la livraison gratuite ?",
    id: 2,
    dateTime: 1586044521956
  },
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "S'il vous plaît appelez-moi et nous organiserons cela pour vous..",
    id: 3,
    dateTime: 1586044521956
  }
];

const getMessagesForUser = toUserId =>
  messages.filter(message => message.toUserId === toUserId);

const add = message => {
  message.id = messages.length + 1;
  message.dateTime = Date.now();
  messages.push(message);
};

module.exports = { add, getMessagesForUser };
