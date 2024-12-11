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
      image: "fa-facebook",
      url: "https://www.facebook.com/chinhhieu.son.9/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_honeybutterbread_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/son-ngo-2272b3215/",
    },
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
  imageSize: 300,
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
  reposLength: 6,
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
    { name: "SQL", value: 90 },
    { name: "C/C++", value: 70 },
    { name: "JavaScript/TypeScript", value: 80 },
    { name: "React", value: 90 },
    { name: "TailwindCSS", value: 90 },
    { name: "ASP.NET", value: 75 },
    { name: "AWS Cloud", value: 85 },
    { name: "PyTorch", value: 85 },
    { name: "TensorFlow", value: 85},
    { name: "NumPy", value: 90 },
    { name: "Pandas", value: 90 },
  ],
  softSkills: [
    { name: "Self-learning", value: 90 },
    { name: "Attention to Details", value: 85 },
    { name: "Technical Documentation", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Team Collaboration", value: 95 },
    { name: "Interpersonal Communication", value: 95 },
    { name: "Customer Service", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time IT Support, Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "theson2004@outlook.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
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
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
