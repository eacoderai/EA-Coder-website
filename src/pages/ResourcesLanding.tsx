import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';
import ApiTable from '@/components/docs/ApiTable';
import ResponsivePreview from '@/components/docs/ResponsivePreview';
import PerformanceMetrics from '@/components/docs/PerformanceMetrics';
import { motion } from 'motion/react';

function ResourcesExample() {
  const items = ['Documentation', 'API Reference', 'Example Strategies', 'Video Tutorials', 'Community'];
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

export default function ResourcesLanding() {
  return (
    <>
      <Seo title="Resources | StratAI" description="Resources showcase, API, usage, accessibility, responsive tests, and performance for StratAI." />
      <DocLayout title="Resources" subtitle="Showcase and documentation">
        <div className="rounded-xl border bg-card">
          <div className="px-6 pt-6"><h4>Showcase</h4></div>
          <div className="px-6 pb-6"><ResourcesExample /></div>
        </div>
        <ApiTable rows={[
          { name: 'label', type: 'string', description: 'Visible text for the link' },
          { name: 'href', type: 'string', description: 'Destination URL or anchor' },
          { name: 'onClick', type: '(e) => void', description: 'Custom click behavior' },
          { name: 'aria-label', type: 'string', description: 'Accessible label for link purpose' },
        ]} />
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Usage</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Group related resources by topic</li>
            <li>Prefer descriptive link text over generic labels</li>
            <li>Open external links with rel="noopener noreferrer"</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Accessibility</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Ensure focus indicators are visible</li>
            <li>Provide sufficient spacing for touch targets</li>
            <li>Support screen readers with aria labels</li>
          </ul>
        </div>
        <ResponsivePreview render={() => <ResourcesExample />} />
        <PerformanceMetrics />
      </DocLayout>
    </>
  );
}
