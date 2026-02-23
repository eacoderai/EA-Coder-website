import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Documentation() {
  return (
    <>
      <Seo title="Documentation | StratAI" description="Product and codebase documentation for the StratAI website." />
      <DocLayout title="Documentation" subtitle="Guides and references">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Getting Started</h4>
          <p className="text-sm text-gray-600">Install dependencies with npm i, run npm run dev, then explore the Builder, Examples, and Docs pages.</p>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Design System</h4>
          <p className="text-sm text-gray-600">Components under src/components/ui provide accessible, responsive building blocks.</p>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Strategy Engine</h4>
          <p className="text-sm text-gray-600">Use Strategy Planner to create structured rules and Code Engine to generate executable logic (MQL4, MQL5, Pine Script).</p>
        </div>
      </DocLayout>
    </>
  );
}
