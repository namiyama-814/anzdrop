export const runtime = "edge";

export default function Home() {
  return (
    <main style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0070f3' }}>ANZDROP 稼働中！</h1>
      <p>GitHub連携による自動デプロイに成功しました。</p>
      <p style={{ fontSize: '0.8rem', color: '#666' }}>
        最終更新: {new Date().toLocaleString('ja-JP')}
      </p>
    </main>
  );
}