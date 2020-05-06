import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/base-service.service';

@Injectable()
export class HandleErrorService {

  constructor(private baseService: BaseService) {
  }

  handleErrorMethod(code) {
    return this.baseService.get(`/fail${code}`);
  }

}
