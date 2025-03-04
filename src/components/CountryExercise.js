import { useEffect, useState } from "react";
import { COUNTRY_API_URL } from "../../utils/constants";

const CountryExercise = () => {
    const [country, setCountry] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCountryData();
    },[]);

    const fetchCountryData = async () => {
        const data = await fetch(COUNTRY_API_URL);
        const json = await data.json();
        console.log(json);
        setCountry(json?.data);
    }

    const handleCountrySelection = (e) => {
        const selectedCountryText = e.target.value;
        if(!selectedCountryText){
            console.error("No text match");
            return;
        }
        const selectedCountry = country.find((country) => country?.country === selectedCountryText);
        if(!selectedCountry){
            console.error("Country not found");
            setCities([]);
            return;
        }
        setCities(selectedCountry?.cities || []);
        console.log('selectedCountry: ', selectedCountry);
    }

    return(
        <div className="container body flex-cont">
            <h1 style={{marginBottom: "24px"}}>Countries List</h1>
            <select onChange={handleCountrySelection} style={{marginBottom: "24px"}}>
                <option>Select a country</option>
                {country.map((item, i) => {
                    return(
                        <option key={i}>{item?.country}</option>
                    );
                })}
            </select>

            <table>
                <thead>
                    <tr>
                        <th>City Index</th>
                        <th>City Name</th>
                    </tr>
                </thead>
                <tbody>
                    {cities && cities.map((item, i) => {
                        return(
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{item}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default CountryExercise;