if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('js/serviceWorker.js')
             .then(function() { console.log("Service Worker Registered"); });
  }
  const showElements = () => {
    let output = ""
    menu.forEach(({ image, link, ref }) =>(output += `
        <div class="main-container-element">
          <div class="main-container-image">
            <img src="${image}" style="height: 80%" />
          </div>
          <div class="main-container-title">
            <h2><a href="${ref}">${link}</a></h2>
          </div>
          </div>
                `)
    )
    container.innerHTML = output
}
const container = document.querySelector(".main-container")
const menu = [
    { image: "src/img/autos/main.jpg", link: "AUTOS", ref: "./pages/autos.html"},
    { image: "src/img/paisajes/paisajes.jpeg", link: "PAISAJES", ref: "/.pages/paisajes.html" },
]



document.addEventListener("DOMContentLoaded", showElements)