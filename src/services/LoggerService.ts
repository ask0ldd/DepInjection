import Injectable from "../decorators/Injectable";

@Injectable('LoggerService')
export default class LoggerService {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}