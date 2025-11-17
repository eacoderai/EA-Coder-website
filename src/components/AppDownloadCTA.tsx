export default function AppDownloadCTA() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {/* iOS card */}
      <article className="rounded-xl border bg-white p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
            {/* Apple logo */}
            <svg aria-hidden className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.365 1.43c.09 1.17-.35 2.305-1.11 3.162-.79.885-2.06 1.57-3.11 1.498-.113-1.097.398-2.28 1.167-3.13C14.102 1.956 15.37 1.38 16.365 1.43zM20.93 16.683c-.404.94-.885 1.812-1.44 2.62-.756 1.1-1.44 1.86-2.046 2.28-.78.54-1.62.818-2.516.833-.96.023-1.626-.22-2.002-.73-.25-.33-.47-.938-.66-1.824-.19-.89-.35-1.46-.48-1.706-.275-.53-.637-.977-1.086-1.338-.59-.482-1.18-.725-1.77-.728-.436-.01-.99.136-1.662.44-.67.3-1.305.45-1.904.446-.837-.02-1.564-.242-2.18-.665-.61-.42-1.19-1.056-1.74-1.904C-1.3 9.62.39 6.79 3.43 6.75c.857.02 1.575.21 2.157.57.374.23.866.585 1.473 1.066.6.47 1.104.712 1.512.724.318.007.91-.18 1.778-.563 1.06-.457 1.95-.69 2.67-.702 1.974-.03 3.456.733 4.44 2.286-1.755 1.034-2.624 2.468-2.61 4.3.01 1.14.41 2.108 1.2 2.905.39.394.93.77 1.62 1.132z"/>
            </svg>
          </div>
          <div>
            <p className="text-gray-800">Download for iOS</p>
            <p className="text-xs text-gray-500">App Store link coming soon</p>
          </div>
        </div>
        <button
          type="button"
          aria-disabled="true"
          className="rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white opacity-80 cursor-not-allowed"
          title="Available soon"
        >
          Coming Soon
        </button>
      </article>

      {/* Android card */}
      <article className="rounded-xl border bg-white p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
            {/* Play icon */}
            <svg aria-hidden className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l15 9-15 9V3z"/>
            </svg>
          </div>
          <div>
            <p className="text-gray-800">Get Android Version</p>
            <p className="text-xs text-gray-500">Google Play link coming soon</p>
          </div>
        </div>
        <button
          type="button"
          aria-disabled="true"
          className="rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white opacity-80 cursor-not-allowed"
          title="Available soon"
        >
          Coming Soon
        </button>
      </article>
    </div>
  );
}