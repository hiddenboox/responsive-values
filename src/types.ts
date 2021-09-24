type KeyValueNumber = {
  [key: string]: number | undefined;
};
export type ResponsiveStyleValue = StyleValue | StyleValue[];
export type StyleValue = number | boolean | string | KeyValueNumber;

export type SnappedEdgesValues = boolean | null;
export type SnappedEdges = SnappedEdgesValues[];
