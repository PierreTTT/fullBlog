import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/dog.png" alt="My Dog" width={300} height={300} />
      </div>
      <h1>Hi, I am Luke</h1>
      <p>Weekly nutrition knowledge You wish you knew</p>
    </section>
  );
}

export default Hero;
