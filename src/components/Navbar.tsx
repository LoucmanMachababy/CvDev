import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #eee', marginBottom: '2rem' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Accueil</Link>
      <Link href="/cv" style={{ marginRight: '1rem' }}>CV</Link>
      <Link href="/about" style={{ marginRight: '1rem' }}>À propos</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
} 