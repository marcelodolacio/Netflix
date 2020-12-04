import React, { useEffect, useState } from 'react';

import { StatusBar, Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native';
import { GetLocation, GetCountry } from '../utils/Location';
//import GetCountry from '../utils/Location';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';

const api = [
  require('../assets/movies/movie1.jpg'),
  require('../assets/movies/movie2.jpg'),
  require('../assets/movies/movie3.jpg'),
  require('../assets/movies/movie4.jpg'),
];


const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = (props) => {

  const [movies, setMovies] = useState([])
  const [position, setPosition] = useState(null)
  const [nationalMovies, setNationalMovies] = useState([])

  useEffect(() => {

    GetLocation().then((info) => {

      setPosition(info);
      console.log('Sucesso localizacao: ' + info)
    })
      .catch((error) => {
        console.log('erro ao obter localizacao: ' + error)
        console.log(error)
        setPosition(null);
      });
  }, []);

  useEffect(() => {
    const getNationalMovies = async () => {

      if (position) {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const country = await GetCountry({ lat, lng });
        console.log("ciybtry: ", country)
        const nMovies = movies.filter((item, index) => {
          return item.Country.indexOf(country) !== -1;
        });
        setNationalMovies(nMovies);
      }
    }

    getNationalMovies();
  }, [position]);

  useEffect(() => {
    const moviesJson = require('../assets/Movies.json');
    setMovies(moviesJson);
  }, []);

  // console.log("position");
  // console.log(position);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assets/poster.jpg')}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}>
            <Header />
            <Hero />
          </Gradient>
        </Poster>
        <Movies label={`Continuar Assistindo comoaa `} item={nationalMovies} />
        <Movies label={`Nacionais`} item={nationalMovies} />
        <Movies label="Recomendados" item={movies} />
        <Movies label="Top 10" item={movies} />
      </Container>
    </>
  );
};

export default Home;
