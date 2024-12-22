const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p4 m-4">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <button className="border border-black p-2 m-2 bg-grey rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
