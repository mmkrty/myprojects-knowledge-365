import { useState, useEffect } from "react";

function ExLink(props) {
  const { name, desktop, mobile } = props;

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="mt-4 hover:-translate-y-px  transition-all font-notosans">
      <a
        href={isMobile ? mobile : desktop}
        target="_blank"
        className="mr-2  cursor-pointer transition-all hover:mr-4 hover:underline underline-offset-8"
      >
        {name}
      </a>
      &rarr;
    </div>
  );
}

export default ExLink;
