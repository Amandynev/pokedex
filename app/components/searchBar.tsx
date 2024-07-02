type SearchBarType = {
  handleOnChange: (e: any) => void;
  value: string;
  placeholder?: string;
};

const SearchBar = ({ handleOnChange, value, placeholder }: SearchBarType) => {
  return (
    <main className=" text-gray-600">
      <input
        className="bg-white h-10 my-5 px-5 w-30 rounded-full text-sm focus:outline-none"
        type={"search"}
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </main>
  );
};

export { SearchBar };
