export default function ErrorHandler({ error }) {
  if (!error) return null;

  if (error.code === "ECONNABORTED") {
    return (
      <p className="text-error text-xl font-bold text-center pt-56">
        Connection to the server timed out.
      </p>
    );
  }

  if (error.response?.status === 404) {
    return (
      <p className="text-error text-xl font-bold text-center pt-56">
        Requested resource was not found.
      </p>
    );
  }

  if (error.response?.status >= 500) {
    return (
      <p className="text-error text-xl font-bold text-center pt-56">
        Server error. Please try again later.
      </p>
    );
  }

  return (
    <p className="text-error text-xl font-bold text-center pt-56">
      An unexpected error occurred. Please try again.
    </p>
  );
}
