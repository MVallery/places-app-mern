import React from 'react';
import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Vik, Iceland',
    description: 'One of the most beautiful countries in the world!',
    imageUrl:'https://www.martinlawrencephotography.com/images/uploads/gallery/249/reynisdrangar-basalt-sea-stacks-at-vic-iceland__large.jpg',
    address: 'Víkurbraut 5, 870 Vík, Iceland',
    location: {
      lat: 63.4180455 ,
      lng:-19.0119338
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Budir, Iceland',
    description: 'Best Wedding Ever!',
    imageUrl:'https://guidetoiceland.imgix.net/320283/x/0/the-black-church-of-budir-as-a-photography-location-2?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883&s=e618c40dafde06a9f7d77a3a3fc5ef5b',
    address: 'Budir, Iceland',
    location: {
      lat: 63.4180455 ,
      lng:-19.0119338
    },
    creator: 'u2',
  },
  {
    id: 'p3',
    title: 'Kilkee Cliffs, Ireland',
    description: 'One of the most beautiful, peaceful places in the world!',
    imageUrl:'https://img.locationscout.net/images/2018-07/kilkee-cliffs-ireland_l.jpeg',
    address: 'Moveen West, Co. Clare, Ireland',
    location: {
      lat: 52.6558603 ,
      lng:-9.7555697
    },
    creator: 'u1'
  }
];
const UserPlaces = () => {
  const userId = useParams().userId; //helps you to access dynamic route information returns object as properties
  console.log(useParams())
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator===userId)
  return (
    <PlaceList items={loadedPlaces}/>

  )
}

export default UserPlaces