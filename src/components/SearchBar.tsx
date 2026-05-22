interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
  }
  
  export default function SearchBar({
    searchTerm,
    setSearchTerm,
  }: SearchBarProps) {
    return (
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-80 px-5 py-3 rounded-full bg-white/5 border border-white/10 outline-none focus:border-purple-500"
      />
    );
  }