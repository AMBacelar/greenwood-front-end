import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.branding}>
          <img
            alt="Greenwood branding"
            className={styles.contentLogo}
            src={"/static/images/logo_white.png"}
          />
        </div>
        <div className={styles.newsletterwrapper}>
          <div className={styles.content}>
            <p>
              TO KEEP UP TO DATE WITH ALL THINGS GREENWOOD, SUBSCRIBE TO OUR
              NEWSLETTER BELOW.
            </p>
          </div>

          <div className={styles.ex}></div>
          <div>
            <InputGroup className={styles.mailingListInput}>
              <FormControl
                placeholder="Enter e-mail address..."
                aria-label="Enter e-mail address..."
              />
              <InputGroup.Append>
                <Button className={styles.subscribe}>Subscribe</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            The Greenwood neighbourhood in Tulsa, Oklahoma is famously known as
            the Black Wall Street. In the early 20th Century, thousands of Black
            Tulsa residents had built a self- sustaining community that
            supported hundreds of Black-owned businesses. The term “Black wall
            street” was popular up until the Tulsa Race Riot of 1921.
          </p>
          <p>
            To once again build a self-sustaining economy within the black
            community in the modern era, we must strive to circulate money
            within our community. To facilitate black businesses, brands and
            services to flourish, the black community must divert a lot more of
            our spending power and interests towards black-owned entities.
          </p>
          <p>
            The Greenwood Network is a platform dedicated to the economic and
            social prosperity of the black community. We do this by bringing
            businesses services and brands to the forefront, helping businesses
            reach a larger audience, offering insights to business owners and
            finally, by investing in those entities. We aim to increase exposure
            for black-owned business while directing customers to the consistent
            quality of product and services provided by the black community.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
