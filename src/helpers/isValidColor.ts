export function isValidColor(color: string | null): boolean {
  if (color === null) {
    return false;
  }

  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
  const rgbaRegex =
    /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0(\.\d+)?|1(\.0+)?)\)$/;
  const hslRegex = /^hsl\((\d{1,3}), (\d{1,3})%, (\d{1,3})%\)$/;
  const hslaRegex =
    /^hsla\((\d{1,3}), (\d{1,3})%, (\d{1,3})%, (0(\.\d+)?|1(\.0+)?)\)$/;

  return (
    hexRegex.test(color) ||
    rgbRegex.test(color) ||
    rgbaRegex.test(color) ||
    hslRegex.test(color) ||
    hslaRegex.test(color)
  );
}
