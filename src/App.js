import styles from "./app.module.css";
import { Button, Container, Row } from "react-bootstrap";
import { BsDiscord } from "react-icons/bs";
// import { FaTwitter, FaDiscord } from "react-icons/fa";
import { Timer } from "./components/Timer";
import mekaBG from "./assets/images/MEKA_WHITE_BG.png"
import mekaTEXT from "./assets/images/MEKA_WHITE_OFF.svg"
import twitter from "./assets/images/twitter.svg"

function App() {
  return (
    <div className={styles.app}>
      {/* <a href="#" className={styles.link}>
        {" "}
        MEKA PRIMATES{" "}
      </a> */}
      <div className={styles.centerBox}>
        <div className={styles.heading}>
          <div className={styles.bg_text}> <img className={styles.firstIMG} src={mekaBG}/> <img className={styles.secondIMG} src={mekaBG}/> </div>
          {/* <div className={styles.title}> <img src={mekaTEXT}/> </div> */}
        </div>
        <Container className={styles.container}>
          <Timer marginTop="3rem" />
          <div className={styles.bttn_sec}>
            <p className={styles.join}> JOIN OUR NEWSLETTER </p>
            <Button className={styles.bttn}>Connect</Button>
          </div>
        </Container>
      </div>
      <div className={styles.footer}>
        <Row className={styles.row}>
        <a href="https://twitter.com/MekaPrimates" className={styles.icons}><img  src={twitter}/></a>
          {/* <FaTwitter className={styles.icons} /> */}
          {/* <FaDiscord className={styles.icons} /> */}
        </Row>
        <p className={styles.desc}> Brought to you by Cosmic Labs </p>
      </div>
    </div>
  );
}

export default App;
