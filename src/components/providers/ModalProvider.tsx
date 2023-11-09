"use client";
import React, { useState, useEffect } from "react";
import SettingsModal from "@/components/modals/SettingsModal";
import CoverImageModal from "@/components/modals/CoverImageModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};

export default ModalProvider;
