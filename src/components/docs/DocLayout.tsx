import { ReactNode } from 'react';

export default function DocLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-gray-800 mb-2">{title}</h2>
          {subtitle ? <p className="text-gray-600">{subtitle}</p> : null}
        </div>
        <div className="grid gap-8">{children}</div>
      </div>
    </section>
  );
}