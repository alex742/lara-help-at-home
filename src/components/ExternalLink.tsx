import type { JSX } from "react";

interface ExternalLink {
  text: string;
  link: string;
  icon: JSX.Element;
}

const ExternalLink = ({ text, link, icon }: ExternalLink) => {
  return (
    <>
      <a
        className="flex items-center w-fit space-x-2 underline hover:text-dark-green"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        <span>{text}</span>
      </a>
    </>
  );
};

export default ExternalLink;
