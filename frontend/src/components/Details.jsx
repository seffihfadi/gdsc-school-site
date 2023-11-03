
const Details = ({data}) => {
  return (
    <div className="accepted">
      <p className="my-10">Hi <b>{data.personName}</b> you have been accepted to participate in the <b>{data.workshopName}</b> Workshop. We believe you will greatly benefit from the knowledge and experiences shared during this event.</p>
      <div className="details">
        <p><b>Name:</b> {data.personName}</p>
        <p><b>Email:</b> {data.personEmail}</p>
        <p><b>Workshop:</b> {data.workshopName}</p>
        <p><b>Name:</b> {data.personName}</p>
        <p><b className="text-red-800">Note:</b> Lorem ipsum dolor sit amet consectetur adipisicing </p>
      </div>
    </div>
  )
}

export default Details