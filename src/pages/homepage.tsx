import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/button";

export default function HomePage() {
  const router = useRouter();

  const onLogout = () => {
    AutoLogout();
    router.replace("/");
  };

  return (
    <div>
      <nav className="flex items-center justify-between h-[70px] px-4 bg-cyan-50">
        <h3>Home</h3>
        <Button onClick={onLogout} variant="primary">
          Logout
        </Button>
      </nav>
    </div>
  );
}
