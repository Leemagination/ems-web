export class SearchParams {
  orderID: string;
  orderType: string;
  deliverStorage: string;
  area: string[];
  status: boolean;

  constructor() {
    this.reset();
  }

  setParams(target) {
    this.orderID = target.orderID;
    this.orderType = target.orderType;
    this.deliverStorage = target.deliverStorage;
    this.area = target.area;
    this.status = target.status === 'undefined' ? null : target.status === 'true';
  }

  getParams() {
    return {
      orderID: this.orderID,
      orderType: this.orderType,
      deliverStorage: this.deliverStorage,
      area: this.area,
      status: this.status
    };
  }

  reset() {
    this.orderID = null;
    this.orderType = null;
    this.deliverStorage = null;
    this.area = null;
    this.status = null;
  }
}
