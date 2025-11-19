import { ReactNode, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function ResponsivePreview({ render }: { render: (size: 'mobile' | 'tablet' | 'desktop') => ReactNode }) {
  const [value, setValue] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  return (
    <div className="rounded-xl border bg-card">
      <div className="px-6 pt-6"><h4>Responsive Preview</h4></div>
      <div className="px-6 pb-6">
        <Tabs value={value} onValueChange={(v: string) => setValue(v as 'mobile' | 'tablet' | 'desktop')}>
          <TabsList>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="tablet">Tablet</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
          </TabsList>
          <TabsContent value="mobile"><div className="w-[375px] border rounded-xl overflow-hidden">{render('mobile')}</div></TabsContent>
          <TabsContent value="tablet"><div className="w-[768px] border rounded-xl overflow-hidden">{render('tablet')}</div></TabsContent>
          <TabsContent value="desktop"><div className="w-[1024px] border rounded-xl overflow-hidden">{render('desktop')}</div></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}