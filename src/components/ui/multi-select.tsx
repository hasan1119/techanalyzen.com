import { ChevronDown } from "lucide-react";
import * as React from "react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  label?: string;
  searchPlaceholder?: string;
  pageSize?: number;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select...",
  label,
  searchPlaceholder = "Search...",
  pageSize = 10,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(pageSize);

  const handleSelect = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase()),
  );

  const visibleOptions = filteredOptions.slice(0, visibleCount);

  return (
    <div>
      {label && <div className="mb-1 text-sm font-medium">{label}</div>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between border min-h-[42px] h-auto p-2"
            aria-label={placeholder}
            type="button"
          >
            <div
              className="flex flex-wrap gap-1 items-center max-h-[60px] overflow-y-auto flex-1 text-left"
              style={{ minWidth: 0 }}
            >
              {selected.length === 0 ? (
                <span className="text-gray-400 whitespace-nowrap">
                  {placeholder}
                </span>
              ) : (
                selected.map((item, index) => (
                  <Badge
                    key={index}
                    className="flex items-center gap-1 pr-1 mb-1 bg-primary/80 text-white"
                  >
                    <span className="truncate max-w-[80px]">{item}</span>
                    <span
                      role="button"
                      aria-label={`Remove ${item}`}
                      className="ml-1 text-white p-0 h-4 w-4 flex items-center justify-center cursor-pointer hover:bg-white/20 rounded-full"
                      tabIndex={-1}
                      onClick={(e) => {
                        e.stopPropagation();
                        onChange(selected.filter((i) => i !== item));
                      }}
                    >
                      <span className="text-lg leading-none">×</span>
                    </span>
                  </Badge>
                ))
              )}
            </div>
            <ChevronDown className="ml-2 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 border shadow p-2">
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(pageSize);
            }}
            placeholder={searchPlaceholder}
            className="mb-2 focus:outline-none outline-none focus:ring-0 ring-0 shadow-none border-gray-300"
            style={{ boxShadow: "none" }}
          />
          <div className="flex flex-col gap-2 max-h-56 overflow-y-auto">
            {visibleOptions.length > 0 ? (
              <>
                {visibleOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded"
                  >
                    <Checkbox
                      checked={selected.includes(option)}
                      onCheckedChange={() => handleSelect(option)}
                      id={`multi-select-${option}`}
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
                {visibleCount < filteredOptions.length && (
                  <Button
                    className="text-sm text-primary mt-1 px-2 py-1 hover:underline cursor-pointer"
                    onClick={() => setVisibleCount((prev) => prev + pageSize)}
                  >
                    Show more...
                  </Button>
                )}
              </>
            ) : (
              <div className="text-sm text-gray-400 text-center py-2">
                No results found
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
