export const in_array = (id, array) => {
    return array.find(key => key === id);
};

export const serializeQuery = (params, prefix) => {
    const query = Object.keys(params).map(key => {
        const value = params[key];

        if (params.constructor === Array) {
            key = `${prefix}[]`;
        } else if (params.constructor === Object) {
            key = prefix ? `${prefix}[${key}]` : key;
        }
        if (typeof value === "object") {
            return serializeQuery(value, key);
        } else {
            return `${key}=${encodeURIComponent(value)}`;
        }
    });
    return [].concat.apply([], query).join("&");
};

export const decimalPlaces = num => {
    var match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
        return 0;
    }
    return Math.max(
        0,
        (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0)
    );
};

export const capitalize = s => {
    if (typeof s === "string") {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    return "";
};

const checkZero = data => {
    if (data.length == 1) {
        data = "0" + data;
    }
    return data;
};

export const getDate = (format, date) => {
    var day = checkZero(date.getDate());
    var month = checkZero(date.getMonth() + 1);
    var year = checkZero(date.getFullYear());
    var hour = checkZero(date.getHours());
    var minutes = checkZero(date.getMinutes());
    var seconds = checkZero(date.getSeconds());

    return format
        .replace("yyyy", year)
        .replace("mm", month)
        .replace("dd", day)
        .replace("hh", hour)
        .replace("ii", minutes)
        .replace("ss", seconds);
};

export function genUuid() {
    function chr4() {
        return Math.random()
            .toString(16)
            .slice(-4);
    }
    return chr4() + "" + chr4() + "" + chr4() + "" + chr4();
}


export function randomizer(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
}

export function strtolower(str) {
    return str && str.toLowerCase();
}

export function getUnixtime() {
    var time = new Date().getTime();
    time = Math.floor(time / 1000);
    return time;
}
