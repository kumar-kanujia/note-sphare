"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import Image from "next/image";
import { api } from "@/../convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });
    toast.promise(promise, {
      loading: "Creating Note...",
      success: "Note Created!",
      error: "Failed to create note!",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height={300}
        width={300}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height={300}
        width={300}
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-mediums">
        Welcome to {user?.firstName}&apos;s Note Sphare
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create A New Note
      </Button>
    </div>
  );
};

export default DocumentsPage;
