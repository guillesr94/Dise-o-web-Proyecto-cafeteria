import React from 'react'
import "../TimeTable/TimeTable.css"

function TimeTable() {
  return (
    <>
    <section className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered has-text-black ">Nuestros Horarios</h2>
        <h3 className="subtitle is-4 has-text-centered mb-5  has-text-black">Para que sepas cuándo visitarnos</h3>

        <div className="columns is-centered">
          <div className="column is-flex is-justify-content-center"> 
            <div className="table-container">
              <table className="table is-bordered is-light has-text-black timetable-centered">
                <thead>
                  <tr className="is-light has-text-black">
                    <th className='has-text-black timetable-title'>Día</th>
                    <th className='has-text-black timetable-title' >Apertura</th>
                    <th className='has-text-black timetable-title'>Cierre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="is-light">
                    <td>Lunes</td>
                    <td>9:00 AM</td>
                    <td>8:00 PM</td>
                  </tr>
                  <tr className="is-light">
                    <td>Martes</td>
                    <td>9:00 AM</td>
                    <td>8:00 PM</td>
                  </tr>
                  <tr className="is-light">
                    <td>Miércoles</td>
                    <td>9:00 AM</td>
                    <td>8:00 PM</td>
                  </tr>
                  <tr className="is-light">
                    <td>Jueves</td>
                    <td>9:00 AM</td>
                    <td>8:00 PM</td>
                  </tr>
                  <tr className="is-light">
                    <td>Viernes</td>
                    <td>9:00 AM</td>
                    <td>8:00 PM</td>
                  </tr>
                  <tr className="is-light">
                    <td>Sábado</td>
                    <td>9:00 AM</td>
                    <td>8:00 PM</td>
                  </tr>
                  <tr className="is-light">
                    <td>Domingo</td>
                    <td>------</td>
                    <td>------</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TimeTable