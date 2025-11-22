"use client";

type BucketListItem = {
  id: string;
  text: string;
  checked?: boolean;
};

type BucketListProps = {
  items: BucketListItem[];
};

export default function BucketList({ items }: BucketListProps) {
  return (
    <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-[10px] items-center relative shrink-0 w-full"
        >
          <div
            className={`border-[#9b9b9b] border-[1.5px] border-solid rounded-[1px] shrink-0 size-[20px] ${
              item.checked ? "bg-[#9b9b9b]" : ""
            }`}
          />
          <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-medium justify-center relative shrink-0 text-[#9b9b9b] text-base whitespace-nowrap">
            <p className="leading-normal">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
