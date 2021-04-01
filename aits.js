class aits {

  constructor(ts1, ts2, v = null) {
    if (ts2 < ts1 ) throw new Error('Invalid range!');
    this.a = [];
    this.ts = ts1;
    this.len = ts2 - ts1;
    for (let j = 0; j < this.len; j++) { this.a[j] = v; }
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
    for (let j = 0; j < this.len; j++) {
      callback(this.get(this.ts + j));
    }
  }

  rebuild(v = null, len = this.len) {
    if ((len < 1) && (len > this.len)) return false;
    if (this.len != len) this.a.splice(len, this.len - 1);
    for (let j = 0; j < len; j++) { this.a[j] = v; }
    this.len = len;
    return true;
  } // EO rebuild

  scroll(ts, v = null) {
    if ((ts < this.ts) || (ts > (this.ts + this.len))) return false;
    let n = ts - this.ts;
    let j = 0;
    for (; (n + j) < this.len; j++) { this.a[j] = this.a[n + j]; }
    for (; j < this.len; j++) { this.a[j] = v; }
    return true;
  } // EO splice

}
