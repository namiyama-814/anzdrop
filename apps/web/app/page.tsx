export const runtime = "edge";

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif' 
    }}>
      <h1>ANZDROP へようこそ</h1>
      <p>Next.js + Cloudflare Pages で爆速デプロイ成功！</p>
      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>
        現在、このページは <strong>Edge Runtime</strong> で動作しています。
      </div>
    </main>
  );
}