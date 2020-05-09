export class SearchParams {
  orderID: string;
  orderType: string;
  deliverStorage: string;
  area: string[];
  status: boolean;
  constructor() {
        this.reset();
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
