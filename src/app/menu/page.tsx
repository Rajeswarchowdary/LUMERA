"use client";
import React, { useState } from "react";
import styles from "./menu.module.css";
import { Dancing_Script } from "next/font/google";
import Header from "../Header";


const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type MenuItem = {
  name: string;
  image: string;
  price: string;
  description: string;
  cat: string;
};

type MenuData = {
  Coffee: MenuItem[];
  Desserts: MenuItem[];
  Mocktails: MenuItem[];
  Soups: MenuItem[];
  "Quick Bites": MenuItem[];
};

const menuData: MenuData = {
  Coffee: [
    {
      name: "Espresso",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
      price: "₹120",
      description: "Strong and rich espresso shot made from premium beans.",
      cat: "veg",
    },
    {
      name: "Double Espresso",
      image:
        "https://brot.ae/cdn/shop/files/Cafe_Double_Espresso_1_46ef7fbd-a1b8-4fd8-b7d0-5002597ab89f.webp?v=1745579437&width=2040",
      price: "₹250",
      description: "Two shots of bold espresso for a powerful kick.",
      cat: "veg",
    },
    {
      name: "Cappuccino",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg",
      price: "₹150",
      description: "Smooth espresso topped with steamed milk and foam.",
      cat: "veg",
    },
    {
      name: "Americano",
      image:
        "https://cdn.sanity.io/images/t3ffnogl/production/73e308292a5e05e2fca2fc16018308c6cf6dc373-1500x1000.jpg?w=1000&fm=webp",
      price: "₹200",
      description: "Espresso diluted with hot water for a smooth flavor.",
      cat: "veg",
    },
    {
      name: "Latte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8Q_RrELDLpBSuhHF9CEAWgSBo9mRQtSy-g&s",
      price: "₹240",
      description: "Smooth espresso blended with steamed milk and light foam.",
      cat: "veg",
    },
    {
      name: "Flat White",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/28/bd2762f1-0694-42e5-a242-4229a8f7b234_8c8403a5-fbb1-447a-9fbd-876f10c84ab5.jpg",
      price: "₹260",
      description: "Velvety microfoam and espresso for a rich creamy texture.",
      cat: "veg",
    },
    {
      name: "Mocha",
      image:
        "https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg",
      price: "₹260",
      description: "Chocolate flavored coffee with espresso and milk.",
      cat: "veg",
    },
  ],
  Desserts: [
    {
      name: "Chocolate Cake",
      image:
        "https://b.zmtcdn.com/data/pictures/1/20591551/21ae449c8e1103e7cc05db7bbb86530f_o2_featured_v2.jpg?output-format=webp",
      price: "₹180",
      description: "Moist chocolate cake layered with rich chocolate ganache.",
      cat: "veg",
    },
    {
      name: "Choco Kunafa Waffle",
      image:
        "https://b.zmtcdn.com/data/dish_photos/767/03cae1792c9bffddc7259e85e8817767.jpeg?fit=around|130:130&crop=130:130;*,*",
      price: "₹180",
      description: "Our signature dark choco Waff-Wich meets the VIRAL Dubai-Chocolate — and the rest is history ! A rich blend of dark chocolate, pistachio kunafa, and the creamy chocolate spread.",
      cat: "veg",
    }, {
      name: "Choco Donut",
      image:
        "https://b.zmtcdn.com/data/dish_photos/313/723d8e63ea98077c2c6affe7c81cb313.jpeg?fit=around|130:130&crop=130:130;*,*",
      price: "₹49",
      description: "Soft donut glazed with rich chocolate for a sweet treat.",
      cat: "veg",
    }, {
      name: "Apricot Trilight",
      image:
        "https://b.zmtcdn.com/data/dish_photos/fd1/1681e628824e275702ee5ff0918f0fd1.jpeg?fit=around|130:130&crop=130:130;*,*",
      price: "₹119",
      description: "Layered apricot dessert with creamy and fruity flavors.",
      cat: "veg",
    },
    {
      name: "Mocha PAC",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/10/28/2dac1e41-e440-4c28-90c4-431e48841805_838c900e-0170-4b1f-aeb9-0cbbe3b553d6.png_compressed",
      price: "₹450",
      description: "When Pain Au Chocolat meets Specialty Coffee. Our Signature Pain Au Chocolat filled with Coffee Mascarpone Cream, topped with cream, chocolate shaving and coffee dust.",
      cat: "veg",
    },
    {
      name: "Nutella Filled Pancake",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/29/cb118365-371d-459e-8a36-92dbb520a354_05d31fb8-b59b-44aa-9f88-17593e4f57cf.png_compressed",
      price: "₹295",
      description: "One large size pancake with Nutella stuffed inside served with white chocolate ganache and whipped cream. You can choose between a regular or a gluten free option in the next step.",
      cat: "veg",
    },
    {
      name: "Outrageous Chocolate Brownie",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/e5c0ff88c754365a3849df1fb7d8cb74",
      price: "₹125",
      description: "Dense brownie made with couverture chocolate, ground almonds and flax. Allergens - Wheat, Dairy, Nuts, Soy.",
      cat: "veg",
    },
    {
      name: "Brownie Hot Chocolate",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/12/24/963ae903-3219-447b-a12b-7859551dffe6_59bfeddd-5bb6-40ba-9b1c-b7603f3904d8.jpg",
      price: "₹190",
      description: "An indulgent hot chocolate infused with the brownies crumble , offering a fudgy and chocolatey delight.",
      cat: "veg",
    },


  ],
  Mocktails: [
    {
      name: "Mint Mojito with Popping Bubbles",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/7/179b2b90-b744-4072-96c0-0a0135931360_9fbeb076-25db-4b5f-ab75-f89ffd473538.jpg_compressed",
      price: "₹150",
      description: "Refreshing mint and lime mocktail with soda sparkle.",
      cat: "veg",
    },
    {
      name: "Apricot Delight",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b5b920d514e8c79738475bb086d5ef9c",
      price: "₹130",
      description: "Refreshing mint and lime mocktail with soda sparkle.",
      cat: "veg",
    },
    {
      name: "Blue Curacao",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/30/c813d1b9-7466-47dd-a4e9-3fb367bb0efc_e1e4b094-11bc-4032-a61f-13aa4c54fd75.jpg",
      price: "₹70",
      description: "Refreshing mint and lime mocktail with soda sparkle.",
      cat: "veg",
    },
    {
      name: "Cranberry Espresso Fizz",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/2/28/8ef918b5-1a04-47ab-b2cd-219e5e18766f_f1026a11-31e2-483c-9d50-5e601f968b84.jpg",
      price: "₹315",
      description: "Refreshing mint and lime mocktail with soda sparkle.",
      cat: "veg",
    },
    {
      name: "Blue Ocean Mocktail",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/26/2e540725-13d4-463f-b576-6baa98df25b9_f4e60a11-0664-4ee5-b4a2-e81d4bebd824.jpg",
      price: "₹190",
      description: "Refreshing mint and lime mocktail with soda sparkle.",
      cat: "veg",
    },
    {
      name: "Fresh Lime Soda",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/26/c89224b9-4182-4d16-bf72-76b478d7a19c_93bccbf6-e5ac-4581-928c-3269b013dc3e.jpg",
      price: "₹69",
      description: "Refreshing mint and lime mocktail with soda sparkle.",
      cat: "veg",
    },

  ],
  Soups: [
    {
      name: "Cream Of Tomato Soup",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/11/2f8b868d-04b9-4871-a37c-20785517f2f5_c57a99f2-298a-470f-be8d-1567fc9e6776.jpg",
      price: "₹150",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "veg",
    },
    {
      name: "Manchow Soup",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/FOOD_CATALOG/IMAGES/CMS/2025/6/27/5a2bd82c-83ae-4ce0-93f4-ec67c8d7b425_bbe9bd45-d443-406c-9094-96283e941e97.jpg",
      price: "₹200",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "veg",
    },
    {
      name: "Manchow Soup (chicken) (small)",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/27/5a2bd82c-83ae-4ce0-93f4-ec67c8d7b425_bbe9bd45-d443-406c-9094-96283e941e97.jpg",
      price: "₹149",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "nonveg",
    },
    {
      name: "Lung Fung Soup",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/FOOD_CATALOG/IMAGES/CMS/2025/1/13/bb412e7a-db3b-43b7-9bc4-0951e07f0dba_6218c1ce-ceca-4112-bff2-bbb8f8211f05.jpg",
      price: "₹205",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "nonveg",
    },
    {
      name: "Chicken Corn Soup",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/339e70c7676b914bf24c843ccc264f93",
      price: "₹215",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "nonveg",
    },
    {
      name: "Creamy Broccoli & Spinach Soup",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/fnqsx3yyczv3tr9qkc1o",
      price: "₹245",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "veg",
    },
    {
      name: "Classic Minestrone Soup",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/egydqrs0s4hgb4kvxzpg",
      price: "₹245",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "veg",
    },
    {
      name: "Chiocken Hot 'N' Sour Soup",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/FOOD_CATALOG/IMAGES/CMS/2025/9/16/156c586f-3954-4da4-9003-a09891abb766_48a852bd-8cef-4296-8621-22f1826b29a0.jpeg_compressed",
      price: "₹225",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "nonveg",
    },
    {
      name: "Veg Manchow Soup",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240/FOOD_CATALOG/IMAGES/CMS/2024/9/6/4780adf1-1057-408f-99dc-d9bb7ef06f51_afe222af-d2c1-46e6-be67-aea6854e8004.jpg",
      price: "₹205",
      description: "Creamy and tangy tomato soup served with herbs.",
      cat: "nonveg",
    },
  ],

  "Quick Bites": [
    {
      name: "French Fries",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/20/e9f1acb5-f289-406c-b1e1-e65ecb90d690_b7f5d761-2deb-41c3-a9d4-2014c63757dd.png_compressed",
      price: "₹90",
      description: "Crispy golden fries served with ketchup.",
      cat: "veg",
    },
    {
      name: "Brosted Fried Chicken",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ea398e3836c6cdd029d7b89eb1897149",
      price: "₹610",
      description: "Crispy golden fries served with ketchup.",
      cat: "nonveg",
    },
    {
      name: "Chicken Popcorn",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/9ff70d002323fdad894246cb84933531",
      price: "₹199",
      description: "Crispy golden fries served with ketchup.",
      cat: "nonveg",
    },
    {
      name: "Original Whopper Chicken(XL size Bun)",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/11/29/523da59d-365f-47bc-bb93-5583508104e9_c9077a2b-eab2-4acf-85f0-d7a357c4757a.jpg",
      price: "₹200",
      description: "Our Original Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds.",
      cat: "nonveg",
    },
    {
      name: "Original Whopper Veg(XL size Bun)",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg",
      price: "₹180",
      description: "Our Original Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
      cat: "veg",
    },
    {
      name: "Samosa Chat",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/30ae61c64e557f61343c39674c2feedb",
      price: "₹60",
      description: "Aloo Samosa with matar gravy served with fresh yogurt, sweet & sour chutney ,chat masala , spices and a sprinkle of sev.",
      cat: "veg",
    },
    {
      name: "Cutlet Chat",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/k078inqhlutfonx0epbo",
      price: "₹60",
      description: "Aloo Cutlet with matar gravy served with fresh yogurt, sweet & sour chutney ,chat masala , spices and a sprinkle of sev.",
      cat: "veg",
    },
    {
      name: "Bhel Puri",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/9/17/7df3e139-6808-45ec-a86e-6cdce97c06af_b5d66423-63f2-42af-ab19-2a95eba813fa.jpg",
      price: "₹50",
      description: "Wholesome Puffed Rice Mixed With Onions, Tomatoes, Chutneys And More.",
      cat: "veg",
    },
  ],

};

