import type { Metadata } from "next";

import { ChatsView } from "@/components/member/ChatsView";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = { title: "Chats" };

export default function ChatsPage() {
  return (
    <>
      <Nav active="Chats" />
      <ChatsView />
    </>
  );
}
