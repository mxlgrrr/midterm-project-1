
const urlParams = new URLSearchParams(window.location.search);
const uuidParam = urlParams.get('uuid');

// Realizar una petición GET al endpoint y obtener los datos
fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then(response => response.json())
    .then(data => {
        const filteredProjects = data.filter(project => project.uuid === uuidParam);
        
        const projectContainer = document.getElementById('project-container');

        filteredProjects.forEach(project => {
            document.querySelector('#project-title').innerHTML = project.name;
            document.querySelector('#project-description').innerHTML = project.description;
            document.querySelector('#project-content').innerHTML = project.content;
            const projectImage = document.querySelector(".detail-image");
            projectImage.style.backgroundImage = `url("${project.image}")`;
            document.querySelector('#project-completed_on').innerHTML = project.completed_on;
        });
})
.catch(error => console.error(error));
