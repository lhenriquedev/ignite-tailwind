import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/lhenriquedev.png"
        alt=""
        className="w-10 h-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Henrique</span>
        <span className="text-sm text-zinc-500 truncate">
          lhenrique.dev@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto p-2 hover:bg-zinc-50 rounded-full"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
