import './page.css';
import { body } from '../fonts';
import Image from 'next/image';

// import azad from '/about/Azad.png';

const About = () => {
  return (
    <section className={`About`}>
      <div>
        <p className={`About__text`}>
          "The Writings on the Wall" is a politically independent cultural
          project that highlights the struggle for freedom, political, and
          economic democracy. The project aims to provide a unique and
          uncensored voice in the Iranian people's fight against dictatorship
          through live graffiti performances and a digital art exhibition.
        </p>
        <p className='About__text'>
          During the live performance, we utilize the same slogans found on the
          walls of cities in Iran. These slogans often elicit similar reactions
          from the regime, resulting in their removal or alteration to fit their
          own propaganda, thus sparking an ideological battle on the city walls.
        </p>
        <p className='About__text'>
          Another component of the project is a digital art exhibition, which
          serves as a platform for Iranian activists and artists to safely share
          their works with others in Persian, English, and Swedish languages.
        </p>
      </div>
      <section className='azad__section'>
        <div className='azad__ImageContainer'>
          <Image
            src='/about/about.png'
            width='600'
            height='600'
            alt='Azad Larki Profile Photo'
          />
        </div>
        <article className='azad__article'>
          <p>
            <strong>Azad Larki</strong> the initiator of the project is a
            filmmaker and activist based in Stockholm. He was born on April 4,
            2001 in the city of Karaj, located near the capital of Iran, Tehran.
            As a child, he realized that his family's political and religious
            beliefs, as well as their history of fighting against dictatorship
            in Iran, were different from those of his friends and others.
            Unfortunately, his family had lost several relatives who were
            captured and executed by the Islamic Republic after the revolution
            in Iran. The activism history of his family and his fathers
            political activities forced him and his family to flee from Iran
            when Azad was 17 years old.
          </p>
        </article>
      </section>
      <div>
        <p>
          In 2019, Azad and his family arrived in Sweden as asylum seekers. His
          background of standing against the regime of Iran and escaping Iran
          affected him mentally. He felt a desire to express himself and share
          his experiences with others, hoping to change their views about him
          and people in his situation. Luckily, he got in touch with the
          Gothenburg Film Association through a language course he participated
          in. This gave him the opportunity to explore his creative side and
          express himself through film.
        </p>
        <p>
          Although the law made it difficult for him to study in Sweden, Azad
          received a scholarship from Ljungskile Folk High School, which allowed
          him to live and complete his high school education there for free.
          During the two years he studied in Ljungskile, he developed his debut
          short film "Number 11" in which he ventilated his problems by
          describing the bizarre situation of asylum seekers in Sweden, a
          "democratic" country. "Number 11" won three awards at Frame Film
          Festival, Kultur UngdomsFilm Day prize, and Best Screenplay at
          Sweden's Short Film Festival.
        </p>
        <p>
          After two years of studying at Ljungskile Folk High School, Azad
          graduated.Nonetheless, he got the opportunity to start studying a
          course called International Culture Project Leader at Kulturverkstan
          and start working with his new project “The writings on the wall”.
        </p>
      </div>
    </section>
  );
};

export default About;
