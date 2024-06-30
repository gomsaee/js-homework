const data = [
  {
    id: 1,
    src: "img1.jpeg",
    alt: "물 원소 남자",
  },
  {
    id: 2,
    src: "img2.jpeg",
    alt: "불 원소 여자",
  },
  {
    id: 3,
    src: "img3.jpeg",
    alt: "구름 원소 여자",
  },
  {
    id: 4,
    src: "img4.jpeg",
    alt: "흙 원소 남자 아이",
  },
];

const navigation = document.querySelector(".navigation");

const setBgColor = (data) => {
  const container = document.querySelector(".container");

  const colorObj = {
    1: "linear-gradient( 180deg,rgba(46, 117, 219, 1) 0%, rgba(1, 3, 40, 1) 100%)",
    2: "linear-gradient(180deg, rgba(254,124,1,1) 0%, rgba(6,0,0,1) 100%)",
    3: "linear-gradient(180deg, rgba(214,103,226,1) 0%, rgba(0,0,0,1) 100%)",
    4: "linear-gradient(180deg, rgba(163,219,31,1) 0%, rgba(0,0,0,1) 100%)",
  };

  container.style.background = colorObj[data];
};

const setImage = (mainImg, index) => {
  mainImg.src = `./assets/${data[index - 1].src}`;
  mainImg.alt = `${data[index - 1].alt}`;
};

const setNameText = (index) => {
  const span = document.querySelector("span");
  span.textContent = `${data[index - 1].alt}`;
};

const isActive = (selectedImg) => {
  const children = [...navigation.children];

  children.forEach((li) => li.classList.remove("is-active"));

  selectedImg.classList.add("is-active");
};

navigation.addEventListener("click", (e) => {
  e.preventDefault();

  const mainImg = document.querySelector(".main-img");
  const target = e.target.closest("li");
  const visual = document.querySelector(".main-img");
  const index = target.dataset.index;

  if (!target) return;
  isActive(target);
  setImage(visual, index);
  setBgColor(index);
  setNameText(index);
});
