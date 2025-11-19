import { useEffect, useState } from 'react';

export default function PerformanceMetrics() {
  const [mountTime, setMountTime] = useState<number | null>(null);
  const [fps, setFps] = useState<number | null>(null);
  useEffect(() => {
    const start = performance.now();
    requestAnimationFrame(() => {
      const end = performance.now();
      setMountTime(end - start);
    });
    let frames = 0;
    let startTs = performance.now();
    let rafId = 0 as any;
    const loop = () => {
      frames += 1;
      const now = performance.now();
      if (now - startTs >= 1000) {
        setFps(frames);
        cancelAnimationFrame(rafId);
        return;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);
  return (
    <div className="rounded-xl border bg-card px-6 py-6">
      <h4 className="mb-4">Performance</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border p-4"><div className="text-sm text-gray-500">Initial mount time</div><div className="text-xl">{mountTime ? `${mountTime.toFixed(2)} ms` : 'Measuring…'}</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-gray-500">Approx. FPS</div><div className="text-xl">{fps ? `${fps}` : 'Measuring…'}</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-gray-500">Recommendations</div><ul className="text-sm list-disc ml-4"><li>Prefer CSS animations over JS where possible</li><li>Defer non-critical scripts</li><li>Use lazy loading for heavy components</li></ul></div>
      </div>
    </div>
  );
}