import Department from "../models/Department";

export const DEPARTMENT = [
    new Department('1', 'Animals', 'darkcyan'),
    new Department('2', 'Food', 'coral'),
    new Department('3', 'Toys', 'darksalmon'),
    new Department('4', 'Clothes', 'darkviolet'),
    new Department('5', 'Accessories', 'firebrick'),
    new Department('6', 'Cleanliness', 'gold'),
]

import Product from "../models/Product";

export const PRODUCT = [
  new Product(
    "p1",
    ["1"],
    "https://nationaltoday.com/wp-content/uploads/2020/04/unicorn-1.jpg",
    "Unicorn",
    "A unicorn is a creature that originated in the legends and mythologies of ancient and medieval Europe. It is depicted as a goat-like creature or a white white horse, with one horn on its forehead, which is considered to have magical and noble qualities.",
    "700 kg",
    500,
    1500,
    "Good",
    0
  ),
  new Product(
    "p2",
    ["1"],
    "https://cdn.pixabay.com/photo/2017/12/10/03/38/dragon-3009174_960_720.png",
    "Dragon",
    "A dragon is a mythical creature with the characteristics of a giant reptile. The dragon is one of the most common creatures in the mythologies of different peoples. His physical qualities and supernatural abilities have been described in different and varied ways, and in different cultures separate myths have developed about him.",
    "1500 kg",
    200,
    3000,
    "Good",
    0
  ),
  new Product(
    "p3",
    ["1"],
    "https://cdn.pixabay.com/photo/2021/04/12/07/46/pegasus-6171703_960_720.jpg",
    "Pegasus",
    "Pegasus is a legendary winged horse and one of the most famous figures from Greek mythology. Winged horses appear in a number of different mythologies, but Pegasus is probably the oldest and most famous of them all. According to legend, Pegasus was the son of the Gorgon Medusa and the sea Poseidon. He and his brother Chrysaur emerge alive from Medusa's familiar head after she was killed by Perseus.",
    "1200 kg",
    100,
    4000,
    "Good",
    0
  ),
  new Product(
    "p4",
    ["1"],
    "https://cdn.pixabay.com/photo/2021/02/02/19/14/hippogriff-5974976_960_720.jpg",
    "Hippogriff",
    "The hippogriff is a mythological creature, a descendant of Griffin and a young mare, with the exterior of the hippogriph looking like a hybrid between them: its front, including its head and wings, is like a giant eagle, but its hindquarters are like a horse. Hippogriffs are described as easier to tame and domesticate than their griffin father.",
    "1600 kg",
    100,
    3500,
    "Good",
    0
  ),


  new Product(
    "p5",
    ["2"],
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "Salmon",
    "Meal with salmon and zucchini",
    "1 kg",
    2,
    15,
    "Good",
    0
  ),
  new Product(
    "p6",
    ["2"],
    "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",
    "Hamburger",
    "Hamburger in a bun with vegetables and avocado spread",
    "0.5 kg",
    2,
    10,
    "Good",
    0
  ),
  new Product(
    "p7",
    ["2"],
    "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "Pizza",
    "Crispy dough with fresh tomato sauce and yellow cheese",
    "1.5 kg",
    3,
    12,
    "Good",
    0
  ),
  new Product(
    "p8",
    ["2"],
    "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80",
    "Steak Dinner",
    "Steak soaked in red wine with baked potatoes",
    "2 kg",
    5,
    25,
    "Good",
    0
  ),

  new Product(
    "p9",
    ["3"],
    "https://cdn.pixabay.com/photo/2013/07/12/14/07/basketball-147794_960_720.png",
    "Basketball",
    "Ball for playing with the animal",
    "0.3 kg",
    2,
    5,
    "Good",
    0
  ),
  new Product(
    "p10",
    ["3"],
    "https://images.unsplash.com/photo-1560160922-6019c26a2523?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "Frisbee",
    "Frisbee for playing with the animal",
    "0.3 kg",
    1,
    7,
    "Good",
    0
  ),
  new Product(
    "p11",
    ["3"],
    "https://images.unsplash.com/photo-1522008693277-086ad6075b78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "Tug",
    "Tug for playing with the animal",
    "0.5 kg",
    3,
    5,
    "Good",
    0
  ),
  new Product(
    "p12",
    ["3"],
    "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "Soft Toy",
    "Soft Toy for playing with the animal",
    "0.5 kg",
    4,
    10,
    "Good",
    0
  ),

  new Product(
    "p13",
    ["4"],
    "https://images.unsplash.com/photo-1607505234494-b4f46b9482a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "Hat",
    "Animal hat, variety of sizes",
    "0.1 kg",
    1,
    3,
    "Good",
    0
  ),
  new Product(
    "p14",
    ["4"],
    "https://cdn.pixabay.com/photo/2014/04/05/12/24/cat-316994_960_720.jpg",
    "Dresses",
    "Dresses for little animals",
    "0.3 kg",
    2,
    5,
    "Good",
    0
  ),
  new Product(
    "p15",
    ["4"],
    "https://cdn.pixabay.com/photo/2020/02/09/10/22/art-4832571_960_720.jpg",
    "Suit",
    "Suits for events",
    "1 kg",
    5,
    20,
    "Good",
    0
  ),
  new Product(
    "p16",
    ["4"],
    "https://images.unsplash.com/photo-1562244510-70270c6e138f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "Coat",
    "A variety of coats in a variety of sizes",
    "0.7 kg",
    5,
    15,
    "Good",
    0
  ),

  new Product(
    "p17",
    ["5"],
    "https://images.unsplash.com/photo-1548135160-2ddd99526762?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
    "Ski Goggles",
    "Ski Goggles for your animal",
    "1 kg",
    5,
    25,
    "Good",
    0
  ),
  new Product(
    "p18",
    ["5"],
    "https://images.pexels.com/photos/5256722/pexels-photo-5256722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "Reading glasses",
    "Reading glasses for your animal",
    "1 kg",
    5,
    27,
    "Good",
    0
  ),
  new Product(
    "p19",
    ["5"],
    "https://images.unsplash.com/photo-1597358371607-5987dd7da3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "Bag",
    "A variety of animal bags",
    "1 kg",
    5,
    30,
    "Good",
    0
  ),
  new Product(
    "p20",
    ["5"],
    "https://cdn.pixabay.com/photo/2016/08/20/10/04/dog-1607219_960_720.jpg",
    "Animal Shoes",
    "Winter animal shoes",
    "0.7 kg",
    4,
    18,
    "Good",
    0
  ),

  new Product(
    "p21",
    ["6"],
    "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2015&q=80",
    "Shampoo",
    "Animal shampoo based on coconut oil",
    "0.5 kg",
    1,
    5,
    "Good",
    0
  ),
  new Product(
    "p22",
    ["6"],
    "https://images.unsplash.com/photo-1610595426075-eed5a3f521ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "Conditioner",
    "Conditioner with aloe-vera against dandruff",
    "0.5 kg",
    1,
    5,
    "Good",
    0
  ),
  new Product(
    "p23",
    ["6"],
    "https://images.unsplash.com/photo-1599447068894-089fabc9876c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "Soap",
    "Hypoallergenic soap that made from natural ingredients",
    "0.5 kg",
    1,
    3,
    "Good",
    0
  ),
  new Product(
    "p24",
    ["6"],
    "https://cdn.pixabay.com/photo/2018/12/14/19/36/face-cream-3875673_960_720.jpg",
    "Moisturizing Cream",
    "Moisturizer for curly hair based on walnut oil, for animals",
    "0.5 kg",
    1,
    7,
    "Good",
    0
  ),
];


