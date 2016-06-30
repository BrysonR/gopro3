const vr = (resolution) => {
    console.log(resolution);
}

const mode = (mode) => {
    console.log(mode);
}

const commander = () => {
    return {
        'video-resolution': vr,
        'vr': vr,
        'mode': mode,
        'm': mode
    }
};

module.exports = {
    commander: commander()
}
