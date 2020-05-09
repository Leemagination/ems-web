export function hashFnv32a(str, asString?, seed?) {//生成hash值
    let i;
    let l;
    let hval = (seed === undefined) ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i++) {
      // tslint:disable-next-line:no-bitwise
      hval ^= str.charCodeAt(i);
      // tslint:disable-next-line:no-bitwise
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    if (asString) {
      // Convert to 8 digit hex string
      // tslint:disable-next-line:no-bitwise
      return ('0000000' + (hval >>> 0).toString(16)).substr(-8);
    }
    // tslint:disable-next-line:no-bitwise
    return hval >>> 0;
  }