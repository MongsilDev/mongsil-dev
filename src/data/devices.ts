export type Device = {
  name: string;
  spec: string;
  details: [label: string, value: string][];
  href?: string;
};

export const devices: Device[] = [
  {
    name: "Desktop",
    spec: "Ryzen 7 9800X3D, RTX 5070 Ti, 48GB memory, 2TB storage",
    details: [
      ["CPU", "AMD Ryzen 7 9800X3D"],
      ["GPU", "NVIDIA GeForce RTX 5070 Ti"],
      ["Memory", "48GB"],
      ["Storage", "2TB"],
    ],
  },
  {
    name: "MacBook Air",
    spec: "M2, 16GB memory, 256GB storage, 13.6-inch",
    details: [
      ["Chip", "Apple M2"],
      ["Memory", "16GB"],
      ["Storage", "256GB"],
      ["Display", "13.6-inch"],
    ],
    href: "https://support.apple.com/en-us/111867",
  },
  {
    name: "Mac mini",
    spec: "M6, 16GB memory, 256GB storage",
    details: [
      ["Chip", "Apple M6"],
      ["Memory", "16GB"],
      ["Storage", "256GB"],
    ],
    href: "https://www.apple.com/mac-mini/",
  },
  {
    name: "Frog TKL Leggera",
    spec: "Venom HE PCB, UR Ice Extreme switches, aluminum case",
    details: [
      ["Case", "Frog TKL Leggera, aluminum"],
      ["Plate", "Aluminum HE plate"],
      ["PCB", "Venom HE, F12 TKL"],
      ["Switches", "UR Ice Extreme, magnetic linear"],
      ["Stabilizers", "Night Stabilizer V4"],
      ["Keycaps", "FBB SFC 1990, PBT Cherry profile"],
    ],
    href: "https://geon.works/products/frog-tkl-leggera",
  },
  {
    name: "G Pro X2 Superstrike",
    spec: "HERO 2, HITS inductive switches, LIGHTSPEED wireless",
    details: [
      ["Sensor", "HERO 2, up to 44,000 DPI"],
      ["Switches", "HITS haptic inductive"],
      ["Connection", "LIGHTSPEED wireless"],
    ],
    href: "https://www.logitechg.com/en-us/shop/p/pro-x2-superstrike-mouse",
  },
  {
    name: "Synology DS220+",
    spec: "Celeron J4025, 18GB memory, 8TB storage",
    details: [
      ["CPU", "Intel Celeron J4025"],
      ["Memory", "18GB"],
      ["Storage", "8TB"],
    ],
    href: "https://global.download.synology.com/download/Document/Hardware/DataSheet/DiskStation/20-year/DS220+/enu/Synology_DS220_Plus_Data_Sheet_enu.pdf",
  },
  {
    name: "iPhone 17 Pro",
    spec: "A19 Pro, 256GB storage, 6.3-inch",
    details: [
      ["Chip", "A19 Pro"],
      ["Storage", "256GB"],
      ["Display", "6.3-inch"],
    ],
    href: "https://support.apple.com/en-us/125090",
  },
  {
    name: "Apple Watch Ultra 4",
    spec: "49mm titanium, GPS + Cellular",
    details: [
      ["Case", "49mm titanium"],
      ["Model", "GPS + Cellular"],
    ],
    href: "https://www.apple.com/apple-watch-ultra-4/",
  },
  {
    name: "AirPods Pro 3",
    spec: "H2",
    details: [["Chip", "H2"]],
    href: "https://www.apple.com/airpods-pro/",
  },
];
