import './detailsHeader.scss';

type DetailsHeaderProps = {
  name: string;
}

export default function DetailsHeader({ name }: DetailsHeaderProps): JSX.Element {
  return (
    <div className='details__header'>
      <span></span>
      {name}
      <span></span>
    </div>
  )
}