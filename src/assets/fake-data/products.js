// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "A delicious meat-free meal for any diet, Bengal Meat Chicken Burger Patties feature a spicy, chicken -style veggie chik patty with a crispy, crunchy breading outside and tender inside. These veggie patties provide a good source of protein and fiber. Stock this convenient resealable bag in the freezer for an exciting anytime meal you can easily prepare in an oven or microwave. Whether you're putting together a winning spread for game night, preparing a meal to share with the whole family, or just seeking a quick and convenient lunch or dinner.",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "To make the dough, mix the yeast in a small bowl with 2 tbsp warm water and 1 tbsp strong white flour. Leave somewhere warm to ‘sponge’ for 20 mins or so (this dissolves and activates the yeast). Tip the three flours into a large bowl and make a well in the centre. Pour in the sponged yeast, 1 tsp salt, sugar, oil and 290ml warm water, and mix to form a wet dough. Knead for 10 mins until satiny and elastic, then put in a clean bowl, cover with a cloth and leave to double in size for 2 1/2 - 3 hrs.",
  },

  {
    id: "03",
    title: "Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Savour delicious Italian flavours baked and sealed into this gourmet pizza. Made with a crusty base-tomato pizza sauce and mozzarella cheese are laid on top and baked to perfection. Sprinkle our secret seasoning generously to intensify the flavours! 9-Inch Base, Mozzarella Cheese, Tomato Pizza Sauce, Oregano",
  },

  {
    id: "04",
    title: "Mexican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt. Cheeseburgers can include variations in structure, ingredients and composition.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "It's mighty simple, but it works. 100% quarter pounder beef patty, then complete the tasty picture with cheese, onions, tangy mustard and pickles. Bet your mouth is watering right now! It's mighty simple, but it works.",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Preheat oven to 200°C. Place pizza bases onto baking trays. Spread each with tomato paste and sprinkle with mozzarella. Bake in preheated oven for 5 minutes or until heated through.Combine marinara, garlic and parsley. Arrange over pizza bases with tomato. Drizzle with oil and season with salt and pepper. Bake in oven for a further 8 minutes or until seafood is cooked. Remove from oven and cut into wedges. Serve with rocket.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Divide the dough into 4 portions. On a floured surface, roll each portion into a thin disc about 25 cm (10 inches) across. Sprinkle a small amount of cornmeal on a pizza peel and the hot stone. Place 1 disc at a time on the peel. Working quickly, spread with 1/4 of the peppers. Top with 1/4 of the cheese and chorizo. Drizzle with olive oil. Immediately slide the pizza onto the stone and bake until the dough is golden brown, 8 to 10 minutes. Top with herbs and a few grindings of pepper.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Pepperoni is America’s favorite pizza. And adding mushrooms elevates its flavor, texture, and protein factor. This recipe uses dough made from scratch. The yeast isn’t bloomed in the video, but it’s a good idea to add that step and avoid wasting an entire batch of dough. The raw red sauce is just grated tomatoes, tomato paste, and basil. Use slim mushroom slices.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "A hamburger is an extremely popular sandwich consisting of one or more meat patties placed in a bun or a bread roll. The meat is usually accompanied by various ingredients such as tomato slices, onions, pickles, or lettuce, and numerous condiments such as mayonnaise, ketchup, or salsa.If a hamburger is served with cheese, it is then called a cheeseburger. Today, there is a large number of hamburger varieties throughout the world, each with its own accompaniments, served at numerous fast food restaurants.",
  },

  {
    id: "11",
    title: "Crunchy Bread",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "We thought we’d landed upon the simplest yeast bread recipe when Mark Bittman wrote about the no-knead approach of Jim Lahey, owner of Sullivan Street Bakery. It quickly became (and remains) one of our most popular recipes because it made bakery-quality bread a real possibility for home cooks. But then we heard about Jeff Hertzberg, a physician from Minneapolis, who devised a streamlined technique for a crusty loaf of bread. Mix flour, salt, yeast, and water. Let it sit a bit, refrigerate it, take some out and let it rise, then bake it. The crusty, full-flavored loaf that results may be the world’s easiest yeast bread. ",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "In a large bowl, combine 1-1/2 cups of flour, sugar, yeast, and salt. Add water and 2 tablespoons butter; beat on medium speed for 3 minutes or until smooth. Stir in cheese and enough remaining flour to form a soft dough. Turn onto a lightly floured surface; knead until smooth and elastic, about 4-6 minutes. Cover and let rest for 10 minutes. Divide into 13 pieces. Shape each into a ball. Place in a greased 9-in. round baking pan. Cover and let rise in a warm place until doubled, about 30 minutes.",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Proof the yeast: In a large bowl or stand mixer add the yeast, water, and a pinch of the sugar or honey. Allow resting for 5-10 minutes until foaming and bubbly. (This is called “proofing” the yeast, to make sure it is active. If it doesn’t foam, the yeast is no good, and you need to start over with fresh yeast). Prepare the dough: Add remaining sugar or honey, salt, oil, and 3 cups of flour. Mix to combine. Add another cup of flour and mix to combine. With the mixer running add more flour, ½ cup at a time, until the dough begins to pull away from the sides of the bowl.",
  },
];

export default products;
