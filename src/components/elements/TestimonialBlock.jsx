import { useEffect } from "react";

export default function TestimonialBlock() {
  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window !== "undefined") {
      const container = document.querySelector(".container");
      if (container) {
        const containerLeft = container.getBoundingClientRect().left + 15;
        const blockTestimonials = document.querySelector(".block-testimonials");
        if (blockTestimonials) {
          blockTestimonials.style.paddingLeft = `${containerLeft}px`;
        }
      }
    }
  }, []);

  return null;
}
