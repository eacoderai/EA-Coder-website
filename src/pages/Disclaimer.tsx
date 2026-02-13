import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Disclaimer() {
  return (
    <>
      <Seo title="Disclaimer | EACoder AI" description="Risk disclaimer and limitations for EACoder AI." />
      <DocLayout title="Disclaimer" subtitle="Important risk information">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Risk</h4>
          <p className="text-sm text-gray-600">Trading involves substantial risk of loss and is not suitable for every investor. EACoder AI does not provide financial advice.</p>
        </div>
      </DocLayout>
    </>
  );
}