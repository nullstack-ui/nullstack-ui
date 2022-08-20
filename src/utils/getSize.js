export const getSize = ({ baseSize, props, theme }) => {
    const { size } = props;
    const { globals } = theme || {};
    const { sizeMultipliers, sizeRatio } = globals || {};
    const { xl, xs } = sizeMultipliers || {};
    let multiplier = sizeMultipliers?.[size];

    if (!multiplier && `${size}`?.indexOf('xs') > 0) {
        const power = parseInt(size.split('xs')[0]);
        const poweredRatio = Math.pow(sizeRatio, power);

        multiplier = xs / poweredRatio;
    } else if (!multiplier && `${size}`?.indexOf('xl') > 0) {
        const power = parseInt(size.split('xl')[0]);
        const poweredRatio = Math.pow(sizeRatio, power);

        multiplier = xl * poweredRatio
    } else if (!multiplier && !isNaN(size)) {
        multiplier = size;
    }

    return multiplier ? `calc(${baseSize} * ${multiplier})` : size;
}