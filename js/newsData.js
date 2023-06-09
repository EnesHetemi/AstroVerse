const newsData = [
  {
    title: "Breaking News: Example Event",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./images/galaktiket.png",
    video: "./videos/univers.mp4"
  },
  {
    title: "New Discovery: Scientific Breakthrough",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./images/galaktiket.png",
    video: "./videos/univers.mp4"
  },
  {
    title: "Upcoming Event: Conference Announcement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./images/saturn.png",
    video: "./videos/univers.mp4"
  },
  {
    title: "Another News Article",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./images/galaktiket.png",
    video: "./videos/univers.mp4"
  },
  {
    title: "Latest News Update",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./images/saturn.png",
    video: "./videos/univers.mp4"
  },
  {
    title: "Latest News Update",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./images/saturn.png",
    video: "./videos/univers.mp4"
  }
];

function displayNewsArticle(article) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card-inner');

  const cardFrontElement = document.createElement('div');
  cardFrontElement.classList.add('card-front');

  const imgElement = document.createElement('img');
  imgElement.classList.add('card-image');
  imgElement.src = article.image;
  imgElement.alt = "Front Image";

  const cardContentElement = document.createElement('div');
  cardContentElement.classList.add('card-content');

  const titleElement = document.createElement('h2');
  titleElement.classList.add('card-title');
  titleElement.textContent = article.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card-description');
  descriptionElement.textContent = article.description;

  cardContentElement.appendChild(titleElement);
  cardContentElement.appendChild(descriptionElement);
  cardFrontElement.appendChild(imgElement);
  cardFrontElement.appendChild(cardContentElement);

  const cardBackElement = document.createElement('div');
  cardBackElement.classList.add('card-back');

  const videoElement = document.createElement('video');
  videoElement.src = article.video;
  videoElement.controls = true;
  videoElement.innerHTML = "Your browser does not support the video tag.";

  cardBackElement.appendChild(videoElement);

  cardElement.appendChild(cardFrontElement);
  cardElement.appendChild(cardBackElement);

  const container = document.getElementById('card');
  container.appendChild(cardElement);
}

for (let i = 0; i < newsData.length; i++) {
  displayNewsArticle(newsData[i]);
}