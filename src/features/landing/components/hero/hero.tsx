import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { ArrowRight, Eye, Zap } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { BlurIn } from "./blur-in";

export default function Hero() {
  return (
    <section className="relative py-16 lg:py-24 border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 bg-primary/10 text-primary border-primary/20"
          >
            <Zap className="w-3 h-3 mr-1" />
            Built for speed
          </Badge>

          {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">
            Visualize Solana Program IDLs with Interactive Flow Graphs
          </h1> */}
          <BlurIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">
              Visualize Solana Program IDLs with Interactive Flow Graphs
            </h1>
          </BlurIn>

          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Transform complex Solana program interfaces into beautiful,
            interactive visualizations. Understand program structure, explore
            account relationships, and debug faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Try the Visualizer
              <Eye className="w-4 h-4 mr-2" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 bg-transparent"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Demo
            </Button> */}
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            {/* <code className="bg-muted px-3 py-1 rounded-md font-mono">
              npx solana-idl-visualizer your-program.json
            </code> */}
          </div>
        </div>
      </div>
    </section>
  );
}
