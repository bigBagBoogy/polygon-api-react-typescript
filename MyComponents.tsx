// MyComponents.tsx
import React from "react";
import { getApiUrl } from "./envUtils";

export function MyComponent(): JSX.Element {
  const apiUrl: string = getApiUrl();
  return <div>{apiUrl}</div>;
}
