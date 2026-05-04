import Layout from '@/components/layout/Layout';
import PageHero from '@/components/shared/PageHero';

export default function TNElectionPage() {
  return (
    <Layout>
      <PageHero
        tagline="TN Election 2026"
        title="Tamil Nadu Election 2026"
        description="Stay updated with the latest news, insights, and analysis on the Tamil Nadu Election 2026."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'TN Election 2026', href: '/tnresult2026' },
        ]}
      />

      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Content coming soon. Stay tuned!</p>
      </section>
    </Layout>
  );
}
