import './status.css';

export default function Status(props: { status: { status: 'loss' | 'win'; msg: string } }) {
  return (
    <div className={`status ${props.status.status}`}>
      <p title={props.status?.status}>{props.status.msg}</p>
    </div>
  );
}
