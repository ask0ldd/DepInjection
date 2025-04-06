export class DIContainer {
    private providers: Map<string, any> = new Map();
  
    register<T>(token: string, provider: { new (): T }): void {
      this.providers.set(token, new provider());
    }
  
    resolve<T>(token: string): T {
      const provider = this.providers.get(token);
      if (!provider) {
        throw new Error(`No provider found for token: ${token}`);
      }
      return provider;
    }
}
  
export const container = new DIContainer();