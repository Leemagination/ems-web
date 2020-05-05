export class SearchParams {
  name: string;
  age: number;
  address: string;
  telephone: number;
  entryDate: Date[];
  remark: string;

  constructor() {
  }

  getParams() {
    return {
      name: this.name,
      age: this.age,
      address: this.address,
      telephone: this.telephone,
      entryDate: this.entryDate,
      remark: this.remark
    };
  }

  reset() {
    this.name = null;
    this.age = null;
    this.address = null;
    this.telephone = null;
    this.entryDate = null;
    this.remark = null;
  }
}
