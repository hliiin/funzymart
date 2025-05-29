const goodsList = [
  {
    id: "teddy-bear",
    type: "stuffed-animals",
    name: "Teddy Bear",
    price: 30,
    sku:35001,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },    
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png',
  },
  {
    id: "happy-flower",
    type: "wooden-toys",
    name: "Happy Flower",
    price: 38,
    sku:35001,
    details: { width: 12.5, height: 6, length: 3, weight: 32 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png'
  },
  {
    id: "mega-plush-toy",
    type: "stuffed-animals",
    name: "Mega Plush Toy",
    price: 38,
    sku:35010,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min-p-500.png'
  },
  {
    id: "lift-machine",
    type: "wooden-toys",
    name: "Lift Machine",
    price: 24,
    sku:35002,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png'
  },
  {
    id: "cute-dog",
    type: "stuffed-animals",
    name: "Cute Dog",
    price: 24,
    sku:35011,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min-p-500.png'
  },
  {
    id: "wooden-camera",
    type: "wooden-toys",
    name: "Wooden Camera",
    price: 32,
    sku:35003,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min-p-500.png'
  },
  {
    id: "little-rabbit",
    type: "wooden-toys",
    name: "Little Rabbit",
    price: 16,
    sku:35004,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min-p-800.png'
  },
  {
    id: "little-friend",
    type: "stuffed-animals",
    name: "Little Friend",
    price: 27,
    sku:35012,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png'
  },
  {
    id: "christmas-deer",
    type: "stuffed-animals",
    name: "Christmas Deer",
    price: 16,
    sku:35004,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min.png'
  },
  {
    id: "rainbow-truck",
    type: "wooden-toys",
    name: "Christmas Deer",
    price: 28,
    sku:35005,
    details: { width: 32, height: 14, length: 20, weight: 9.5 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min.png'
  },
  {
    id: "pluto-yellow-dog",
    type: "stuffed-animals",
    name: "Pluto Yellow Dog",
    price: 28,
    sku:35014,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min.png'
  },

  {
    id: "happy-dog",
    type: "wooden-toys",
    name: "Happy Dog",
    price: 30,
    sku:35006,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min.png'
  },
  {
    id: "caterpillar",
    type: "wooden-toys",
    name: "Caterpillar",
    price: 18,
    sku:35008,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min.png'
  },
  {
    id: "grey-elephant",
    type: "stuffed-animals",
    name: "Grey Elephant",
    price: 45,
    sku:35015,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min.png'
  },
  {
    id: "wooden-tractor",
    type: "wooden-toys",
    name: "Wooden Tractor",
    price: 22,
    sku:35007,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min.png'
  },
  {
    id: "funny-clown",
    type: "stuffed-animals",
    name: "Funny Clown",
    price: 36,
    sku:35016,
    details: { width: 38, height: 32, length: 21.5, weight: 24 },
    img:'https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min.png'
  },
];

export default goodsList
