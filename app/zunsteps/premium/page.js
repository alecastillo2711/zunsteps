"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PremiumContext } from "../../lib/contexts/PremiumContext";

export default function PremiumPage() {
  const { renderPremium } = useContext(PremiumContext);
  const router = useRouter();

  useEffect(() => {
    if (!renderPremium) {
      // Redirigir a la página de admin si no hay acceso premium
      router.push("/admin");
    }
  }, [renderPremium, router]);

  // Mostrar contenido solo si renderPremium es true
  if (!renderPremium) {
    return null; // No renderizar nada mientras se redirige
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Premium Features</h1>
      <p>Access exclusive content and features with a premium subscription.</p>
    </div>
  );
}
