function Error({ error }) {
  return (
    <div className="flex justify-center items-center text-error font-bold text-2xl mt-56 sm:mt-80">
      {error}
    </div>
  );
}

export default Error;
