import styles from './HeroStyle.module.css'
import heroImg from '../../assets/profile.jpeg'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'
import emailDark from '../../assets/EMAIL.C.png'
import emailLight from '../../assets/email.png'
import githubDark from '../../assets/Github (2).png'
import githubLight from '../../assets/github.png'
import linkedinDark from '../../assets/LinkedIn (2).png'
import linkedinLight from '../../assets/linkedin.png'
import CV from '../../assets/MUSHAHIDCV.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
  const {theme, toggleTheme} =useTheme();


  const themeIcon = theme === 'light' ? sun : moon;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}><img className={styles.hero} src={heroImg} alt="Profile Picture" />
    <img className={styles.colorMode} src={themeIcon} alt="color mode icon " onClick={toggleTheme}/>
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