const sections = document.getElementById("heroes").querySelectorAll("div");
let index = 0;
document.getElementById("heroes").addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    index++;
    sections[index].scrollIntoView({ behavior: "smooth" });
    console.log(index);
  } else {
    index--;
    sections[index].scrollIntoView({ behavior: "smooth" });
    console.log(index);
  }
});
