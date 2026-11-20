import type { Metadata } from "next";

import { LoginForm } from "@/components/landing/AuthForms";
import { AuthPage } from "@/components/landing/AuthPage";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <AuthPage current="login" points={["Your plans for this week", "Chats with your groups", "Your Cerchia, all in one place"]}>
      <LoginForm />
    </AuthPage>
  );
}
