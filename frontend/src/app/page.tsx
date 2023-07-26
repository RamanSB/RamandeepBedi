"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router: AppRouterInstance = useRouter();
  router.replace("/about");
  return <></>;
};

export default HomePage;
