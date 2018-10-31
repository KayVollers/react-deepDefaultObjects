import React from 'react';

const DeepDefaultObjects = (WrappedComponent) => {
    class deepDefaultObjects extends React.Component {
        constructor(props) {
            super(props);

            this.deepCompare = this.deepCompare.bind(this);
        }
        // never render again
        shouldComponentUpdate() {
            return false;
        }
        isTrueObject(data) {
            return Object.prototype.toString.call(data) === '[object Object]';
        }
        cloneObject(obj) {
            let target = {};
            for (let prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    target[prop] = obj[prop];
                }
            }
            return target;
        }
        // recursive compare of both objects
        deepCompare({prop, defProp}) {
            const {deepCompare, isTrueObject} = this;
            Object
                .keys(defProp)
                .forEach(function(key) {
                    // set object if not defined yet
                    if (typeof prop[key] === 'undefined') {
                        prop[key] = defProp[key];
                    }
                    // do another loop if both are objects
                    if (isTrueObject(prop[key]) && isTrueObject(defProp[key])) {
                        deepCompare({prop: prop[key], defProp: defProp[key]});
                    }
                });
        }
        render() {
            const {defaultProps} = WrappedComponent;
            const {props, deepCompare, cloneObject, isTrueObject} = this;
            const newProps = {};
            if (typeof defaultProps === 'object') {
                Object
                    .keys(defaultProps)
                    .forEach(function(key) {
                        // only continue if defaultProp and origin prop are objects
                        if (isTrueObject(defaultProps[key]) || isTrueObject(props[key])) {
                            const clonedProps = cloneObject(props[key]);
                            deepCompare({prop: clonedProps, defProp: defaultProps[key]});
                            newProps[key] = clonedProps;
                        }
                    });
            }
            return (
                <WrappedComponent
                    {...this.props}
                    {...newProps}
                />
            );
        }
    }
    const wrappedName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    deepDefaultObjects.displayName = `React-deepdefaultobjects${wrappedName}`;
    return deepDefaultObjects;
};

export default DeepDefaultObjects;
