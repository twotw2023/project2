import Hero from './components/Hero';
import './page.css';

export default function Home() {
  return (
    <section className='home'>
      <Hero />
      <div className='home__Welcome'>
        <h2>Welcome to "The Writings on the Wall" Project</h2>
        <p>
          Discover the untold stories of Iran's fight for freedom and democracy
          through art and expression.
        </p>
      </div>
    </section>
  );
}
