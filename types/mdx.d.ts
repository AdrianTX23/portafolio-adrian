declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { Localized } from "@/lib/i18n/types";

  export const meta: {
    title: Localized<string>;
    description: Localized<string>;
    date: string;
    tags: Localized<string[]>;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
