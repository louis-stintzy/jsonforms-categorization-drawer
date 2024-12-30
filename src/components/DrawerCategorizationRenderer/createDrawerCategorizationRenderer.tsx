import { LayoutProps } from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import DrawerCategorizationRenderer from "./DrawerCategorizationRenderer";

// type JSONFormVariable = string[];

function createDrawerCategorizationRenderer(
  open: boolean,
  //   activeJSONForm: JSONFormVariable,
  setOpen: (open: boolean) => void
  //   setActiveJSONForm: (info: string[]) => void
) {
  const NewDrawerCategorizationRenderer = (jsonFormsProps: LayoutProps) => {
    return (
      <DrawerCategorizationRenderer
        {...jsonFormsProps}
        open={open}
        // activeJSONForm={activeJSONForm}
        setOpen={setOpen}
        // setActiveJSONForm={setActiveJSONForm}
      />
    );
  };
  return withJsonFormsLayoutProps(NewDrawerCategorizationRenderer);
}

export default createDrawerCategorizationRenderer;
