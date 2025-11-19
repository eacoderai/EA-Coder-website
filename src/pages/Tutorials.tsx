import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Tutorials() {
  return (
    <>
      <Seo title="Video Tutorials | EA Coder" description="Video tutorials for EA Coder usage and best practices." />
      <DocLayout title="Video Tutorials" subtitle="Learn by watching">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Getting Started</h4>
          <p className="text-sm text-gray-600">Introductory video on setting up the project and exploring the builder.</p>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Building Strategies</h4>
          <p className="text-sm text-gray-600">Overview of creating and testing strategies with EA Coder.</p>
        </div>
      </DocLayout>
    </>
  );
}