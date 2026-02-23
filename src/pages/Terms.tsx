import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Terms() {
  return (
    <>
      <Seo title="Terms of Service | StratAI" description="Terms of service for StratAI." />
      <DocLayout title="Terms of Service" subtitle="Legal agreement">
        <div className="rounded-xl border bg-card px-6 py-6">
          <p className="text-sm text-gray-600">Use of StratAI is subject to these terms. By accessing the platform, you agree to follow these policies.</p>
        </div>
      </DocLayout>
    </>
  );
}
