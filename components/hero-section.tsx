import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Star, Users, BookOpen } from "lucide-react"
import { Coffee } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Coffee className="h-4 w-4" />
                AI-Powered Study Companion
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                Master <span className="gradient-text">NEET PG</span> with Your AI Study Companion
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Personalized learning, adaptive testing, and strategic coaching powered by advanced AI. Join thousands
                of successful medical professionals who achieved their dreams with Coffee AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">10K+ students</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">95% success rate</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Get Started Today</h3>
                  <div className="text-sm text-muted-foreground">Free Trial</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Full access to AI tutor</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-sm">Personalized study plans</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Adaptive testing engine</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Start Your Journey</Button>

                <p className="text-xs text-center text-muted-foreground">No credit card required • 14-day free trial</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
