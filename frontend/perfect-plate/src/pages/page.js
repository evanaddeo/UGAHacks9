import Image from "next/image";
import styles from "../app/page.module.css";
import PPLogo from '../../images/PP_logo2.png';
import ProfilePic from '../../images/profile.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import "../app/globals.css";
import NavBar from "@/components/NavBar";
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useState } from 'react';

const fetchAndSetMealData = async (meal_type, intolerances) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/get_recipes_by_mealtype/${meal_type}/${intolerances}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching meal recipes:', error);
    return [];
  }
};

export default function Home() {
  const router = useRouter();
  const [mealData, setMealData] = useState([]);

  const handleMealClick = (recipe_id) => {
    router.push(`/recipe/${recipe_id}`);
  }

  useEffect(() => {

    const firsty = Cookies.get('user_first');
    const isLogged = Cookies.get('isLoggedIn');
    var intolerances = Cookies.get('intolerances');

    if (intolerances == null) {
      intolerances = "None";
    }

    if (isLogged != null) {
      document.querySelector('.topText').innerText = `${firsty}'s week worth of meals!`;
    }

    const fetchMeals = async () => {
      const breakfastData = await fetchAndSetMealData('breakfast', intolerances);
      const lunchData = await fetchAndSetMealData('lunch', intolerances);
      const dinnerData = await fetchAndSetMealData('dinner', intolerances);
  
      setMealData([
        { day: 'Sunday', meals: [breakfastData[0], dinnerData[0], dinnerData[7]] },
        { day: 'Monday', meals: [breakfastData[1], dinnerData[1], dinnerData[8]] },
        { day: 'Tuesday', meals: [breakfastData[2], dinnerData[2], dinnerData[9]] },
        { day: 'Wednesday', meals: [breakfastData[3], dinnerData[3], dinnerData[10]] },
        { day: 'Thursday', meals: [breakfastData[4], dinnerData[4], dinnerData[11]] },
        { day: 'Friday', meals: [breakfastData[5], dinnerData[5], dinnerData[12]] },
        { day: 'Saturday', meals: [breakfastData[6], dinnerData[6], dinnerData[13]] },
      ]);
    };

    fetchMeals();

  }, [router.pathname]);


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <NavBar />
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <h2 className="topText">Example week in meals!</h2>

      <div className={styles.weeklySection}>
      {mealData.map((dayData, index) => (
        <div key={index} className={styles.daySection}>
          <h4>{dayData.day}</h4>
          <hr></hr>
          {dayData.meals.map((meal, mealIndex) => (
            <p key={mealIndex} onClick={() => handleMealClick(meal.id)}>{meal.title}</p>
          ))}
        </div>
      ))}
    </div>


      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About PerfectPlate <span>-&gt;</span>
          </h2>
          <p>Find out how PerfectPlate can help you.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Weekly Forecast <span>-&gt;</span>
          </h2>
          <p>See what PerfectPlate has in store for you this week!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Your Recap<span>-&gt;</span>
          </h2>
          <p>Explore previous recipes you have made and help us figure out your likes and dislikes</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Customer Reviews <span>-&gt;</span>
          </h2>
          <p>
            See what real people have said about PerfectPlate.
          </p>
        </a>
      </div>
    </main>
  );
}
