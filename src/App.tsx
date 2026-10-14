import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpg";
import isimbi2 from "./assets/isimbi2.jpeg";
import arsene from "./assets/arsene.jpeg";
import gallery1 from "./assets/gallery1.jpeg";
import gallery2 from "./assets/gallery2.jpeg";
import gallery3 from "./assets/gallery3.jpeg";
import gallery4 from "./assets/gallery4.jpeg";
import gallery5 from "./assets/gallery5.jpeg";
import gallery6 from "./assets/gallery6.jpg";



const photos = {
  hero: photo1,
  storyOne: photo4,
  storyTwo: photo3,
  bride: isimbi2,
  groom: arsene,
  gallery: [
    gallery1,
gallery2,
gallery3,
gallery4,
gallery5,
gallery6, 
  ],
};

type IconName =
  | "arrow"
  | "calendar"
  | "clock"
  | "close"
  | "gift"
  | "heart"
  | "hotel"
  | "instagram"
  | "location"
  | "mail"
  | "menu"
  | "music"
  | "pause"
  | "play"
  | "route"
  | "church"
  | "camera"
  | "cheers";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    calendar: <><path d="M5 3v3m14-3v3M3 9h18M5 5h14a2 2 0 0 1 2 2v13H3V7a2 2 0 0 1 2-2Z" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    gift: <><path d="M3 10h18v11H3zM2 7h20v3H2zM12 7v14" /><path d="M12 7H8.5A2.5 2.5 0 1 1 11 4.5V7Zm0 0h3.5A2.5 2.5 0 1 0 13 4.5V7Z" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    hotel: <><path d="M4 21V4h16v17M8 8h2m4 0h2M8 12h2m4 0h2M9 21v-5h6v5M2 21h20" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    music: <><path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" /></>,
    pause: <path d="M8 5v14m8-14v14" />,
    play: <path d="m8 5 11 7-11 7Z" />,
    route: <><circle cx="5" cy="18" r="2" /><circle cx="19" cy="6" r="2" /><path d="M7 18h4a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" /></>,
   church: <><path d="M3 21V9l9-6 9 6v12H3Z" /><path d="M9 21v-6h6v6" /><path d="M12 3v4M10 5h4" /><circle cx="12" cy="11" r="1" /></>,
   camera: <><path d="M3 7h3l2-2h8l2 2h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" /><circle cx="12" cy="13" r="3.5" /></>,
   cheers: <><path d="M8 9H5a2 2 0 0 0-2 2v3a5 5 0 0 0 5 5h1V9Z" /><path d="M16 9h3a2 2 0 0 1 2 2v3a5 5 0 0 1-5 5h-1V9Z" /><path d="M5 19h3M16 19h3M12 9l1 3M12 9l-1 3" /></>,
  };
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function SectionTitle({ eyebrow, children, light = false }: { eyebrow: string; children: ReactNode; light?: boolean }) {
  return (
    <div className={`section-title ${light ? "section-title--light" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{children}</h2>
      <i />
    </div>
  );
}

function Button({ children, href, type = "button", onClick, variant = "dark" }: {
  children: ReactNode; href?: string; type?: "button" | "submit"; onClick?: () => void; variant?: "dark" | "light" | "outline";
}) {
  const className = `button button--${variant}`;
  return href ? <a href={href} className={className}>{children}<Icon name="arrow" size={16} /></a> : (
    <button className={className} type={type} onClick={onClick}>{children}<Icon name="arrow" size={16} /></button>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="field"><span>{label}</span>{children}</label>;
}

const story = [
  ["01", "How we met", "We were young, we were growing, and neither of us knew that we had already met the person who would become home."],
  ["02", "14 November 2020", "Something changed that day, we just knew. Somehow, we were meant to be together, and so our story began. We grew together, laughed together, learned each other, and chose each other, again and again."],
  ["03", "24 April 2026", "We said YES to the next chapter. An engagement. A promise. A future. And now..."],
  ["04", "26 December 2026", "We get to make that promise before God, our families, and the people we love. What started in high school has brought us here. To always. To forever."],
];

const faqs = [
  ["What time should I arrive?", "Please arrive 30 minutes before the ceremony begins, allowing plenty of time to be seated."],
  ["Are children invited?", "Yes, of course! Children are a blessing and are very welcome to celebrate with us. We just kindly ask you to keep them close with you."],
  ["May I bring a plus-one?", " Yes! We would love for you to share this day with your loved one."],
  ["What should I wear?", "Our dress code is Formal. We invite you to wear elegant, timeless attire in soft, romantic tones. Please avoid jeans. We look forward to celebrating with you!"],
  ["Is transport available?", "Yes! For transport arrangements, please contact the respective coordinators:\n\n\Isimbi’s side: 0781 635 574\n\nArsene’s side: 0788 415 963\n\nPlease contact the appropriate coordinator for more information about transport arrangements. We look forward to celebrating with you!"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [countdown, setCountdown] = useState({ days: "000", hours: "00", minutes: "00", seconds: "00" });
  const audioContext = useRef<AudioContext | null>(null);
  const musicTimer = useRef<number | null>(null);

  useEffect(() => {
    // Replace this editable placeholder date with the couple's actual wedding date.
    const target = new Date("2026-12-26T10:00:00");
    const tick = () => {
      const distance = Math.max(0, target.getTime() - Date.now());
      setCountdown({
        days: String(Math.floor(distance / 86400000)).padStart(3, "0"),
        hours: String(Math.floor((distance / 3600000) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((distance / 60000) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((distance / 1000) % 60)).padStart(2, "0"),
      });
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => {
      window.clearInterval(timer);
      if (musicTimer.current !== null) window.clearInterval(musicTimer.current);
    };
  }, []);

  const toggleMusic = async () => {
    if (!musicOn) {
      const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioContext.current || new AudioCtx();
      audioContext.current = ctx;
      await ctx.resume();
      const playPhrase = () => {
        [220, 277.18, 329.63].forEach((frequency, index) => {
          const oscillator = ctx.createOscillator();
          const gain = ctx.createGain();
          oscillator.type = "sine";
          oscillator.frequency.value = frequency;
          gain.gain.setValueAtTime(0.0001, ctx.currentTime + index * 0.45);
          gain.gain.exponentialRampToValueAtTime(0.012, ctx.currentTime + index * 0.45 + 0.15);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + index * 0.45 + 3.8);
          oscillator.connect(gain).connect(ctx.destination);
          oscillator.start(ctx.currentTime + index * 0.45);
          oscillator.stop(ctx.currentTime + index * 0.45 + 4);
        });
      };
      playPhrase();
      musicTimer.current = window.setInterval(playPhrase, 6200);
    } else if (musicTimer.current !== null) {
      window.clearInterval(musicTimer.current);
      musicTimer.current = null;
    }
    setMusicOn((value) => !value);
  };

  const navItems = useMemo(() => [
    ["Story", "#story"], ["Schedule", "#schedule"], ["Venue", "#venue"], ["Gallery", "#gallery"], ["FAQ", "#faq"],
  ], []);

  const submitRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setFormStatus(form.get("name") && form.get("attendance") ? "success" : "error");
  };

  return (
    <div className="site-shell">
      <main className="phone">
        <header className="topbar">
          <a className="monogram" href="#home" aria-label="Back to top">A<span>&</span>I</a>
          <button className="icon-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
          <nav className={menuOpen ? "nav nav--open" : "nav"}>
            <p>Navigate</p>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<Icon name="arrow" /></a>)}
          </nav>
        </header>

        <section className="hero" id="home">
          <img src={photos.hero} alt="A couple sharing a quiet moment on their wedding day" />
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="overline">Together with our families</p> <br/> <br/><br/> <br/><br/> 
            <h1><span>Arsene </span>&<span>ISIMBI</span></h1>
            <div className="hero-rule"><i /><Icon name="heart" size={13} /><i /></div>
            <p className="date" style={{ letterSpacing: "6px", fontSize: "15px", fontWeight: "bold" }}>26 · 12 · 2026</p>
            <p className="invitation">Joyfully invite you to celebrate<br />the beginning of their forever</p>
            <a href="#welcome" className="explore">Explore our day</a>
          </div>
          <span className="hero-side">The beginning of forever</span>
        </section>

        <section className="welcome section-pad" id="welcome">
          <span className="script">With love,</span>
          <h2>We’re getting married</h2>
          <p>It would mean the world to have you beside us as we exchange our vows and begin our greatest adventure yet.</p>
          <div className="flourish">A <i>♥</i> I</div>
        </section>

        <section className="countdown">
          <SectionTitle eyebrow="Save the date" light>Until we say “I do”</SectionTitle>
          <div className="count-grid">
            {Object.entries(countdown).map(([label, value]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <p>Dec 26th, 2026 · AT PYRAMIDAL GARDEN (GAHANGA)</p>
        </section>

        <section className="story section-pad" id="story">
          <SectionTitle eyebrow="Chapter by chapter">Our love story</SectionTitle>
          <div className="story-collage">
            <img src={photos.storyOne} alt="Couple embracing" />
            <img src={photos.storyTwo} alt="Couple smiling together" />
            <span>DEC<br />2026</span>
          </div>
          <div className="timeline">
            {story.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="couple">
          <SectionTitle eyebrow="Better together">it was always us</SectionTitle>
          <article className="person">
            <img src={photos.bride} alt="Bride portrait placeholder" />
            <div><span>The bride</span><h3>Isimbi</h3><p>A woman of joy, grace, and endless laughter. She loves deeply, dreams boldly, and believes love is meant to be celebrated.</p></div>
          </article>
          <article className="person person--reverse">
            <img src={photos.groom} alt="Groom portrait placeholder" />
            <div><span>The groom</span><h3>Arsene</h3><p>A man of faith, love, and loyalty. He leads with kindness, loves with his whole heart, and has found his forever in her.</p></div>
          </article>
        </section>

        <section className="schedule section-pad" id="schedule">
          <SectionTitle eyebrow="The celebration">Wedding schedule</SectionTitle>
          <p className="intro">We can’t wait to celebrate every beautiful moment with you.</p>
          <div className="schedule-list">
            {[
              ["01", "Introduction & Dowry", "09:00 AM", "Pyramidal Garden Slightly after Nyanza Bus Station", "calendar"],
              ["02", "Church Wedding", "03:00 PM", "New Life Bible Church", "church"],
              ["03", "Portraits & Photos", "05:00 PM", "Pyramidal Garden", "camera"],
              ["04", "Reception Wedding", "06:00 PM", "Pyramidal Garden", "music"],
            ].map(([number, title, time, place, icon]) => (
              <article key={number}>
                <span className="schedule-number">{number}</span>
                <div className="schedule-icon"><Icon name={icon as IconName} size={20} /></div>
                <div><h3>{title}</h3><p>{time}</p><small>{place}</small></div>
              </article>
            ))}
          </div>
        </section>

        <section className="venue" id="venue">
          <div className="map-pattern"><Icon name="location" size={38} /><span>LOCATION</span></div>
          <div className="venue-card">
            <SectionTitle eyebrow="Meet us there">The venue</SectionTitle>
            <h3>Pyramidal Garden</h3>
            <p>GAHANGA<br /></p>
            {/* <div className="venue-detail"><Icon name="route" /><div><strong>Getting there</strong><span>[Add directions, landmarks or shuttle notes.]</span></div></div>
            <div className="venue-detail"><Icon name="location" /><div><strong>Parking</strong><span>[Add valet, parking or accessibility details.]</span></div></div> */}
           <Button 
  variant="outline"
  onClick={() => window.open("https://www.google.com/maps/place/X4Q3%2BQM+Pyramidal+Garden,+KK+15+Rd,+Kigali/@-2.0091853,30.1016781,16z/data=!4m6!3m5!1s0x19dca90028c8ee63:0x9c5af20c5ecab706!8m2!3d-2.0091853!4d30.1016781!16s%2Fg%2F11z0547r_n?g_ep=Eg1tbF8yMDI2MTAxMV8wIJvbDyoASAJQAg%3D%3D", "_blank")}
>
  Open in maps
</Button>
          </div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <SectionTitle eyebrow="A few favourites">Captured moments</SectionTitle>
          <div className="gallery-grid">
            {photos.gallery.map((photo, index) => (
              <button key={photo} onClick={() => setLightbox(photo)} aria-label={`Expand gallery image ${index + 1}`}>
                <img src={photo} alt={`Wedding inspiration ${index + 1}`} />
              </button>
            ))}
          </div>
          <p>Tap any photograph to take a closer look</p>
        </section>

        <section className="dress-code section-pad">
          <SectionTitle eyebrow="Dressed in love" light>Dress code</SectionTitle>
          <div className="dress-frame">
            <span className="script">Formal</span>
            <h3>Your chosen attire</h3>
            <p>We invite you to dress in timeless silhouettes and soft, romantic tones. Please avoid jeans.</p>
            <div className="swatches" aria-label="Suggested colour palette">
              {["Ivory", "Champagne", "Blush", "Sage", "Cocoa", "Purple" ].map((colour, i) => <span key={colour} className={`swatch swatch--${i}`} title={colour} />)}
            </div>
            <small>Our palette · ivory · champagne · blush · sage . Purple</small>
          </div>
        </section>

        {/* <section className="rsvp section-pad" id="rsvp">
          <SectionTitle eyebrow="Kindly respond">Répondez s’il vous plaît</SectionTitle>
          <p className="intro">Please reply by [RSVP date]. We hope you can join us.</p>
          <form onSubmit={submitRsvp} noValidate>
            <Field label="Guest name *"><input name="name" placeholder="Your full name" /></Field>
            <Field label="Will you be joining us? *">
              <select name="attendance" defaultValue=""><option value="" disabled>Select your response</option><option>Joyfully accepts</option><option>Regretfully declines</option></select>
            </Field>
            <div className="form-row">
              <Field label="Guests"><select name="guests" defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4</option></select></Field>
              <Field label="Meal preference"><select name="meal" defaultValue=""><option value="" disabled>Select</option><option>Meat</option><option>Fish</option><option>Vegetarian</option><option>Vegan</option></select></Field>
            </div>
            <Field label="Dietary requirements"><input name="dietary" placeholder="Allergies or special requests" /></Field>
            <Field label="A note for the couple"><textarea name="message" rows={4} placeholder="Share a wish, a song request, or a little love…" /></Field>
            {formStatus === "success" && <div className="form-message form-message--success"><Icon name="heart" /> Thank you. Your response has been beautifully received.</div>}
            {formStatus === "error" && <div className="form-message form-message--error">Please add your name and attendance response before sending.</div>}
            <Button type="submit">Send my RSVP</Button>
          </form>
        </section> */}
{/* 
        <section className="travel section-pad">
          <SectionTitle eyebrow="Plan your stay">Travel & accommodation</SectionTitle>
          <div className="travel-card">
            <Icon name="hotel" size={25} />
            <span>Recommended stay</span>
            <h3>[Hotel name]</h3>
            <p>[Hotel address]<br />Use code <strong>[WEDDING CODE]</strong> when booking.</p>
            <a href="#">View accommodation <Icon name="arrow" size={15} /></a>
          </div>
          <div className="travel-card">
            <Icon name="route" size={25} />
            <span>Getting around</span>
            <h3>Guest transport</h3>
            <p>[Add airport, train, taxi and wedding-day shuttle information for your guests.]</p>
            <a href="#">See travel details <Icon name="arrow" size={15} /></a>
          </div>
        </section> */}

        <section className="registry section-pad">
          <Icon name="gift" size={28} />
          <SectionTitle eyebrow="Your presence is our present">Gift registry</SectionTitle>
          <p>Your presence at our wedding is the greatest gift we could receive.</p> <br/>

<p>For those who have asked how to bless us as we begin this new chapter, we’ve created a Honeymoon & New Beginnings Fund. Your love and support will help us build lasting memories and start our life together with joy and intention.</p> <br/>

<p>For those who wish to contribute, gifts may be sent via:</p>
<br/>
          
<div className="registry-links">
  <Button
    variant="outline"
    onClick={() => {
      window.location.href = "tel:*182*1*1*0788753696%23";
    }}
  >
    Mobile Money
  </Button>

   <Button
  variant="outline"
  onClick={() => {
    alert(
      "Bank: Zigama CSS\n" +
      "Account Number: 7073026\n\n" +
      "Please use this account for our wedding contribution."
    );

    window.open(
      "https://ebanking.zigamacss.rw/itb",
      "_blank"
    );
  }}
>
  Zigama CSS
</Button>
</div>


        </section>

        <section className="faq section-pad" id="faq">
          <SectionTitle eyebrow="Good to know">Frequently asked</SectionTitle>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  <span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><i>{openFaq === index ? "−" : "+"}</i>
                </button>
                <div className={openFaq === index ? "faq-answer faq-answer--open" : "faq-answer"}>
  {question === "Is transport available?" ? (
    <p>
      Yes! For transport arrangements, please contact the respective coordinators.
      <br /><br />
      Isimbi’s side:{" "}
      <a href="tel:+250781635574">0781 635 574</a>
      <br /><br />
      Arsene’s side:{" "}
      <a href="tel:+250788415963">0788 415 963</a>
      <br /><br />
      Please contact the appropriate coordinator for more information about transport arrangements. We look forward to celebrating with you!
    </p>
  ) : (
    <p>{answer}</p>
  )}
</div>
              </article>
            ))}
          </div>
        </section>

        <footer>
          <span className="script">See you there</span>
          <h2>Arsene <em>&</em> Isimbi</h2>
          <p>We cannot wait to celebrate this beautiful beginning with the people we love most.</p>
          
<div className="footer-contact">
  <span>Questions? Contact the Bride or Groom</span>

  <div className="contact-person">
    <strong>ARSENE</strong>
    <div className="contact-actions">
      <a className="contact-btn call-btn" href="tel:0788753696">
        <Icon name="phone" /> Call
      </a>
      <a
        className="contact-btn whatsapp-btn"
        href="https://wa.me/250788753696"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="message-circle" /> WhatsApp
      </a>
    </div>
  </div>

  <div className="contact-person">
    <strong>ISIMBI</strong>
    <div className="contact-actions">
      <a className="contact-btn call-btn" href="tel:0785751834">
        <Icon name="phone" /> Call
      </a>
      <a
        className="contact-btn whatsapp-btn"
        href="https://wa.me/250785751834"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="message-circle" /> WhatsApp
      </a>
    </div>
  </div>
</div>

          <div className="footer-bottom"><span>DEC 26, 2026</span><Icon name="heart" size={12} /><span>Pyramidal Garden</span></div>
        </footer>

        {/* <button className={musicOn ? "music-control music-control--on" : "music-control"} onClick={toggleMusic} aria-label={musicOn ? "Pause music" : "Play music"}>
          <Icon name={musicOn ? "pause" : "play"} size={13} /><span>{musicOn ? "Playing" : "Music"}</span>
        </button> */}
      </main>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded photograph" onClick={() => setLightbox(null)}>
          <button aria-label="Close photograph"><Icon name="close" size={22} /></button>
          <img src={lightbox} alt="Expanded wedding inspiration" />
        </div>
      )}
    </div>
  );
}

export default App;
