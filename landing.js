// Variables
const repsDiv = document.querySelector('#reps');

// Retrieves Reps Data
class Reps {
  async getReps() {
    try {
      let result = await fetch('reps.json');
      let data = await result.json();
      let reps = data.items;

      reps = reps.map(item => {
        const { id } = item.sys;
        const { name, title, review } = item.fields;
        const image = item.fields.image.fields.file.url;
        return { id, name, title, image, review }
      })
      return reps
    } catch (error) {
      console.log(error);
    }
  }
}

// Display Reps Data Client-Side
class Display {
  displayReps(reps) {
    let result = '';
    reps.forEach(rep => {
      result += `
      <div id="img-container" class="h-4/5">
          <p class="text-xl text-black">${rep.name}</p>
          <p class="mb-2 uppercase">${rep.title}</p>
          <img src=${rep.image} alt="customer" class="w-full h-full shadow-lg hover:opacity-50">
          <p class="mt-2 text-sm">${rep.review}</p>
        </div>
      `
    });
    repsDiv.innerHTML = result;
  }
}

// Application: Local Storage
class Storage {
  static storeReps(reps) {
    localStorage.setItem("reps", JSON.stringify(reps));
  }
  static getReps(id) {
    let reps = JSON.parse(localStorage.getItem('reps'));
    return reps.find(rep => rep.id === id);
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const display = new Display();
  const reps = new Reps();

  reps.getReps().then(reps => {
    display.displayReps(reps);
    Storage.storeReps(reps);
  });
});