import styles from "./style";
import { Billing, Pricing, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero, Features } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Features/>
        <Billing />
        <CardDeal />
        <Pricing/>
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
