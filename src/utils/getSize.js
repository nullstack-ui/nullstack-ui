export const getSize = ({ baseSize, props, theme }) => {
    const { size } = props;
    const { globals } = theme || {};
    const { sizeMultipliers, sizeRatio } = globals || {};
    const { xl, xs } = sizeMultipliers || {};
    let multiplier = sizeMultipliers?.[size || 'md'] || 1;

    if (size?.indexOf('xs') > 0) {
        const power = parseInt(size.split('xs')[0]);
        const poweredRatio = Math.pow(sizeRatio, power);

        multiplier = xs / poweredRatio;
    } else if (size?.indexOf('xl') > 0) {
        const power = parseInt(size.split('xl')[0]);
        const poweredRatio = Math.pow(sizeRatio, power);

        multiplier = xl * poweredRatio
    }

    return `calc(${baseSize} * ${multiplier})`;
}