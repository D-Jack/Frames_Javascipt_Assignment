//global variables
const videoUrl = [];

function fetchdata() {
  fetch("http://www.mocky.io/v2/5ed5fda4340000740006d560?mocky-delay=500ms")
    .then((Response) => {
      if (!Response.ok) {
        throw Error("ERROR");
      }
      return Response.json();
    })
    .then((data) => {
      console.log(data);
      getVideoId(data);
      setUrlBackground(data);
      getVideoUrl(data);
    });
}
function handleSubmit() {
  fetch("http://www.mocky.io/v2/5ed609363400004d0006d602", {
    method: "POST",
    body: JSON.stringify(frameEntries),
  }).then((data) => {
    console.log(data);
  });
}

function getVideoId(data) {
  const arr = [];
  for (const frameEl of data) {
    arr.push(frameEl.id);
  }
}

function getVideoUrl(data) {
  for (const frameEl of data) {
    videoUrl.push(frameEl.url);
  }

  const compClassVideo = document.querySelector('.compClassVideo');
  compClassVideo.innerHTML =
  `<video  id="activeVideo" controls>
  <source src="${videoUrl[0]}" type="video/mp4">
  Your browser does not support HTML video.
  </video>
  `;
}

const setUrlBackground = (data) => {
  let i = 1;
  for (const frameEl of data) {
    const label = document.querySelector(`.frame${i}`);
    // console.log(label);
    label.style.backgroundImage = `url('${frameEl.frames[0].url}')`;
    i++;
  }
};

fetchdata();
