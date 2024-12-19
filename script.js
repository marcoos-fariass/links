//trocar fundo
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img//
  const img = document.querySelector("#profile Img")

  //subistituir a imagem
  if (html.classList.contains("light")) {
    //se tiver a light mode , adc a img light
    img.setAttribute("src", "./arqui/avatar-farias-light.png")
  } else {
    //se tiver sem light mode, manter img normal
    img.setAttribute("src", "./arqui/avatar-farias.png")
  }

  //pegar a tag img//
  const alt = document.querySelector("#profile Img")

  //subistituir a alt
  if (html.classList.contains("light")) {
    //se tiver a light mode , adc a img light
    img.setAttribute("alt", "Foto de Farias Desing")
  } else {
    //se tiver sem light mode, manter img normal
    img.setAttribute("alt", "Foto de Farias Desing")
  }
}
