function submitForm() {
  var userName = document.getElementById("userName").value;
  var greetingText = document.getElementById("greeting-text");
  var audio = document.getElementById("audio");
  var resultImage = document.getElementById("result-image");
  var resultSection = document.getElementById("result-section");

  // Display greeting text
  // Display audio and image
  audio.src = "ந பறநதத வஸட [TubeRipper.com].mp3";
  resultImage.src = "meme.jpg";
  greetingText.textContent =
    "Fuck You, " +
    userName +
    " ===>Saavu da punda<=== Unaku NEW YEAR oru kedu" +
    "!!!";

  // Show result section
  resultSection.style.display = "block";
}
