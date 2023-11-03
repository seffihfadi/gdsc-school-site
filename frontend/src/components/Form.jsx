
const Form = ({handleSubmit, notExists, sending}) => {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <p className="my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit adipisci distinctio ab, modi fugit ut nesciunt eaque. Delectus sint minus sit nisi eum exercitationem consectetur minima totam laboriosam eius.</p>
      <div className="group">
        <input id="email" name="email" type="email" required />
        <label htmlFor="email">Your Email</label>
        {notExists.length > 0 && <span className="text-sm text-red-800 m-2">{notExists}</span>}
      </div>
      <div className="flex justify-between items-center">
        <button disabled={sending} className="gradient ml-auto">
          {sending ? "Submiting" : "Submit"} 
        </button>
      </div>
    </form>
  )
}

export default Form