const hexToHSL = (hex) => {
    // Get the RGB components of the hex
    const rgb = {
        r: parseInt(hex.substr(1, 2), 16) / 255,
        g: parseInt(hex.substr(3, 2), 16) / 255,
        b: parseInt(hex.substr(5, 2), 16) / 255,
    };
    // Convert RGB to HSL
    const max = Math.max(rgb.r, rgb.g, rgb.b),
        min = Math.min(rgb.r, rgb.g, rgb.b);
    let h,
        s,
        l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case rgb.r:
                h = (rgb.g - rgb.b) / d + (rgb.g < rgb.b ? 6 : 0);
                break;
            case rgb.g:
                h = (rgb.b - rgb.r) / d + 2;
                break;
            case rgb.b:
                h = (rgb.r - rgb.g) / d + 4;
                break;
        }
        h /= 6;
    }
    return {
        h: Math.round(h * 360),
        s: `${Math.round(s * 100)}%`,
        l: `${Math.round(l * 100)}%`,
    };
};

export default hexToHSL;
