import {LogService} from './log.service';
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class DataService {
  pushData = new EventEmitter();
  private data: string[]  = [];

  constructor(private logService: LogService)  {}

  addData(data: string){
    this.data.push(data);
    this.logService.writeToLog('Saved item: '+data);
  }

  getData() {
    return this.data;
  }

  push(value: string) {
    this.pushData.emit(value);
  }
}
