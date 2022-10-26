import { useDeferredValue } from 'react';

type InfoListProps = {
  data: string[];
};

function InfoList({ data }: InfoListProps): JSX.Element {
  const deferredData = useDeferredValue(data);
  return (
    <ul>
      {deferredData.map((lot) => (
        <li key={lot}>{lot}</li>
      ))}
    </ul>
  );
}

export default InfoList;
