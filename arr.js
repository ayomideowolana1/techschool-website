// const format = obj => {
//   let arr = [];
//   obj.forEach(o => {
//     let innerArr = o.text.split("",)
//     arr.push(
//         `
//         new Module("${o.title}",${innerArr})
//         `
//         )

//         console.log(innerArr)
//   });
//   console.log(arr)
// };

let res = [];

const format = (str, str2) => {
  let arr = str2.split(",");
  console.log(arr);
  res.push(`new Module(${str},)`);
};

let x = [
  {
    title: "",
    text:
      "Lesson 1: Exploring CaptivateLesson 2: New Project & Soft Skills eLearningLesson 3: Recording Demos and SimsLesson 4: Captions, Styles and TimingLesson 5: Images and Smart ShapesLesson 6: Pointers, Paths, Boxes, and ButtonsLesson 7: Rollovers and ZoomsLesson 8: AudioLesson 9: Video, Animation and EffectsLesson 10: Adding InteractivityLesson 11: Working With PowerPointLesson 12: Introduction to Question SlidesLesson 13: Finishing Touches"
  }
];
x.forEach(obj => {
  format(obj.title, obj.text);
});


// console.log(res)