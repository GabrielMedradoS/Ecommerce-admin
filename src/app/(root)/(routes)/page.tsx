"use client";
import { useEffect } from "react";
/* import { UserButton } from "@clerk/nextjs"; */
import { Modal } from "../../../components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
