import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1>Article Not Found</h1>
      <p>The article you&apos;re looking for doesn&apos;t exist. Please go back to Home.</p>
      <Link href="/articles" style={{ color: '#07417d', textDecoration: 'underline' }}>
        Return to Articles
      </Link>
    </div>
  );
}
