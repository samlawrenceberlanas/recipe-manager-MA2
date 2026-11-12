
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="text-xl mt-4">
        Page Not Found
      </p>

      <p className="text-base-content/70 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" className="btn btn-primary mt-6">
        Back to Search
      </Link>
    </div>
  );
}
