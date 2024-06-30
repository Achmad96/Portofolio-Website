type ProjectType = {
  title: string;
  description: string;
  icons: string[];
  url: string;
  type: string;
};

const Projects: ProjectType[] = [
  {
    title: "Geotera",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icons: ["nextjs", "tailwind"],
    url: "https://geotera.vercel.app/",
    type: "Website",
  },
  {
    title: "Calculator",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icons: ["react", "css"],
    url: "https://calculator-web-umber.vercel.app/",
    type: "Website",
  },
  {
    title: "Todolist",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    icons: ["react", "css"],
    url: "https://todolist-app-three-jet.vercel.app/",
    type: "Website",
  },
];

export { Projects, type ProjectType };
