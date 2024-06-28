import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import Select from "react-select";
import "./Transfer.scss";

function Transfer() {
  const [cities, setCities] = useState([]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [seats, setSeats] = useState(0);
  const [carsList, setCarsList] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [chargeDetails, setChargeDetails] = useState(undefined);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadCityOptions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/test/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const cityDetails = data.flatMap((item) => item.cityDetailsData);
      const cityNames = cityDetails.map((city) => ({
        value: city.cityName,
        label: city.cityName,
      }));
      setCities(cityNames);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    handleGetPrice();
    setIsButtonDisabled(!pickupLocation || !dropoffLocation);
  }, [pickupLocation, dropoffLocation]);

  useEffect(() => {
    loadCityOptions();
    handleSearch();
  }, []);

  useEffect(() => {
    if (selectedCar && chargeDetails) {
      const { vprice } = selectedCar;
      const { price } = chargeDetails;
      setTotalPrice(parseInt(vprice) + parseInt(price));
    }
  }, [selectedCar, chargeDetails]);

  const handlePickupChange = (selectedOption) => {
    setPickupLocation(selectedOption ? selectedOption.value : "");
  };

  const handleDropoffChange = (selectedOption) => {
    setDropoffLocation(selectedOption ? selectedOption.value : "");
  };

  const incrementSeats = () => {
    setSeats(seats + 1);
  };

  const decrementSeats = () => {
    if (seats > 0) {
      setSeats(seats - 1);
    }
  };

  return (
    <div className="xyz">
      <div className="transfer1">
        <div className="section-title" style={{ paddingTop: "12rem" }}>
          <h2 style={{ color: "white" }}>Transfers</h2>
          <p style={{ color: "white" }}>
            Please use the table below to get a price for your journey and book....
          </p>
        </div>

        <div className="route-planner">
          <div className="input-container-one">
            <Select
              id="pickup-location"
              className="from"
              value={cities.find((city) => city.value === pickupLocation)}
              onChange={handlePickupChange}
              options={cities}
              placeholder="Pickup"
              isClearable
              isLoading={!cities.length}
            />
          </div>
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          <div className="input-container two">
            <Select
              id="dropoff-location"
              className="to-input"
              value={cities.find((city) => city.value === dropoffLocation)}
              onChange={handleDropoffChange}
              options={cities}
              placeholder="Dropoff"
              isClearable
              isLoading={!cities.length}
            />
          </div>
          <div className="input-container three">
            <input type="date" placeholder="Departure" className="date-input" />
          </div>
          <div className="input-container three">
            <input type="date" placeholder="return" className="date-input" />
          </div>
          <div className="input-container five">
  <div className="input-with-icon">
    <div className="minus-button" onClick={decrementSeats}>-</div>
    <i className="fa-solid fa-user icon"></i>
    <input
      type="number"
  
      className="passenger-input"
      value={seats === 0 ? "" : seats}
      onChange={(e) => setSeats(parseInt(e.target.value))}
      min="0"
    />
    <div className="plus-button" onClick={incrementSeats}>+</div>
  </div>
</div>

          <div className="input-container">
            <button className="update-route" onClick={handleSearch}>
              Update Route
            </button>
          </div>
        </div>
      </div>

      <div className="transfer2">
        {selectedCar && (
          <Popup
            vehicleType="Travel in Style"
            vehicleName={selectedCar.vname}
            email={selectedCar.email}
            contact={selectedCar.contact}
            imageUrl={`http://16.16.133.188:5000/uploads/${selectedCar.image}`}
            title={selectedCar.vname}
            rating="4"
            reviews="1"
            seats={selectedCar.vseats}
            suitcases={selectedCar.suitcase}
            buttonText={isButtonDisabled ? "Enter location" : "Choose this vehicle"}
            charge={chargeDetails}
            price={totalPrice}
            disabled={isButtonDisabled}
          />
        )}
      </div>

      <div className={`transfer3 ${selectedCar ? "selected-car" : ""}`}>
        {carsList?.map((data, index) => (
          <Card
            key={index}
            vehicleType="Travel in Style"
            title={data.vname}
            rating="4"
            reviews="1"
            seats={data.vseats}
            vehiclePrice={data.vprice}
            image={`http://16.16.133.188:5000/uploads/${data.image}`}
            suitcases={data.suitcase}
            buttonText={isButtonDisabled ? "Enter location" : "Choose this vehicle"}
            onClick={() => {
              if (!isButtonDisabled) {
                setSelectedCar(data);
              }
            }}
            disabled={isButtonDisabled}
          />
        ))}
      </div>
    </div>
  );

  async function handleSearch() {
    try {
      const response = await fetch("http://localhost:5000/api/transfer/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seats }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCarsList(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  async function handleGetPrice() {
    if (!pickupLocation || !dropoffLocation) return;

    try {
      const response = await fetch("http://localhost:5000/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pickupCity: pickupLocation,
          dropoffCity: dropoffLocation,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setChargeDetails(data);

      console.log({ data });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
}

export default Transfer;
