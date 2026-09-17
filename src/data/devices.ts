export type Device = {
  name: string;
  spec: string;
};

export const devices: Device[] = [
  { name: "Desktop", spec: "Ryzen 7 9800X3D, RTX 5070 Ti, 48GB memory, 2TB storage" },
  { name: "MacBook Air", spec: "M2, 16GB memory, 256GB storage, 13.6-inch" },
  { name: "iPhone 17 Pro", spec: "A19 Pro, 256GB storage, 6.3-inch" },
  { name: "Apple Watch Ultra 3", spec: "49mm titanium, GPS + Cellular" },
  { name: "AirPods Pro 3", spec: "H2" },
  { name: "Synology DS220+", spec: "Celeron J4025, 18GB memory, 7TB volume" },
];
