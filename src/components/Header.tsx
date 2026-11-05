import ContactLara from "@/assets/headers/ContactLara";
import DontTakeMyWord from "@/assets/headers/DontTakeMyWord";
import HelloImLara from "@/assets/headers/HelloImLara";
import WhatCanIDoForYou from "@/assets/headers/WhatCanIDoForYou";

type HeaderType =
  | "HelloImLara"
  | "WhatCanIDoForYou"
  | "ContactLara"
  | "DontTakeMyWord";

interface Header {
  header: HeaderType;
  className?: string;
}

const Header = ({ header, className }: Header) => {
  const zClassName = `${className} z-1`;
  switch (header) {
    case "HelloImLara":
      return <HelloImLara className={zClassName} />;
    case "WhatCanIDoForYou":
      return <WhatCanIDoForYou className={zClassName} />;
    case "ContactLara":
      return <ContactLara className={zClassName} />;
    case "DontTakeMyWord":
      return <DontTakeMyWord className={zClassName} />;

    default:
      return <></>;
  }
};

export default Header;
