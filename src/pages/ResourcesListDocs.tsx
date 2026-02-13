import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';
import ApiTable from '@/components/docs/ApiTable';
import ResponsivePreview from '@/components/docs/ResponsivePreview';
import PerformanceMetrics from '@/components/docs/PerformanceMetrics';
import { motion } from 'motion/react';

function ResourcesListExample() {
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

export default function ResourcesListDocs() {
  return (
    <>
      <Seo title="Resources List | EACoder AI" description="Documentation for the Resources footer list including showcase, API, usage, accessibility, responsive testing, and performance." />
      <DocLayout title="Resources List" subtitle="Footer list component docs">
        <div className="rounded-xl border bg-card">
          <div className="px-6 pt-6"><h4>Component Showcase</h4></div>
          <div className="px-6 pb-6"><ResourcesListExample /></div>
        </div>
        <ApiTable rows={[
          { name: 'items', type: 'Array<{ label: string; href: string }>', description: 'Entries rendered inside the unordered list' },
          { name: 'className', type: 'string', defaultValue: 'space-y-2', description: 'Styling for the UL container' },
          { name: 'onItemClick', type: '(label: string, href: string) => void', description: 'Optional click handler for list items' },
          { name: 'rel/noopener', type: 'string', description: 'Security attributes for external links' },
        ]} />
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Usage Guidelines</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Group related items by topic</li>
            <li>Prefer descriptive link text</li>
            <li>Use rel="noopener noreferrer" for external links</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card px-6 py-6">
          <h4 className="mb-4">Accessibility</h4>
          <ul className="list-disc ml-4 text-sm text-gray-600">
            <li>Ensure focus rings are visible</li>
            <li>Maintain adequate spacing for touch targets</li>
            <li>Provide aria labels when link text is ambiguous</li>
          </ul>
        </div>
        <ResponsivePreview render={() => <ResourcesListExample />} />
        <PerformanceMetrics />
      </DocLayout>
    </>
  );
}