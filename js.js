const projectsListBasic = document.getElementById("projects-basic");
const projectsListIntermediate = document.getElementById(
  "projects-intermediate"
);
const projectsListAdvanced = document.getElementById("projects-advanced");

// Fetch the JSON data
fetch("./projects.json")
  .then((response) => response.json())
  .then((data) => {
    // Loop through the projects and create HTML for each
    data.forEach((project) => {
      let li = document.createElement("li");

      li.innerHTML = `
                      <h3 class="mx-[15px] mt-[10px] mb-[10px] text-lg font-semibold text-white">${
                        project.title
                      }</h3>
                      <div class="flex flex-col grow">
                          <div class="flex flex-col">
                              <a href="${
                                project.liveSite
                              }" class="grow text-[#ffffffbb] hover:bg-[#2c2c2e] hover:text-white transition-colors duration-200 ease-in-out focus:bg-[#2c2c2e] focus:text-white rounded-lg py-[10px] pr-[10px] pl-[30px] flex items-center ">Live Site</a>
                              <a href="${
                                project.githubRepo
                              }" class="grow text-center text-[#ffffffbb] hover:bg-[#2c2c2e] hover:text-white transition-colors duration-200 ease-in-out focus:bg-[#2c2c2e] focus:text-white  py-[10px] pr-[10px] pl-[30px] rounded-lg py-2 px-4 flex items-center">GitHub Repo</a>
                          </div>
                          <ul class="flex flex-wrap justify-end gap-2 mt-[17px] mb-[10px] mx-[10px] font-[merriweather] text-[10px] text-[#ffffffbb]">
                           ${project.technologies
                             .map(
                               (tech) =>
                                 `<li class="text-white font-semibold">${tech}</li>`
                             )
                             .join("")}
                          </ul >
                      </div >
              `;
      li.classList.add(
        "w-[275px]",
        "bg-[#1c1c1e]",
        "rounded-lg",
        "flex",
        "flex-col",
        "shadow-[0_0_5px_2px_rgba(255,255,255,0.1)]"
      );
      projectsListBasic.appendChild(li); // Append to <ul>
    });
  })
  .catch((error) => console.error("Error fetching projects:", error));

const buttons = document.querySelector("#buttons");

const projectLists = {
  basic: {
    project: document.querySelector("#projects-basic"),
    button: document.querySelector("#btn-basic"),
  },
  intermediate: {
    project: document.querySelector("#projects-intermediate"),
    button: document.querySelector("#btn-intermediate"),
  },
  advanced: {
    project: document.querySelector("#projects-advanced"),
    button: document.querySelector("#btn-advanced"),
  },
};

// Function to switch project list visibility and change the styles of buttons
function showProjects(level) {
  Object.keys(projectLists).forEach((key) => {
    if (key === level) {
      projectLists[key]["project"].classList.remove("hidden");
      projectLists[key]["project"].classList.add("grid"); // Ensure it's flex

      projectLists[key]["button"].classList.add("border-white");
    } else {
      projectLists[key]["project"].classList.replace("grid", "hidden");

      projectLists[key]["button"].classList.remove("border-white");
    }
  });
}

// Attach event listeners

buttons.addEventListener("click", (event) => {
  if (event.target.dataset.level) {
    showProjects(event.target.dataset.level);
  }
});
