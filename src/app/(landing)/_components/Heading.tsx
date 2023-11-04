"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <header className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Document, & Plans Unified. Welcome to{" "}
        <span className="underline">Note Sphare</span>
      </h1>
      <h3 className="text-baase sm:text-xl md:text-2xl font-medium">
        Jotion is the most popular and connected workspace where
        <br />
        better faster and more efficient work happens.
      </h3>
      <Button>
        Create
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </header>
  );
};

export default Heading;
