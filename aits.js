class aits {

  constructor(ts1, ts2) {
    if (ts2 < ts1 ) {
      throw new Error('Invalid range!');
    }
    if ((ts2-ts1) > 21600) {
      throw new Error('Out of range!');
    }
    this.a = [];
    this.ts = ts1;
    this.len = ts2 - ts1;
    for (let j = 0; j < this.len; j++) { this.a[j] = null; }
  } // EO constructor

  get(ts) {
    if ((ts < this.ts) || (ts > (this.ts + this.len))) return false;
    return this.a[ts - this.ts];
  } // EO get

  set(ts, v) {
    if ((ts < this.ts) || (ts > this.ts + this.len)) return false;
    this.a[ts - this.ts] = v;
    return true;
  } // EO set

  print(callback = console.log) {
    let j;
    for (j = 0; j < this.len; j++) {
      callback(this.get(this.ts + j));
    }
  }

  rebuild(ts, len = this.len) {
    if (len < 1) return false;
    this.ts = ts;
    for (let j = 0; j < len; j++) {
      this.a[j] = null;
    }
    return true;
  } // EO rebuild

  splice(ts) {
    if ((ts < this.ts) || (ts > this.ts)) return false;
    let n = ts - this.ts;
    let j = 0;
    for (; (n + j) < this.len; j++) { this.a[j] = this.a[n + j]; }
    for (; j < this.len; j++) { this.a[j] = null; }
    return true;
  } // EO splice

}
