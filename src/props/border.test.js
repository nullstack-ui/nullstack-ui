import { addToCache, cache } from '../';
import { handleProps } from '../props';
import { ComponentStyle } from '../components/Component/Component.style';
import { checkState } from './misc.test';

const mockedProps = {
    addToCache,
    cache,
    context: {},
    depth: 'DEPTH_HERE',
    theme: {}
}

const mockedStyleProps = {
    addToCache,
    cache,
    context: {},
    darkMode: false,
    depth: 'DEPTH_HERE',
    theme: {}
}

describe('border props', () => {
    it('should return correct css props', () => {
        // bd (boolean)
        let props = handleProps({
            ...mockedProps,
            props: {
                bd: true
            },
        });

        expect(props.bd).toBeTruthy();
        expect(props.bd.cssProps[0].key).toBe('border');
        expect(props.bd.cssProps[0].value).toBe('solid 1px #000');
        expect(props.bd.initialValue).toBe(true);
        expect(props.bd.prop).toBe('bd');

        // bd (none)
        props = handleProps({
            ...mockedProps,
            props: {
                bd: 'none'
            },
        });

        expect(props.bd).toBeTruthy();
        expect(props.bd.cssProps[0].key).toBe('border');
        expect(props.bd.cssProps[0].value).toBe('none');
        expect(props.bd.initialValue).toBe('none');
        expect(props.bd.prop).toBe('bd');

        // bd (string)
        props = handleProps({
            ...mockedProps,
            props: {
                bd: 'blue'
            },
        });

        expect(props.bd).toBeTruthy();
        expect(props.bd.cssProps[0].key).toBe('border');
        expect(props.bd.cssProps[0].value).toBe('solid 1px blue');
        expect(props.bd.initialValue).toBe('blue');
        expect(props.bd.prop).toBe('bd');

        // bd (object)
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    color: 'red',
                    radius: 5,
                    style: 'dashed',
                    width: 2,
                }
            }
        });

        expect(props.bdColor).toBeTruthy();
        expect(props.bdColor.cssProps[0].key).toBe('border-color');
        expect(props.bdColor.cssProps[0].value).toBe('red');
        expect(props.bdColor.initialValue).toBe('red');
        expect(props.bdColor.prop).toBe('bdColor');
        expect(props.bdRadius).toBeTruthy();
        expect(props.bdRadius.cssProps[0].key).toBe('border-radius');
        expect(props.bdRadius.cssProps[0].value).toBe('5em');
        expect(props.bdRadius.initialValue).toBe(5);
        expect(props.bdRadius.prop).toBe('bdRadius');
        expect(props.bdStyle).toBeTruthy();
        expect(props.bdStyle.cssProps[0].key).toBe('border-style');
        expect(props.bdStyle.cssProps[0].value).toBe('dashed');
        expect(props.bdStyle.initialValue).toBe('dashed');
        expect(props.bdStyle.prop).toBe('bdStyle');
        expect(props.bdWidth).toBeTruthy();
        expect(props.bdWidth.cssProps[0].key).toBe('border-width');
        expect(props.bdWidth.cssProps[0].value).toBe('2px');
        expect(props.bdWidth.initialValue).toBe(2);
        expect(props.bdWidth.prop).toBe('bdWidth');

        // bdColor
        props = handleProps({
            ...mockedProps,
            props: {
                bdColor: 'red'
            },
        });

        expect(props.bdColor).toBeTruthy();
        expect(props.bdColor.cssProps[0].key).toBe('border-color');
        expect(props.bdColor.cssProps[0].value).toBe('red');
        expect(props.bdColor.initialValue).toBe('red');
        expect(props.bdColor.prop).toBe('bdColor');

        // bdRadius
        props = handleProps({
            ...mockedProps,
            props: {
                bdRadius: 10
            },
        });

        expect(props.bdRadius).toBeTruthy();
        expect(props.bdRadius.cssProps[0].key).toBe('border-radius');
        expect(props.bdRadius.cssProps[0].value).toBe('10em');
        expect(props.bdRadius.initialValue).toBe(10);
        expect(props.bdRadius.prop).toBe('bdRadius');

        props = handleProps({
            ...mockedProps,
            props: {
                radius: 10
            },
        });

        expect(props.bdRadius).toBeTruthy();
        expect(props.bdRadius.cssProps[0].key).toBe('border-radius');
        expect(props.bdRadius.cssProps[0].value).toBe('10em');
        expect(props.bdRadius.initialValue).toBe(10);
        expect(props.bdRadius.prop).toBe('bdRadius');

        props = handleProps({
            ...mockedProps,
            props: {
                rounded: 10
            },
        });

        expect(props.bdRadius).toBeTruthy();
        expect(props.bdRadius.cssProps[0].key).toBe('border-radius');
        expect(props.bdRadius.cssProps[0].value).toBe('10em');
        expect(props.bdRadius.initialValue).toBe(10);
        expect(props.bdRadius.prop).toBe('bdRadius');

        // bdRadius (bottom)
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    radius: {
                        bottom: 10
                    }
                }
            }
        });

        expect(props.bdRadiusBottom).toBeTruthy();
        expect(props.bdRadiusBottom.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdRadiusBottom.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusBottom.cssProps[1].key).toBe('border-bottom-right-radius');
        expect(props.bdRadiusBottom.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusBottom.initialValue).toBe(10);
        expect(props.bdRadiusBottom.prop).toBe('bdRadiusBottom');

        props = handleProps({
            ...mockedProps,
            props: {
                bdRadius: {
                    bottom: 10
                }
            }
        });

        expect(props.bdRadiusBottom).toBeTruthy();
        expect(props.bdRadiusBottom.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdRadiusBottom.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusBottom.cssProps[1].key).toBe('border-bottom-right-radius');
        expect(props.bdRadiusBottom.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusBottom.initialValue).toBe(10);
        expect(props.bdRadiusBottom.prop).toBe('bdRadiusBottom');

        props = handleProps({
            ...mockedProps,
            props: {
                radius: {
                    bottom: 10
                }
            }
        });

        expect(props.bdRadiusBottom).toBeTruthy();
        expect(props.bdRadiusBottom.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdRadiusBottom.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusBottom.cssProps[1].key).toBe('border-bottom-right-radius');
        expect(props.bdRadiusBottom.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusBottom.initialValue).toBe(10);
        expect(props.bdRadiusBottom.prop).toBe('bdRadiusBottom');

        props = handleProps({
            ...mockedProps,
            props: {
                rounded: {
                    bottom: 10
                }
            }
        });

        expect(props.bdRadiusBottom).toBeTruthy();
        expect(props.bdRadiusBottom.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdRadiusBottom.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusBottom.cssProps[1].key).toBe('border-bottom-right-radius');
        expect(props.bdRadiusBottom.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusBottom.initialValue).toBe(10);
        expect(props.bdRadiusBottom.prop).toBe('bdRadiusBottom');

        // bdRadius (left)
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    radius: {
                        left: 10
                    }
                }
            }
        });

        expect(props.bdRadiusLeft).toBeTruthy();
        expect(props.bdRadiusLeft.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdRadiusLeft.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusLeft.cssProps[1].key).toBe('border-top-left-radius');
        expect(props.bdRadiusLeft.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusLeft.initialValue).toBe(10);
        expect(props.bdRadiusLeft.prop).toBe('bdRadiusLeft');

        props = handleProps({
            ...mockedProps,
            props: {
                bdRadius: {
                    left: 10
                }
            }
        });

        expect(props.bdRadiusLeft).toBeTruthy();
        expect(props.bdRadiusLeft.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdRadiusLeft.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusLeft.cssProps[1].key).toBe('border-top-left-radius');
        expect(props.bdRadiusLeft.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusLeft.initialValue).toBe(10);
        expect(props.bdRadiusLeft.prop).toBe('bdRadiusLeft');

        props = handleProps({
            ...mockedProps,
            props: {
                radius: {
                    left: 10
                }
            }
        });

        expect(props.bdRadiusLeft).toBeTruthy();
        expect(props.bdRadiusLeft.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdRadiusLeft.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusLeft.cssProps[1].key).toBe('border-top-left-radius');
        expect(props.bdRadiusLeft.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusLeft.initialValue).toBe(10);

        props = handleProps({
            ...mockedProps,
            props: {
                rounded: {
                    left: 10
                }
            }
        });

        expect(props.bdRadiusLeft).toBeTruthy();
        expect(props.bdRadiusLeft.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdRadiusLeft.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusLeft.cssProps[1].key).toBe('border-top-left-radius');
        expect(props.bdRadiusLeft.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusLeft.initialValue).toBe(10);
        expect(props.bdRadiusLeft.prop).toBe('bdRadiusLeft');

        // bdRadius (right)
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    radius: {
                        right: 10
                    }
                }
            }
        });

        expect(props.bdRadiusRight).toBeTruthy();
        expect(props.bdRadiusRight.cssProps[0].key).toBe('border-bottom-right-radius');
        expect(props.bdRadiusRight.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusRight.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRadiusRight.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusRight.initialValue).toBe(10);
        expect(props.bdRadiusRight.prop).toBe('bdRadiusRight');

        props = handleProps({
            ...mockedProps,
            props: {
                bdRadius: {
                    right: 10
                }
            }
        });

        expect(props.bdRadiusRight).toBeTruthy();
        expect(props.bdRadiusRight.cssProps[0].key).toBe('border-bottom-right-radius');
        expect(props.bdRadiusRight.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusRight.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRadiusRight.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusRight.initialValue).toBe(10);
        expect(props.bdRadiusRight.prop).toBe('bdRadiusRight');

        props = handleProps({
            ...mockedProps,
            props: {
                radius: {
                    right: 10
                }
            }
        });

        expect(props.bdRadiusRight).toBeTruthy();
        expect(props.bdRadiusRight.cssProps[0].key).toBe('border-bottom-right-radius');
        expect(props.bdRadiusRight.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusRight.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRadiusRight.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusRight.initialValue).toBe(10);

        props = handleProps({
            ...mockedProps,
            props: {
                rounded: {
                    right: 10
                }
            }
        });

        expect(props.bdRadiusRight).toBeTruthy();
        expect(props.bdRadiusRight.cssProps[0].key).toBe('border-bottom-right-radius');
        expect(props.bdRadiusRight.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusRight.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRadiusRight.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusRight.initialValue).toBe(10);
        expect(props.bdRadiusRight.prop).toBe('bdRadiusRight');

        // bdRadius (top)
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    radius: {
                        top: 10
                    }
                }
            }
        });

        expect(props.bdRadiusTop).toBeTruthy();
        expect(props.bdRadiusTop.cssProps[0].key).toBe('border-top-left-radius');
        expect(props.bdRadiusTop.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusTop.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRadiusTop.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusTop.initialValue).toBe(10);
        expect(props.bdRadiusTop.prop).toBe('bdRadiusTop');

        props = handleProps({
            ...mockedProps,
            props: {
                bdRadius: {
                    top: 10
                }
            }
        });

        expect(props.bdRadiusTop).toBeTruthy();
        expect(props.bdRadiusTop.cssProps[0].key).toBe('border-top-left-radius');
        expect(props.bdRadiusTop.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusTop.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRadiusTop.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusTop.initialValue).toBe(10);
        expect(props.bdRadiusTop.prop).toBe('bdRadiusTop');

        props = handleProps({
            ...mockedProps,
            props: {
                radius: {
                    top: 10
                }
            }
        });

        expect(props.bdRadiusTop).toBeTruthy();
        expect(props.bdRadiusTop.cssProps[0].key).toBe('border-top-left-radius');
        expect(props.bdRadiusTop.cssProps[0].value).toBe('10em');
        expect(props.bdRadiusTop.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRadiusTop.cssProps[1].value).toBe('10em');
        expect(props.bdRadiusTop.initialValue).toBe(10);
        expect(props.bdRadiusTop.prop).toBe('bdRadiusTop');

        props = handleProps({
            ...mockedProps,
            props: {
                rounded: {
                    top: 10
                }
            }
        });

        // bdStyle
        props = handleProps({
            ...mockedProps,
            props: {
                bdStyle: 'solid'
            }
        });

        expect(props.bdStyle).toBeTruthy();
        expect(props.bdStyle.cssProps[0].key).toBe('border-style');
        expect(props.bdStyle.cssProps[0].value).toBe('solid');
        expect(props.bdStyle.initialValue).toBe('solid');
        expect(props.bdStyle.prop).toBe('bdStyle');

        // bdWidth
        props = handleProps({
            ...mockedProps,
            props: {
                bdWidth: 3
            }
        });

        expect(props.bdWidth).toBeTruthy();
        expect(props.bdWidth.cssProps[0].key).toBe('border-width');
        expect(props.bdWidth.cssProps[0].value).toBe('3px');
        expect(props.bdWidth.initialValue).toBe(3);
        expect(props.bdWidth.prop).toBe('bdWidth');

        // bdBottom
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    bottom: {
                        color: 'red',
                        radius: 10,
                        style: 'solid',
                        width: 3
                    }
                }
            }
        });

        expect(props.bdBottomColor).toBeTruthy();
        expect(props.bdBottomColor.cssProps[0].key).toBe('border-bottom-color');
        expect(props.bdBottomColor.cssProps[0].value).toBe('red');
        expect(props.bdBottomColor.initialValue).toBe('red');
        expect(props.bdBottomColor.prop).toBe('bdBottomColor');
        expect(props.bdBottomRadius).toBeTruthy();
        expect(props.bdBottomRadius.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdBottomRadius.cssProps[0].value).toBe('10em');
        expect(props.bdBottomRadius.cssProps[1].key).toBe('border-bottom-right-radius');
        expect(props.bdBottomRadius.cssProps[1].value).toBe('10em');
        expect(props.bdBottomRadius.initialValue).toBe(10);
        expect(props.bdBottomRadius.prop).toBe('bdBottomRadius');
        expect(props.bdBottomStyle).toBeTruthy();
        expect(props.bdBottomStyle.cssProps[0].key).toBe('border-bottom-style');
        expect(props.bdBottomStyle.cssProps[0].value).toBe('solid');
        expect(props.bdBottomStyle.initialValue).toBe('solid');
        expect(props.bdBottomStyle.prop).toBe('bdBottomStyle');
        expect(props.bdBottomWidth).toBeTruthy();
        expect(props.bdBottomWidth.cssProps[0].key).toBe('border-bottom-width');
        expect(props.bdBottomWidth.cssProps[0].value).toBe('3px');
        expect(props.bdBottomWidth.initialValue).toBe(3);
        expect(props.bdBottomWidth.prop).toBe('bdBottomWidth');

        props = handleProps({
            ...mockedProps,
            props: {
                bdBottom: {
                    color: 'red',
                    radius: 10,
                    style: 'solid',
                    width: 3
                }
            }
        });

        expect(props.bdBottomColor).toBeTruthy();
        expect(props.bdBottomColor.cssProps[0].key).toBe('border-bottom-color');
        expect(props.bdBottomColor.cssProps[0].value).toBe('red');
        expect(props.bdBottomColor.initialValue).toBe('red');
        expect(props.bdBottomColor.prop).toBe('bdBottomColor');
        expect(props.bdBottomRadius).toBeTruthy();
        expect(props.bdBottomRadius.cssProps[0].key).toBe('border-bottom-left-radius');
        expect(props.bdBottomRadius.cssProps[0].value).toBe('10em');
        expect(props.bdBottomRadius.cssProps[1].key).toBe('border-bottom-right-radius');
        expect(props.bdBottomRadius.cssProps[1].value).toBe('10em');
        expect(props.bdBottomRadius.initialValue).toBe(10);
        expect(props.bdBottomRadius.prop).toBe('bdBottomRadius');
        expect(props.bdBottomStyle).toBeTruthy();
        expect(props.bdBottomStyle.cssProps[0].key).toBe('border-bottom-style');
        expect(props.bdBottomStyle.cssProps[0].value).toBe('solid');
        expect(props.bdBottomStyle.initialValue).toBe('solid');
        expect(props.bdBottomStyle.prop).toBe('bdBottomStyle');
        expect(props.bdBottomWidth).toBeTruthy();
        expect(props.bdBottomWidth.cssProps[0].key).toBe('border-bottom-width');
        expect(props.bdBottomWidth.cssProps[0].value).toBe('3px');
        expect(props.bdBottomWidth.initialValue).toBe(3);
        expect(props.bdBottomWidth.prop).toBe('bdBottomWidth');

        // bdLeft
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    left: {
                        color: 'red',
                        radius: 10,
                        style: 'solid',
                        width: 3
                    }
                }
            }
        });

        expect(props.bdLeftColor).toBeTruthy();
        expect(props.bdLeftColor.cssProps[0].key).toBe('border-left-color');
        expect(props.bdLeftColor.cssProps[0].value).toBe('red');
        expect(props.bdLeftColor.initialValue).toBe('red');
        expect(props.bdLeftColor.prop).toBe('bdLeftColor');
        expect(props.bdLeftRadius).toBeTruthy();
        expect(props.bdLeftRadius.cssProps[0].key).toBe('border-bottom-left-radius');  
        expect(props.bdLeftRadius.cssProps[0].value).toBe('10em');
        expect(props.bdLeftRadius.cssProps[1].key).toBe('border-top-left-radius');
        expect(props.bdLeftRadius.cssProps[1].value).toBe('10em');
        expect(props.bdLeftRadius.initialValue).toBe(10);
        expect(props.bdLeftRadius.prop).toBe('bdLeftRadius');
        expect(props.bdLeftStyle).toBeTruthy();
        expect(props.bdLeftStyle.cssProps[0].key).toBe('border-left-style');
        expect(props.bdLeftStyle.cssProps[0].value).toBe('solid');
        expect(props.bdLeftStyle.initialValue).toBe('solid');
        expect(props.bdLeftStyle.prop).toBe('bdLeftStyle');
        expect(props.bdLeftWidth).toBeTruthy();
        expect(props.bdLeftWidth.cssProps[0].key).toBe('border-left-width');
        expect(props.bdLeftWidth.cssProps[0].value).toBe('3px');
        expect(props.bdLeftWidth.initialValue).toBe(3);
        expect(props.bdLeftWidth.prop).toBe('bdLeftWidth');

        props = handleProps({
            ...mockedProps,
            props: {
                bdLeft: {
                    color: 'red',
                    radius: 10,
                    style: 'solid',
                    width: 3
                }
            }
        });

        expect(props.bdLeftColor).toBeTruthy();
        expect(props.bdLeftColor.cssProps[0].key).toBe('border-left-color');
        expect(props.bdLeftColor.cssProps[0].value).toBe('red');
        expect(props.bdLeftColor.initialValue).toBe('red');
        expect(props.bdLeftColor.prop).toBe('bdLeftColor');
        expect(props.bdLeftRadius).toBeTruthy();
        expect(props.bdLeftRadius.cssProps[0].key).toBe('border-bottom-left-radius');  
        expect(props.bdLeftRadius.cssProps[0].value).toBe('10em');
        expect(props.bdLeftRadius.cssProps[1].key).toBe('border-top-left-radius');
        expect(props.bdLeftRadius.cssProps[1].value).toBe('10em');
        expect(props.bdLeftRadius.initialValue).toBe(10);
        expect(props.bdLeftRadius.prop).toBe('bdLeftRadius');
        expect(props.bdLeftStyle).toBeTruthy();
        expect(props.bdLeftStyle.cssProps[0].key).toBe('border-left-style');
        expect(props.bdLeftStyle.cssProps[0].value).toBe('solid');
        expect(props.bdLeftStyle.initialValue).toBe('solid');
        expect(props.bdLeftStyle.prop).toBe('bdLeftStyle');
        expect(props.bdLeftWidth).toBeTruthy();
        expect(props.bdLeftWidth.cssProps[0].key).toBe('border-left-width');
        expect(props.bdLeftWidth.cssProps[0].value).toBe('3px');
        expect(props.bdLeftWidth.initialValue).toBe(3);
        expect(props.bdLeftWidth.prop).toBe('bdLeftWidth');

        // bdRight
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    right: {
                        color: 'red',
                        radius: 10,
                        style: 'solid',
                        width: 3
                    }
                }
            }
        });

        expect(props.bdRightColor).toBeTruthy();
        expect(props.bdRightColor.cssProps[0].key).toBe('border-right-color');
        expect(props.bdRightColor.cssProps[0].value).toBe('red');
        expect(props.bdRightColor.initialValue).toBe('red');
        expect(props.bdRightColor.prop).toBe('bdRightColor');
        expect(props.bdRightRadius).toBeTruthy();
        expect(props.bdRightRadius.cssProps[0].key).toBe('border-bottom-right-radius');
        expect(props.bdRightRadius.cssProps[0].value).toBe('10em');
        expect(props.bdRightRadius.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRightRadius.cssProps[1].value).toBe('10em');
        expect(props.bdRightRadius.initialValue).toBe(10);
        expect(props.bdRightRadius.prop).toBe('bdRightRadius');
        expect(props.bdRightStyle).toBeTruthy();
        expect(props.bdRightStyle.cssProps[0].key).toBe('border-right-style');
        expect(props.bdRightStyle.cssProps[0].value).toBe('solid');
        expect(props.bdRightStyle.initialValue).toBe('solid');
        expect(props.bdRightStyle.prop).toBe('bdRightStyle');
        expect(props.bdRightWidth).toBeTruthy();
        expect(props.bdRightWidth.cssProps[0].key).toBe('border-right-width');
        expect(props.bdRightWidth.cssProps[0].value).toBe('3px');
        expect(props.bdRightWidth.initialValue).toBe(3);
        expect(props.bdRightWidth.prop).toBe('bdRightWidth');

        props = handleProps({
            ...mockedProps,
            props: {
                bdRight: {
                    color: 'red',
                    radius: 10,
                    style: 'solid',
                    width: 3
                }
            }
        });

        expect(props.bdRightColor).toBeTruthy();
        expect(props.bdRightColor.cssProps[0].key).toBe('border-right-color');
        expect(props.bdRightColor.cssProps[0].value).toBe('red');
        expect(props.bdRightColor.initialValue).toBe('red');
        expect(props.bdRightColor.prop).toBe('bdRightColor');
        expect(props.bdRightRadius).toBeTruthy();
        expect(props.bdRightRadius.cssProps[0].key).toBe('border-bottom-right-radius');
        expect(props.bdRightRadius.cssProps[0].value).toBe('10em');
        expect(props.bdRightRadius.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdRightRadius.cssProps[1].value).toBe('10em');
        expect(props.bdRightRadius.initialValue).toBe(10);
        expect(props.bdRightRadius.prop).toBe('bdRightRadius');
        expect(props.bdRightStyle).toBeTruthy();
        expect(props.bdRightStyle.cssProps[0].key).toBe('border-right-style');
        expect(props.bdRightStyle.cssProps[0].value).toBe('solid');
        expect(props.bdRightStyle.initialValue).toBe('solid');
        expect(props.bdRightStyle.prop).toBe('bdRightStyle');
        expect(props.bdRightWidth).toBeTruthy();
        expect(props.bdRightWidth.cssProps[0].key).toBe('border-right-width');
        expect(props.bdRightWidth.cssProps[0].value).toBe('3px');
        expect(props.bdRightWidth.initialValue).toBe(3);
        expect(props.bdRightWidth.prop).toBe('bdRightWidth');

        // bdTop
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    top: {
                        color: 'red',
                        radius: 10,
                        style: 'solid',
                        width: 3
                    }
                }
            }
        });

        expect(props.bdTopColor).toBeTruthy();
        expect(props.bdTopColor.cssProps[0].key).toBe('border-top-color');
        expect(props.bdTopColor.cssProps[0].value).toBe('red');
        expect(props.bdTopColor.initialValue).toBe('red');
        expect(props.bdTopColor.prop).toBe('bdTopColor');
        expect(props.bdTopRadius).toBeTruthy();
        expect(props.bdTopRadius.cssProps[0].key).toBe('border-top-left-radius');
        expect(props.bdTopRadius.cssProps[0].value).toBe('10em');
        expect(props.bdTopRadius.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdTopRadius.cssProps[1].value).toBe('10em');
        expect(props.bdTopRadius.initialValue).toBe(10);
        expect(props.bdTopRadius.prop).toBe('bdTopRadius');
        expect(props.bdTopStyle).toBeTruthy();
        expect(props.bdTopStyle.cssProps[0].key).toBe('border-top-style');
        expect(props.bdTopStyle.cssProps[0].value).toBe('solid');
        expect(props.bdTopStyle.initialValue).toBe('solid');
        expect(props.bdTopStyle.prop).toBe('bdTopStyle');
        expect(props.bdTopWidth).toBeTruthy();
        expect(props.bdTopWidth.cssProps[0].key).toBe('border-top-width');
        expect(props.bdTopWidth.cssProps[0].value).toBe('3px');
        expect(props.bdTopWidth.initialValue).toBe(3);
        expect(props.bdTopWidth.prop).toBe('bdTopWidth');

        props = handleProps({
            ...mockedProps,
            props: {
                bdTop: {
                    color: 'red',
                    radius: 10,
                    style: 'solid',
                    width: 3
                }
            }
        });

        expect(props.bdTopColor).toBeTruthy();
        expect(props.bdTopColor.cssProps[0].key).toBe('border-top-color');
        expect(props.bdTopColor.cssProps[0].value).toBe('red');
        expect(props.bdTopColor.initialValue).toBe('red');
        expect(props.bdTopColor.prop).toBe('bdTopColor');
        expect(props.bdTopRadius).toBeTruthy();
        expect(props.bdTopRadius.cssProps[0].key).toBe('border-top-left-radius');
        expect(props.bdTopRadius.cssProps[0].value).toBe('10em');
        expect(props.bdTopRadius.cssProps[1].key).toBe('border-top-right-radius');
        expect(props.bdTopRadius.cssProps[1].value).toBe('10em');
        expect(props.bdTopRadius.initialValue).toBe(10);
        expect(props.bdTopRadius.prop).toBe('bdTopRadius');
        expect(props.bdTopStyle).toBeTruthy();
        expect(props.bdTopStyle.cssProps[0].key).toBe('border-top-style');
        expect(props.bdTopStyle.cssProps[0].value).toBe('solid');
        expect(props.bdTopStyle.initialValue).toBe('solid');
        expect(props.bdTopStyle.prop).toBe('bdTopStyle');
        expect(props.bdTopWidth).toBeTruthy();
        expect(props.bdTopWidth.cssProps[0].key).toBe('border-top-width');
        expect(props.bdTopWidth.cssProps[0].value).toBe('3px');
        expect(props.bdTopWidth.initialValue).toBe(3);
        expect(props.bdTopWidth.prop).toBe('bdTopWidth');

        // bdX
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    x: {
                        color: 'red',
                        style: 'solid',
                        width: 3
                    }
                }
            }
        });

        expect(props.bdXColor).toBeTruthy();
        expect(props.bdXColor.cssProps[0].key).toBe('border-left-color');
        expect(props.bdXColor.cssProps[0].value).toBe('red');
        expect(props.bdXColor.cssProps[1].key).toBe('border-right-color');
        expect(props.bdXColor.cssProps[1].value).toBe('red');
        expect(props.bdXColor.initialValue).toBe('red');
        expect(props.bdXColor.prop).toBe('bdXColor');
        expect(props.bdXStyle).toBeTruthy();
        expect(props.bdXStyle.cssProps[0].key).toBe('border-left-style');
        expect(props.bdXStyle.cssProps[0].value).toBe('solid');
        expect(props.bdXStyle.cssProps[1].key).toBe('border-right-style');
        expect(props.bdXStyle.cssProps[1].value).toBe('solid');
        expect(props.bdXStyle.initialValue).toBe('solid');
        expect(props.bdXStyle.prop).toBe('bdXStyle');
        expect(props.bdXWidth).toBeTruthy();
        expect(props.bdXWidth.cssProps[0].key).toBe('border-left-width');
        expect(props.bdXWidth.cssProps[0].value).toBe('3px');
        expect(props.bdXWidth.cssProps[1].key).toBe('border-right-width');
        expect(props.bdXWidth.cssProps[1].value).toBe('3px');
        expect(props.bdXWidth.initialValue).toBe(3);
        expect(props.bdXWidth.prop).toBe('bdXWidth');

        props = handleProps({
            ...mockedProps,
            props: {
                bdX: {
                    color: 'red',
                    style: 'solid',
                    width: 3
                }
            }
        });

        expect(props.bdXColor).toBeTruthy();
        expect(props.bdXColor.cssProps[0].key).toBe('border-left-color');
        expect(props.bdXColor.cssProps[0].value).toBe('red');
        expect(props.bdXColor.cssProps[1].key).toBe('border-right-color');
        expect(props.bdXColor.cssProps[1].value).toBe('red');
        expect(props.bdXColor.initialValue).toBe('red');
        expect(props.bdXColor.prop).toBe('bdXColor');
        expect(props.bdXStyle).toBeTruthy();
        expect(props.bdXStyle.cssProps[0].key).toBe('border-left-style');
        expect(props.bdXStyle.cssProps[0].value).toBe('solid');
        expect(props.bdXStyle.cssProps[1].key).toBe('border-right-style');
        expect(props.bdXStyle.cssProps[1].value).toBe('solid');
        expect(props.bdXStyle.initialValue).toBe('solid');
        expect(props.bdXStyle.prop).toBe('bdXStyle');
        expect(props.bdXWidth).toBeTruthy();
        expect(props.bdXWidth.cssProps[0].key).toBe('border-left-width');
        expect(props.bdXWidth.cssProps[0].value).toBe('3px');
        expect(props.bdXWidth.cssProps[1].key).toBe('border-right-width');
        expect(props.bdXWidth.cssProps[1].value).toBe('3px');
        expect(props.bdXWidth.initialValue).toBe(3);
        expect(props.bdXWidth.prop).toBe('bdXWidth');
        
        // bdY
        props = handleProps({
            ...mockedProps,
            props: {
                bd: {
                    y: {
                        color: 'red',
                        style: 'solid',
                        width: 3
                    }
                }
            }
        });

        expect(props.bdYColor).toBeTruthy();
        expect(props.bdYColor.cssProps[0].key).toBe('border-bottom-color');
        expect(props.bdYColor.cssProps[0].value).toBe('red');
        expect(props.bdYColor.cssProps[1].key).toBe('border-top-color');
        expect(props.bdYColor.cssProps[1].value).toBe('red');
        expect(props.bdYColor.initialValue).toBe('red');
        expect(props.bdYColor.prop).toBe('bdYColor');
        expect(props.bdYStyle).toBeTruthy();
        expect(props.bdYStyle.cssProps[0].key).toBe('border-bottom-style');
        expect(props.bdYStyle.cssProps[0].value).toBe('solid');
        expect(props.bdYStyle.cssProps[1].key).toBe('border-top-style');
        expect(props.bdYStyle.cssProps[1].value).toBe('solid');
        expect(props.bdYStyle.initialValue).toBe('solid');
        expect(props.bdYStyle.prop).toBe('bdYStyle');
        expect(props.bdYWidth).toBeTruthy();
        expect(props.bdYWidth.cssProps[0].key).toBe('border-bottom-width');
        expect(props.bdYWidth.cssProps[0].value).toBe('3px');
        expect(props.bdYWidth.cssProps[1].key).toBe('border-top-width');
        expect(props.bdYWidth.cssProps[1].value).toBe('3px');
        expect(props.bdYWidth.initialValue).toBe(3);
        expect(props.bdYWidth.prop).toBe('bdYWidth');

        props = handleProps({
            ...mockedProps,
            props: {
                bdY: {
                    color: 'red',
                    style: 'solid',
                    width: 3
                }
            }
        });

        expect(props.bdYColor).toBeTruthy();
        expect(props.bdYColor.cssProps[0].key).toBe('border-bottom-color');
        expect(props.bdYColor.cssProps[0].value).toBe('red');
        expect(props.bdYColor.cssProps[1].key).toBe('border-top-color');
        expect(props.bdYColor.cssProps[1].value).toBe('red');
        expect(props.bdYColor.initialValue).toBe('red');
        expect(props.bdYColor.prop).toBe('bdYColor');
        expect(props.bdYStyle).toBeTruthy();
        expect(props.bdYStyle.cssProps[0].key).toBe('border-bottom-style');
        expect(props.bdYStyle.cssProps[0].value).toBe('solid');
        expect(props.bdYStyle.cssProps[1].key).toBe('border-top-style');
        expect(props.bdYStyle.cssProps[1].value).toBe('solid');
        expect(props.bdYStyle.initialValue).toBe('solid');
        expect(props.bdYStyle.prop).toBe('bdYStyle');
        expect(props.bdYWidth).toBeTruthy();
        expect(props.bdYWidth.cssProps[0].key).toBe('border-bottom-width');
        expect(props.bdYWidth.cssProps[0].value).toBe('3px');
        expect(props.bdYWidth.cssProps[1].key).toBe('border-top-width');
        expect(props.bdYWidth.cssProps[1].value).toBe('3px');
        expect(props.bdYWidth.initialValue).toBe(3);
        expect(props.bdYWidth.prop).toBe('bdYWidth');
    });
});