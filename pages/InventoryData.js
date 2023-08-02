import Head from "next/head";

const InventoryData = () => {
  // Dummy inventory data from a food bank
  const dummyInventoryData = {
    apples: "10",
    carrots: "50",
    potatoes: "200",
    // Meats
    beef: "30",
    chicken: "40",
    pork: "25",
    lamb: "15",
    // Canned Goods
    cannedSoup: "100",
    cannedVegetables: "80",
    cannedFruit: "60",
    cannedBeans: "70",
    // Dairy
    milk: "150",
    cheese: "100",
    yogurt: "90",
    butter: "80",
    // Grains
    rice: "200",
    pasta: "180",
    oats: "120",
    bread: "250",
    // Fruits
    oranges: "30",
    bananas: "40",
    grapes: "50",
    watermelon: "20",
    // Vegetables
    broccoli: "80",
    spinach: "70",
    cucumbers: "60",
    tomatoes: "90",
    // Snacks
    chips: "120",
    cookies: "100",
    popcorn: "70",
    pretzels: "50",
    // Beverages
    soda: "100",
    juice: "80",
    tea: "60",
    coffee: "40",
    // Seafood
    salmon: "25",
    shrimp: "30",
    tuna: "20",
    cod: "15",
    // Condiments
    ketchup: "90",
    mustard: "80",
    mayo: "70",
    hotSauce: "50",
    // Desserts
    iceCream: "60",
    cake: "50",
    pie: "40",
    cookies: "30",
    // Beans & Legumes
    lentils: "70",
    chickpeas: "60",
    blackBeans: "50",
    kidneyBeans: "40",
    // Nuts & Seeds
    almonds: "100",
    walnuts: "90",
    peanuts: "80",
    sunflowerSeeds: "70",
    // Frozen Foods
    pizza: "60",
    iceCreamBars: "50",
    vegetables: "40",
    fruits: "30",
    // Meats (more)
    turkey: "20",
    duck: "15",
    sausage: "25",
    ham: "20",
    // Canned Goods (more)
    cannedTomatoes: "70",
    cannedMeat: "60",
    cannedFish: "50",
    cannedSoup: "80",
    // Dairy (more)
    milk: "120",
    cheese: "100",
    yogurt: "80",
    butter: "60",
    // Grains (more)
    rice: "180",
    pasta: "160",
    oats: "100",
    bread: "200",
    // Fruits (more)
    oranges: "40",
    bananas: "50",
    grapes: "60",
    watermelon: "30",
    // Vegetables (more)
    broccoli: "70",
    spinach: "60",
    cucumbers: "50",
    tomatoes: "80",
    // Snacks (more)
    chips: "100",
    cookies: "80",
    popcorn: "60",
    pretzels: "40",
    // Beverages (more)
    soda: "80",
    juice: "60",
    tea: "40",
    coffee: "20",
    // Seafood (more)
    salmon: "20",
    shrimp: "25",
    tuna: "15",
    cod: "10",
    // Condiments (more)
    ketchup: "80",
    mustard: "70",
    mayo: "60",
    hotSauce: "40",
    // Desserts (more)
    iceCream: "50",
    cake: "40",
    pie: "30",
    cookies: "20",
    // Beans & Legumes (more)
    lentils: "60",
    chickpeas: "50",
    blackBeans: "40",
    kidneyBeans: "30",
    // Nuts & Seeds (more)
    almonds: "90",
    walnuts: "80",
    peanuts: "70",
    sunflowerSeeds: "60",
    // Frozen Foods (more)
    pizza: "50",
    iceCreamBars: "40",
    vegetables: "30",
    fruits: "20",
  };

  return (
    <div>
      <Head>
        <title>Inventory Data</title>
        <style>
          {`
            div.container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
  
            div.table-container {
              overflow-y: auto;
              max-height: 80vh;
            }
  
            table {
              border-collapse: collapse;
              width: 1000px;
              margin-top: 20px;
            }
  
            th, td {
              border: 1px solid #ccc;
              padding: 8px;
              text-align: left;
            }
  
            th {
              background-color: #f2f2f2;
              font-weight: bold;
            }
  
            tr:nth-child(even) {
              background-color: #f2f2f2;
            }
  
            tr:hover {
              background-color: #ddd;
            }
  
            .buttons {
              display: flex;
              gap: 10px;
              margin-top: 20px;
            }
  
            .button {
              padding: 10px 20px;
              background-color: #2E8540;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
  
            .button:hover {
              background-color: #268235;
            }
          `}
        </style>
      </Head>
  
      <div className="container">
        <main>
          <h1>Food Bank Inventory Data</h1>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(dummyInventoryData).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="buttons">
            <button className="button">Import Excel Data</button>
            <button className="button">Insert a Row</button>
          </div>
        </main>
      </div>
    </div>
  );
  
  
  
};

export default InventoryData;