import { Link } from 'react-router-dom';
import AppDownloadCTA from './AppDownloadCTA';

export default function AccountSignup() {
  return (
    <main className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-gray-800">Download the App</h1>
          <Link to="/" className="rounded-full px-5 py-2 border-2 hover:bg-gray-50 text-sm">← Back</Link>
        </div>

        <p className="text-gray-600 mb-8">
          Choose your platform below. These are placeholders and will link to the App Store and Google Play in the final implementation.
        </p>

        <AppDownloadCTA />
      </div>
    </main>
  );
}