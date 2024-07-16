import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/utils/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuOpen,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    setIsMenuOpen?.(false);
  };

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={handleClick}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } hover:text-primary-300 transition duration-500`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
