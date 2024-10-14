declare module "*.png" {
  const value: string;
  export default value;
}

declare module "validator" {
  const validator: {
    isStrongPassword: (
      input: string,
      options?: {
        minLength?: number;
        minLowercase?: number;
        minUppercase?: number;
        minNumbers?: number;
        minSymbols?: number;
        returnScore?: boolean;
      }
    ) => boolean;
  };
  export default validator;
}
