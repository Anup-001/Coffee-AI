import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "NEET PG Topper",
    content:
      "Coffee AI is revolutionary! My personalized study strategy, The comprehensive coaching and adaptive tests helped me identify my weak areas and improve consistently.",
    rating: 5,
    avatar: "/doctor-woman.png",
  },
  {
    name: "Dr. Arjun Reddy",
    role: "Medical Resident",
    content:
      "The AI tutor medical residence expectations are incredible. It's like having a personal mentor available 24/7 to guide my preparation.",
    rating: 5,
    avatar: "/doctor-man.png",
  },
  {
    name: "Dr. Sarah Khan",
    role: "Pediatric Specialist",
    content:
      "The burnout detection feature saved my preparation. Coffee AI ensured consistent performance without overwhelming me.",
    rating: 5,
    avatar: "/doctor-woman-specialist.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Trusted by <span className="gradient-text">medical professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands who achieved their NEET PG dreams with Coffee AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-6">{testimonial.content}</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
