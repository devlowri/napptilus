import { Fragment } from 'react';
import styles from './styles.module.scss';

const placeholder = '-';

const ProductDescription = ({ product }) => {
  const description = {
    Brand: product.brand,
    Model: product.model,
    Price: product.price,
    CPU: product.cpu,
    RAM: product.ram,
    'Operative system': product.os,
    'Screen resolution': product.displayResolution,
    Battery: product.battery,
    Cameras: {
      'Primary camera': product.primaryCamera,
      'Secondary camera': product.secondaryCmera
    },
    Dimensions: product.dimentions,
    Weight: product.weight
  };

  const loopAndRenderProductData = (data) => {
    return (
      <ul>
        {Object.keys(data).map((name) => {
          const value = data[name] ? data[name] : placeholder;
          const valueIsAnObject = typeof value === 'object';
          const valueIsAnArray = Array.isArray(value);

          if (valueIsAnArray)
            return (
              <Fragment key={`${name}_${value}`}>
                <li className="body2">{name}:</li>
                <ul>
                  {value.map((v) => (
                    <li key={`${name}_${v}`} className="subtitle2">
                      {v}
                    </li>
                  ))}
                </ul>
              </Fragment>
            );

          if (valueIsAnObject) {
            return (
              <ul key={`${name}_${value}`}>
                <li className="body2">{name}:</li>
                {loopAndRenderProductData(value)}
              </ul>
            );
          }

          return (
            <li key={`${name}_${value}`}>
              <span className="body2">{name}</span>: <span className="subtitle2">{value}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return <div className={styles.list}>{loopAndRenderProductData(description)}</div>;
};

export default ProductDescription;
