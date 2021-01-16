let framedata;

console.log(framedata);
let frameNo = 0;
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("submit");

function setVideoUrl(frameNo) {
  const activeVideo = document.getElementById("activeVideo");
  activeVideo.innerHTML = 
  `<source src="${videoUrl[frameNo]}" type="video/mp4">
    Your browser does not support HTML video.`
  ;
}

function editEntry(inputId) {
  frameEntries[frameNo].frameId = `${inputId}`;
}

function nextEntry() {
  console.log(frameNo);

  if (frameNo >= 3) {
    nextBtn.disabled = true;
  }
  frameNo++;
  setVideoUrl(frameNo);
  document.getElementById("1").checked = true;
  prevBtn.disabled = false;
}
function prevEntry() {
  console.log(frameNo);
  if (frameNo <= 1) {
    prevBtn.disabled = true;
  }
  frameNo--;
  setVideoUrl(frameNo);
  document.getElementById("1").checked = true;
  nextBtn.disabled = false;
}
function con() {
  console.log(frameEntries, frameNo);
}

let frameEntries = [];
for (let i = 0; i < 5; i++) {
  let frameEntry = {
    id: `v${i + 1}`,
    frameId: "1",
  };
  frameEntries.push(frameEntry);
}

$(document).ready(function () {
  $('input[type="radio"]').click(function () {
    let inputId = $(this).attr("id");
    editEntry(inputId);
  });
});

function submitHandler() {
  handleSubmit();
}

nextBtn.addEventListener("click", nextEntry);
prevBtn.addEventListener("click", prevEntry);
submitBtn.addEventListener("click", submitHandler);
