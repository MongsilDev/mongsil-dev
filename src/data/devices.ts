export type Device = {
  name: string;
  spec: string;
  details?: [label: string, value: string][];
  href?: string;
};

export const devices: Device[] = [
  {
    name: "Desktop",
    spec: "Ryzen 7 9800X3D, RTX 5070 Ti",
    details: [
      ["Memory", "48GB"],
      ["Storage", "2TB"],
    ],
  },
  {
    name: "MacBook Air",
    spec: "M2, 13.6-inch",
    details: [
      ["Memory", "16GB"],
      ["Storage", "256GB"],
    ],
    href: "https://support.apple.com/en-us/111867",
  },
  {
    name: "Mac mini",
    spec: "M6",
    details: [
      ["Memory", "16GB"],
      ["Storage", "256GB"],
    ],
    href: "https://www.apple.com/mac-mini/",
  },
  {
    name: "Venom 87 HE",
    spec: "Hall effect, UR Ice Extreme switches",
    details: [
      ["Case", "Frog TKL Leggera"],
      ["Keycaps", "FBB SFC 1990"],
    ],
    href: "https://geon.works/products/venom-tkl-he-pcb",
  },
  {
    name: "G Pro X2 Superstrike",
    spec: "HITS inductive switches, HERO 2",
    href: "https://www.logitechg.com/en-us/shop/p/pro-x2-superstrike-mouse",
  },
  {
    name: "Synology DS220+",
    spec: "Celeron J4025, 8TB",
    details: [["Memory", "18GB"]],
    href: "https://global.download.synology.com/download/Document/Hardware/DataSheet/DiskStation/20-year/DS220+/enu/Synology_DS220_Plus_Data_Sheet_enu.pdf",
  },
  {
    name: "iPhone 17 Pro",
    spec: "A19 Pro, 256GB",
    href: "https://support.apple.com/en-us/125090",
  },
  {
    name: "Apple Watch Ultra 4",
    spec: "49mm titanium, GPS + Cellular",
    href: "https://www.apple.com/apple-watch-ultra-4/",
  },
  {
    name: "AirPods Pro 3",
    spec: "H2",
    href: "https://www.apple.com/airpods-pro/",
  },
];
