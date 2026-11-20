import type { Metadata } from "next";

import { SignupForm } from "@/components/landing/AuthForms";
import { AuthPage } from "@/components/landing/AuthPage";

export const metadata: Metadata = { title: "Become a member" };

export default function SignupPage() {
  return (
    <AuthPage current="signup" points={["Only verified Polimi students", "Free for students", "Small groups of 3 to 8", "Your email is never shown"]}>
      <SignupForm />
    </AuthPage>
  );
}
