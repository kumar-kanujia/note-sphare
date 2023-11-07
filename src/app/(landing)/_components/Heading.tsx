"use client";

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Create
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>Get Note Sphare</Button>
        </SignInButton>
      )}
    </header>
  );
};

export default Heading;
