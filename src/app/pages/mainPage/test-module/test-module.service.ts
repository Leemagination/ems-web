import { Injectable } from '@angular/core';
import {TestModuleModule} from './test-module.module';

@Injectable({
  providedIn: TestModuleModule
})
export class TestModuleService {

  constructor() { }
}
