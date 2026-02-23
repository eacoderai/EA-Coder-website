import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Tutorials() {
  return (
    <>
      <Seo title="Video Tutorials | StratAI" description="Video tutorials for StratAI usage and best practices." />
      <DocLayout title="Video Tutorials" subtitle="Learn how to use the platform">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Introduction</h4>
          <p className="text-sm text-gray-600">Overview of creating and testing strategies with StratAI.</p>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Building Strategies</h4>
          <p className="text-sm text-gray-600">Overview of creating and testing strategies with StratAI.</p>
        </div>
      </DocLayout>
    </>
  );
}
