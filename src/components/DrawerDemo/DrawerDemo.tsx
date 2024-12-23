import { Drawer } from "antd";

interface DrawerDemoProps {
  onClose: () => void;
  open: boolean;
}

function DrawerDemo({ onClose, open }: DrawerDemoProps) {
  return (
    <Drawer title="Basic Drawer" onClose={onClose} open={open} placement="left">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

export default DrawerDemo;
