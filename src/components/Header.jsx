import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-white/30 backdrop-blur sticky top-0 left-0 w-full border-b border-b-slate-200 shadow-sm py-2 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="font-bold text-2xl text-slate-800">MYSTAR50</h1>
        <SearchBar />
      </div>
    </header>
  );
}
