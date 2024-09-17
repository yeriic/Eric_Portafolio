import Layout from '../app/layout'
import Link from 'next/link';

export default function Home() {
  return (
      <div className="container">
        <div className="card">
          <h1 className="title">Portafolio de Eric &lt;/&gt;</h1>
          <div className="link-button-container">
            <Link href="/presentacion"> 
            <div className="link-button">Ver</div>
            </Link>
          </div>
        </div>
      </div>
  );
}
