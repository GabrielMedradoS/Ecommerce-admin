"use client";
import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function SetupPage() {
  // OnOpen e isOpen criados para usar junto do useEffect
  // dessa forma capturo o estado e uso sem problemas com useEffect
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
