export function DesktopMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg overflow-hidden border border-zinc-700 relative">
      <div className="h-10 bg-zinc-800 border-b border-zinc-700 flex items-center px-4">
        <div className="flex-1 text-sm text-zinc-400 font-medium">EduPaie - Gestion des paiements</div>
      </div>
      <div className="p-6 min-h-[300px]">
        {children || (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="h-6 bg-zinc-700 rounded w-32" />
              <div className="h-6 bg-[#00ff41] rounded w-24 text-zinc-950 text-xs flex items-center justify-center font-medium">
                250 000 FCFA
              </div>
            </div>
            <div className="border border-zinc-700 rounded overflow-hidden">
              <div className="bg-zinc-800 px-4 py-2 text-xs text-zinc-400 font-medium">
                Liste des élèves
              </div>
              <div className="space-y-2 p-4">
                <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                  <div className="h-4 bg-zinc-700 rounded w-24" />
                  <div className="h-4 bg-zinc-700 rounded w-16" />
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-700">
                  <div className="h-4 bg-zinc-700 rounded w-28" />
                  <div className="h-4 bg-zinc-700 rounded w-16" />
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="h-4 bg-zinc-700 rounded w-20" />
                  <div className="h-4 bg-zinc-700 rounded w-16" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
