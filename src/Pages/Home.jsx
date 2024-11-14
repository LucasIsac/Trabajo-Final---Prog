
const Home = () => {
  return (
    <div>
        <main className="mt-5 pt-5">
        <Carousel />

        {/* Texto de Inicio */}
        <section
          className="d-flex flex-column justify-content-center align-items-center pt-5 text-center w-50 m-auto"
          id="intro"
        >
          <h1 className="p-3 fs-2 border-top border-3">
            Explora, Elige y Reserva Fácilmente en{" "}
            <span className="text-primary">Estrella Azul</span>, todo en un solo
            lugar
          </h1>
          <p className="p-3 fs-4">
            En <span className="text-primary">Estrella Azul</span> te ayudamos a
            encontrar y reservar la habitación ideal, adaptada a tus gustos y
            necesidades. Con una experiencia fácil y rápida, explora opciones de
            hospedaje únicas y reserva en unos pocos clics. ¡Descubre tu próxima
            estancia perfecta con nosotros!
          </p>
        </section>

        <div className="contaniner my-5">
          <div className="row align-items-center">
            <div className="col">
              <ServiciosCarta
                imagen="img/transporte.jfif"
                alt="servicio1"
                titulo="Transporte"
                texto="Nos encargamos de buscarte y llevarte hasta tu hotel"
              />
            </div>
            <div className="col">
              <ServiciosCarta
                imagen="img/transporte.jfif"
                alt="servicio1"
                titulo="Transporte"
                texto="Nos encargamos de buscarte y llevarte hasta tu hotel"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home