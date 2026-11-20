import type { Metadata } from "next";

import { HostForm } from "@/components/landing/AuthForms";
import { AuthPage } from "@/components/landing/AuthPage";

export const metadata: Metadata = { title: "Become a host" };

export default function HostPage() {
  return (
    <AuthPage current="host" points={["Fill your slow days with students", "See who is coming before they arrive", "Partners are always labelled", "Free to start"]}>
      <HostForm />
    </AuthPage>
  );
}
