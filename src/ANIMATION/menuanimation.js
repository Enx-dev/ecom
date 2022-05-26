export const slideIn = {
  hidden: {
    y: -1000,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    y: -1000,
    opacity: 0,
    transition: {
      duration: 1,
      when: "afterChildren",
    },
  },
};
export const menuVarient = {
  hidden: {
    x: -1000,
  },
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    x: -1000,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};
export const list = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -10,
    opacity: 0,
  },
};
