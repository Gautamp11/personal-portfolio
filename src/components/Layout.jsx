import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Layout = ({ children }) => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // Apply ScrollReveal to all desired elements
    ScrollReveal().reveal(".reveal", scrollRevealOption);
  }, []);

  return <div>{children}</div>;
};

export default Layout;
