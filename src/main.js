async function loadComponent(id, file) {
  const response = await fetch(`./src/components/${file}`);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

loadComponent("navbar", "navbar.html");
loadComponent("hero", "hero.html");
loadComponent("projects", "projects.html");
loadComponent("footer", "footer.html");