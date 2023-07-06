import img1 from "../images/tour-1.jpeg";
import img2 from "../images/tour-2.jpeg";
import img3 from "../images/tour-3.jpeg";
import img4 from "../images/tour-4.jpeg";
import img5 from "../images/tour-5.jpeg";
import img6 from "../images/tour-6.jpeg";
import maleFace1 from "../images/Male-Face-D5-icon.png";
import femaleFace1 from "../images/Female-Face-FE-5-blonde-icon.png";
import femaleFace2 from "../images/Female-Face-FI-1-icon.png";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
  { id: 5, href: "#testimonial", text: "Testimonials" },
];

export const socailLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const aboutData = [
  {
    id: 1,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?",
  },
  {
    id: 2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?",
  },
  {
    id: 3,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?",
  },
  {
    id: 4,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?",
  },
  {
    id: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving money",
    text: "Free abstract decieve merciful selfish truth depths value disgust.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless hiking",
    text: " Aspernatur quisquam harum nam cumque temporibus explicabo dolorum.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
export const tourData = [
  {
    id: 1,
    image: img1,
    date: "august 26th, 2020",
    title: "best of java",
    text: `China officially the People's Republic of China (PRC), is a country in East Asia. It is the world's second-most populous country, with a population exceeding 1.4 billion.`,
    location: "china",
    day: 6,
    price: 2100,
  },
  {
    id: 2,
    image: img2,
    date: "september 24 , 2021",
    title: "Tibet Adventure",
    text: `Indonesia officially the Republic of Indonesia (Indonesian: Republik Indonesia),[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands.`,
    location: "Indonesia",
    day: 8,
    price: 3100,
  },
  {
    id: 3,
    image: img3,
    date: "January 16th, 2021",
    title: "explore hong kong",
    text: `HongKong is one of the richest and most highly developed parts in the world, and one where the cost of living is one of the highest. Hong Kong grew quickly in the decades after World War II.`,
    location: "Hongkong",
    day: 3,
    price: 1200,
  },
  {
    id: 4,
    image: img6,
    date: "september 6th, 2022",
    title: "TajMahal",
    text: `The Taj Mahal is an Islamic religious building, mosque and tomb in India, built in the 17th century by Emperor Shah Jahan in memory of his wife, Mumtaz Mahal. Its chief architect was Ustad Ahmad Lahauri.`,
    location: "India",
    day: 21,
    price: 6500,
  },
  {
    id: 5,
    image: img5,
    date: "august 2nd, 2022",
    title: "New zealand",
    text: `New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.`,
    location: "India",
    day: 26,
    price: 8500,
  },
  {
    id: 6,
    image: img4,
    date: "june 19th, 2020",
    title: "Kenya",
    text: `Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley and mountain highlands.`,
    location: "India",
    day: 16,
    price: 4500,
  },
];

export const testimonalData = [
  {
    id: 1,
    name: "Ram Kumar",
    image: maleFace1,
    job: "Web Developer",
    review:
      "I came across the Hotel Alessandra while researching for places to stay in the city. It seemed to tick all the boxes, being centrally located and reasonably priced.The dining room was large and the breakfast selection was bountiful with items and coffee being refreshed constantly, in addition to made to order coffee beverages.All interactions with staff were pleasant. All in all, it was a very enjoyable stay.",
  },

  {
    id: 3,
    name: "John Dizoza",
    image: femaleFace1,
    job: "Artist",
    review:
      "Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. Lekshmi , Srimanta , Jubair were the awesome peoples doing good job.I recommend to stay in this Hotel.You will never regret.Foods was 10 star rating.Once i get another chance , I will stay here.",
  },
  {
    id: 2,
    name: "Raheem Ahamed",
    image: femaleFace2,
    job: "Business",
    review:
      "I came across the Hotel Alessandra while researching for places to stay in the city. It seemed to tick all the boxes, being centrally located and reasonably priced.The dining room was large and the breakfast selection was bountiful with items and coffee being refreshed constantly, in addition to made to order coffee beverages.All interactions with staff were pleasant. All in all, it was a very enjoyable stay.",
  },
];
