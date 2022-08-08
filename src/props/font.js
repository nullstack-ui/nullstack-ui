export const fontProps = {
    'ellipsis': {
        transform: {
            props: {
                overflow: {
                    x: 'hidden'
                },
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            },
        }
    },
    // 'noWrap': {
    //     transform: {
    //         props: {
    //             whiteSpace: 'no-wrap'
    //         }
    //     }
    // },
    'text.overflow': {
        aliases: [
            'text.ov',
            'textOverflow'
        ],
        key: 'text-overflow'
    },
    'whiteSpace': {
        key: 'white-space'
    }
}