export function BrowserMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg overflow-hidden border border-zinc-700 relative">
      <div className="h-10 bg-zinc-800 border-b border-zinc-700 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="flex-1 mx-4 h-6 bg-zinc-700 rounded text-xs text-zinc-500 flex items-center px-3">
          get-agri-togo.vercel.app
        </div>
      </div>
      <div className="p-6 min-h-[300px]">
        {children || (
          <div className="space-y-4">
            <div className="h-8 bg-zinc-700 rounded w-1/3" />
            <div className="h-4 bg-zinc-700 rounded w-full" />
            <div className="h-4 bg-zinc-700 rounded w-5/6" />
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="h-24 bg-zinc-700 rounded" />
              <div className="h-24 bg-zinc-700 rounded" />
              <div className="h-24 bg-zinc-700 rounded" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
