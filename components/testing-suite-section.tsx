import { Card } from "@/components/ui/card"
import { FileText, Target, Brain, RotateCcw, Lightbulb, Stethoscope } from "lucide-react"

const testTypes = [
  {
    icon: FileText,
    title: "Topic Test",
    description: "Focused assessments on specific medical topics with instant feedback and explanations.",
    number: "01",
  },
  {
    icon: Target,
    title: "Subject Drill",
    description: "Comprehensive subject-wise practice sessions with difficulty progression.",
    number: "02",
  },
  {
    icon: Brain,
    title: "Custom AI Challenge",
    description: "Personalized question banks based on your weak areas and learning patterns.",
    number: "03",
  },
  {
    icon: Stethoscope,
    title: "Grand Test",
    description: "Full-length mock exams simulating actual NEET PG conditions and timing.",
    number: "04",
  },
  {
    icon: RotateCcw,
    title: "Revision Pack",
    description: "Curated question sets for quick review and memory reinforcement.",
    number: "05",
  },
  {
    icon: Lightbulb,
    title: "Rescue Test",
    description: "Emergency practice sessions for last-minute preparation and confidence building.",
    number: "06",
  },
]

export function TestingSuiteSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Complete <span className="gradient-text">Testing Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Six different test types tailored to every stage of your NEET PG preparation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testTypes.map((test, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <test.icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground/30">{test.number}</span>
                </div>

                <h3 className="text-lg font-semibold">{test.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{test.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
