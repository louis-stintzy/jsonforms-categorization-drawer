import { Drawer, Menu, MenuProps } from "antd";
import { allSets } from "../../schemas";

interface DrawerDemoProps {
  open: boolean;
  onClose: () => void;
  setActiveJSONForm: (info: string[]) => void;
}

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [];
allSets.forEach((set) => {
  items.push({
    key: set.ref,
    label: set.title,
    children: set.uischema.elements.map((element) => ({
      key: element.label,
      label: element.label,
    })),
  });
});

function DrawerDemo({ onClose, open, setActiveJSONForm }: DrawerDemoProps) {
  const onclick: MenuProps["onClick"] = (info) => {
    setActiveJSONForm(info.keyPath);
    onClose();
  };
  return (
    <Drawer title="Basic Drawer" onClose={onClose} open={open} placement="left">
      <Menu mode="inline" items={items} onClick={onclick} />
    </Drawer>
  );
}

export default DrawerDemo;
