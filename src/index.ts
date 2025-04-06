import { container } from "./models/DIContainer";
import AppService from "./services/AppService";
import LoggerService from "./services/LoggerService";

console.log("aaaa")
console.log("ddd")

new AppService()
new LoggerService()

const appService = container.resolve<AppService>('AppService');
appService.execute();