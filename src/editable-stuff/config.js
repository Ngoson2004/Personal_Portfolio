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
  message: "Turning data into discovery — and ideas into impact.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Ngoson2004",
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
  imageSize: 400,
  message:
    "My name is Son Ngo. I am a machine learning researcher trainee in Manufacturing department of CSIRO Clayton, Melbourne. \
    My work focus on AI for early-stage drug discovery, building model for molecular predictive analysis. \
    Besides working fulltime, I am studying Bachelor of Computer Science at Swinburne University of Technology. \
    Looking forward to connect with professionals and researchers in various AI/ML domains!",
  resume: require("../editable-stuff/SonNgo_Resume_DSAI.pdf"),
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
  specificRepos: [
    "Personal_Portfolio",
    "SWE30003_Restaurant-Information-System",
    "COS30049-Computing_Technology_Innovation_Project",
    "Deep-Learning-for-Vietnamese",
    "Vector-search_Engine",
    "COS30019-Intro-to-AI",
  ],
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
    { name: "Python", value: 100 },
    { name: "SQL", value: 90 },
    { name: "HPC/SLURM", value: 85 },
    { name: "LaTeX", value: 90 },
    { name: "AWS Cloud", value: 85 },
    {
      name: "AI/ML libraries (PyTorch, Scikit-learn, Numpy, Pandas)",
      value: 100,
    },
    { name: "Data Visualization (Matplotlib, Seaborn)", value: 95 },
    { name: "Computer Vision (OpenCV, PIL)", value: 95 },
    { name: "Cheminformatics (RDKit, Chemprop)", value: 95 },
    {
      name: "Deep learning methods (CNNs, GNNs, Transformers)",
      value: 95,
    },
  ],
  softSkills: [
    { name: "Creativity", value: 90 },
    { name: "Logical Thinking", value: 90 },
    { name: "Attention to Details", value: 85 },
    { name: "Academic Writing", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Team Collaboration", value: 95 },
    { name: "Interpersonal Communication", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am seeking for PhD opportunities in the fields of Machine Learning, Cheminformatics, Robotics, and related areas. \
    If you are working in academia and need a student lending a helping hand in your research projects, please feel free to contact me at",
  email: "theson2004@outlook.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "ML Researcher Trainee - CSIRO", // Here Add Company Name
      companylogo: require("../assets/img/csiro.png"),
      date: "Feb 2025 – Present",
    },
    // {
    //   role: "Student - Swinburne University of Technology", // Here Add Company Name
    //   companylogo: require("../assets/img/swin.png"),
    //   date: "Aug 2022 – Present",
    // },
    {
      role: "AI Engineer Intern - FPT AI Center", // Here Add Company Name
      companylogo: require("../assets/img/fpt.png"),
      date: "Jul 2024 – Jan 2025",
    },
    {
      role: "Computer Vision AI Intern - Aetosky", // Here Add Company Name
      companylogo: require("../assets/img/aetosky.png"),
      date: "Nov 2023 – Mar 2024",
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
  experiences,
  repos,
  skills,
  leadership,
  getInTouch,
};
