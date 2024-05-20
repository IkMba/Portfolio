import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const projectData = [
  // {
  //   title: "Resort Bookings App",
  //   details:
  //     "A custom application for managing a hotel resort. Used to manage bookings,cabins and guests data. ",
  //   link: "https://luxresorts.netlify.app/",
  //   img: "/movies1.png",
  //   tools: [
  //     "JavaScript",
  //     "React,Supabase",
  //     "Styled Components",
  //     "React Router",
  //     "React Query",
  //     "React Hook Form",
  //   ],
  // },
  {
    title: "Baobab",
    details:
      "The official website for Baobab microfinance bank. Worked on the landing page and the loan request page along with some other internal tools.",
    link: "https://baobab.com/ng/",
    img: "/baobab.png",
    tools: ["React", "React-Router", "SASS"],
  },
  {
    title: "Movix",
    details:
      "A movie website that fetches data for movies and tv shows using the TMDB API. Sections inlude popular,trending,upcoming movies etc. Users can also add movies to favourites and watched lists",
    link: "https://movix-five-liard.vercel.app/",
    img: "/movix1.png",
    tools: ["React", "React-Router", "Redux", "SASS", "TMDB API"],
  },
  {
    title: "Cookwell",
    details:
      "A recipe website for searching recipes by mealtype,diet,cuisine and so many other categories. includes advanced filtering options. Add rexipes to favourites and bookmarks.",
    link: "https://recipes-three-jet.vercel.app/",
    img: "/cookwell1.png",
    tools: [
      "React",
      "React Queries",
      "Redux",
      "Reduxjs toolkit",
      "Framer motion",
      "Edamam Recipes API",
    ],
  },
  {
    title: "Notes app",
    details:
      "A modern notes application with sllek UI and additional features. Users acan dd notes,edit and delete notes. Extra features include search notes and sorting notes into collections.",
    link: "https://notes-app-ten-kappa.vercel.app/",
    img: "/notes.png",
    tools: ["React", "TypeScript", "Redux", "React Router", "React Hook Form"],
  },
  {
    title: "Dashboard",
    details:
      "A dashboard application for an online ecommerce company. The dashboard displays products,users and transction data from a database. Admin can also perform CRUD operations on these properties.",
    link: "https://dashboard-theta-umber.vercel.app/dashboard",
    img: "/image.png",
    tools: [
      "React",
      "TypeScript",
      "NextJs",
      "React query",
      "Supabase",
      "React Hook Form",
    ],
  },
  {
    title: "AI company landing page",
    details:
      "A demo landing page application for an Artificial Intelligence comapany with sleek design and animations.",
    link: "https://brainwave-vert-five.vercel.app/",
    img: "/brainwave.png",
    tools: ["React", "React-Router", "Tailwind", "Framer motion"],
  },
  {
    title: "Nike Landing Page",
    details: "A demo landing page application for Nike e-coomerce website.",
    link: "https://nike-sigma-one.vercel.app/",
    img: "/nike1.png",
    tools: ["React", "React-router", "Tailwind", "Framer motion"],
  },

  {
    title: "Fast pizza",
    details: "A pizza ordering application",
    img: "/pizza1.png",
    tools: ["React", "React-router", "Redux", "TailwindCss"],
    link: "https://pizzanow-omega.vercel.app/",
  },
  // {
  //   title: "Adex",
  //   details: "A landing page for a consulting company.",
  //   link: "https://adexlanding.netlify.app/",
  //   img: "/Adex.png",
  //   tools: ["React", "JavaScript"],
  // },
  // {
  //   title: "Glow commerce",
  //   details:
  //     "A landing page for an online e-commerce, company that sells self care products.",
  //   link: "https://glowecommerce.netlify.app/",
  //   img: "/glow1.png",
  //   tools: ["React", "JavaScript"],
  // },
  // {
  //   title: "Popcorn",
  //   details:
  //     "A movie application where users cans search for movies,like movies and add a movie to favourite list and watched list. The application uses the OMDB databse to fetch data.",
  //   link: "https://watchpopcorn.netlify.app/",
  //   img: "/popcorn1.png",
  //   tools: ["React", "JavaScript", "OMDB"],
  // },
  {
    title: "Worldwise",
    details:
      "This is a travel application where users can add a list of places visited by clicking on the map. The application can also fetch users current location.",
    link: "https://worldwise-wine.vercel.app/",
    img: "worldwise1.png",
    tools: ["React", "JavaScript", "React-maps", "Redux"],
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const isLargeScreen = useMediaQuery("only screen and (min-width:750px)");
  console.log(isLargeScreen);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const textVariants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section>
      <motion.div
        className="container"
        variants={!isLargeScreen && textVariants}
        initial="initial"
        animate="whileInView"
      >
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div
            className="textContainer"
            style={isLargeScreen ? { y } : ""}
          >
            <h2>{item.title}</h2>
            <p>{item.details}</p>
            <div className="smBtns">
              {item.tools.map((it) => (
                <div className="smBtn" key={it}>
                  {it}
                </div>
              ))}
            </div>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    // <section>
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projectData.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
    // </section>
  );
};

export default Portfolio;
