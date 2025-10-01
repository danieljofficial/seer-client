import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Code2, Eye, FileCode, GitBranch, Network, Zap } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-14 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to understand Solana programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful visualization tools designed specifically for Solana
            developers working with complex program interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="border-primary bg-card/50 backdrop-blur-sm">
            <CardContent className="py-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Interactive Flow Graphs
              </h3>
              <p className="text-muted-foreground">
                Visualize program structure with interactive node graphs. Zoom,
                pan, and explore account relationships intuitively.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-card/50 backdrop-blur-sm">
            <CardContent className="py-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <FileCode className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IDL Parser</h3>
              <p className="text-muted-foreground">
                Automatically parse and validate Solana IDL files. Support for
                Anchor and native program interfaces.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-card/50 backdrop-blur-sm">
            <CardContent className="py-3">
              <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Type Exploration</h3>
              <p className="text-muted-foreground">
                Deep dive into custom types, enums, and structs. Understand data
                structures at a glance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-card/50 backdrop-blur-sm">
            <CardContent className="py-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instruction Mapping
              </h3>
              <p className="text-muted-foreground">
                Map program instructions to their account requirements and data
                structures visually.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-card/50 backdrop-blur-sm">
            <CardContent className="py-3">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-muted-foreground">
                Watch your IDL changes update in real-time. Perfect for
                development and debugging workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-card/50 backdrop-blur-sm">
            <CardContent className="py-3">
              <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export & Share</h3>
              <p className="text-muted-foreground">
                Export visualizations as images or share interactive links with
                your team for collaboration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
