import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/rest/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/rest/$"!</div>;
}
