import { Categorization, Category, LayoutProps } from "@jsonforms/core";
import CategorizationDrawer from "./CategorizationDrawer";
import SingleCategory from "./SingleCategory";
import { useEffect, useState } from "react";
import { Button } from "antd";

interface CategorizationProps {
  selected?: number;
  onChange?(selected: number, prevSelected: number): void;
}

function CategorizationRenderer({
  //   data,
  uischema,
  schema,
  path,
}: //   selected,
//   onChange,
LayoutProps & CategorizationProps) {
  const categorization = uischema as Categorization;
  const elements = categorization.elements as (Category | Categorization)[];
  const elementsChildren = [] as (Category | Categorization)[];
  elements.forEach((element) => {
    element.elements.forEach((child) => {
      elementsChildren.push(child as Category);
    });
  });

  const [drawerVisible, setDrawerVisible] = useState(true);
  //   const [previousCategorization, setPreviousCategorization] =
  // useState<Categorization>(uischema as Categorization);
  const [activeCategory, setActiveCategory] = useState<Category>(
    elementsChildren[0] as Category
  );

  //   const [activeCategory, setActiveCategory] = useState<number>(selected ?? 0);

  // safeCategory is used to prevent the activeCategory from exceeding the length of the elements array
  // if the activeCategory is greater than the length of the elements array, it will be set to 0
  //   const safeCategory =
  // activeCategory >= categorization.elements.length ? 0 : activeCategory;

  //   if (categorization !== previousCategorization) {
  // setActiveCategory(0);
  // setPreviousCategorization(categorization);
  //   }

  //   const onCategorySelected = (categoryIndex: number) => () => {
  // if (onChange) {
  //   return onChange(categoryIndex, safeCategory);
  // }
  // return setActiveCategory(categoryIndex);
  //   };

  const handleCategorySelect = (categoryLabel: string) => {
    const categoryClicked = elementsChildren.find(
      (element) => element.label === categoryLabel
    );
    if (!categoryClicked) return;
    console.log("handleCategorySelect");
    console.log(categoryClicked);
    setActiveCategory(categoryClicked as Category);
    setDrawerVisible(false);
  };

  useEffect(() => {
    console.log("useEffect");
    console.log(activeCategory);
  }, [activeCategory]);

  return (
    <>
      <CategorizationDrawer
        elements={elements}
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        // selectedCategory={elements[safeCategory] as Category}
        // depth={0}
        // data={data}
        onSelect={handleCategorySelect}
        // subcategoriesClassName=""
        // groupClassName=""
        // t={() => ""}
      />
      <SingleCategory
        category={activeCategory as Category}
        schema={schema}
        path={path}
        key={activeCategory.label}
      />
      <Button
        type="primary"
        onClick={() => setDrawerVisible(true)}
        style={{
          margin: "0 1rem 1rem 0",
          width: "128px",
        }}
      >
        Show Drawer
      </Button>
    </>
  );
}

export default CategorizationRenderer;
