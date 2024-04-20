import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projectData = [
  {
    title: "Dashboard",
    details:
      "A dashboard application for an online ecommerce company. The dashboard displays products,users and transction data from a database. Admin can also perform CRUD operations on these properties.",
    link: "",
    img: "/glow1.png",
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
    title: "Resort Bookings App",
    details:
      "A custom application for managing a hotel resort. Used to manage bookings,cabins and guests data. ",
    link: "https://movieswebflix.netlify.app/",
    img: "/movies1.png",
    tools: [
      "JavaScript",
      "React,Supabase",
      "Styled Components",
      "React Router",
      "React Query",
      "React Hook Form",
    ],
  },
  {
    title: "MoviesWeb",
    details:
      "A movie website that fetches data for movies and tv shows using the TMDB API. Sections inlude popular,trending,upcoming movies etc. Users can also add movies to favourites and watched lists",
    link: "https://movieswebflix.netlify.app/",
    img: "/movies1.png",
    tools: ["React", "React", "Router", "JavaScript"],
  },
  {
    title: "Fast pizza",
    details: "A pizza ordering application",
    img: "/pizza1.png",
    tools: ["React", "React Router", "Redux", "JavaScript"],
    link: "reactpizzaapp.netlfy.app",
  },
  {
    title: "Adex",
    details: "A landing page for a consulting company.",
    link: "https://adexlanding.netlify.app/",
    img: "/Adex.png",
    tools: ["React", "JavaScript"],
  },
  {
    title: "Glow commerce",
    details:
      "A landing page for an online e-commerce, company that sells self care products.",
    link: "https://glowecommerce.netlify.app/",
    img: "/glow1.png",
    tools: ["React", "JavaScript"],
  },
  {
    title: "Popcorn",
    details:
      "A movie application where users cans search for movies,like movies and add a movie to favourite list and watched list. The application uses the OMDB databse to fetch data.",
    link: "https://watchpopcorn.netlify.app/",
    img: "/popcorn1.png",
    tools: ["React", "JavaScript", "OMDB"],
  },
  {
    title: "Worldwise",
    details:
      "This is a travel application where users can add a list of places visited by clicking on the map. The application can also fetch users current location.",
    link: "https://worldwisetracker.netlify.app/",
    img: "worldwise1.png",
    tools: ["React", "JavaScript", "React", "maps"],
  },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.details}</p>
            <div className="smBtns">
              {item.tools.map((it) => (
                <div className="smBtn" key={it}>
                  {it}
                </div>
              ))}
            </div>
            <a href={item.link}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projectData.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
