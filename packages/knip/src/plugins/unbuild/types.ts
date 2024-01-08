export type UnbuildConfigObject = {
  name: string;
  entries:
    | string[]
    | {
        builder: string;
        input: string;
        outDir: string;
      }[];
  outDir: string;
  declaration: boolean;
  rollup: Record<string, unknown>;
};

export type UnbuildConfig = Partial<UnbuildConfigObject> | Partial<UnbuildConfigObject>[];
