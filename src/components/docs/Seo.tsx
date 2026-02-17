import { useEffect } from 'react';

export default function Seo({ title, description, keywords }: { title: string; description: string; keywords?: string }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute('content', description);
    } else {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      m.setAttribute('content', description);
      document.head.appendChild(m);
    }
    if (keywords) {
      const k = document.querySelector('meta[name=\"keywords\"]') as HTMLMetaElement | null;
      if (k) {
        k.setAttribute('content', keywords);
      } else {
        const mk = document.createElement('meta');
        mk.setAttribute('name', 'keywords');
        mk.setAttribute('content', keywords);
        document.head.appendChild(mk);
      }
    }
  }, [title, description]);
  return null;
}
