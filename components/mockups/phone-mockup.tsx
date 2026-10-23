export function PhoneMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg overflow-hidden border border-zinc-700 relative flex items-center justify-center">
      <div className="w-40 h-64 bg-zinc-800 rounded-2xl border-2 border-zinc-700 p-3 shadow-2xl">
        <div className="w-full h-full bg-zinc-900 rounded-xl flex flex-col">
          <div className="h-6 bg-zinc-800 rounded-t-xl flex items-center justify-center">
            <div className="w-12 h-1 bg-zinc-700 rounded-full" />
          </div>
          <div className="flex-1 p-3 space-y-3">
            {children || (
              <>
                <div className="h-5 bg-zinc-700 rounded w-20" />
                <div className="space-y-2">
                  <div className="h-3 bg-zinc-700 rounded w-full" />
                  <div className="h-3 bg-zinc-700 rounded w-3/4" />
                </div>
                <div className="border border-zinc-700 rounded-lg p-2 space-y-2">
                  <div className="h-3 bg-zinc-700 rounded w-16" />
                  <div className="h-8 bg-zinc-700 rounded w-full" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-zinc-700 rounded w-8" />
                  <div className="h-6 bg-zinc-700 rounded w-8" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
