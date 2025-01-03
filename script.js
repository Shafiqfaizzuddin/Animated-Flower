onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Get the name you want to display
  let name = "SHAFIQ"; // Replace this with whatever name you want to display
  
  let characters = name.split("");

  // Get the container element
  let container = document.getElementById("blinking-name");

  // Clear any existing content
  container.innerHTML = '';

  // Create a span for each character and add it to the container
  characters.forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${(index + 1) * 0.2}s`;
    container.appendChild(span);
  });
};
