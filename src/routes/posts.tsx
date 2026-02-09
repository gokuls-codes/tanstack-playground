import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Posts Layout</h1>
      <Outlet />
    </div>
  );
}
