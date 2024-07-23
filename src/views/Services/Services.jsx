import React, { useEffect, useState } from "react";

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
    <div>
      <h1>We offer the following services</h1>
      {services.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="services-collection">
          {services.map((service) => (
            <div  key={service.id}>
              <div >{service.serviceName}</div>
              <div >{service.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};