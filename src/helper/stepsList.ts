type typeStypsList = {
  img:string,
  description: string
}

export const stepsList: typeStypsList[] = [
  {
    img: "/1.png",
    description:
      `Just choose the vegetable you want to order by <br /> clicking on the checkboxes next to it.`,
  }, 
  {
    img: "2.png",
    description: "Click on the basket and fill <br /> out the form.",
  },
  {
    img: "3.png", 
    description:
      "Sit back and relax! Your fresh vegetables basket will be <br class={styles.line__break} /> delivered.",
  }
];
