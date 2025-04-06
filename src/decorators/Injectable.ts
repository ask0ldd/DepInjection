import { container } from "../models/DIContainer";

// @Injectable('AppService')
export default function Injectable(token: string): ClassDecorator {
    return (target : any) => {
      container.register(token, target);
    };
}