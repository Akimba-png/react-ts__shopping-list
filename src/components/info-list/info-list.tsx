type InfoListProps = {
  data: string[];
};

function InfoList({ data }: InfoListProps): JSX.Element {
  return (
    <ul>
      {data.map((lot) => (
        <li key={lot}>{lot}</li>
      ))}
    </ul>
  );
}

export default InfoList;
