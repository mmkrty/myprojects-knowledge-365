import { ACCESS_TOKEN, MY_EMAIL, APP_NAME } from "./config";

//helper
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const getDay = function (random = false) {
  if (random) {
    return randomDate(new Date(2022, 0, 1), new Date());
  } else {
    return new Date();
  }
};

const getUrl = function (date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");

  return `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;
};

export const getData = async function (random = false) {
  let url = !random ? getUrl(getDay()) : getUrl(getDay(true));

  let response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Api-User-Agent": `${APP_NAME} (${MY_EMAIL})`,
    },
  });
  const data = await response.json();

  //desctructuring featured content of the day
  const { tfa } = data;

  //extracting needed data
  const {
    normalizedtitle,
    description,
    extract,
    originalimage: { source },
    content_urls,
  } = tfa;

  const {
    desktop: { page: desktopPage },
    mobile: { page: mobilePage },
  } = content_urls;

  //assigning the needed datas to a object to return
  const contentBody = {
    title: normalizedtitle,
    description,
    extract,
    imgSrc: source,
    desktopPage,
    mobilePage,
  };

  return contentBody;
};

// let url = getUrl(getDay());
// let response = await fetch(url, {
//   headers: {
//     Authorization: `Bearer ${ACCESS_TOKEN}`,
//     "Api-User-Agent": `${APP_NAME} (${MY_EMAIL})`,
//   },
// });

// export const data = await response.json();

// response.json().then(console.log).catch(console.error);

//random function

// export const randomContents = async function () {
//   const newDate = randomDate(new Date(2022, 0, 1), new Date());
//   let year = newDate.getFullYear();
//   let month = String(newDate.getMonth() + 1).padStart(2, "0");
//   let day = newDate.getDate();
//   let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;

//   let response = await fetch(url, {
//     headers: {
//       Authorization: `Bearer ${ACCESS_TOKEN}`,
//       "Api-User-Agent": `${APP_NAME} (${MY_EMAIL})`,
//     },
//   });
//   let data = await response.json();

//   const { tfa } = data;
//   // console.log(tfa);
//   const {
//     normalizedtitle,
//     description,
//     extract,
//     originalimage: { source },
//     content_urls,
//   } = tfa;

//   const {
//     desktop: { page: desktopPage },
//     mobile: { page: mobilePage },
//   } = content_urls;

//   const newData = {
//     title: normalizedtitle,
//     description,
//     extract,
//     imgSrc: source,
//     desktopPage,
//     mobilePage,
//   };

//   console.log(newData);
//   return newData;
// };
