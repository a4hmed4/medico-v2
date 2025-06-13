import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


const Section2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnzZjK5LSbzslQUG9N4SrmP_FQxxdIWOPtn9I8sOJ_tQ32Mm1L8EDp66_DWNKP1xg88Y&usqp=CAU",
      alt: "Data visualization chart",
      title: "Quarterly Performance",
      description:
        "This chart illustrates the quarterly performance metrics across all departments, showing a 15% increase in productivity compared to the previous fiscal year.",
    },
    {
      image: "https://amr.org.jo/storage/images/projects/1760440874445661.jpg",
      alt: "Market trends graph",
      title: "Market Trends",
      description:
        "Analysis of current market trends indicates favorable conditions for expansion into the Asia-Pacific region, with projected growth of 22% over the next two quarters.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnzZjK5LSbzslQUG9N4SrmP_FQxxdIWOPtn9I8sOJ_tQ32Mm1L8EDp66_DWNKP1xg88Y&usqp=CAU",
      alt: "Resource allocation diagram",
      title: "Resource Allocation",
      description:
        "Optimal resource allocation has resulted in a 12% reduction in operational costs while maintaining quality standards across all production facilities.",
    },
    {
      image: "https://amr.org.jo/storage/images/projects/1760440874445661.jpg",
      alt: "Customer satisfaction metrics",
      title: "Customer Satisfaction",
      description:
        "Customer satisfaction scores have improved by 18% following the implementation of our new service protocol and enhanced support system.",
    },
  ]

    // Navigation functions
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-12">
    {/* Section 1: Pictures and words next to each other */}

    <section className="space-y-8"
      style={{padding:"1rem 0"}}
     >
        <h2 
        style={{textAlign:"center"}}
        className="text-2xl font-bold tracking-tight">Visual Analysis</h2>


        <div className="flex flex-col items-center">
          {/* Slider container - card sized */}
          <div className="w-full max-w-md mx-auto">
            <div className="overflow-hidden rounded-lg border shadow-sm">
              {/* Current slide */}
              <div className="w-full">
                <div className="h-[200px] relative">
                  <img
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-background p-4 space-y-2">
                  <h3 className="text-lg font-medium">{slides[currentSlide].title}</h3>
                  <p className="text-sm text-muted-foreground">{slides[currentSlide].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between w-full max-w-md mt-4">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground shadow hover:bg-primary/90 focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Slide indicators */}
            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground shadow hover:bg-primary/90 focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

  </div>
  );
};

export default Section2;
