import { useState } from "react";
import Title from "./components/Title";
import SearchZipCode from "./components/SearchZipCode";
import ZipCodeInformation from "./components/ZipCodeInformation";
import { Container, Row } from "react-bootstrap/";

function App() {
  const [zipCodeInfo, setzipCodeInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (zipCode) => {
    setIsLoading(true);
    fetch(`https://api.zippopotam.us/MX/${zipCode}`)
      .then((response) => response.json())
      .then((response) => {
        setzipCodeInfo(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false)
        setzipCodeInfo({
          "post code": zipCode,
          places: [
            {
              "place name": "No se pudo encontrar el código postal solicitado",
              state: "Error",
            },
          ],
        });
      });
  };

  return (
    <Container>
      <Row className="mb-3 mt-3">
        <Title text="Códigos postales de México" />
      </Row>
      <Row>
        <SearchZipCode onSearch={onSearch}></SearchZipCode>
      </Row>
      <Row>
        {isLoading && <h1>Cargando...</h1>}
        {JSON.stringify(zipCodeInfo) !== "{}" && (
          <ZipCodeInformation zipCodeInfo={zipCodeInfo} />
        )}
      </Row>
    </Container>
  );
}

export default App;
