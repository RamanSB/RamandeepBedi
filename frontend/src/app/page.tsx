"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router: AppRouterInstance = useRouter();
  useEffect(() => {
    router.replace("/about");
  }, []);

  return null;
};

export default HomePage;
