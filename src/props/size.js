const sizeRatio = 1.1;
const sizes = {
    md: 1,

    get xl() {
        return this.lg * sizeRatio
    },
    get lg() {
        return this.md * sizeRatio
    },
    get sm() {
        return this.md / sizeRatio
    },
    get xs() {
        return this.sm / sizeRatio
    }
}

const size = ({
    key,
    value
}) => {
    const targetSize = sizes[value];
    const xl = sizes.xl;
    const xs = sizes.xs;

    if (targetSize) {
        return {
            key,
            value: `${targetSize}em`
        }
    } else {
        if (value.indexOf('xs') > 0) {
            const power = parseInt(value.split('xs')[0]);
            const poweredRatio = Math.pow(sizeRatio, power);

            return {
                key,
                value: `${xs / poweredRatio}em`
            }
        }

        if (value.indexOf('xl') > 0) {
            const power = parseInt(value.split('xl')[0]);
            const poweredRatio = Math.pow(sizeRatio, power);

            return {
                key,
                value: `${xl * poweredRatio}em`
            }
        }
    }
}

export const sizeProps = {
    size: {
        fn: size,
        key: 'font-size',
    }
}