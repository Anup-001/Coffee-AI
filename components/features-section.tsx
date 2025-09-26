import { Card } from "@/components/ui/card"
import { Brain, Target, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: 'AI Tutor "Coffee"',
    description:
      "Advanced AI companion that adapts to your learning style with personalized coaching and real-time feedback.",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "Adaptive Testing",
    description:
      "Smart testing engine that adjusts difficulty based on your performance and identifies knowledge gaps.",
    color: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Comprehensive analytics and detailed mistake analysis with performance dashboards across all subjects.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Daily Planner",
    description: "Intelligent daily study plans with optimal goal generation and priority subject focus.",
    color: "text-accent",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Everything you need to succeed
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Everything you need to <span className="gradient-text">succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our AI-powered platform combines personalized learning, adaptive testing, and strategic coaching to maximize
            your NEET PG preparation efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-lg bg-primary/10 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
