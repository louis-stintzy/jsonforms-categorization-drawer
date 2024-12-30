import {
  // isVisible,
  Categorization,
  Category,
  // deriveLabelForUISchemaElement,
  // Translator,
} from "@jsonforms/core";
import { Drawer, Menu, MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export interface CategorizationProps {
  elements: (Category | Categorization)[];
  visible: boolean;
  onSelect: (categoryIndex: string) => void;
  onClose: () => void;
  // selectedCategory: Category;
  // onClose: any;
  // data: any;
  // onSelect: any;
  // ajv: any;
  // subcategoriesClassName: string;
  // groupClassName: string;
  // t: Translator;
}

function CategorizationDrawer({
  elements,
  visible,
  onSelect,
  onClose,
}: // selectedCategory,
// data,
// onSelect,
// ajv,
// t,
CategorizationProps) {
  // const items: MenuItem[] = [];
  // elements.forEach((element) => {
  //   items.push({
  //     key: element.label,
  //     label: element.label,
  //     children: element.elements.map((child) => ({
  //       key: child.label,
  //       label: child.label,
  //     })),
  //   });
  // });

  // elements.forEach((set) => {
  //   items.push({
  //     key: set.ref,
  //     label: set.title,
  //     children: set.uischema.elements.map((element) => ({
  //       key: element.label,
  //       label: element.label,
  //     })),
  //   });
  // });

  // const generateMenuItems = (categories: (Category | Categorization)[]) => {
  //   // prendre les categories et categorizations et les convertir en MenuItem[]

  //   return categories.map((category) => {
  //     if (category.type === "Category") {
  //       return {
  //         key: category.label,
  //         label: category.label,
  //         children: category.elements.map((element) => ({
  //           key: element.label,
  //           label: element.label,
  //         })),
  //       };
  //     } else if (category.type === "Categorization") {
  //       return {
  //         key: category.label,
  //         label: category.label,
  //         children: generateMenuItems(category.elements),
  //       };
  //     }
  //   });
  // };
  const generateMenuItems = (
    categories: (Category | Categorization)[]
  ): MenuItem[] => {
    // prendre les categories et categorizations et les convertir en MenuItem[]
    return categories.map((category) => {
      const key = category.label;
      const label = category.label;
      if (category.type === "Category") {
        return {
          key,
          label,
        } as MenuItem;
      }
      return {
        key,
        label,
        children: generateMenuItems(category.elements),
      } as MenuItem;
    });
  };

  const items = generateMenuItems(elements) as MenuItem[];

  const onclick: MenuProps["onClick"] = (info) => {
    // setActiveJSONForm(info.keyPath);
    // console.log(info);
    onSelect(info.keyPath[0]);
    // onClose();
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      onClose={onClose}
      open={visible}
    >
      <Menu mode="inline" items={items} onClick={onclick} />
    </Drawer>
  );
}

export default CategorizationDrawer;
