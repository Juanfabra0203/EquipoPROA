function openModal(videoId) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");

  // Agregar el video con autoplayu
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");

  // Detener el video y cerrar el modal
  iframe.src = "";
  modal.style.display = "none";
}
