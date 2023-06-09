const modulesList = [
  {
    id: 1,
    name: "Módulo 1 - Introducción Curso de ingles",
    description: "Sint do ut nostrud quis culpa ea veniam eu esse.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 1,
  },
  {
    id: 2,
    name: "Módulo 1 - Introducción Curso de español",
    description:
      "Deserunt magna anim non ipsum occaecat proident minim duis sint.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 2,
  },
  {
    id: 3,
    name: "Módulo 1 - Introducción a JavaScript",
    description:
      "Consectetur commodo proident elit consectetur elit nostrud nostrud ea.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 3,
  },
  {
    id: 4,
    name: "Módulo 1 - Introducción a React",
    description: "Sit ipsum minim ut excepteur cillum proident pariatur.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 4,
  },
  {
    id: 5,
    name: "Módulo 1 - Introducción a la programación",
    description:
      "Ad tempor velit magna sunt ullamco esse ut duis elit excepteur ex.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 5,
  },
  {
    id: 6,
    name: "Módulo 1 - Introducción a la programación",
    description: "Laboris culpa do veniam cupidatat non ex.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 6,
  },
  {
    id: 7,
    name: "Módulo 1 - Introducción a la programación",
    description:
      "Do et nisi exercitation aliquip pariatur incididunt velit velit culpa aliquip anim culpa dolore.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 7,
  },
  {
    id: 8,
    name: "Módulo 1 - Introducción a la programación",
    description:
      "Mollit amet incididunt esse aute ex id dolor in exercitation.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 8,
  },
  {
    id: 9,
    name: "Módulo 1 - Introducción a la programación",
    description: "Et in ut qui proident labore et elit ex irure sunt elit.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 9,
  },
  {
    id: 10,
    name: "Módulo 1 - Introducción a la programación",
    description:
      "Nisi culpa sint tempor id. Lorem in laboris culpa consectetur.",
    classes: {
      _id: "",
      type: "",
      name: "",
      description: "",
      duration: "",
      url: "",
      image: "",
      video: "",
      document: "",
      position: "",
    },
    idCourse: 1,
  },
];

const getModules = async () => {
  return modulesList;
};

const findModuleById = (id) => {
  return modulesList.find((module) => module.idCourse == id);
};

const filterModuleById = (id) => {
  return modulesList.filter((module) => module.idCourse == id);
};

export { getModules, findModuleById, filterModuleById };
