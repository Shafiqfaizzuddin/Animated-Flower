onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Get the name you want to display
  let name = "Your Name Here"; // Replace with your actual name

  // Split the name into words
  let words = name.split(" ");

  // Get the container element
  let container = document.getElementById("blinking-name");

  // Create a span for each word and add it to the container
  words.forEach((word, index) => {
    let span = document.createElement("span");
    span.textContent = word;
    span.style.animationDelay = `${(index + 1) * 0.2}s`; // Add a delay for each word
    container.appendChild(span);
  });
};
