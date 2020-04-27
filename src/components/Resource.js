import React from 'react';
import ResourceInput from './ResourceInput';
import ResourceCal from './ResourceCal';

function Resource({ resource, onChange }) {
  const resources = [];
  for (let key in resource) {
    resources.push({
      key,
      title: resource[key].title,
      data: resource[key].data,
    });
  }
  return (
    <div className="Resource">
      {resources.slice(0, 4).map(el => (
        <div key={el.key} className="resource-rayout">
          <strong>{el.title} 계산기</strong>
          <div>
            {console.log(el.data)}
            {el.data.map((data, index) => (
              <ResourceInput
                key={`${el.key}-${index}`}
                el={el.key}
                value={data}
                index={index}
                onChange={onChange}
              />
            ))}
            <ResourceCal data={el.data} category={el.key} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Resource;
