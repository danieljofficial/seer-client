import { ArrowRight, Badge, Code2, Eye } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export default function Cta() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">
          Ready to visualize your Solana programs?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Join developers who are building better Solana applications with clear
          program visualization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Visualizing
            <Eye className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
