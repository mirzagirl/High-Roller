import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getCountriesStart,
  getStatesStart,
  getCitiesStart,
} from "../../../redux-saga/redux/kycVerification";

export const useKycVerificationHook = () => {
  const dispatch = useDispatch();
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const { countries, states, cities } = useSelector(
    (state) => state.kycVerification
  );

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(getCountriesStart());
  }, []);

  useEffect(() => {
    setCountryList(countries);
    setStateList(states);
    setCityList(cities);
  }, [countries, states, cities]);

  const getStatesOfCountry = (countryId) => {
    dispatch(getStatesStart({ countryId }));
  };
  const getCitiesOfState = (stateId) => {
    dispatch(getCitiesStart({ stateId }));
  };

  return {
    countryList,
    stateList,
    cityList,
    getStatesOfCountry,
    getCitiesOfState,
  };
};
