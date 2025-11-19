import Seo from '@/components/docs/Seo';
import DocLayout from '@/components/docs/DocLayout';
import ApiTable from '@/components/docs/ApiTable';

export default function ApiReference() {
  return (
    <>
      <Seo title="API Reference | EA Coder" description="API reference for EA Coder components and utilities." />
      <DocLayout title="API Reference" subtitle="Components and utilities">
        <ApiTable rows={[
          { name: 'Button', type: 'component', description: 'Primary action component' },
          { name: 'Accordion', type: 'component', description: 'Collapsible content sections' },
          { name: 'Tabs', type: 'component', description: 'Segmented content navigation' },
          { name: 'Table', type: 'component', description: 'Structured tabular data' },
        ]} />
      </DocLayout>
    </>
  );
}