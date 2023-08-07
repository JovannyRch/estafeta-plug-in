export const base64ToBlob = (base64: string): Blob => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new Blob([bytes], { type: "application/pdf" });
};

function replaceAll(str: string, find: string, replace: string): string {
  return str.replace(new RegExp(find, "g"), replace);
}

export function formatCurrency(value: string, currency = "USD") {
  if (typeof value === "string") {
    value = replaceAll(value, "$", "");
    value = replaceAll(value, ",", "");
  }
  const parsedValue = Number.parseFloat(value);
  if (!Number.isNaN(parsedValue)) {
    return parsedValue
      .toLocaleString(undefined, {
        style: "currency",
        currency,
      })
      .replace(".00", "");
  }
  return value;
}

export function formatDimensions(value: string) {
  let result = value.trim().replace(/cm/g, "cm x");

  result = result.substring(0, result.lastIndexOf("x")).trim();
  return result;
}

export function capitalizeFirstLetter(string: string) {
  if (!string || typeof string !== "string") return string;

  return string.charAt(0).toUpperCase() + string.slice(1);
}
