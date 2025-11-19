import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';
import ApiTable from '@/components/docs/ApiTable';
import ResponsivePreview from '@/components/docs/ResponsivePreview';
import PerformanceMetrics from '@/components/docs/PerformanceMetrics';
import { motion } from 'motion/react';

function ProductListExample() {
  const items = ['Features', 'Pricing', 'How it Works', 'FAQ', 'Roadmap'];
  return (
    <ul className="space-y-2 p-6 bg-gray-900 text-white">
      {items.map((item) => (
        <li key={item}>
          <motion.a
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-gray-300 hover:text-white transition-colors text-sm"
            whileHover={{ x: 5 }}
            aria-label={item}
          >
            {item}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

export default function ProductListDocs() {
  return (
    <>
      <Seo title="Product List | EA Coder" description="Documentation for the Product footer list including showcase, API, usage, accessibility, responsive testing, and performance." />
      <DocLayout title="Product List" subtitle="Footer list component docs">
        <div className="rounded-xl border bg-card">
          <div className="px-6 pt-6"><h4>Component Showcase</h4></div>
          <div className="px-6 pb-6"><ProductListExample /></div>
        </div>
        <ApiTable rows={[
          { name: 'items', type: 'Array<{ label: string; href: string }>', description: 'Entries rendered inside the unordered list' },
          { name: 'className', type: 'string', defaultValue: 'space-y-2', description: 'Styling for the UL container' },
          { name: 'onItemClick', type: '(label: string, href: string) => void', description: 'Optional click handler for list items' },
          { name: 'aria-label', type: 'string', description: 'Accessible label for links when needed' },
        ]} />
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Usage Guidelines</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Use semantic UL/LI for grouped navigation links</li>
            <li>Keep labels concise and descriptive</li>
            <li>Ensure hover and focus states are clear</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Accessibility</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>UL/LI structure is announced correctly by screen readers</li>
            <li>Links include readable text and optional aria-labels</li>
            <li>Keyboard navigation follows list order</li>
          </ul>
        </div>
        <ResponsivePreview render={() => <ProductListExample />} />
        <PerformanceMetrics />
      </DocLayout>
    </>
  );
}