import { useState, type JSX } from "react";
import type { Service } from "@/assets/content/services";
import "../assets/svg.css";

interface SvgListItem {
  className?: string;
  text: Service;
  svg?: (className?: string) => JSX.Element;
}

interface SvgList {
  className?: string;
  items: SvgListItem[];
  svg: (className?: string) => JSX.Element;
  activeItem: Service;
  onClick: (itemName: Service) => void;
}

const SvgList = ({ className, items, svg, activeItem, onClick }: SvgList) => {
  const [hoverItem, setHoverItem] = useState<number | undefined>(0);
  return (
    <ul className={`list-inside ${className ?? ""}`}>
      {items.map(({ text, svg: itemSvg, className: itemClassName }, i) => (
        <li
          key={text}
          className={`flex items-center space-x-2 space-y-2 lg:w-[300px] ${
            activeItem === text ? "cursor-auto" : "cursor-pointer"
          } ${itemClassName}`}
          onClick={() => onClick(text)}
          onMouseEnter={() => setHoverItem(i)}
          onMouseLeave={() => setHoverItem(undefined)}
        >
          {itemSvg
            ? itemSvg(
                `max-xs:h-[16px] h-[24px] md:h-[36px] mb-0 ${
                  activeItem === text ? "fill-dark-green" : "fill-smokey-white"
                } ${
                  activeItem === text
                    ? "animate-flicker"
                    : hoverItem === i
                    ? "animate-flicker"
                    : ""
                }`
              )
            : svg(
                `max-xs:h-[16px] h-[24px] md:h-[36px] mb-0 ${
                  activeItem === text ? "fill-dark-green" : "fill-smokey-white"
                } ${
                  activeItem === text
                    ? "animate-flicker"
                    : hoverItem === i
                    ? "animate-flicker"
                    : ""
                }`
              )}
          <span className="select-none max-xs:text-sm text-base md:text-2xl lg:text-[25px]">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SvgList;
