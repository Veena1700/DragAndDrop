let draggedItem = null;

// Function to handle the drag event
function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text", event.target.id);
  event.target.style.opacity = "0.5";
}

// Function to handle the drop event
function drop(event) {
  event.preventDefault();
  if (event.target.classList.contains("droppable")) {
    event.target.appendChild(draggedItem);
    event.target.style.backgroundColor = "#c0f0c0";
    
    // Display success message in container2
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = `${draggedItem.textContent.trim()} Dragged successfully`;
    event.target.appendChild(successMessage);
    
    // Remove the success message after a certain duration
    setTimeout(() => {
      successMessage.remove();
    }, 2000);
    if (event.target.textContent.trim() === "Drop items here") {
        event.target.textContent = "";
      }
  }
}

// Function to allow dropping on a target
function allowDrop(event) {
  event.preventDefault();
  event.target.style.backgroundColor = "#c0c0f0";
}

// Function to reset the containers and their styles
function resetContainers() {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");

  container1.innerHTML = `
    <div class="item" draggable="true" ondragstart="drag(event)">
      <img src="image1.jpg" alt="Image 1" width="100" height="100"><br>

    </div>
    <div class="item" draggable="true" ondragstart="drag(event)">
      <img src="image2.jpg" alt="Image 2" width="100" height="100"><br>

    </div>
    <div class="item" draggable="true" ondragstart="drag(event)">
      <i class="fa-solid fa-star"></i><br>

    </div>
    <div class="item" draggable="true" ondragstart="drag(event)">
      <img src="image3.jpg" alt="Image 3" width="100" height="100"><br>

    </div>
    <div class="item" draggable="true" ondragstart="drag(event)">
      <i class="fa-solid fa-file"></i><br>

    </div>
   
  `;

  container2.innerHTML = "Drop items here";
  container2.style.backgroundColor = "#f0f0f0";
}