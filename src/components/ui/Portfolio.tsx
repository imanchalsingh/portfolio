import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import ProfilePicture from "./profilephoto.jpg";
import Certificate1 from "./angular.jpg";
import Certificate2 from "./csshk.png";
import Certificate3 from "./html.jpg";
import Certificate4 from "./jssololearn.jpg";
import Certificate5 from "./jsudemy.jpg";
import Certificate6 from "./problemsolvinghk.png";
import Certificate7 from "./pythonsololearn.jpg";
import Certificate8 from "./webdev.jpg";
import Certificate9 from "./pythonBasichk.png";
import Certificate10 from "./udemyhtmlcssjs.png";
import Certificate11 from "./udemyhtmlcssjschallenge.png";
import Certificate12 from "./udemyjs20project.png";
import Certificate13 from "./jshk.png";
import Certificate14 from "./Reacthk.png";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

interface FormData {
  name: string;
  email: string;
  message: string;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C",
    "React",
    "C++",
    "HTML",
    "Java",
    "CSS",
    "Redux",
  ],
  datasets: [
    {
      label: "Skills",
      data: [6, 7, 5, 4, 8, 4, 7, 5, 6, 6], // skill levels
      backgroundColor: "rgba(34, 202, 236, 0.2)",
      borderColor: "darkcyan",
      borderWidth: 2,
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
    },
  ],
};

