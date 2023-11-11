import './detailsProps.scss';

type detailsPropsProps = {
  name: string;
  value: string | undefined;
};

export default function DetailsProps({
  name,
  value,
}: detailsPropsProps): JSX.Element {
  return (
    <div className="props">
      <div className="props__name">{name}</div>
      <div className="props__value">{value}</div>
    </div>
  );
}
