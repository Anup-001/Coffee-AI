import { Card } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Shield } from "lucide-react"

const studyFeatures = [
  {
    icon: TrendingUp,
    title: "Target Score Tracker",
    description:
      "Monitor your progress with advanced analytics and mistake analysis. Interactive dashboards show your improvement across all subjects.",
    features: ["Real-time progress monitoring", "Detailed mistake analysis", "Performance dashboards"],
  },
  {
    icon: Shield,
    title: "Burnout Prevention & Motivation",
    description:
      "Advanced pattern recognition identifies stress signals and suggests optimal study sessions with motivational coaching.",
    features: ["Burnout detection", "Motivation layer", "Adaptive coaching"],
  },
]

export function StudyFeaturesSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Smart Study Features That <span className="gradient-text">Adapt to You</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {studyFeatures.map((feature, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
