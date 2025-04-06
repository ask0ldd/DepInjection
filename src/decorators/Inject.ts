import { container } from "../models/DIContainer";

// @Inject('LoggerService') private logger!: LoggerService;
export default function Inject(token: string): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
      const instance = container.resolve(token);
      Object.defineProperty(target, propertyKey, {
        value: instance,
        writable: false,
      });
    };
  }

/*
    export default function Inject(token: string): PropertyDecorator {
        return (target: Object, propertyKey: string | symbol) => {
            Object.defineProperty(target, propertyKey, {
                get() {
                    return container.resolve(token);
                },
                enumerable: true,
                configurable: true,
            });
        };
    }
*/