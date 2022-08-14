export const visibilityProps = {
    'hidden': {
        fn: ({ props }) => ({
            key: 'display',
            value: props.hidden ? 'none' : ''
        })
    },
    'invisible': {
        fn: ({ props }) => ({
            key: 'visibility',
            value: props.invisible ? 'hidden' : ''
        })
        // value: 'hidden'
    },
    'visible': {
        fn: ({ props }) => ({
            key: 'visibility',
            value: props.visible ? 'visible' : ''
        })
    },
    'visibility': {
        aliases: ['vis'],
        key: 'visibility'
    }
}