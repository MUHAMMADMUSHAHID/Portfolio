import styles from './HeroStyle.module.css'
import heroImg from '../../assets/profile.jpeg'
import themeIcon from '../../assets/moon.png'
import emailIcon from '../../assets/email.png'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import CV from '../../assets/MUSHAHIDCV.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
  const {theme, toggleTheme} =useTheme();
  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}><img className={styles.hero} src={heroImg} alt="Profile Picture" />
    <img className={styles.colorMode} src={themeIcon} alt="color mode icon " />
    </div>
    <div className={styles.info}>
      <h1>MUHAMMADMUSHAHID <br /> MAKANDAR</h1>
      <h2>Full Stack Developer</h2>
      <span>
        <a href="shahidmad669@gamil.com" target='_blank'>
          <img src={emailIcon} alt="" />
        </a>
        <a href="https://github.com/MUHAMMADMUSHAHID" target='_blank'>
          <img src={githubIcon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/muhammadmushahid-makandar-96bb84247/" target='_blank'>
          <img src={linkedinIcon} alt="" />
        </a>
      </span>
      <p>with a passion for developing modern React wen apps for commercial businesses.</p>
      <a href={CV} download>
        <button className="hover" >Resume</button>
      </a>

    </div>
  </section>
}

export default Hero