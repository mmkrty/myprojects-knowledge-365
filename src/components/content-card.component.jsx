import { useState, useEffect } from "react";
import { getData } from "../config/getJSON";
import ExLink from "./ex-link.component";

function ContentCard() {
  const [content, setContent] = useState({});

  const getRandomData = function () {
    const data = getData(true);
    const saveData = async () => {
      const newContent = await data;
      setContent({
        ...newContent,
      });
    };
    saveData();
  };

  useEffect(function () {
    const data = getData();
    const saveData = async () => {
      const newContent = await data;
      setContent({
        ...newContent,
      });
    };
    saveData();
  }, []);

  return (
    <div className="bg-lightprime max-w-5xl p-8 mx-3 mb-6 flex justify-between items-center shadow-lg md:flex-col-reverse">
      <div>
        <h1 className="text-3xl my-2 font-alegreya md:mt-4">{content.title}</h1>
        <p className="text-xl text-slate-500 mb-1 font-alegreya italic">
          {content.description}
        </p>
        <p className="leading-7 font-notosans">{content.extract}</p>
        <ExLink
          name="Read More"
          desktop={content.desktopPage}
          mobile={content.mobilePage}
        />
        <button
          className="py-2 px-5 mt-6 bg-lightsec text-white rounded shadow-lg hover:scale-110 hover:shadow-md active:translate-y-1 transition-all font-notosans"
          onClick={getRandomData}
        >
          Another Story
        </button>
      </div>

      <img
        src={content.imgSrc}
        alt={content.title}
        className="max-w-lg max-h-96 ml-5 mr-2 shadow-md rounded md:mx-5"
      />
    </div>
  );
}

export default ContentCard;
