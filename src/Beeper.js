const after = (time, cb) => setTimeout(cb, time);
const every = (time, cb) => setInterval(cb, time);

const beep = (times, interval) => {
    for (let i = 0; i < times; i++)
        after(i * interval, () => process.stderr.write("\x07"));
}

class Beeper {

    constructor ({ interval }) {
        this.interval = interval;
        this.init();
    }

    init () {
        this.beep();
        every(this.interval, this.beep.bind(this));
    }

    beep () {
        beep(3, 150);
    }

}

module.exports = Beeper;