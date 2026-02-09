import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/hello")({
  component: HelloPage,
});

function HelloPage() {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}
