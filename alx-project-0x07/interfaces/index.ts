// interfaces/index.ts

import * as React from "react";

// Generic interface for components that receive children
export interface ReactComponentProps {
  children: React.ReactNode;
}

// Example: you can also define other interfaces here if needed
export interface ExampleInterface {
  id: number;
  name: string;
  description?: string;
}

