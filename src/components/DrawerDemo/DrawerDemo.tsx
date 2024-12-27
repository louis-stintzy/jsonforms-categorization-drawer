import { Drawer, Menu, MenuProps } from "antd";
import { allSets } from "../../schemas";

interface DrawerDemoProps {
  open: boolean;
  onClose: () => void;
  setActiveJSONForm: (info: string[]) => void;
}

// todo: reinitialiser les bound data si on change de set
// todo: reinitialiser et non reset quand on appuie sur le bouton
// todo: exemple disable le bouton adress dans drawer si checkbox provide adress n'est pas coché

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
