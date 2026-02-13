import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';
import ApiTable from '@/components/docs/ApiTable';
import ResponsivePreview from '@/components/docs/ResponsivePreview';
import PerformanceMetrics from '@/components/docs/PerformanceMetrics';
import { motion } from 'motion/react';

function ProductExample() {
  const items = ['Features', 'Pricing', 'How it Works', 'FAQ', 'Roadmap'];
  return (
    <ul className="space-y-2 p-6 bg-gray-900 text-white">
      {items.map((item) => (
        <li key={item}>
          <motion.a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors text-sm" whileHover={{ x: 5 }} aria-label={item}>
            {item}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

export default function ProductLanding() {
  return (
    <>
      <Seo title="Product | EACoder AI" description="Product showcase, API, usage, accessibility, responsive tests, and performance for EACoder AI." />
      <DocLayout title="Product" subtitle="Showcase and documentation">
        <div className="rounded-xl border bg-card">
          <div className="px-6 pt-6"><h4>Showcase</h4></div>
          <div className="px-6 pb-6"><ProductExample /></div>
        </div>
        <ApiTable rows={[
          { name: 'label', type: 'string', description: 'Visible text for the item' },
          { name: 'href', type: 'string', description: 'Anchor target for navigation' },
          { name: 'onClick', type: '(e) => void', description: 'Click handler for the link' },
          { name: 'aria-label', type: 'string', description: 'Accessible label for assistive tech' },
        ]} />
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Usage</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Use concise labels that match navigation targets</li>
            <li>Include aria-labels for non-text icons</li>
            <li>Provide hover and focus styles for clarity</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Accessibility</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Links have a 3:1 contrast ratio against background</li>
            <li>Keyboard focus is visible and follows tab order</li>
            <li>ARIA labels describe purpose for assistive tech</li>
          </ul>
        </div>
        <ResponsivePreview render={() => <ProductExample />} />
        <PerformanceMetrics />
      </DocLayout>
    </>
  );
}