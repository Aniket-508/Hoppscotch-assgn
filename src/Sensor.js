import { useEffect, useState } from "react";
import ReactFrappeChart from "react-frappe-charts";
import Navbar from "./Navbar";
import "./styles.css";

export default function Sensor() {
  const [sensorData, setSensorData] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(
        "https://hopp-frontend-api.herokuapp.com/stream"
      );

      events.addEventListener("sensor", (e) => {
        setSensorData(JSON.parse(e.data));
      });

      setListening(true);
    }
  }, [listening, sensorData]);

  return (
    <>
      <Navbar />
      <ReactFrappeChart
        type="bar"
        colors={["#04aa6d"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={250}
        data={{
          labels: ["Air Temperature", "Humidity", "Light Intensity"],
          datasets: [
            {
              values: [
                sensorData.sensor_data?.air_temperature,
                sensorData.sensor_data?.humidity,
                sensorData.sensor_data?.light_intensity
              ]
            }
          ]
        }}
      />
    </>
  );
}
