import React, { useEffect, useState } from "react";
import "./Service.css"

export const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/services");
        const fetchedData = await response.json();
        setServices(fetchedData.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);
  return (
    <div className="service">
      <h1>We offer the following services</h1>
      {services.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="body">
          {services.map((service) => (
            <div className="serviceone" key={service.id}>
              <div className="servicetitle" >{service.title}</div>
              <div className="servicedescription">{service.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};