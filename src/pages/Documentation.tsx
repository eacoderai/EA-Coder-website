import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Documentation() {
  return (
    <>
      <Seo title="Documentation | EA Coder" description="Documentation for EA Coder website, components, and usage." />
      <DocLayout title="Documentation" subtitle="Guides and references">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Getting Started</h4>
          <p className="text-sm text-gray-600">Install dependencies with npm i, run npm run dev, and explore the builder, examples, and docs pages.</p>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Design System</h4>
          <p className="text-sm text-gray-600">Components under src/components/ui provide accessible, responsive building blocks.</p>
        </div>
      </DocLayout>
    </>
  );
}