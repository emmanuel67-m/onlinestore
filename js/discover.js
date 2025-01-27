// Function to handle the "Discover Now" button click
function handleDiscoverNow() {
    // Scroll to the new arrivals section
    const newArrivalsSection = document.querySelector(".new-arrivals")
    if (newArrivalsSection) {
      newArrivalsSection.scrollIntoView({ behavior: "smooth" })
    }
  
    // Add a highlight effect to the new arrivals section
    newArrivalsSection.classList.add("highlight")
    setTimeout(() => {
      newArrivalsSection.classList.remove("highlight")
    }, 2000)
  }
  
  // Add event listener to the "Discover Now" button when the DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    const discoverNowBtn = document.querySelector(".discover-btn")
    if (discoverNowBtn) {
      discoverNowBtn.addEventListener("click", handleDiscoverNow)
    }
  })
  
  // Export the function as the default export
  export default handleDiscoverNow
  
  