const options = {
  scales: {
    r: {
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
};
const InteractiveElement: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number>(0); // Set to 0 for the first accordion to open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index); // Toggle accordion open/close
  };
  const [currentSection, setCurrentSection] = useState<
    | "About"
    | "Projects"
    | "Skills"
    | "Resume"
    | "Blog"
    | "Testimonials"
    | "Certifications"
    | "Contact Me"
  >("About");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleContactInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    if (formRef.current) {
      formRef.current.reset();
    }
    setFormData({ name: "", email: "", message: "" });
  };

  const fadeProps = useSpring({
    opacity: isSubmitted ? 1 : 0,
    transform: isSubmitted ? "translateY(0)" : "translateY(20px)",
    config: { tension: 300, friction: 10 },
  });
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    { src: Certificate1, alt: "Angular" },
    { src: Certificate2, alt: "Css Basic" },
    { src: Certificate3, alt: "Html" },
    { src: Certificate10, alt: "Html CSS JS" },
    { src: Certificate8, alt: "Web Development" },
    { src: Certificate5, alt: "JavaScript Course" },
    { src: Certificate6, alt: "Problem Solving" },
    { src: Certificate4, alt: "Javascript" },
    { src: Certificate12, alt: "Html css javascript." },
    { src: Certificate7, alt: "Python" },
    { src: Certificate14, alt: "React Basic." },
    { src: Certificate9, alt: "Python Basic" },
    { src: Certificate11, alt: "Challenge Project" },
    { src: Certificate13, alt: "Javascript Basic." },
  ];

  const showSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) newIndex = 1;
    if (newIndex < 1) newIndex = slides.length;
    setSlideIndex(newIndex);
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };
  useEffect(() => {}, []);

  const renderSection = () => {
    switch (currentSection) {
      case "About":
        return (
          <div>
            <div className="flex flex-col lg:flex-row justify-center items-center p-5 lg:p-10 m-6 lg:m-8 lg:h-[70vh]">
              <div className="flex justify-center items-center mb-6 lg:mb-0">
                <div className="relative ">
                  <img
                    className="w-48 h-48 lg:w-72 lg:h-72 rounded-full border-4 border-darkcyan"
                    src={ProfilePicture}
                    alt="Avatar"
                  />
                  <div className=" overlay absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2 rounded-b-full">
                    Anchal Singh
                  </div>
                </div>
              </div>
              <div className="lg:w-[900px] lg:ml-12 lg:pl-6 lg:border-l-4 border-darkcyan">
                <p>
                  Hello, I'm <b>Anchal Singh</b>. Currently, an undergraduate
                  student in Computer Science (BCA) and Engineering field! I am
                  eager to explore new technologies to enhance my skills and
                  address various challenges effectively.
                </p>
                <p className="mt-5">
                  I am looking forward to leveraging my expertise in new
                  opportunities while continuously expanding my knowledge for
                  both professional growth and personal development.
                </p>
                <p>
                  Also, I am interested in Web Development and have also built
                  some projects.
                </p>
                <p>
                  Always curious to explore new opportunities and challenges!
                </p>
                <div className="my-5 h-px bg-darkcyan"></div>
                <p>
                  Web Technologies: HTML, CSS, Javascript, Bootstrap, ReactJS,
                  Typescript, Material Ui, Tailwind CSS, Angular, Redux.
                </p>
                <p>Version Control: Git & GitHub</p>
                <hr className="my-2" />
                <p>
                  Programming languages: Python, C/C++, Java, Node.js,
                  Express.js MongoDb.
                </p>
                <p>Testing & API: Postman.</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12 text-gray-500">
              <p>&copy; 2025 Anchal Singh. All rights reserved.</p>
            </div>
          </div>
        );
      case "Projects":
        return (
          <div className="p-8 lg:p-10 mt-5 lg:mt-10 ml-4 lg:ml-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
              <div className="project-card relative w-full border-4 border-darkcyan rounded-lg overflow-hidden w-[25rem] h-[12rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#147fac] to-[#0c5c7e] text-center justify-center flex-col items-center text-white">
                  <h1>Jobable</h1>
                  <p>A job search Application</p>
                </div>

                <a href="https://anchal-jobable.netlify.app">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text2">Click Here</div>
                  </div>
                </a>
              </div>
              <div className="project-card relative w-full border-4 border-darkcyan rounded-lg overflow-hidden w-[25rem] h-[12rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#147fac] to-[#0c5c7e] text-center justify-center flex-col items-center text-white">
                  <h1>ToDo List</h1>
                  <p>A job search Application</p>
                </div>

                <a href="https://todolist-three-sigma.vercel.app">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text2">Click Here</div>
                  </div>
                </a>
              </div>
              <div className="project-card relative w-full border-4 border-darkcyan rounded-lg overflow-hidden w-[25rem] h-[12rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#147fac] to-[#0c5c7e] text-center justify-center flex-col items-center text-white">
                  <h1>ReactView</h1>
                  <p>Be a Viewer</p>
                </div>

                <a href="https://reactview.vercel.app">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text2">Click Here</div>
                  </div>
                </a>
              </div>
              <div className="project-card relative w-full border-4 border-darkcyan rounded-lg overflow-hidden w-[25rem] h-[12rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#147fac] to-[#0c5c7e] text-center justify-center flex-col items-center text-white">
                  <h1>Grammar</h1>
                  <h1> Craft</h1>
                </div>

                <a href="https://grammar-craft.netlify.app">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text2">Click Here</div>
                  </div>
                </a>
              </div>
              <div className="project-card relative w-full border-4 border-darkcyan rounded-lg overflow-hidden w-[25rem] h-[12rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#147fac] to-[#0c5c7e] text-center justify-center flex-col items-center text-white">
                  <h1>Overthinker</h1>
                  <p>Write here what you think</p>
                </div>

                <a href="https://overthinker-six.vercel.app">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text2">Click Here</div>
                  </div>
                </a>
              </div>
              <div className="project-card relative w-full border-4 border-darkcyan rounded-lg overflow-hidden w-[25rem] h-[12rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#147fac] to-[#0c5c7e] text-center justify-center flex-col items-center text-white">
                  <h1>Build Stack</h1>
                  <p>An Installation</p>
                </div>

                <a href="https://build-stack-installation-project.vercel.app/">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text2">Click Here</div>
                  </div>
                </a>
              </div>
              <div className="project-card relative w-full border-4 border-darkcyan rounded-lg overflow-hidden w-[25rem] h-[12rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#147fac] to-[#0c5c7e] text-center justify-center flex-col items-center text-white">
                  <h1>Quizify</h1>
                  <p>Be a Quiz Solver</p>
                </div>

                <a href="https://my-quizify.netlify.app">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text2">Click Here</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center mt-20 text-gray-500">
              <p>&copy; 2025 Anchal Singh. All rights reserved.</p>
            </div>
          </div>
        );
      case "Skills":
        return (
          <div className="p-4 lg:p-8">
            <div className="w-full max-w-4xl mx-auto">
              <Radar data={data} options={options} />
            </div>
            <div className="flex justify-center items-center mt-16 text-gray-500">
              <p>&copy; 2024 Anchal Singh. All rights reserved.</p>
            </div>
          </div>
        );
      case "Resume":
        return (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "700px",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div style={{ marginTop: "20px" }}>
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      border: "5px solid darkcyan",
                    }}
                    src={ProfilePicture} // Update the src with the actual profile picture location
                    alt="Profile"
                  />
                </div>
                <div style={{ margin: "20px" }}>
                  <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
                    Anchal Singh
                  </h1>
                  <p>Frontend Developer</p>
                </div>
              </div>

              {/* PROFILE (Open by default) */}
              <button className="accordion" onClick={() => toggleAccordion(0)}>
                PROFILE
              </button>
              <div
                className="panel"
                style={{
                  display: activeIndex === 0 ? "block" : "none",
                  maxHeight: "180px",
                  overflowY: "auto",
                }}
              >
                <p>
                  "Driven and passionate BCA student with a strong foundation in
                  web development, specializing in HTML, CSS, JavaScript,
                  TypeScript, and React.js. Successfully completed multiple
                  projects, including a fully functional e-commerce application
                  and responsive websites."
                </p>
                <br />
                <hr />
                <br />
                <p>
                  I am looking forward to leveraging my expertise in new
                  opportunities while continuously expanding my knowledge for
                  both professional growth and personal development.
                </p>
              </div>

              {/* EDUCATION */}
              <button className="accordion" onClick={() => toggleAccordion(1)}>
                EDUCATION
              </button>
              <div
                className="panel"
                style={{
                  display: activeIndex === 1 ? "block" : "none",
                  maxHeight: "180px",
                  overflowY: "auto",
                }}
              >
                <p>
                  2023 - PRESENT
                  <br />
                  Bachelor's in Computer Application
                  <br />
                  Dr. Ram Manohar Lohia Avadh University, Ayodhya
                  <br />
                  <hr />
                  <br />
                  2023 Intermediate
                  <br />
                  Up board
                  <br />
                  79.6%
                  <br />
                  <hr />
                  <br />
                  2021 High School
                  <br />
                  Up board
                  <br />
                  85.8%
                </p>
              </div>

              {/* EXPERTISE */}
              <button className="accordion" onClick={() => toggleAccordion(2)}>
                EXPERTISE
              </button>
              <div
                className="panel"
                style={{
                  display: activeIndex === 2 ? "block" : "none",
                  maxHeight: "180px",
                  overflowY: "auto",
                }}
              >
                <p>
                  <li>
                    Web Technologies: HTML, CSS, JavaScript, Bootstrap, ReactJS,
                    TypeScript, Material UI, Tailwind CSS, Angular, Redux.
                  </li>
                  <br />
                  <hr />
                  <br />
                  <li>Responsive Websites</li>
                  <br />
                  <li>Editing</li>
                  <br />
                  <li>UI/UX principles</li>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
                color: "gray",
              }}
            >
              <p>&copy; 2024 Anchal Singh. All rights reserved.</p>
            </div>
          </div>
        );
      case "Certifications":
        return (
          <div>
            <div className="certificate-container">
              {slides.map((slide, index) => (
                <div
                  className="mySlides"
                  key={index}
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}
                >
                  <div className="numbertext">
                    {index + 1} / {slides.length}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className="shadow-xl responsive-image"
                      src={slide.src}
                      alt={slide.alt}
                    />
                  </div>
                </div>
              ))}

              <a className="prev" onClick={() => showSlides(-1)}>
                ❮
              </a>
              <a className="next" onClick={() => showSlides(1)}>
                ❯
              </a>

              <div className="caption-container">
                <p id="caption">{slides[slideIndex - 1]?.alt}</p>
              </div>

              <div className="scrollable-container">
                <div className="slides-wrapper">
                  {slides.map((slide, index) => (
                    <div className="column" key={index}>
                      <img
                        className={`demo cursor ${
                          index + 1 === slideIndex ? "active" : ""
                        }`}
                        src={slide.src.replace("_wide", "")}
                        style={{
                          width: "150px",
                          border: "2px solid darkcyan",
                          height: "80px",
                        }}
                        onClick={() => currentSlide(index + 1)}
                        alt={slide.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "Contact Me":
        return (
          <div>
            <div
              style={{
                marginTop: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#f3f4f6",
              }}
              className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div
                className="bg-gradient-to-r from-[#034967] to-[#147fac] p-6"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="text-2xl font-bold text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Me
                </div>
                <div
                  className="mt-6 flex justify-center space-x-4"
                  style={{ marginTop: "-2px" }}
                >
                  <a
                    href="https://www.linkedin.com/in/imanchalsingh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    style={{ color: "white" }}
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://github.com/imanchalsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    style={{ color: "white" }}
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href="https://x.com/imanchalsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    style={{ color: "white" }}
                  >
                    <XIcon />
                  </a>
                  <a
                    href="https://www.threads.net/@imanchalsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    style={{ color: "white" }}
                  >
                    <AlternateEmailOutlinedIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/imanchalsingh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    style={{ color: "white" }}
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={handleContactSubmit} ref={formRef}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      style={{ backgroundColor: "#f3f4f6", padding: "10px" }}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      onChange={handleContactInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      style={{ backgroundColor: "#f3f4f6", padding: "10px" }}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      onChange={handleContactInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      style={{ backgroundColor: "#f3f4f6", padding: "10px" }}
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your message here..."
                      onChange={handleContactInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#034967] to-[#147fac] text-white font-bold py-2 px-4 rounded-md hover:from-[#147fac]-600 hover:to-[#034967]-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>

                <animated.div style={fadeProps} className="mt-4">
                  {isSubmitted && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                      <strong className="font-bold">Success!</strong>
                      <span className="block">
                        Your message has been sent. We'll get back to you soon.
                      </span>
                    </div>
                  )}
                </animated.div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                color: "gray",
              }}
            >
              <p>&copy; 2024 Anchal Singh. All rights reserved.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="font-sans"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          borderTop: "5px solid darkcyan",
        }}
      >
        <h2 className="font-bold text-xl text-[#147fac]">PORTFOLiO</h2>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block lg:hidden px-2 py-1 text-black bg-transparent rounded-md focus:outline-none border-none hover:border-none" // Removed blue background
            style={{ borderRadius: "10px" }}
          >
            <MenuIcon />
          </button>

          <div
            className={`lg:hidden absolute top-full right-0 mt-2 w-48 bg-lightgray shadow-lg ${
              isMenuOpen ? "block" : "hidden"
            } ${isMenuOpen ? "rounded-none" : "rounded-md"}`}
            style={{ backgroundColor: "lightgray" }} // Set background color for the dropdown
          >
            <button
              onClick={() => {
                setCurrentSection("About");
                setIsMenuOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 border-none hover:border-none"
              style={{ backgroundColor: "lightgray" }}
            >
              About
            </button>
            <hr className="border-t border-gray-300" />{" "}
            {/* Horizontal line between buttons */}
            <button
              onClick={() => {
                setCurrentSection("Projects");
                setIsMenuOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 border-none hover:border-none"
              style={{ backgroundColor: "lightgray" }}
            >
              Projects
            </button>
            <hr className="border-t border-gray-300" />
            <button
              onClick={() => {
                setCurrentSection("Skills");
                setIsMenuOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 border-none hover:border-none"
              style={{ backgroundColor: "lightgray" }}
            >
              Skills
            </button>
            <hr className="border-t border-gray-300" />
            <button
              onClick={() => {
                setCurrentSection("Resume");
                setIsMenuOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 border-none hover:border-none"
              style={{ backgroundColor: "lightgray" }}
            >
              Resume
            </button>
            <hr className="border-t border-gray-300" />
            <button
              onClick={() => {
                setCurrentSection("Certifications");
                setIsMenuOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 border-none hover:border-none"
              style={{ backgroundColor: "lightgray" }}
            >
              Certifications
            </button>
            <hr className="border-t border-gray-300" />
            <button
              onClick={() => {
                setCurrentSection("Contact Me");
                setIsMenuOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 border-none hover:border-none"
              style={{ backgroundColor: "lightgray" }}
            >
              Contact Me
            </button>
          </div>

          <div className="hidden lg:flex">
            <button onClick={() => setCurrentSection("About")} className="mr-4">
              About
            </button>
            <button
              onClick={() => setCurrentSection("Projects")}
              className="mr-4"
            >
              Projects
            </button>
            <button
              onClick={() => setCurrentSection("Skills")}
              className="mr-4"
            >
              Skills
            </button>
            <button
              onClick={() => setCurrentSection("Resume")}
              className="mr-4"
            >
              Resume
            </button>
            <button
              onClick={() => setCurrentSection("Certifications")}
              className="mr-4"
            >
              Certifications
            </button>
            <button
              onClick={() => setCurrentSection("Contact Me")}
              className="mr-4"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div>{renderSection()}</div>
    </div>
  );
};

export default InteractiveElement;
