
import styles from "../app/page.module.css";
import PPLogo from '../../images/PP_logo2.png';
import ProfilePic from '../../images/profile.png';


export default function NavBar() {

        return      <div className={styles.description}>
        <nav>
            <ul>
            <Image className={styles.logo} src={PPLogo} alt="PerfectPlate Logo" />
            <h3>PerfectPlate</h3>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#weekly-glance">Weekly Glance</a></li>
            <li><a href="#recap">Recap</a></li>
            <Image className={styles.prof} src={ProfilePic} alt="Profile Logo" />
            <li><a href="login.js">Login</a></li>
            </ul>
        </nav>
    </div>
}