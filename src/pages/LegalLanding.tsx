import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';
import ApiTable from '@/components/docs/ApiTable';
import ResponsivePreview from '@/components/docs/ResponsivePreview';
import PerformanceMetrics from '@/components/docs/PerformanceMetrics';
import { motion } from 'motion/react';

function LegalExample() {
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

export default function LegalLanding() {
  return (
    <>
      <Seo title="Legal | StratAI" description="Legal showcase, API, usage, accessibility, responsive tests, and performance for StratAI." />
      <DocLayout title="Legal" subtitle="Showcase and documentation">
        <div className="rounded-xl border bg-card">
          <div className="px-6 pt-6"><h4>Showcase</h4></div>
          <div className="px-6 pb-6"><LegalExample /></div>
        </div>
        <ApiTable rows={[
          { name: 'label', type: 'string', description: 'Visible text for the item' },
          { name: 'href', type: 'string', description: 'Destination URL or anchor' },
          { name: 'onClick', type: '(e) => void', description: 'Click handler for link' },
          { name: 'aria-label', type: 'string', description: 'Accessible label for assistive tech' },
        ]} />
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Usage</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Link to canonical policy pages</li>
            <li>Keep content up to date and versioned</li>
            <li>Provide contact details for requests</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Accessibility</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Readable text sizes and contrast</li>
            <li>Structured headings for assistive tech</li>
            <li>Keyboard navigable links</li>
          </ul>
        </div>
        <ResponsivePreview render={() => <LegalExample />} />
        <PerformanceMetrics />
      </DocLayout>
    </>
  );
}
