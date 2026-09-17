import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="header">
        <Link href="/" className="logo">VELORA <span>COFFEE ATELIER</span></Link>
        <nav>
          <a href="#spezialitaeten">Spezialitäten</a>
          <a href="#philosophie">Über uns</a>
          <a href="#galerie">Galerie</a>
          <a href="#besuch">Besuch</a>
        </nav>
        <a className="button dark" href="#besuch">Tisch reservieren ↗</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">SPECIALTY COFFEE · HANDMADE PATISSERIE</p>
          <h1>Kaffee, der bleibt.<br /><i>Momente,</i><br />die verbinden.</h1>
          <p className="intro">
            Sorgfältig ausgewählte Bohnen, handgemachte Patisserie und eine
            Atmosphäre, in der man gerne länger bleibt.
          </p>
          <div className="actions">
            <a className="button dark" href="#spezialitaeten">Unsere Spezialitäten ↗</a>
            <a className="underlined" href="#besuch">Tisch reservieren ↗</a>
          </div>
          <div className="meta">⌖ München <span>Mo–Fr 07:30–19:00<br />Sa–So 08:30–20:00</span></div>
        </div>
        <div className="hero-image">
          <div className="image-caption">EIN KLEINER MOMENT. GANZ FÜR SIE.</div>
          <div className="round-note">Mit Liebe<br /><i>gemacht.</i></div>
        </div>
      </section>

      <section id="spezialitaeten" className="cream">
        <p className="eyebrow">GUTER KAFFEE. GUTES GEFÜHL.</p>
        <h2>Kaffee. Handwerk. <i>Atmosphäre.</i></h2>
        <p>Ein Ort für besondere Kaffeemomente, handgemachte Patisserie und entspannte Begegnungen.</p>
        <div className="products">
          <article><b>01</b><h3>Velora Signature Latte</h3><p>Sanft, cremig, mit Noten von Haselnuss.</p><strong>€ 5,20</strong></article>
          <article><b>02</b><h3>Espresso Tonic</h3><p>Frisch, prickelnd und überraschend klar.</p><strong>€ 4,80</strong></article>
          <article><b>03</b><h3>Pistazien-Croissant</h3><p>Butterteig, Pistaziencreme, Meersalz.</p><strong>€ 4,60</strong></article>
        </div>
      </section>

      <section id="philosophie" className="philosophy">
        <div><p className="eyebrow">VOM URSPRUNG BIS ZUR TASSE</p><h2>Jede Tasse hat<br /><i>ihren Moment.</i></h2><p>100 % Arabica aus lokaler Rösterei. Jeden Morgen frisch gebacken, von Hand und mit Respekt vor jedem Produkt.</p><div className="stats"><span><b>100 %</b> Arabica</span><span><b>Local</b> Roasting</span><span><b>Daily</b> Handmade</span></div></div>
        <div className="pastry"></div>
      </section>

      <section id="galerie" className="gallery"><p className="eyebrow">EINBLICKE</p><h2>So fühlt sich <i>Velora</i> an.</h2><div className="gallery-grid"><div className="gallery-main"></div><div className="gallery-small"></div><blockquote>„Nehmen Sie sich Zeit.<br /><i>Sie schmeckt gut.“</i></blockquote></div></section>

      <section id="besuch" className="visit"><div><p className="eyebrow">BESUCHEN SIE UNS</p><h2>Ihr Lieblingsplatz<br /><i>wartet bereits.</i></h2><p>Türkenstraße 42 · München<br />hallo@velora.cafe</p><a className="button dark" href="mailto:hallo@velora.cafe">Tisch reservieren ↗</a></div><div className="map">⌖<br /><b>VELORA</b><span>Türkenstraße 42<br />München</span></div></section>

      <footer><div className="logo">VELORA <span>COFFEE ATELIER</span></div><p>Fiktives Website-Konzept. Name, Inhalte und Bildmaterial dienen ausschließlich der Präsentation.</p></footer>
    </main>
  );
}
