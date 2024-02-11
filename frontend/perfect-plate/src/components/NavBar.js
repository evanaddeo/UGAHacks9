import styles from "../app/page.module.css";
import PPLogo from '../../images/PP_logo2.png';
import ProfilePic from '../../images/profile.png';
import Image from "next/image";
import Link from 'next/link';


export default function NavBar() {

        return      <div className={styles.description}>
        <nav>
            <ul>
            <Image className={styles.logo} src={PPLogo} alt="PerfectPlate Logo" />
            <h3>PerfectPlate</h3>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/weekly">Weekly Glance</a></li>
            <li><a href="/recap">Recap</a></li>
            <Link href="/login">
            <Image className={styles.prof} src={ProfilePic} alt="Profile Logo" />
            </Link>
            </ul>
        </nav>
    </div>
}