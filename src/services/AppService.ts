import Inject from "../decorators/Inject";
import Injectable from "../decorators/Injectable";
import LoggerService from "./LoggerService";

@Injectable('AppService')
export default class AppService {
  @Inject('LoggerService') private logger!: LoggerService;

  execute(): void {
    this.logger.log('Executing AppService...');
  }
}