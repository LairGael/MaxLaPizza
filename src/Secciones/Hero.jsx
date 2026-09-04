import MaxHero from '../assets/HeroMax.jpg'

function HeroMax() {
  return (
    <section className="heroMax">
      <div className="fondoHeroMax">
        <img src={MaxHero} alt="Max La Pizza" />
      </div>
      <div className="contenidoHeroMax">
        <h1>Tu Pizza.</h1>
        <p>A tu manera</p>
        <div className="barraDegradada"></div>
      </div>
    </section>
  );
}

export default HeroMax;