import React from 'react';
import ResourceInput from './ResourceInput';
import ResourceCal from './ResourceCal';
import ResourceChoice from './ResourceChoice';

function Resource({ resource, onChange, onSelect }) {
  const resources = [];
  for (let key in resource) {
    const result = {
      key,
      title: resource[key].title,
      data: resource[key].data,
    };
    if (resource[key].choice) {
      result.choice = resource[key].choice;
    }
    resources.push(result);
  }
  return (
    <div className="Resource">
      {resources.slice(0, 4).map(el => (
        <div key={el.key} className="resource-rayout">
          <strong>{el.title} 계산기</strong>
          <div>
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
      <div className="resource-rayout">
        <strong>자원 보물상자 선택 계산기</strong>
        <div>
          <span>식량</span>
          <input
            type="checkbox"
            value="food"
            checked={resources[4].choice === 'food'}
            onChange={e => onSelect(e.target.value)}
          />
          <span>나무</span>
          <input
            type="checkbox"
            value="wood"
            checked={resources[4].choice === 'wood'}
            onChange={e => onSelect(e.target.value)}
          />
          <span>돌</span>
          <input
            type="checkbox"
            value="rock"
            checked={resources[4].choice === 'rock'}
            onChange={e => onSelect(e.target.value)}
          />
          <span>금화</span>
          <input
            type="checkbox"
            value="gold"
            checked={resources[4].choice === 'gold'}
            onChange={e => onSelect(e.target.value)}
          />
        </div>
        {resources[4].data.map((data, index) => {
          const el = resources[4];
          return (
            <ResourceChoice
              key={`${el.key}-${index}`}
              el={el.key}
              value={data}
              choice={el.choice}
              index={index}
              onChange={onChange}
            />
          );
        })}
        <ResourceCal
          data={[0, ...resources[4].data]}
          category={resources[4].choice}
        />
      </div>
    </div>
  );
}

export default Resource;
