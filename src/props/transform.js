// Utils
import { getNestedProps } from '#utils/getNestedProps';

export const genericTransform = value => {
    let x = 0;
    let y = 0;

    if (Array.isArray(value)) {
        if (value[0] != null) {
            x = value[0];
        }

        if (value[1] != null) {
            y = value[1];
        }
    } else if (typeof value === 'object') {
        if (value.x) { x = value.x; }
        if (value.y) { y = value.y; }
    }

    return {
        x,
        y
    }
}

export const transform = ({
    key = 'transform',
    subProperty,
    value
}) => {
    if (value === 'none') {
        return {
            key,
            value: 'none'
        };
    } else if (typeof value === 'object') {
        const props = [];

        for (let prop in value) {
            props.push({
                prop,
                value: genericTransform(value[prop])
            })
        }

        console.log('props', props)
        // return getNestedProps({
        //     childProps: value,
        //     propName: 'transform',
        //     theme
        // })

        return {}
    }
}

export const transformProps = {
    'transform': {
        key: 'transform',
        fn: transform
    },
    'transform.translate': {
        aliases: ['translate'],
        key: 'transform',
        fn: transform
    }
}