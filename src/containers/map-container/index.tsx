import { Flex } from '@chakra-ui/layout';
import GoogleMapReact from 'google-map-react';
import React from 'react';

import MapPopUp from '../../components/map-popup';
import { googleMapsKey } from '../../config';
import useGeolocation from '../../hooks/use-geolocation';
import { jobItem } from '../../services/dto';

type propType = {
  jobsList: jobItem[];
};

export default function MapContainer({ jobsList }: propType) {
  const userPosition = useGeolocation();
  return (
    <Flex justify="center" h="700px">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsKey }}
        defaultCenter={userPosition}
        defaultZoom={5}>
        {jobsList.map((job) => (
          <MapPopUp
            key={job.id}
            {...job}
            lat={Number.parseInt(job.latitude)}
            lng={Number.parseInt(job.longitude)}
          />
        ))}
      </GoogleMapReact>
    </Flex>
  );
}