const Menu: React.FC = () => {
  const [activeSection, setActiveSection] = useState<keyof MenuData>("Coffee");
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems =
    filter === "all"
      ? menuData[activeSection]
      : menuData[activeSection].filter((item) => item.cat === filter);

  const itemCount = filteredItems.length;

return (
    <>
      <div className={styles.maindiv}>
        <h1 className={`${styles.heading} ${dancing.className}`}>Menu Items</h1>

      
        <div className={styles.sectionfliter}>
          <div className={styles.section}>
            {(Object.keys(menuData) as (keyof MenuData)[]).map((category) => (
              <h2
                key={category}
                className={`${styles.tab} ${
                  activeSection === category ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveSection(category);
                  setFilter("all");
                }}
              >
                {category}
              </h2>
            ))}
          </div>

          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterBtn} ${
                filter === "all" ? styles.activeFilter : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`${styles.filterBtn} ${
                filter === "veg" ? styles.activeFilter : ""
              }`}
              onClick={() => setFilter("veg")}
            >
              <img src="/veg.png" alt="veg" style={{ height: "15px" }} /> Veg
            </button>
            <button
              className={`${styles.filterBtn} ${
                filter === "nonveg" ? styles.activeFilter : ""
              }`}
              onClick={() => setFilter("nonveg")}
            >
              <img src="/nonveg.png" alt="nonveg" style={{ height: "15px" }} />{" "}
              Non-Veg
            </button>
          </div>
        </div>

        {/* Item Count */}
        <div className={styles.itemCountCenter}>
          {itemCount} item{itemCount !== 1 ? "s" : ""}
        </div>

        {/* Cards */}
        <div className={styles.itemsContainer}>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => setSelectedItem(item)}
            >
              <div className={styles.cardtext}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.desc}>{item.description}</p>
                <button
                  className={styles.orderBtn}
                  onClick={(e) => {
                    e.stopPropagation(); 
                    alert(`Ordering ${item.name}`);
                  }}
                >
                  Order Now
                </button>
              </div>

              <div className={styles.cardimg}>
                {item.cat === "veg" && (
                  <img src="/veg.png" alt="Veg" className={styles.catIcon} />
                )}
                {item.cat === "nonveg" && (
                  <img
                    src="/nonveg.png"
                    alt="Non-Veg"
                    className={styles.catIcon}
                  />
                )}
                <div className={styles.priceTag}>{item.price}</div>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
              </div>
            </div>
          ))}

          {selectedItem && (
            <div
              className={styles.popupOverlay}
              onClick={() => setSelectedItem(null)}
            >
              <div
                className={styles.popupContainer}
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  className={styles.closeBtn}
                  onClick={() => setSelectedItem(null)}
                >
                  &times;
                </span>

                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className={styles.popupImage}
                />
                <h3 className={styles.popupTitle}>{selectedItem.name}</h3>
                <p className={styles.popupDesc}>{selectedItem.description}</p>

                <div className={styles.popupFooter}>
                  <span className={styles.popupPrice}>
                    {selectedItem.price}
                  </span>
                  <button className={styles.orderBtn}>Order Now</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;