import Image from "next/image";
import styles from "../app/page.module.css";
import PPLogo from '../../images/PP_logo2.png';
import ProfilePic from '../../images/profile.png';
import Link from 'next/link';
import "../app/globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <nav>
          <ul>
          <Image className={styles.logo} src={PPLogo} alt="PerfectPlate Logo" />
          <h3>PerfectPlate</h3>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#weekly-glance">Weekly Glance</a></li>
          <li><a href="#recap">Recap</a></li>
          <Link href="/login">
            <Image className={styles.prof} src={ProfilePic} alt="Profile Logo" />
          </Link>

        </ul>
        
      </nav>
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

      <div className={styles.weeklySection}>
        <div className={styles.daySection}>
          <h4>Sunday</h4>
          <hr></hr>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
        <div className={styles.daySection}>
          <h4>Monday</h4>
          <hr></hr>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
        <div className={styles.daySection}>
          <h4>Tuesday</h4>
          <hr></hr>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
        <div className={styles.daySection}>
          <h4>Wednesday</h4>
          <hr></hr>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
        <div className={styles.daySection}>
          <h4>Thursday</h4>
          <hr></hr>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
        <div className={styles.daySection}>
          <h4>Friday</h4>
          <hr></hr>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
        <div className={styles.daySection} style={{borderRight: "none"}}>
          <h4>Saturday</h4>
          <hr></hr>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
        </div>
  {/* Repeat the above daySection div for each day of the week */}
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
