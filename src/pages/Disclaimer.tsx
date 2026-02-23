import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';

export default function Disclaimer() {
  return (
    <>
      <Seo title="Disclaimer | StratAI" description="Risk disclaimer and limitations for StratAI." />
      <DocLayout title="Disclaimer" subtitle="Important risk information">
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-2">Risk</h4>
          <p className="text-sm text-gray-600">StratAI generates strategy logic using AI. This is not financial advice. Test thoroughly before live use.</p>
        </div>
      </DocLayout>
    </>
  );
}
