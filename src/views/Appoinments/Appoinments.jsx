import { useEffect, useState } from "react";
import { CSelect } from "../../components/CSelect/CSelect";
import "./Appoinments.css"

export const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    user_id: "", // este viene del token
    service_id: "", // el servicio lo elegiré de un desplegable
    appointment_date: "", // date lo sacaremos de un input type="date" (y opcionalmente input type="time")
  });

   useEffect(() => {
    const getMyAppointments = async (token) =>
      getMyAppointments(token)
     console.log(newAppointment);
   }, [newAppointment]);

  const inputHandler = (e) => {

    if (e.target.value === "Elige el servicio") {
        console.log("You cannot pass")
        return
    }
    console.log(e.target.value)
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const services =[{id:1, serviceName: "Custom tattoos"},
    {id:2, serviceName: "Catalog tattoos"},
    {id:3, serviceName: " Restoration and rejuvenation of works"},
    {id:4, serviceName: "Placement of piercings and dilators "},
   {id:5, serviceName: "Sale of piercings and other items"}]
  

  const todayFullTimeString = new Date()
    .toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(":"));
  return (
    <div>
      <input
        type="datetime-local"
        min={todayFullTimeString}
        value={newAppointment.date}
        name="date"
        onChange={(e) => inputHandler(e)}
      />

      <CSelect
      category="Choose Service"
      options={services}
      handler={inputHandler}
      />
    </div>
  );
};

  

