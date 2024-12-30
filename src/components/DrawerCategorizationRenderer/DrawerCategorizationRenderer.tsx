import { Categorization, LayoutProps } from "@jsonforms/core";
import { Drawer, Menu, MenuProps } from "antd";
// import { allSets } from "../../schemas";

// type JSONFormVariable = string[];
type MenuItem = Required<MenuProps>["items"][number];

interface DrawerCategorizationRendererProps {
  open: boolean;
  //   activeJSONForm: JSONFormVariable;
  setOpen: (open: boolean) => void;
  //   setActiveJSONForm: (info: string[]) => void;
}

// const items: MenuItem[] = [];
// allSets.forEach((set) => {
//   items.push({
//     key: set.ref,
//     label: set.title,
//     children: set.uischema.elements.map((element) => ({
//       key: element.label,
//       label: element.label,
//     })),
//   });
// });

function DrawerCategorizationRenderer({
  uischema,
  open,
  //   activeJSONForm,
  setOpen,
}: //   setActiveJSONForm,
LayoutProps & DrawerCategorizationRendererProps) {
  const items: MenuItem[] = [];
  const globalUISchema = uischema as Categorization;
  const localUISchema = globalUISchema.elements as Categorization[];
  localUISchema.forEach((set) => {
    items.push({
      key: set.label,
      label: set.label,
      children: set.elements.map((element) => ({
        key: element.label,
        label: element.label,
      })),
    });
  });

  const onclick: MenuProps["onClick"] = (info) => {
    // setActiveJSONForm(info.keyPath);
    console.log(info);
    setOpen(false);
  };

  return (
    <Drawer
      title="Basic Drawer"
      onClose={() => setOpen(false)}
      open={open}
      placement="left"
    >
      <Menu mode="inline" items={items} onClick={onclick} />
    </Drawer>
  );
}

export default DrawerCategorizationRenderer;
