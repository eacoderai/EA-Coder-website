import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Disclaimer() {
  return (
    <>
      <Seo title="Disclaimer | EA Coder" description="Risk disclaimer and limitations for EA Coder." />
      <DocLayout title="Disclaimer" subtitle="Important risk information">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Risk</h4>
          <p className="text-sm text-gray-600">Trading involves substantial risk of loss and is not suitable for every investor. EA Coder does not provide financial advice.</p>
        </div>
      </DocLayout>
    </>
  );
}