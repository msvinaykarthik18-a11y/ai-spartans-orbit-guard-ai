import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - restored original compiled component
import OrbitGuard from "../orbit/OrbitGuard.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORBIT-GUARD — Onboard Experiment Guardian & Protocol Validator" },
      {
        name: "description",
        content:
          "Live mission console that tracks hand-object interaction, validates every experiment step in sequence, speaks the next action and writes a lightweight mission log.",
      },
      { property: "og:title", content: "ORBIT-GUARD Mission Console" },
      {
        property: "og:description",
        content:
          "Protocol-aware experiment monitoring: next-step intelligence, deviation alerts, recovery plan and mission log.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OrbitGuard,
});
