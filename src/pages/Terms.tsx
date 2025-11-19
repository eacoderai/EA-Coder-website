import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Terms() {
  return (
    <>
      <Seo title="Terms of Service | EA Coder" description="Terms of service for EA Coder." />
      <DocLayout title="Terms of Service" subtitle="Agreement and usage policies">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Agreement</h4>
          <p className="text-sm text-gray-600">Use of EA Coder is subject to these terms. By accessing the platform, you agree to follow these policies.</p>
        </div>
      </DocLayout>
    </>
  );
}