import { showToast } from "./main.js"

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", handleSubmit)
  }
})

async function handleSubmit(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())

  try {
    // In a real-world scenario, you would send this data to a server
    // For this example, we'll simulate a successful submission
    await simulateFormSubmission(data)

    showToast("Thank you for your message. We'll get back to you soon!")
    form.reset()
  } catch (error) {
    showToast("There was an error sending your message. Please try again later.")
  }
}

function simulateFormSubmission(data) {
  return new Promise((resolve) => {
    console.log("Form data:", data)
    setTimeout(resolve, 1000) // Simulate a 1-second delay
  })
}

