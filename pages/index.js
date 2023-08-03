import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";



export default function Home() {
    const [data, setData] = useState({ text: "" });
    const [query, setQuery] = useState();
    const [search, setSearch] = useState();
    const [num, setNum] = useState();
    const [age, setAge] = useState();
    const [bmi, setBMI] = useState();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            if (search) {
                //setSearch('inventory: ' + search + '\n Number of People: ' + num + '\n Age: ' + age + '\n BMI: ' + bmi);
                const searchQuery = `inventory: ${query}\n Number of People: ${num}\n Age: ${age}\n BMI: ${bmi}`;
                console.log(search);
                setIsLoading(true);
                const res = await fetch(`/api/openai`, {
                    body: JSON.stringify({
                        name: searchQuery,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                });
                console.log('res: ', res);
                console.log('key: ', OPENAI_API_KEY);
                const data = await res.json();
                setData(data);
                setIsLoading(false);
            }
        };


        fetchData();
    }, [search]);
    //console.log('data.text:', data);


    return (
        <div className={styles.container}>
          <Head>
            <title>GPT-3 App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
      
          <main className={styles.main}>
            <h1 className={styles.title}>
              <a
                style={{
                  color: "#0052CC", // Green color
                  textDecoration: "none",
                  transition: "border-bottom 0.3s ease", // Smooth underline transition
                  fontWeight: "bold",
                  fontSize: "80px", // Adjust the font size as needed
                  margin: "20px 0", // Add some vertical margin for spacing
                }}
                href="#"
              >
                DATA DINE - A KPMG SOLUTION
              </a>
              <Link href="/InventoryData">
    <p style={{ color: "#0052CC", fontWeight: "bold", fontSize: "20px" }}>
      Check Inventory Data
    </p>
  </Link>
            </h1>
      
            <p
              className={styles.description}
              style={{
                color: "#0052CC", // Green color
                fontSize: "30px",
                margin: "0 0 40px 0", // Add some bottom margin for spacing
              }}
            >
              Empowering Healthier Communities: AI-Powered Healthy Meal Plans for Low-Income Neighborhoods
            </p>
      
            <div className={styles.grid}>
              <div className={styles.mealPlanContainer}>
                <h3>Input your foodbank's data:</h3>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Enter inventory data..."
                />
                <h4>Number of people:</h4>
                <input
                  type="text"
                  value={num}
                  onChange={(event) => setNum(event.target.value)}
                  placeholder="Number of people..."
                />
                <h4>Enter your age:</h4>
                <input
                  type="text"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  placeholder="Age..."
                />
                <h4>Enter BMI:</h4>
                <input
                  type="text"
                  value={bmi}
                  onChange={(event) => setBMI(event.target.value)}
                  placeholder="BMI..."
                />
                <button
                  type="button"
                  onClick={() => setSearch(query)}
                  style={{
                    backgroundColor: "#0052CC", // Green color for the button
                    color: "white", // Text color
                    padding: "10px 20px", // Add some padding to the button
                    fontSize: "18px", // Button text size
                    border: "none", // Remove button border
                    borderRadius: "5px", // Add some border-radius for a rounded look
                    cursor: "pointer", // Show pointer on hover
                    marginTop: "20px", // Add top margin for spacing
                  }}
                >
                  Generate Meal Plan
                </button>
      
                <div className={styles.mealPlan}>
                  <h4>Healthy Meal Plan:</h4>
                  {isLoading ? (
                    <div>Loading ...</div>
                  ) : (
                    <p className={styles.generatedText}>{data.text}</p>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      );
      
}
