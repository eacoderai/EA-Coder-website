import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Cookies() {
  return (
    <>
      <Seo title="Cookie Policy | EA Coder" description="Cookie usage and preferences for EA Coder." />
      <DocLayout title="Cookie Policy" subtitle="How we use cookies">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Usage</h4>
          <p className="text-sm text-gray-600">We use cookies for authentication and analytics. You can manage preferences in your browser settings.</p>
        </div>
      </DocLayout>
    </>
  );
}