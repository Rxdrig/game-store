import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="mb-3">HomePage</h1>
          <p className="text-muted mb-4">
            Explora el catálogo por plataforma desde una sola ruta dinámica.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Link className="btn btn-primary" to="/catalog/playstation">
              PlayStation
            </Link>
            <Link className="btn btn-primary" to="/catalog/xbox">
              Xbox
            </Link>
            <Link className="btn btn-primary" to="/catalog/nintendo">
              Nintendo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
