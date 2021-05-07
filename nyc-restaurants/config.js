var config = {
  style: "mapbox://styles/smanzar/cknpkn8mj3em717p128ryzthw", // Update this with your own too
  accessToken:
    "pk.eyJ1Ijoic21hbnphciIsImEiOiJja2k2ajRjaWowMXEyMnFxZ2IxbTRhaDkwIn0.bZyOlzap-1dfxKN_BHcCPw", // Update this with your github specific one
  showMarkers: false,
  // theme: "light",
  // title: "86'ed",
  // subtitle: "NYC restaurants during the pandemic",
  // byline: "Sherry Manzar",
  footer: "Source: ACS 2014-2019, NYC Open Data. Eater/Curbed, NYC DoH, ",
  chapters: [
    {
      id: "hero",
      image: "./images/hero-title.png",
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "hero-sub",
      image: "./images/hero-subtitle.png",
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "slug-style-id",
      // image: "/data/cases_pre.svg",
      // title: "Residents who identify as working in the food service industry",
      description: `On average, <span style="font-weight: bold; color: #3669d6"
      >6%</span> of the city's workforce works in the restaurant industry`,
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
    },
    {
      id: "other-identifier",
      // title: "A majority of the workforce lives in Queens and Brooklyn",
      alignment: "left",
      // image: "./path/to/image/source.png",
      // description: "A majority of the workforce lives in Queens and Brooklyn",
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "bqe",
      // title: "Sunset Park",
      alignment: "left",
      image: "./images/photos/open-streets-sunset_before.png",
      description: ` <span style='font-weight: bold; color: #3669d6'
        >12%</span> of all Sunset Park's residents worked in the food service industry. Compare that to <span style='font-weight: bold; color: #83c6e3'
        >3.5% </span>in neighbouring Park Slope
        <p><img src="./images/photos/open-streets-sunset.png" width="200px" height="250px">
        </p>`,
      location: {
        center: [-74.00773, 40.64842],
        zoom: 13,
        pitch: 45.0,
        bearing: 0.0,
      },
      mapAnimation: "easeTo",
      callback: "workersPop",

      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
    },
    {
      id: "sp-inc",
      // title: "Sunset Park",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `At the same time, most households have relatively modest household income - around <span style='font-weight: bold; color: #bdfa92'
        >$55,000 </span>`,
      location: {
        center: [-74.00773, 40.64842],
        zoom: 13,
        pitch: 45.0,
        bearing: 0.0,
      },
      callback: "workersPop",

      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0.01,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "median-inc-light",
          opacity: 1,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "median-inc-light",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
    },
    {
      id: "uws",
      // title: "Upper West Side",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `While only around <span style='font-weight: bold; color: #83c6e3'
        >1% </span> of those who lived in Upper West Side were restaurant workers`,
      location: {
        center: [-73.97954, 40.78272],
        zoom: 13.82,
        pitch: 45.0,
        bearing: 0.0,
      },
      callback: "workersPop",

      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "uws-inc",
      // title: "Upper West Side",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `It is also inhabitated by relatively richer households - its median household income is <span style='font-weight: bold; color: #5cbb18'
      >$117,000 </span>`,
      location: {
        center: [-73.97954, 40.78272],
        zoom: 13.82,
        pitch: 45.0,
        bearing: 0.0,
      },
      callback: "workersPop",

      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "median-inc-heavy",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "median-inc-heavy",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
    },
    {
      id: "jfk",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `Almost <span style='font-weight: bold; color: #3669d6'
        >1 in 5</span> restaurant workers live in these neighbourhoods of Queens.`,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",

      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "immigrants-queens",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `Of those workers, around <span style='font-weight: bold; color: #aa4202'
      >85%</span> are immigrants`,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "cases-intro-queens",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      // description: `Of those workers, around <span style='font-weight: bold; color: #aa4202'
      // >85%</span> are immigrants`,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 10,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 1,
        },
      ],
    },
    {
      id: "cases-queens",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `Not coincidentally, these are the same neighbourhoods with the highest rates of COVID-19 cases; with Jackson Heights having had <span style='font-weight: bold; color: #cd1919'
      >11,800</span> per 100,000 cases <p class= 'legend-text'> <span style='font-weight: bold; color: #cd1919'
      >High</span> vs <span style='font-weight: bold; color: grey'
      >low</span> rates of cases </p>`,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 11,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },

    {
      id: "aid-nyc",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `When the help came, the same inequities remained <p class= 'legend-text'> <span style='font-weight: bold; color: #018901'
      >High</span> loan disbursement vs <span style='font-weight: bold; color: #d9f8d9'
      >low</span> loan disbursement</p>`,
      location: {
        center: [-73.99664, 40.67983],
        zoom: 10,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "loans-small",
          opacity: 1,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "loans-small",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "closings-overall",
      alignment: "left",

      // title: "Many longtime institutions shutdown during the pandemic",
      // image: "./path/to/image/source.png",
      description:
        "A 'scrapping' activity mapped them from their 'obituaries' in the popular news media to this map",
      location: {
        center: [-73.98863, 40.69056],
        zoom: 10.66,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "hovertop",
      onChapterEnter: [
        // {
        //   layer: "cases-rate-heavy",
        //   opacity: 1,
        // },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "closings-geo",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "closings-geo",
          opacity: 0,
        },
      ],
    },
  ],
};
