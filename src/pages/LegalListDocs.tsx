import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';
import ApiTable from '@/components/docs/ApiTable';
import ResponsivePreview from '@/components/docs/ResponsivePreview';
import PerformanceMetrics from '@/components/docs/PerformanceMetrics';
import { motion } from 'motion/react';

function LegalListExample() {
  const items = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer', 'Contact Us'];
  return (
    <ul className="space-y-2 p-6 bg-gray-900 text-white">
      {items.map((item) => (
        <li key={item}>
          <motion.a href="#" className="text-gray-300 hover:text-white transition-colors text-sm" whileHover={{ x: 5 }} aria-label={item}>
            {item}
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

export default function LegalListDocs() {
  return (
    <>
      <Seo title="Legal List | StratAI" description="Documentation for the Legal footer list including showcase, API, usage, accessibility, responsive testing, and performance." />
      <DocLayout title="Legal List" subtitle="Footer list component docs">
        <div className="rounded-xl border bg-card">
          <div className="px-6 pt-6"><h4>Component Showcase</h4></div>
          <div className="px-6 pb-6"><LegalListExample /></div>
        </div>
        <ApiTable rows={[
          { name: 'items', type: 'Array<{ label: string; href: string }>', description: 'Entries rendered inside the unordered list' },
          { name: 'className', type: 'string', defaultValue: 'space-y-2', description: 'Styling for the UL container' },
          { name: 'onItemClick', type: '(label: string, href: string) => void', description: 'Optional click handler for list items' },
          { name: 'href policy', type: 'string', description: 'Canonical URLs for legal documents' },
        ]} />
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Usage Guidelines</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Link to up-to-date canonical policy pages</li>
            <li>Version legal content when appropriate</li>
            <li>Provide contact for requests and inquiries</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Accessibility</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Readable text and adequate contrast</li>
            <li>Structured headings for assistive technologies</li>
            <li>Keyboard accessible links and focus order</li>
          </ul>
        </div>
        <ResponsivePreview render={() => <LegalListExample />} />
        <PerformanceMetrics />
      </DocLayout>
    </>
  );
}
