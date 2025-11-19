import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

type StrategyForm = {
  title: string;
  description: string;
  risk: string;
};

export default function StrategyBuilder() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const initial: StrategyForm = useMemo(
    () => ({
      title: params.get('title') ?? '',
      description: params.get('description') ?? '',
      risk: params.get('risk') ?? '',
    }),
    [params]
  );

  const [form, setForm] = useState<StrategyForm>(initial);
  const [errors, setErrors] = useState<{ title?: string; description?: string; risk?: string }>({});

  // Keep form in sync when query params change via navigation
  useEffect(() => {
    setForm(initial);
  }, [initial]);

  const update = (patch: Partial<StrategyForm>) => setForm((f) => ({ ...f, ...patch }));

  const validate = (f: StrategyForm) => {
    const e: { title?: string; description?: string; risk?: string } = {};
    if (!f.title || f.title.trim().length < 3) e.title = 'Enter a title (min 3 characters)';
    if (!f.description || f.description.trim().length < 10) e.description = 'Enter a description (min 10 characters)';
    if (!f.risk || f.risk.trim().length < 3) e.risk = 'Specify risk rules';
    return e;
  };

  const handleGenerate = () => {
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    navigate('/signup', { state: { form } });
  };

  return (
    <main className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-gray-800">Strategy Builder</h1>
          <Link to="/" className="rounded-full px-5 py-2 border-2 hover:bg-gray-50 text-sm">← Back</Link>
        </div>

        <p className="text-gray-600 mb-8">
          Prefill below fields from an example or enter your own strategy details.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Title</label>
            <input
              value={form.title}
              onChange={(e) => update({ title: e.target.value })}
              className="w-full rounded-lg border px-4 py-2"
              aria-invalid={Boolean(errors.title)}
              aria-describedby="title-error"
              required
              placeholder="e.g., RSI Oversold/Overbought"
            />
            {errors.title && <p id="title-error" className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => update({ description: e.target.value })}
              className="w-full rounded-lg border px-4 py-2 min-h-[120px]"
              aria-invalid={Boolean(errors.description)}
              aria-describedby="description-error"
              required
              placeholder="Describe entry/exit rules, indicators, and timeframe"
            />
            {errors.description && <p id="description-error" className="text-red-600 text-sm mt-1">{errors.description}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Risk Rules</label>
            <input
              value={form.risk}
              onChange={(e) => update({ risk: e.target.value })}
              className="w-full rounded-lg border px-4 py-2"
              aria-invalid={Boolean(errors.risk)}
              aria-describedby="risk-error"
              required
              placeholder="e.g., Max 2% risk per trade"
            />
            {errors.risk && <p id="risk-error" className="text-red-600 text-sm mt-1">{errors.risk}</p>}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={handleGenerate}
              className="inline-flex items-center gap-2 rounded-full px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
            >
              Generate Strategy
            </button>
            <button
              type="button"
              onClick={() => setForm({ title: '', description: '', risk: '' })}
              className="rounded-full px-6 py-2 border-2 hover:bg-gray-50"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}