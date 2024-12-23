export const schema2 = {
  type: "object",
  properties: {
    personalData: {
      type: "object",
      properties: {
        jobTitle: {
          type: "string",
          description: "Your job title",
        },
        department: {
          type: "string",
          description: "Your department",
        },
      },
    },
    contact: {
      type: "object",
      properties: {
        email: {
          type: "string",
          format: "email",
          description: "Your email address",
        },
        phone: {
          type: "string",
          description: "Your phone number",
        },
      },
    },
  },
};
