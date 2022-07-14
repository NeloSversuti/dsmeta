import Header from "./componets/Header"
import SalesCard from "./componets/SalesCard"
//import NotificationButton from "./componets/NotificationButton"

function App() {
  return(
    <>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
