'use client'
import { Label, SearchField } from '@heroui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
const SearchBar = () => {
    const router = useRouter();
    const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = (value) => {
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

 
    
    return (
        <div className='flex gap-4 items-baseline-last '>
            <SearchField name="search" onClear={()=> setSearch('')} >
                        <Label className='font-bold text-xl'>Search Task</Label>
                        <SearchField.Group >
                            <SearchField.SearchIcon />
                            <SearchField.Input value={search} 
                            onChange={(e) => handleSearch(e.target.value)}
                            className=" w-40 sm:w-70 " placeholder="Search your desired task..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>

        </div>
    );
};

export default SearchBar;