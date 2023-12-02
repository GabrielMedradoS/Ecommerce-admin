"use client";

// Para que o lado do cliente e o server side estejam sincronizado eu preciso
// retirar problemas de 'hidrataçao', esse provider garante que a modal estara sincronizada
// tanto do lado do cliente quanto do server

// Maneira simples de retirar problemas de hydration

import { useState, useEffect } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
