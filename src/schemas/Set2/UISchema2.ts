export const UISchema2 = {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Professional Details",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/jobTitle",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/department",
        },
      ],
    },
    {
      type: "Category",
      label: "Contact Info",
      elements: [
        {
          type: "Control",
          scope: "#/properties/contact/properties/email",
        },
        {
          type: "Control",
          scope: "#/properties/contact/properties/phone",
        },
      ],
    },
  ],
};
