// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Son",
  middleName: "",
  lastName: "Ngo",
  message: "Seeking meaning of life in building products that change the world.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Ngoson2004",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/son-ngo-2272b3215/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/avatar.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/avatar.jpg"),
  imageSize: 400,
  message:
    "My name is The Son Ngo, or Son for short. I am studying Bachelor of Computer Science (Professional Degree) at Swinburne University of Technology, Melbourne, Australia. I am a passionate software developers, with a strong interest in web development, ICT services, and machine learning. I would love to contribute my skillset to a company that is making a positive impact on the world. Please feel free to reach out to me!",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Ngoson2004", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Personal_Portfolio", "SWE30003_Restaurant-Information-System", "COS30049-Computing_Technology_Innovation_Project", "Deep-Learning-for-Vietnamese", "Vector-search_Engine", "COS30019-Intro-to-AI"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/avatar.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/avatar.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "MySQL", value: 90 },
    { name: "NoSQL", value: 80 },
    { name: "C/C++", value: 70 },
    { name: "JavaScript/TypeScript", value: 80 },
    { name: "React", value: 90 },
    { name: "TailwindCSS", value: 90 },
    { name: "ASP.NET", value: 80 },
    { name: "AWS Cloud", value: 85 },
    { name: "ML frameworks (PyTorch, TF, Scikit-learn)", value: 85 },
    { name: "Data Engineer (NumPy, Pandas)", value: 90 },
    { name: "Office 365 Suite", value: 100 },
  ],
  softSkills: [
    { name: "Self-learning", value: 90 },
    { name: "Attention to Details", value: 85 },
    { name: "Technical Documentation", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Team Collaboration", value: 95 },
    { name: "Interpersonal Communication", value: 95 },
    { name: "Customer Service", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am looking for full time work placement in software engineering, AI & machine learning, data science, cyber security, IT system, and related areas! If you know of any positions available, have any questions, or if you just want to say hi, please feel free to email me at",
  email: "theson2004@outlook.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Machine Learning Summer Intern", // Here Add Company Name
      companylogo: require("../assets/img/aetosky.png"),
      date: "Nov 2023 – Mar 2024",
    },
    {
      role: "LLM and Software Engineering Intern",
      companylogo: require("../assets/img/kois_ai.jpg"),
      date: "June 2024 – Sep 2024",
    },
    {
      role: "Remote AI Engineer Intern",
      companylogo: require("../assets/img/fpt.png"),
      date: "Jul 2024 – Dec 2024",
    },
    {
      role: "Casual Bar Attendant",
      companylogo: require("../assets/img/delaware.jpg"),
      date: "Mar 2023 – Present",
    }
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  experiences,
  repos,
  skills,
  leadership,
  getInTouch,
};
