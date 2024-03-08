export interface ColorSliceState {
  input: string | null;
  selectedColors: string[];
  scale: {
    from?: string;
    to?: string;
  };
}
