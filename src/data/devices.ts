export type Device = {
  name: string;
  spec: string;
  href?: string;
};

export const devices: Device[] = [
  { name: "Desktop", spec: "Ryzen 7 9800X3D, RTX 5070 Ti, 48GB memory" },
  {
    name: "MacBook Air",
    spec: "M2, 16GB memory, 13.6-inch",
    href: "https://support.apple.com/en-us/111867",
  },
  { name: "Mac mini", spec: "M6, 16GB memory, 256GB storage", href: "https://support.apple.com/en-us/128108" },
  {
    name: "Venom 87 HE",
    spec: "UR Ice Extreme switches, FBB SFC 1990 keycaps",
    href: "https://geon.works/products/venom-tkl-he-pcb",
  },
  {
    name: "G Pro X2 Superstrike",
    spec: "HITS switches, HERO 2, LIGHTSPEED",
    href: "https://www.logitechg.com/en-us/shop/p/pro-x2-superstrike-mouse",
  },
  {
    name: "Synology DS220+",
    spec: "Celeron J4025, 18GB memory, 8TB storage",
    href: "https://global.download.synology.com/download/Document/Hardware/DataSheet/DiskStation/20-year/DS220+/enu/Synology_DS220_Plus_Data_Sheet_enu.pdf",
  },
  {
    name: "iPhone 18 Pro Max",
    spec: "A20 Pro, 256GB storage, 6.9-inch ProMotion",
    href: "https://support.apple.com/en-us/148591",
  },
  {
    name: "Apple Watch Ultra 4",
    spec: "49mm titanium, GPS + Cellular",
    href: "https://support.apple.com/en-us/148758",
  },
  {
    name: "AirPods Pro 3",
    spec: "H2, Active Noise Cancellation, heart rate sensor",
    href: "https://support.apple.com/en-us/125135",
  },
];
